import { useState } from 'react';
import { History, Sparkles, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Match() {
  const [matchState, setMatchState] = useState<'idle' | 'matching' | 'matched'>('idle');

  const startMatch = () => {
    setMatchState('matching');
    setTimeout(() => {
      setMatchState('matched');
    }, 2500);
  };

  return (
    <div className="h-full w-full bg-gray-50 flex flex-col pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-100/50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 -left-24 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />

      {/* Top Nav */}
      <div className="p-4 pt-12 flex justify-between items-center relative z-20">
        <h1 className="text-2xl font-bold text-gray-900 tracking-wide">今日奇遇</h1>
        <button className="p-2.5 rounded-full bg-white hover:bg-gray-100 transition-colors border border-black/5 shadow-sm">
          <History className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        <AnimatePresence mode="wait">
          {matchState === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="w-full max-w-sm bg-white/80 backdrop-blur-2xl border border-black/5 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl"
            >
              {/* Radar Chart Placeholder */}
              <div className="w-56 h-56 rounded-full border border-purple-200 flex items-center justify-center relative mb-10">
                <div className="absolute inset-0 rounded-full border border-pink-200 scale-75" />
                <div className="absolute inset-0 rounded-full border border-blue-200 scale-50" />
                <div className="w-40 h-40 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-2xl absolute" />
                <Sparkles className="w-14 h-14 text-pink-500 relative z-10 animate-pulse" />
                
                {/* Decorative Nodes */}
                <div className="absolute top-4 right-10 w-3 h-3 bg-pink-400 rounded-full shadow-[0_0_10px_rgba(244,114,182,0.4)]" />
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.4)]" />
                <div className="absolute top-1/2 -right-2 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.4)]" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">今日奇遇待开启</h2>
              <p className="text-sm text-gray-500 mb-10 leading-relaxed">基于你的同频人格图谱<br/>寻找最契合的灵魂</p>
              
              <button
                onClick={startMatch}
                className="w-full py-4 rounded-2xl bg-gray-900 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                开启今日奇遇匹配
              </button>
            </motion.div>
          )}

          {matchState === 'matching' && (
            <motion.div
              key="matching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full"
            >
              <div className="w-40 h-40 relative flex items-center justify-center mb-12">
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-pink-200"
                />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0.1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
                  className="absolute inset-4 rounded-full bg-purple-200"
                />
                <Sparkles className="w-12 h-12 text-gray-900 relative z-10" />
              </div>
              <p className="text-xl text-gray-900 font-bold animate-pulse tracking-widest">
                正在连接同频宇宙...
              </p>
            </motion.div>
          )}

          {matchState === 'matched' && (
            <motion.div
              key="matched"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="w-full max-w-sm bg-white/90 backdrop-blur-2xl border border-black/5 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-pink-100 to-transparent pointer-events-none" />
              
              <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg relative z-10 mb-5 overflow-hidden ring-4 ring-pink-100">
                <img src="https://picsum.photos/seed/match1/300/300" alt="match avatar" className="w-full h-full object-cover" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">@星空漫游者</h2>
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 mb-8">
                <span className="text-pink-600 font-bold text-lg">
                  同频契合度 98%
                </span>
              </div>
              
              <div className="w-full space-y-3 mb-10">
                <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-4 flex items-center gap-4 text-left border border-black/5">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-lg flex-shrink-0">🎵</div>
                  <span className="text-sm text-gray-700 font-medium">都喜欢后摇与独立音乐</span>
                </div>
                <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-4 flex items-center gap-4 text-left border border-black/5">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg flex-shrink-0">📚</div>
                  <span className="text-sm text-gray-700 font-medium">最近都在读《悉达多》</span>
                </div>
                <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-4 flex items-center gap-4 text-left border border-black/5">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-lg flex-shrink-0">🌙</div>
                  <span className="text-sm text-gray-700 font-medium">典型的「深夜思考者」人格</span>
                </div>
              </div>
              
              <div className="flex gap-4 w-full">
                <button
                  onClick={() => setMatchState('idle')}
                  className="flex-1 py-4 rounded-2xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 border border-black/5"
                >
                  <X className="w-5 h-5" />
                  放弃
                </button>
                <button
                  className="flex-[2] py-4 rounded-2xl bg-gray-900 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  开启聊天
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sub Tabs */}
      <div className="px-6 pb-6 pt-2 flex justify-center gap-10 text-base font-medium relative z-20">
        <span className="text-gray-900 border-b-2 border-gray-900 pb-1.5 px-2 cursor-pointer">匹配</span>
        <span className="text-gray-400 hover:text-gray-600 transition-colors pb-1.5 px-2 cursor-pointer">聊天</span>
        <span className="text-gray-400 hover:text-gray-600 transition-colors pb-1.5 px-2 cursor-pointer">好友</span>
      </div>
    </div>
  );
}
