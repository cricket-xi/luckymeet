import { useState } from 'react';
import { Search, MessageSquare, Heart, Sparkles, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Stream({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  const [activeTab, setActiveTab] = useState('feed');

  const tabs = [
    { id: 'feed', label: '奇遇流' },
    { id: 'following', label: '关注' },
    { id: 'local', label: '同城' },
    { id: 'categories', label: '兴趣分类' }
  ];

  const feedPosts = [
    { id: 1, image: 'https://picsum.photos/seed/qiyu1/400/500', title: '在这个城市的角落，发现了一家很有氛围的独立书店。有人一起去打卡吗？周末计划走起！📚✨', user: '匿名探索者', avatar: 'https://picsum.photos/seed/avatar1/100/100', likes: '8.2w', location: '朝阳区' },
    { id: 2, image: 'https://picsum.photos/seed/qiyu2/400/300', title: '今天的天空是粉色的！☁️', user: '云朵收集者', avatar: 'https://picsum.photos/seed/avatar2/100/100', likes: '1.2w', location: '海淀区' },
    { id: 3, image: 'https://picsum.photos/seed/qiyu3/400/600', title: '周末骑行打卡，风景太美了🚴‍♂️', user: '风之子', avatar: 'https://picsum.photos/seed/avatar3/100/100', likes: '456', location: '朝阳公园' },
    { id: 4, image: 'https://picsum.photos/seed/qiyu4/400/400', title: '深夜食堂，这家拉面绝了🍜', user: '夜猫子', avatar: 'https://picsum.photos/seed/avatar4/100/100', likes: '89', location: '三里屯' },
  ];

  const followingPosts = [
    { id: 101, image: 'https://picsum.photos/seed/f1/600/400', title: '今天去看了期待已久的画展，色彩太震撼了！🎨 强烈推荐大家去看看，特别是喜欢印象派的朋友。', user: '艺术细菌', avatar: 'https://picsum.photos/seed/a1/100/100', likes: '128', time: '2小时前' },
    { id: 102, image: 'https://picsum.photos/seed/f2/600/600', title: '新入手的咖啡豆，油脂非常丰富☕️ 满屋子都是咖啡的香气，开启美好的一天。', user: '咖啡重度依赖', avatar: 'https://picsum.photos/seed/a2/100/100', likes: '45', time: '5小时前' },
  ];

  const localPosts = [
    { id: 201, image: 'https://picsum.photos/seed/l1/400/400', title: '楼下新开的bistro，味道意外的不错🍷', user: '觅食达人', avatar: 'https://picsum.photos/seed/a3/100/100', likes: '89', distance: '500m' },
    { id: 202, image: 'https://picsum.photos/seed/l2/400/500', title: '朝阳公园的晚霞绝绝子🌇', user: '追光者', avatar: 'https://picsum.photos/seed/a4/100/100', likes: '234', distance: '1.2km' },
    { id: 203, image: 'https://picsum.photos/seed/l3/400/400', title: '周末有一起去爬山的搭子吗？⛰️', user: '山野行者', avatar: 'https://picsum.photos/seed/a5/100/100', likes: '56', distance: '3.5km' },
  ];

  const mapMarkers = [
    { id: 1, x: '30%', y: '40%', avatar: 'https://picsum.photos/seed/a3/100/100', active: true },
    { id: 2, x: '60%', y: '20%', avatar: 'https://picsum.photos/seed/a4/100/100', active: false },
    { id: 3, x: '75%', y: '65%', avatar: 'https://picsum.photos/seed/a5/100/100', active: true },
    { id: 4, x: '20%', y: '70%', avatar: 'https://picsum.photos/seed/a6/100/100', active: false },
    { id: 5, x: '50%', y: '50%', avatar: 'https://picsum.photos/seed/a7/100/100', active: true, isSelf: true },
    { id: 6, x: '85%', y: '35%', avatar: 'https://picsum.photos/seed/a8/100/100', active: true },
    { id: 7, x: '40%', y: '80%', avatar: 'https://picsum.photos/seed/a9/100/100', active: false },
  ];

  const categories = [
    { id: 'music', name: '独立音乐', icon: '🎵', count: '1.2w', color: 'bg-purple-50 text-purple-600 border-purple-100' },
    { id: 'art', name: '看展达人', icon: '🎨', count: '8k', color: 'bg-pink-50 text-pink-600 border-pink-100' },
    { id: 'outdoor', name: '户外徒步', icon: '⛰️', count: '1.5w', color: 'bg-green-50 text-green-600 border-green-100' },
    { id: 'coffee', name: '咖啡探店', icon: '☕️', count: '2.1w', color: 'bg-amber-50 text-amber-600 border-amber-100' },
    { id: 'photo', name: '胶片摄影', icon: '📷', count: '9k', color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { id: 'book', name: '深夜读书', icon: '📚', count: '5k', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
  ];

  const renderGrid = (posts: any[], isLocal = false) => (
    <div className="p-2 grid grid-cols-2 gap-2">
      {posts.map((post) => (
        <motion.div 
          key={post.id}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('post-detail', post)}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 cursor-pointer flex flex-col"
        >
          <div className="relative w-full pt-[120%] bg-gray-100">
            <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 text-[10px] font-medium text-gray-700 shadow-sm border border-black/5">
              <MapPin className={`w-3 h-3 ${isLocal ? 'text-blue-500' : 'text-pink-500'}`} />
              {isLocal ? post.distance : post.location}
            </div>
          </div>
          <div className="p-3 flex flex-col flex-1">
            <p className="text-sm text-gray-900 font-medium line-clamp-2 leading-snug mb-3 flex-1">
              {post.title}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-1.5">
                <img src={post.avatar} className="w-5 h-5 rounded-full object-cover border border-black/5" alt="avatar" />
                <span className="text-[10px] text-gray-500 truncate max-w-[60px]">{post.user}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <Heart className="w-3.5 h-3.5" />
                <span className="text-[10px] font-medium">{post.likes}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="h-full w-full bg-gray-50 flex flex-col">
      {/* Top Nav */}
      <div className="p-4 pt-12 flex justify-between items-center z-30 bg-white/90 backdrop-blur-md border-b border-black/5 shrink-0">
        <div className="text-2xl font-black tracking-wider text-gray-900">
          奇遇
        </div>
        <div className="flex gap-4">
          <button className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Top Tabs */}
      <div className="px-4 py-3 flex gap-6 text-sm font-medium z-20 bg-white border-b border-black/5 overflow-x-auto no-scrollbar shrink-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap pb-1 border-b-2 transition-colors ${
              activeTab === tab.id 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 overflow-y-auto pb-24 no-scrollbar"
          >
            {activeTab === 'feed' && renderGrid(feedPosts)}
            
            {activeTab === 'following' && (
              <div className="p-4 space-y-4">
                {followingPosts.map(post => (
                  <motion.div 
                    key={post.id} 
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('post-detail', post)}
                    className="bg-white rounded-2xl p-4 shadow-sm border border-black/5 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img src={post.avatar} className="w-10 h-10 rounded-full object-cover border border-black/5" alt="avatar" />
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{post.user}</div>
                        <div className="text-xs text-gray-400">{post.time}</div>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm mb-3 leading-relaxed">{post.title}</p>
                    <img src={post.image} className="w-full h-48 object-cover rounded-xl mb-4 border border-black/5" alt="post" />
                    <div className="flex items-center gap-6 text-gray-500">
                      <button className="flex items-center gap-1.5 text-sm hover:text-pink-500 transition-colors">
                        <Heart className="w-4 h-4"/> {post.likes}
                      </button>
                      <button className="flex items-center gap-1.5 text-sm hover:text-blue-500 transition-colors">
                        <MessageSquare className="w-4 h-4"/> 评论
                      </button>
                    </div>
                  </motion.div>
                ))}
                <div className="text-center text-xs text-gray-400 py-4">没有更多动态了</div>
              </div>
            )}

            {activeTab === 'local' && (
              <div className="h-full w-full relative bg-[#f8f9fa] overflow-hidden min-h-[600px]">
                {/* Minimalist Map Background Pattern */}
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
                
                {/* Simulated Map Features (Roads/Water) */}
                <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-50 100 Q 150 150 200 300 T 400 400" stroke="#64748b" strokeWidth="12" fill="none" strokeLinecap="round" />
                  <path d="M100 -50 Q 150 200 300 250 T 500 100" stroke="#64748b" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <path d="M250 500 Q 200 350 100 300 T -50 200" stroke="#94a3b8" strokeWidth="16" fill="none" strokeLinecap="round" />
                </svg>

                {/* Map Markers */}
                {mapMarkers.map(marker => (
                  <div
                    key={marker.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: marker.x, top: marker.y }}
                  >
                    <motion.div
                      className="cursor-pointer"
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => !marker.isSelf && onNavigate('post-detail', { 
                        id: marker.id, 
                        avatar: marker.avatar, 
                        title: '在这个城市的角落，发现了一家很有氛围的独立书店。有人一起去打卡吗？', 
                        user: '同城探索者', 
                        likes: '128', 
                        location: '附近 500m',
                        image: `https://picsum.photos/seed/local${marker.id}/400/500`
                      })}
                    >
                      {marker.isSelf ? (
                      <div className="relative flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-400/30 rounded-full animate-map-ping" />
                        <div className="w-10 h-10 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    ) : (
                      <div className="relative flex items-center justify-center group">
                        {marker.active && (
                          <div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-pink-400/40 rounded-full animate-map-ping" 
                            style={{ animationDelay: `${marker.id * 0.2}s` }}
                          />
                        )}
                        <div className="relative w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden z-10 group-hover:ring-4 ring-pink-200 transition-all">
                          <img src={marker.avatar} alt="avatar" className="w-full h-full object-cover" />
                        </div>
                        {marker.active && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full border-2 border-white z-20 shadow-sm" />
                        )}
                      </div>
                    )}
                    </motion.div>
                  </div>
                ))}

                {/* Map Controls */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 flex items-center gap-5 z-20">
                  <span className="text-sm font-bold text-gray-900">附近 5km</span>
                  <div className="w-px h-4 bg-gray-200" />
                  <span className="text-sm text-gray-600 flex items-center gap-2 font-medium">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 animate-map-ping" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
                    </span>
                    12 个奇遇光标
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'categories' && (
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">探索你的同频宇宙</h2>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map(cat => (
                    <motion.div 
                      key={cat.id} 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`${cat.color} border rounded-2xl p-5 flex flex-col items-start cursor-pointer shadow-sm`}
                    >
                      <span className="text-3xl mb-3 drop-shadow-sm">{cat.icon}</span>
                      <span className="font-bold text-[15px] mb-1">{cat.name}</span>
                      <span className="text-xs opacity-70">{cat.count} 篇奇遇</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNavigate('match')}
        className="absolute bottom-20 right-4 z-40 bg-gray-900 text-white px-5 py-3.5 rounded-full font-bold shadow-xl flex items-center gap-2 border border-black/10"
      >
        <Sparkles className="w-5 h-5 text-pink-400" />
        开启今日奇遇匹配
      </motion.button>
    </div>
  );
}
