import { useState } from 'react';
import { Book, Bot, Package, Heart, MessageCircle, ChevronLeft, Send, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TreeHole() {
  const [view, setView] = useState<'main' | 'chat'>('main');

  const posts = [
    { id: 1, text: "今天下班路上看到晚霞很美，突然觉得一切烦恼都不算什么了。希望能把这份好运分享给你们。", likes: 128, comments: 32, time: "10分钟前" },
    { id: 2, text: "又是一个失眠的夜晚，不知道未来的路该怎么走。有人能懂这种迷茫吗？", likes: 45, comments: 89, time: "半小时前" },
    { id: 3, text: "终于鼓起勇气辞职了！虽然不知道下一步去哪，但感觉呼吸都顺畅了。祝我好运吧！", likes: 892, comments: 156, time: "2小时前" },
    { id: 4, text: "一个人去看电影，其实也没有想象中那么孤独。", likes: 234, comments: 45, time: "3小时前" },
    { id: 5, text: "刚刚听了一首很老的歌，突然想起了很久以前的朋友。不知道他们现在过得怎么样。", likes: 56, comments: 12, time: "5小时前" }
  ];

  return (
    <div className="h-full w-full bg-[#0a0a0a] flex flex-col pb-16 overflow-hidden relative">
      <AnimatePresence mode="wait">
        {view === 'main' ? (
          <motion.div 
            key="main"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full overflow-y-auto no-scrollbar flex flex-col"
          >
            {/* Top Nav */}
            <div className="p-4 pt-12 flex justify-between items-center sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-xl z-20 border-b border-white/5">
              <h1 className="text-2xl font-bold text-white tracking-wide">树洞</h1>
              <button className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium text-gray-200 border border-white/10">
                <Book className="w-4 h-4 text-pink-400" />
                情绪日记
              </button>
            </div>

            <div className="p-4 space-y-8">
              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => setView('chat')}
                  className="bg-gradient-to-br from-purple-900/40 to-purple-600/10 border border-purple-500/30 rounded-3xl p-5 flex flex-col items-start relative overflow-hidden group cursor-pointer hover:border-purple-400/50 transition-colors"
                >
                  <div className="absolute -right-4 -top-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors" />
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400 border border-purple-500/20">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">AI同频陪伴</h3>
                  <p className="text-xs text-purple-200/60 font-medium">随时倾听你的心声</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-900/40 to-pink-600/10 border border-pink-500/30 rounded-3xl p-5 flex flex-col items-start relative overflow-hidden cursor-pointer hover:border-pink-400/50 transition-colors group">
                  <div className="absolute -right-4 -top-4 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl group-hover:bg-pink-500/30 transition-colors" />
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400 border border-pink-500/20">
                    <Package className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">匿名情绪盲盒</h3>
                  <p className="text-xs text-pink-200/60 font-medium">交换彼此的秘密</p>
                </div>
              </div>

              {/* Tree Hole Square */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white flex items-center gap-3">
                    树洞广场
                    <span className="text-xs font-medium text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-full">匿名</span>
                  </h2>
                </div>
                
                <div className="columns-1 sm:columns-2 gap-4 space-y-4">
                  {posts.map(post => (
                    <div key={post.id} className="bg-zinc-900/40 border border-white/10 rounded-3xl p-5 break-inside-avoid hover:bg-zinc-900/60 transition-colors cursor-pointer">
                      <p className="text-gray-200 text-[15px] leading-relaxed mb-5">{post.text}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                        <span>{post.time}</span>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1.5 hover:text-pink-400 transition-colors">
                            <Heart className="w-4 h-4" /> {post.likes}
                          </button>
                          <button className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                            <MessageCircle className="w-4 h-4" /> {post.comments}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute inset-0 bg-[#0a0a0a] z-30 flex flex-col"
          >
            {/* Chat Header */}
            <div className="p-4 pt-12 flex items-center gap-3 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl">
              <button onClick={() => setView('main')} className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-base">知心树洞 AI</h2>
                  <p className="text-xs text-green-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    在线陪伴中
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <div className="flex justify-center mb-2">
                <span className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">今天 14:20</span>
              </div>
              
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex-shrink-0 flex items-center justify-center mt-1">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-zinc-800/80 border border-white/5 rounded-2xl rounded-tl-sm p-3.5 text-[15px] text-gray-200 leading-relaxed shadow-sm">
                  你好呀，今天过得怎么样？如果有开心或不开心的事，都可以跟我说说哦。
                </div>
              </div>

              <div className="flex gap-3 max-w-[85%] ml-auto flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex-shrink-0 overflow-hidden mt-1 border border-white/10">
                  <img src="https://picsum.photos/seed/user/100/100" alt="user" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl rounded-tr-sm p-3.5 text-[15px] text-white leading-relaxed shadow-md">
                  今天工作有点累，感觉找不到方向。
                </div>
              </div>

              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex-shrink-0 flex items-center justify-center mt-1">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-zinc-800/80 border border-white/5 rounded-2xl rounded-tl-sm p-3.5 text-[15px] text-gray-200 leading-relaxed shadow-sm">
                  抱抱你 🫂 感到迷茫是很正常的阶段。也许你可以试着停下来，喝杯咖啡，或者去散散步。不要给自己太大压力，慢慢来。
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 pb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-purple-300 bg-purple-500/20 border border-purple-500/30 px-2.5 py-1 rounded-md cursor-pointer hover:bg-purple-500/30 transition-colors">温柔倾听者</span>
                <span className="text-xs text-gray-500 cursor-pointer hover:text-gray-400">点击切换人格</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5">
                  <Mic className="w-5 h-5" />
                </button>
                <div className="flex-1 bg-zinc-900/80 rounded-full px-5 py-3.5 flex items-center border border-white/10 focus-within:border-pink-500/50 transition-colors">
                  <input 
                    type="text" 
                    placeholder="说点什么吧..." 
                    className="bg-transparent border-none outline-none text-[15px] text-white w-full placeholder:text-gray-500"
                  />
                </div>
                <button className="p-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-shadow active:scale-95">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
