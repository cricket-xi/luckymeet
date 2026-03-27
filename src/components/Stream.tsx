import { Search, MessageSquare, Heart, Star, Share2, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Stream({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  const posts = [
    { id: 1, image: 'https://picsum.photos/seed/qiyu1/400/500', title: '在这个城市的角落，发现了一家很有氛围的独立书店。有人一起去打卡吗？周末计划走起！📚✨', user: '匿名探索者', avatar: 'https://picsum.photos/seed/avatar1/100/100', likes: '8.2w', location: '朝阳区' },
    { id: 2, image: 'https://picsum.photos/seed/qiyu2/400/300', title: '今天的天空是粉色的！☁️', user: '云朵收集者', avatar: 'https://picsum.photos/seed/avatar2/100/100', likes: '1.2w', location: '海淀区' },
    { id: 3, image: 'https://picsum.photos/seed/qiyu3/400/600', title: '周末骑行打卡，风景太美了🚴‍♂️', user: '风之子', avatar: 'https://picsum.photos/seed/avatar3/100/100', likes: '456', location: '朝阳公园' },
    { id: 4, image: 'https://picsum.photos/seed/qiyu4/400/400', title: '深夜食堂，这家拉面绝了🍜', user: '夜猫子', avatar: 'https://picsum.photos/seed/avatar4/100/100', likes: '89', location: '三里屯' },
  ];

  return (
    <div className="relative h-full w-full bg-gray-50 overflow-y-auto pb-24">
      {/* Top Nav */}
      <div className="sticky top-0 left-0 right-0 p-4 pt-12 flex justify-between items-center z-30 bg-white/90 backdrop-blur-md border-b border-black/5">
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
      <div className="px-4 py-3 flex gap-6 text-sm font-medium z-20 bg-white border-b border-black/5 overflow-x-auto no-scrollbar">
        <span className="text-gray-900 border-b-2 border-gray-900 pb-1 whitespace-nowrap">奇遇流</span>
        <span className="text-gray-500 whitespace-nowrap">关注</span>
        <span className="text-gray-500 whitespace-nowrap">同城</span>
        <span className="text-gray-500 whitespace-nowrap">兴趣分类</span>
      </div>

      {/* Masonry-like Grid (Simplified to 2 columns) */}
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
                <MapPin className="w-3 h-3 text-pink-500" />
                {post.location}
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

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNavigate('match')}
        className="fixed bottom-20 right-4 z-40 bg-gray-900 text-white px-5 py-3.5 rounded-full font-bold shadow-xl flex items-center gap-2 border border-black/10"
      >
        <Sparkles className="w-5 h-5 text-pink-400" />
        开启今日奇遇匹配
      </motion.button>
    </div>
  );
}
