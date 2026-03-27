import { useState } from 'react';
import { History, Sparkles, X, MessageCircle, Search, MoreHorizontal, ChevronLeft, Send, Phone, Video, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Mock Data
const MOCK_CHATS = [
  { id: 1, name: '星空漫游者', avatar: 'https://picsum.photos/seed/user1/100/100', lastMessage: '那本书的结局真的很出人意料...', time: '10:42', unread: 2 },
  { id: 2, name: '深海潜水员', avatar: 'https://picsum.photos/seed/user2/100/100', lastMessage: '周末去听现场吗？', time: '昨天', unread: 0 },
  { id: 3, name: '城市边缘', avatar: 'https://picsum.photos/seed/user3/100/100', lastMessage: '哈哈哈哈确实是这样', time: '星期二', unread: 0 },
  { id: 4, name: '光影捕手', avatar: 'https://picsum.photos/seed/user4/100/100', lastMessage: '[图片]', time: '星期一', unread: 1 },
];

const MOCK_FRIENDS = [
  { id: 1, name: '星空漫游者', avatar: 'https://picsum.photos/seed/user1/100/100', status: 'online', tags: ['后摇', '科幻'] },
  { id: 2, name: '深海潜水员', avatar: 'https://picsum.photos/seed/user2/100/100', status: 'offline', tags: ['潜水', '摄影'] },
  { id: 3, name: '城市边缘', avatar: 'https://picsum.photos/seed/user3/100/100', status: 'online', tags: ['街拍', '咖啡'] },
  { id: 4, name: '光影捕手', avatar: 'https://picsum.photos/seed/user4/100/100', status: 'offline', tags: ['电影', '展览'] },
  { id: 5, name: '风的颜色', avatar: 'https://picsum.photos/seed/user5/100/100', status: 'online', tags: ['旅行', '手账'] },
];

export default function Match() {
  const [activeTab, setActiveTab] = useState<'match' | 'chat' | 'friends'>('match');
  const [matchState, setMatchState] = useState<'idle' | 'matching' | 'matched'>('idle');
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [messageInput, setMessageInput] = useState('');

  const startMatch = () => {
    setMatchState('matching');
    setTimeout(() => {
      setMatchState('matched');
    }, 2500);
  };

  if (selectedChat) {
    return (
      <div className="h-full w-full bg-gray-50 flex flex-col relative z-50">
        {/* Chat Header */}
        <div className="pt-12 pb-4 px-4 bg-white/90 backdrop-blur-md border-b border-black/5 flex items-center justify-between sticky top-0 z-20">
          <button 
            onClick={() => setSelectedChat(null)}
            className="p-2 -ml-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center">
            <span className="font-bold text-gray-900">{selectedChat.name}</span>
            <span className="text-xs text-green-500 font-medium">在线</span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Video className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="text-center text-xs text-gray-400 my-4">昨天 10:42</div>
          
          <div className="flex gap-3 max-w-[85%]">
            <img src={selectedChat.avatar} className="w-10 h-10 rounded-full object-cover flex-shrink-0" alt="avatar" />
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-black/5 text-gray-800 text-[15px] leading-relaxed">
              你好！很高兴认识你，我看你也喜欢后摇？
            </div>
          </div>
          
          <div className="flex gap-3 max-w-[85%] self-end ml-auto flex-row-reverse">
            <img src="https://picsum.photos/seed/myavatar/100/100" className="w-10 h-10 rounded-full object-cover flex-shrink-0" alt="my avatar" />
            <div className="bg-gray-900 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-[15px] leading-relaxed">
              是啊！最近一直在听惘闻的新专辑。
            </div>
          </div>

          <div className="flex gap-3 max-w-[85%]">
            <img src={selectedChat.avatar} className="w-10 h-10 rounded-full object-cover flex-shrink-0" alt="avatar" />
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-black/5 text-gray-800 text-[15px] leading-relaxed">
              {selectedChat.lastMessage}
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-black/5 pb-8">
          <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1.5 pr-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="发送消息..." 
              className="flex-1 bg-transparent outline-none text-[15px] text-gray-900 placeholder:text-gray-400"
            />
            <button 
              className={`p-2.5 rounded-full transition-all ${messageInput.trim() ? 'bg-gray-900 text-white shadow-md' : 'bg-gray-200 text-gray-400'}`}
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-gray-50 flex flex-col pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-100/50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 -left-24 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />

      {/* Top Nav */}
      <div className="p-4 pt-12 flex justify-between items-center relative z-20">
        <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
          {activeTab === 'match' ? '今日奇遇' : activeTab === 'chat' ? '消息' : '好友'}
        </h1>
        {activeTab === 'match' ? (
          <button className="p-2.5 rounded-full bg-white hover:bg-gray-100 transition-colors border border-black/5 shadow-sm">
            <History className="w-5 h-5 text-gray-700" />
          </button>
        ) : (
          <button className="p-2.5 rounded-full bg-white hover:bg-gray-100 transition-colors border border-black/5 shadow-sm">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'match' && (
            <motion.div
              key="match-tab"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="h-full flex flex-col items-center justify-center p-6"
            >
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
                    onClick={() => setActiveTab('chat')}
                    className="flex-[2] py-4 rounded-2xl bg-gray-900 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5" />
                    开启聊天
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {activeTab === 'chat' && (
          <motion.div
            key="chat-tab"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="px-4 pb-20"
          >
            <div className="space-y-3">
              {MOCK_CHATS.map((chat) => (
                <div 
                  key={chat.id} 
                  onClick={() => setSelectedChat(chat)}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow active:scale-[0.98] cursor-pointer"
                >
                  <div className="relative">
                    <img src={chat.avatar} alt={chat.name} className="w-14 h-14 rounded-full object-cover" />
                    {chat.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-base font-bold text-gray-900 truncate">{chat.name}</h3>
                      <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'friends' && (
          <motion.div
            key="friends-tab"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="px-4 pb-20"
          >
            <div className="space-y-3">
              {MOCK_FRIENDS.map((friend) => (
                <div 
                  key={friend.id} 
                  onClick={() => setSelectedChat({ ...friend, lastMessage: '打个招呼吧！', time: '刚刚', unread: 0 })}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow active:scale-[0.98] cursor-pointer"
                >
                  <div className="relative">
                    <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 truncate mb-1">{friend.name}</h3>
                    <div className="flex gap-2">
                      {friend.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    {/* Sub Tabs */}
    <div className="px-6 pb-6 pt-2 flex justify-center gap-10 text-base font-medium relative z-20 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent">
      <span 
        onClick={() => setActiveTab('match')}
        className={`pb-1.5 px-2 cursor-pointer transition-colors ${activeTab === 'match' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
      >
        匹配
      </span>
      <span 
        onClick={() => setActiveTab('chat')}
        className={`pb-1.5 px-2 cursor-pointer transition-colors ${activeTab === 'chat' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
      >
        聊天
      </span>
      <span 
        onClick={() => setActiveTab('friends')}
        className={`pb-1.5 px-2 cursor-pointer transition-colors ${activeTab === 'friends' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
      >
        好友
      </span>
    </div>
    </div>
  );
}
