import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, Plus, Minus, Navigation, X, Heart, MessageCircle, Camera, ChevronRight, User } from 'lucide-react';
import { Map, Overlay } from 'pigeon-maps';

const lightMapProvider = (x: number, y: number, z: number, dpr?: number) => {
  return `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}${dpr && dpr >= 2 ? '@2x' : ''}.png`;
};

export default function Home({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  const [zoom, setZoom] = useState(14);
  const [center, setCenter] = useState<[number, number]>([39.92, 116.46]);
  const [userLocation, setUserLocation] = useState<[number, number]>([39.92, 116.46]);
  const mapRef = useRef(null);
  const [selectedPin, setSelectedPin] = useState<any>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareText, setShareText] = useState('');
  const [shareImages, setShareImages] = useState<string[]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLoc: [number, number] = [position.coords.latitude, position.coords.longitude];
          setCenter(newLoc);
          setUserLocation(newLoc);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const handleMockUpload = () => {
    if (shareImages.length < 9) {
      setShareImages([...shareImages, `https://picsum.photos/seed/${Math.random()}/400/400`]);
    }
  };

  const handlePublish = () => {
    // Mock publish action
    console.log("Publishing:", { text: shareText, images: shareImages });
    setShareText('');
    setShareImages([]);
    setShowShareModal(false);
  };

  const pins = [
    { id: 1, anchor: [39.925, 116.465] as [number, number], avatar: 'https://picsum.photos/seed/user1/100/100', title: '发现一家超棒的独立书店，氛围感拉满！📚', user: '@匿名探索者', likes: 128, distance: '1.2km' },
    { id: 2, anchor: [39.915, 116.455] as [number, number], avatar: 'https://picsum.photos/seed/user2/100/100', title: '周末骑行打卡，风景太美了🚴‍♂️', user: '@风之子', likes: 45, distance: '3.5km' },
    { id: 3, anchor: [39.930, 116.460] as [number, number], avatar: 'https://picsum.photos/seed/user3/100/100', title: '深夜食堂，这家拉面绝了🍜', user: '@夜猫子', likes: 89, distance: '800m' },
    { id: 4, anchor: [39.910, 116.470] as [number, number], avatar: 'https://picsum.photos/seed/user4/100/100', title: '有没有一起去看画展的？🎨', user: '@艺术细菌', likes: 234, distance: '5.0km' },
    { id: 5, anchor: [39.922, 116.450] as [number, number], avatar: 'https://picsum.photos/seed/user5/100/100', title: '今天的天空是粉色的！☁️', user: '@云朵收集者', likes: 567, distance: '2.1km' },
  ];

  return (
    <div className="relative h-full w-full bg-gray-50 overflow-hidden">
      {/* Top Nav */}
      <div className="absolute top-0 left-0 right-0 p-4 pt-12 z-30 flex justify-between items-center bg-gradient-to-b from-white/90 to-transparent pointer-events-none">
        <div className="flex flex-col pointer-events-auto">
          <h1 className="text-2xl font-black tracking-wider text-gray-900 drop-shadow-sm">同城地图</h1>
          <span className="text-xs text-gray-600 font-medium flex items-center gap-1">
            <MapPin className="w-3 h-3" /> 当前位置：朝阳区
          </span>
        </div>
        <button className="p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-sm pointer-events-auto">
          <Search className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Map Area */}
      <div className="absolute inset-0 z-0">
        <Map 
          provider={lightMapProvider}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => { 
            setCenter(center); 
            setZoom(zoom); 
          }}
          mouseEvents={true}
          touchEvents={true}
        >
          {/* Pins */}
          {pins.map(pin => (
            // @ts-ignore
            <Overlay key={pin.id} anchor={pin.anchor} offset={[24, 48]}>
              <motion.div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPin(pin);
                }}
                whileHover={{ scale: 1.1, zIndex: 20 }}
                whileTap={{ scale: 0.95 }}
                className="relative group cursor-pointer flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full border-2 border-pink-500 overflow-hidden shadow-[0_0_15px_rgba(236,72,153,0.3)] bg-white">
                  <img src={pin.avatar} className="w-full h-full object-cover" alt="avatar" />
                </div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-pink-500 -mt-[1px]" />
                
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-2 border-pink-500 animate-ping opacity-40 pointer-events-none" />
                
                <div className="absolute -bottom-6 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] text-gray-700 border border-black/5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  {pin.distance}
                </div>
              </motion.div>
            </Overlay>
          ))}
          
          {/* Current User Pin */}
          <Overlay anchor={userLocation} offset={[28, 56]}>
            <div className="relative flex flex-col items-center pointer-events-none">
              <div className="w-14 h-14 rounded-full border-2 border-blue-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.4)] bg-white">
                <img src="https://picsum.photos/seed/user/200/200" className="w-full h-full object-cover" alt="my avatar" />
              </div>
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-blue-500 -mt-[1px]" />
              <div className="absolute top-0 left-0 w-14 h-14 rounded-full bg-blue-500/20 animate-pulse pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-blue-500/30 animate-ping opacity-20 pointer-events-none" />
            </div>
          </Overlay>
        </Map>
      </div>

      {/* Zoom Controls */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        <button onClick={() => setZoom(z => Math.min(z + 1, 18))} className="p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-700 border border-black/5 hover:bg-gray-50 transition-colors shadow-sm">
          <Plus className="w-5 h-5" />
        </button>
        <button onClick={() => setZoom(z => Math.max(z - 1, 3))} className="p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-700 border border-black/5 hover:bg-gray-50 transition-colors shadow-sm">
          <Minus className="w-5 h-5" />
        </button>
        <button 
          onClick={() => { 
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const newLoc: [number, number] = [position.coords.latitude, position.coords.longitude];
                  setCenter(newLoc);
                  setUserLocation(newLoc);
                  setZoom(15);
                },
                () => {
                  // Fallback to default if permission denied or error
                  setCenter([39.92, 116.46]); 
                  setUserLocation([39.92, 116.46]);
                  setZoom(14);
                }
              );
            } else {
              setCenter([39.92, 116.46]); 
              setUserLocation([39.92, 116.46]);
              setZoom(14); 
            }
          }} 
          className="p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-700 border border-black/5 hover:bg-gray-50 transition-colors shadow-sm mt-2"
        >
          <Navigation className="w-5 h-5" />
        </button>
      </div>

      {/* One-click Share Button */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowShareModal(true)}
          className="pointer-events-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] flex items-center gap-2 border border-white/20"
        >
          <Camera className="w-5 h-5" />
          一键分享奇遇
        </motion.button>
      </div>

      {/* Selected Pin Preview Card */}
      <AnimatePresence>
        {selectedPin && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="absolute bottom-40 left-4 right-4 z-30"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-3xl p-5 shadow-2xl relative">
              <button 
                onClick={() => setSelectedPin(null)}
                className="absolute top-4 right-4 p-1.5 bg-black/5 rounded-full text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex gap-4">
                <img src={selectedPin.avatar} className="w-14 h-14 rounded-full border border-black/5 object-cover" alt="avatar" />
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900 text-sm">{selectedPin.user}</span>
                    <span className="text-[10px] text-gray-500 bg-black/5 px-2 py-0.5 rounded-full">{selectedPin.distance}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {selectedPin.title}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-pink-400 transition-colors">
                        <Heart className="w-4 h-4" /> {selectedPin.likes}
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-400 transition-colors">
                        <MessageCircle className="w-4 h-4" /> 评论
                      </button>
                    </div>
                    <button 
                      onClick={() => onNavigate('post-detail', selectedPin)}
                      className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                    >
                      查看详情 &gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Modal (朋友圈风格) */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 z-50 bg-gray-50 flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-4 pt-12 flex justify-between items-center border-b border-black/5 bg-white/90 backdrop-blur-md">
              <button 
                onClick={() => {
                  setShowShareModal(false);
                  setShareText('');
                  setShareImages([]);
                }} 
                className="text-gray-500 hover:text-gray-900 text-[15px]"
              >
                取消
              </button>
              <span className="text-gray-900 font-bold text-lg">发布奇遇</span>
              <button 
                onClick={handlePublish} 
                disabled={!shareText.trim() && shareImages.length === 0}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1.5 rounded-full font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                发表
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 flex-1 overflow-y-auto">
              <textarea
                value={shareText}
                onChange={(e) => setShareText(e.target.value)}
                placeholder="这一刻的想法..."
                className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 resize-none outline-none text-[16px] min-h-[120px] leading-relaxed"
              />

              {/* Image Grid */}
              <div className="grid grid-cols-3 gap-2 mb-8">
                {shareImages.map((img, idx) => (
                  <div key={idx} className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                    <img src={img} alt={`upload-${idx}`} className="w-full h-full object-cover" />
                    <button 
                      onClick={() => setShareImages(shareImages.filter((_, i) => i !== idx))}
                      className="absolute top-1 right-1 p-1 bg-white/80 rounded-full text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                {shareImages.length < 9 && (
                  <div 
                    onClick={handleMockUpload}
                    className="aspect-square bg-gray-100 rounded-xl flex flex-col items-center justify-center border border-dashed border-black/10 text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors cursor-pointer gap-2"
                  >
                    <Plus className="w-8 h-8" />
                    <span className="text-xs font-medium">照片/视频</span>
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-1 border-t border-black/5 pt-2">
                <button className="w-full flex items-center justify-between text-gray-700 py-4 hover:bg-black/5 px-2 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-[15px]">所在位置</span>
                  </div>
                  <div className="flex items-center gap-1 text-pink-500 text-sm font-medium">
                    朝阳区 <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
                <button className="w-full flex items-center justify-between text-gray-700 py-4 hover:bg-black/5 px-2 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-[15px]">谁可以看</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    公开 <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
