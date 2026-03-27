import { useState } from 'react';
import { Book, Bot, Package, Heart, MessageCircle, ChevronLeft, Send, Mic, MoreHorizontal, Gift, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TreeHole() {
  const [view, setView] = useState<'main' | 'chat' | 'detail' | 'blindbox' | 'putEmotion'>('main');
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [blindBoxState, setBlindBoxState] = useState<'idle' | 'opening' | 'opened'>('idle');
  const [emotionText, setEmotionText] = useState('');

  const posts = [
    { id: 1, text: "今天下班路上看到晚霞很美，突然觉得一切烦恼都不算什么了。希望能把这份好运分享给你们。", likes: 128, comments: 32, time: "10分钟前", author: "匿名小熊" },
    { id: 2, text: "又是一个失眠的夜晚，不知道未来的路该怎么走。有人能懂这种迷茫吗？", likes: 45, comments: 89, time: "半小时前", author: "匿名星空" },
    { id: 3, text: "终于鼓起勇气辞职了！虽然不知道下一步去哪，但感觉呼吸都顺畅了。祝我好运吧！", likes: 892, comments: 156, time: "2小时前", author: "匿名旅人" },
    { id: 4, text: "一个人去看电影，其实也没有想象中那么孤独。", likes: 234, comments: 45, time: "3小时前", author: "匿名猫咪" },
    { id: 5, text: "刚刚听了一首很老的歌，突然想起了很久以前的朋友。不知道他们现在过得怎么样。", likes: 56, comments: 12, time: "5小时前", author: "匿名电台" }
  ];

  const mockComments = [
    { id: 1, text: "抱抱你，一切都会好起来的！", time: "5分钟前", author: "匿名兔子" },
    { id: 2, text: "我也经常这样想，其实大家都在努力生活。", time: "12分钟前", author: "匿名树叶" },
    { id: 3, text: "加油！明天又是新的一天 ✨", time: "半小时前", author: "匿名微风" },
  ];

  const openPostDetail = (post: any) => {
    setSelectedPost(post);
    setView('detail');
  };

  const openBlindBox = () => {
    setBlindBoxState('opening');
    setTimeout(() => {
      setBlindBoxState('opened');
    }, 2000);
  };

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
                
                <div 
                  onClick={() => setView('blindbox')}
                  className="bg-gradient-to-br from-pink-900/40 to-pink-600/10 border border-pink-500/30 rounded-3xl p-5 flex flex-col items-start relative overflow-hidden cursor-pointer hover:border-pink-400/50 transition-colors group"
                >
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
                    <div 
                      key={post.id} 
                      onClick={() => openPostDetail(post)}
                      className="bg-zinc-900/40 border border-white/10 rounded-3xl p-5 break-inside-avoid hover:bg-zinc-900/60 transition-colors cursor-pointer"
                    >
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
        ) : view === 'chat' ? (
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
        ) : view === 'detail' && selectedPost ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute inset-0 bg-[#0a0a0a] z-30 flex flex-col"
          >
            {/* Detail Header */}
            <div className="p-4 pt-12 flex items-center justify-between border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl shrink-0">
              <button onClick={() => setView('main')} className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h2 className="text-white font-bold text-base">树洞详情</h2>
              <button className="p-2 -mr-2 rounded-full hover:bg-white/10 text-white transition-colors">
                <MoreHorizontal className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar">
              {/* Post Content */}
              <div className="p-5 border-b border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    🎭
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{selectedPost.author}</div>
                    <div className="text-xs text-gray-500">{selectedPost.time}</div>
                  </div>
                </div>
                <p className="text-gray-200 text-[16px] leading-relaxed mb-6">{selectedPost.text}</p>
                
                <div className="flex items-center gap-6 text-gray-400">
                  <button className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">{selectedPost.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{selectedPost.comments}</span>
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              <div className="p-5">
                <h3 className="text-white font-bold text-sm mb-6">全部评论 ({selectedPost.comments})</h3>
                <div className="space-y-6">
                  {mockComments.map(comment => (
                    <div key={comment.id} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm flex-shrink-0">
                        👻
                      </div>
                      <div className="flex-1 border-b border-white/5 pb-6">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-300 font-bold text-sm">{comment.author}</span>
                          <span className="text-xs text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Comment Input */}
            <div className="p-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 pb-8 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-zinc-900/80 rounded-full px-5 py-3 flex items-center border border-white/10 focus-within:border-pink-500/50 transition-colors">
                  <input 
                    type="text" 
                    placeholder="匿名回复..." 
                    className="bg-transparent border-none outline-none text-[15px] text-white w-full placeholder:text-gray-500"
                  />
                </div>
                <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : view === 'blindbox' ? (
          <motion.div
            key="blindbox"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-0 bg-[#0a0a0a] z-30 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 pt-12 flex items-center justify-between z-40">
              <button 
                onClick={() => {
                  setView('main');
                  setBlindBoxState('idle');
                }} 
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-white font-bold text-lg tracking-widest">情绪盲盒</h2>
              <div className="w-10" /> {/* Spacer */}
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center w-full max-w-sm px-6 z-10">
              <AnimatePresence mode="wait">
                {blindBoxState === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-48 h-48 relative mb-12">
                      <motion.div 
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl shadow-[0_0_50px_rgba(236,72,153,0.4)] flex items-center justify-center border border-white/20"
                      >
                        <Gift className="w-24 h-24 text-white drop-shadow-lg" />
                      </motion.div>
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/50 blur-xl rounded-full" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">抽取一个未知情绪</h3>
                    <p className="text-gray-400 text-center text-sm mb-12 leading-relaxed">
                      这里存放着陌生人的喜怒哀乐<br/>也许你们有着相似的灵魂
                    </p>
                    
                    <div className="flex flex-col w-full gap-4">
                      <button 
                        onClick={openBlindBox}
                        className="w-full py-4 rounded-full bg-white text-gray-900 font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all active:scale-95"
                      >
                        开启盲盒
                      </button>
                      <button 
                        onClick={() => setView('putEmotion')}
                        className="w-full py-4 rounded-full bg-white/10 text-white font-bold text-lg border border-white/20 hover:bg-white/20 transition-all active:scale-95"
                      >
                        放入我的情绪
                      </button>
                    </div>
                  </motion.div>
                )}

                {blindBoxState === 'opening' && (
                  <motion.div
                    key="opening"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <motion.div 
                      animate={{ 
                        rotate: [0, -10, 10, -10, 10, 0],
                        scale: [1, 1.1, 1.1, 1.1, 1.1, 1]
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="w-48 h-48 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl shadow-[0_0_80px_rgba(236,72,153,0.6)] flex items-center justify-center border border-white/40 mb-8"
                    >
                      <Gift className="w-24 h-24 text-white drop-shadow-lg" />
                    </motion.div>
                    <p className="text-pink-400 font-bold tracking-widest animate-pulse">正在开启...</p>
                  </motion.div>
                )}

                {blindBoxState === 'opened' && (
                  <motion.div
                    key="opened"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="w-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative"
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg border-4 border-[#0a0a0a]">
                      <span className="text-3xl">💌</span>
                    </div>
                    
                    <div className="mt-8 mb-8">
                      <p className="text-gray-200 text-lg leading-loose text-center font-medium">
                        "今天鼓起勇气向喜欢了很久的人表白了，虽然被拒绝了，但心里反而觉得很轻松。祝自己明天更好！"
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-8 px-2">
                      <span>来自：匿名勇敢者</span>
                      <span>昨天 23:15</span>
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="flex-1 py-3.5 rounded-2xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                        <Heart className="w-5 h-5" />
                        抱抱TA
                      </button>
                      <button className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        回复
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : view === 'putEmotion' ? (
          <motion.div
            key="putEmotion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-0 bg-[#0a0a0a] z-30 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 pt-12 flex items-center justify-between z-40">
              <button 
                onClick={() => setView('blindbox')} 
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h2 className="text-white font-bold text-lg tracking-widest">放入情绪</h2>
              <div className="w-10" /> {/* Spacer */}
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center w-full max-w-sm px-6 z-10">
              <div className="w-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-4 border-[#0a0a0a]">
                  <span className="text-2xl">✍️</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mt-8 mb-4 text-center">写下你的心声</h3>
                <p className="text-gray-400 text-xs text-center mb-6">
                  你的情绪将被匿名封存，等待有缘人开启。
                </p>
                
                <textarea
                  value={emotionText}
                  onChange={(e) => setEmotionText(e.target.value)}
                  placeholder="今天发生了什么？开心、难过、迷茫..."
                  className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-600 resize-none outline-none focus:border-purple-500/50 transition-colors h-40 mb-6 text-[15px] leading-relaxed"
                />
                
                <button 
                  disabled={!emotionText.trim()}
                  onClick={() => {
                    setEmotionText('');
                    setView('blindbox');
                    // Show a toast or something in a real app
                  }}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  封存情绪
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
