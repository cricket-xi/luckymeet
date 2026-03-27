import { ChevronLeft, Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

export default function PostDetail({ post, onBack }: { post?: any, onBack: () => void }) {
  // Fallback data if no post is provided
  const displayPost = post || {
    avatar: "https://picsum.photos/seed/user1/100/100",
    user: "@匿名探索者",
    title: "发现一家超棒的独立书店，氛围感拉满！📚",
    likes: 128,
    distance: "1.2km",
    media: "https://picsum.photos/seed/post1/800/800",
    content: "在这个城市的角落，发现了一家很有氛围的独立书店。有人一起去打卡吗？周末计划走起！店里的咖啡也很好喝，推荐尝试他们的招牌拿铁。\n\n📍 位置：朝阳区某某胡同",
    tags: ["#城市探索", "#周末去哪儿", "#独立书店"],
    time: "10分钟前"
  };

  return (
    <div className="h-full w-full bg-[#0a0a0a] flex flex-col overflow-y-auto no-scrollbar pb-16">
      {/* Header */}
      <div className="p-4 pt-12 flex items-center justify-between sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-xl z-20 border-b border-white/10">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-3">
          <img src={displayPost.avatar} className="w-8 h-8 rounded-full object-cover" alt="avatar" />
          <span className="text-white font-medium text-sm">{displayPost.user}</span>
        </div>
        <button className="p-2 -mr-2 rounded-full hover:bg-white/10 text-white transition-colors">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Media (Image/Video) */}
        <div className="w-full aspect-square bg-zinc-900 relative">
          <img src={displayPost.media || `https://picsum.photos/seed/${displayPost.id || 'default'}/800/800`} className="w-full h-full object-cover" alt="post media" />
          {/* Pagination dots indicator placeholder */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
          </div>
        </div>

        {/* Text & Interactions */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-5">
              <button className="flex items-center gap-1.5 text-pink-500">
                <Heart className="w-6 h-6 fill-current" />
                <span className="font-medium">{displayPost.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 text-white">
                <MessageCircle className="w-6 h-6" />
                <span className="font-medium">32</span>
              </button>
            </div>
            <button className="text-white">
              <Share2 className="w-6 h-6" />
            </button>
          </div>

          <h1 className="text-lg font-bold text-white mb-2">{displayPost.title}</h1>
          <p className="text-gray-300 text-[15px] leading-relaxed mb-4 whitespace-pre-wrap">
            {displayPost.content || displayPost.title}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {(displayPost.tags || ["#城市探索", "#奇遇"]).map((tag: string, index: number) => (
              <span key={index} className="text-pink-400 text-sm font-medium">{tag}</span>
            ))}
          </div>

          <span className="text-xs text-gray-500">发布于 {displayPost.time || '刚刚'} · 距离 {displayPost.distance}</span>
        </div>
      </div>
    </div>
  );
}
