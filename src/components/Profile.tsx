import React, { useState } from 'react';
import { Settings, ChevronRight, Grid, Bookmark, Crown, Shield, HelpCircle, LogOut, ChevronLeft, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Profile({ onNavigate }: { onNavigate?: (page: string, data?: any) => void }) {
  const [currentView, setCurrentView] = useState('main');

  const renderSubPage = (title: string, content: React.ReactNode) => (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="absolute inset-0 bg-gray-50 z-50 flex flex-col"
    >
      <div className="flex items-center justify-between p-4 pt-12 bg-white border-b border-gray-100">
        <button onClick={() => setCurrentView('main')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        {content}
      </div>
    </motion.div>
  );

  return (
    <div className="h-full w-full bg-gray-50 flex flex-col relative overflow-hidden">
      <AnimatePresence mode="wait">
        {currentView === 'main' && (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full flex flex-col pb-16 overflow-y-auto no-scrollbar"
          >
            {/* Top Header */}
            <div className="p-6 pt-16 bg-gradient-to-b from-purple-100/50 via-purple-50/50 to-transparent relative">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-24 h-24 rounded-full border-[3px] border-white p-1 relative shadow-md">
                  <img src="https://picsum.photos/seed/user/200/200" alt="avatar" className="w-full h-full rounded-full object-cover" />
                  <div className="absolute bottom-0 right-0 w-7 h-7 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                    <Crown className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1.5 tracking-wide">星空漫游者</h1>
                  <p className="text-sm font-medium text-gray-500 bg-white inline-block px-2.5 py-1 rounded-md border border-gray-200 shadow-sm">ID: QY_892347</p>
                </div>
              </div>
              
              <button onClick={() => setCurrentView('personality')} className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between transition-all group shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-100 to-pink-100 flex items-center justify-center border border-purple-200">
                    <Grid className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-gray-900 font-bold text-[15px] mb-0.5">我的同频人格图谱</h3>
                    <p className="text-xs text-gray-500 font-medium">INTJ · 深度思考 · 艺术爱好者</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-around items-center px-6 py-5 border-y border-gray-200 bg-white">
              <div onClick={() => setCurrentView('following')} className="flex flex-col items-center cursor-pointer group">
                <span className="text-2xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors">128</span>
                <span className="text-xs font-medium text-gray-500 mt-1.5">关注</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div onClick={() => setCurrentView('followers')} className="flex flex-col items-center cursor-pointer group">
                <span className="text-2xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors">3.2k</span>
                <span className="text-xs font-medium text-gray-500 mt-1.5">粉丝</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div onClick={() => setCurrentView('matches')} className="flex flex-col items-center cursor-pointer group">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">42</span>
                <span className="text-xs font-medium text-gray-500 mt-1.5">奇遇匹配</span>
              </div>
            </div>

            {/* Menu Grid */}
            <div className="p-6 pt-8 bg-white mt-2 border-y border-gray-200">
              <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-wider">常用功能</h3>
              <div className="grid grid-cols-4 gap-y-8">
                <MenuIcon onClick={() => setCurrentView('content')} icon={Grid} label="我的内容" color="text-blue-600" bg="bg-blue-50" border="border-blue-100" />
                <MenuIcon onClick={() => setCurrentView('favorites')} icon={Bookmark} label="我的收藏" color="text-yellow-600" bg="bg-yellow-50" border="border-yellow-100" />
                <MenuIcon onClick={() => setCurrentView('diary')} icon={Smile} label="情绪日记" color="text-rose-600" bg="bg-rose-50" border="border-rose-100" />
                <MenuIcon onClick={() => setCurrentView('vip')} icon={Crown} label="会员中心" color="text-pink-600" bg="bg-pink-50" border="border-pink-100" />
                <MenuIcon onClick={() => setCurrentView('privacy')} icon={Shield} label="隐私设置" color="text-green-600" bg="bg-green-50" border="border-green-100" />
                <MenuIcon onClick={() => setCurrentView('help')} icon={HelpCircle} label="帮助反馈" color="text-purple-600" bg="bg-purple-50" border="border-purple-100" />
              </div>
            </div>

            {/* Settings */}
            <div className="mt-auto p-6 space-y-4">
              <button onClick={() => setCurrentView('settings')} className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between transition-colors shadow-sm">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900 text-[15px] font-medium">账号与安全</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full bg-red-50 hover:bg-red-100 border border-red-100 text-red-600 rounded-2xl p-4 flex items-center justify-center gap-2 transition-colors text-[15px] font-bold shadow-sm">
                <LogOut className="w-5 h-5" />
                退出登录
              </button>
            </div>
          </motion.div>
        )}

        {currentView === 'personality' && renderSubPage('同频人格图谱', (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">INTJ 建筑师</h3>
            <p className="text-gray-500 mb-8">富有想象力和战略性的思想家，一切皆在计划之中。</p>
            <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">内向 (I)</span>
                <span className="text-purple-600 font-bold">78%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">直觉 (N)</span>
                <span className="text-blue-600 font-bold">65%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">思考 (T)</span>
                <span className="text-pink-600 font-bold">82%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                <div className="bg-pink-500 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        ))}

        {currentView === 'following' && renderSubPage('我的关注', (
          <div className="text-center text-gray-500 mt-20">
            <div className="text-4xl mb-4">👀</div>
            <p>暂无关注的人</p>
          </div>
        ))}

        {currentView === 'followers' && renderSubPage('我的粉丝', (
          <div className="text-center text-gray-500 mt-20">
            <div className="text-4xl mb-4">🌟</div>
            <p>暂无粉丝</p>
          </div>
        ))}

        {currentView === 'matches' && renderSubPage('奇遇匹配', (
          <div className="text-center text-gray-500 mt-20">
            <div className="text-4xl mb-4">✨</div>
            <p>去地图上遇见更多有趣的灵魂吧</p>
          </div>
        ))}

        {currentView === 'content' && renderSubPage('我的内容', (
          <div className="text-center text-gray-500 mt-20">
            <div className="text-4xl mb-4">📝</div>
            <p>还没有发布过内容</p>
          </div>
        ))}

        {currentView === 'favorites' && renderSubPage('我的收藏', (
          <div className="text-center text-gray-500 mt-20">
            <div className="text-4xl mb-4">🔖</div>
            <p>还没有收藏任何内容</p>
          </div>
        ))}

        {currentView === 'diary' && renderSubPage('情绪日记', (
          <div className="space-y-6 pb-8">
            {/* Header / Stats */}
            <div className="bg-gradient-to-br from-rose-100 to-orange-100 p-6 rounded-3xl border border-rose-200 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">本月情绪温度</h3>
                <p className="text-rose-700 font-medium mb-4">连续记录 5 天，继续保持！</p>
                <div className="flex gap-2">
                  {['😊', '😐', '😢', '😡', '😌'].map((emoji, i) => (
                    <div key={i} className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-sm border border-white/50">
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 text-8xl opacity-20">📖</div>
            </div>

            {/* Write New Entry */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4">今天感觉怎么样？</h4>
              <div className="flex justify-between mb-6">
                {[
                  { emoji: '😊', label: '开心', color: 'bg-green-50 text-green-600 border-green-100' },
                  { emoji: '😌', label: '平静', color: 'bg-blue-50 text-blue-600 border-blue-100' },
                  { emoji: '😐', label: '一般', color: 'bg-gray-50 text-gray-600 border-gray-100' },
                  { emoji: '😢', label: '难过', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
                  { emoji: '😡', label: '生气', color: 'bg-red-50 text-red-600 border-red-100' },
                ].map((mood, i) => (
                  <button key={i} className={`flex flex-col items-center gap-2 p-2 rounded-2xl border ${i === 0 ? 'ring-2 ring-rose-400 ring-offset-2 ' + mood.color : 'border-transparent hover:bg-gray-50'} transition-all`}>
                    <span className="text-3xl">{mood.emoji}</span>
                    <span className="text-xs font-medium text-gray-600">{mood.label}</span>
                  </button>
                ))}
              </div>
              <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent resize-none h-32 mb-4"
                placeholder="写下此刻的想法，只有你自己能看到..."
              ></textarea>
              <button className="w-full py-3.5 bg-gray-900 text-white font-bold rounded-xl shadow-md hover:bg-gray-800 transition-colors">
                保存日记
              </button>
            </div>

            {/* Past Entries */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 px-1">历史记录</h4>
              <div className="space-y-4">
                {[
                  { date: '今天 14:30', mood: '😊', text: '去了一家新开的咖啡店，拿铁很好喝，还遇到了一只可爱的猫咪。' },
                  { date: '昨天 21:15', mood: '😌', text: '跑了5公里，出了一身汗，感觉整个人都轻松了许多。' },
                  { date: '3月25日 10:00', mood: '😢', text: '工作上遇到了一些挫折，感觉有点沮丧，希望能快点调整过来。' },
                ].map((entry, i) => (
                  <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex gap-4">
                    <div className="text-4xl">{entry.mood}</div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-1">{entry.date}</div>
                      <p className="text-sm text-gray-700 leading-relaxed">{entry.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {currentView === 'vip' && renderSubPage('会员中心', (
          <div className="flex flex-col items-center">
            <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl"></div>
              <Crown className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">奇遇 PRO</h3>
              <p className="text-gray-400 mb-6">解锁无限匹配次数与专属特权</p>
              <button className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-gray-900 font-bold text-lg shadow-lg hover:shadow-xl transition-shadow">
                立即开通
              </button>
            </div>
            <div className="w-full space-y-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">✨</div>
                <div>
                  <h4 className="font-bold text-gray-900">无限匹配</h4>
                  <p className="text-xs text-gray-500">每天无限制滑动匹配</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">👀</div>
                <div>
                  <h4 className="font-bold text-gray-900">查看谁喜欢我</h4>
                  <p className="text-xs text-gray-500">第一时间知道谁对你感兴趣</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {currentView === 'privacy' && renderSubPage('隐私设置', (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900">隐藏我的位置</h4>
                <p className="text-xs text-gray-500">在同城地图上隐身</p>
              </div>
              <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900">允许陌生人私信</h4>
                <p className="text-xs text-gray-500">未匹配也可以收到消息</p>
              </div>
              <div className="w-12 h-6 bg-pink-500 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        ))}

        {currentView === 'help' && renderSubPage('帮助反馈', (
          <div className="space-y-4">
            <textarea 
              className="w-full bg-white border border-gray-200 rounded-2xl p-4 h-40 resize-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="请详细描述您遇到的问题或建议..."
            ></textarea>
            <button className="w-full py-4 bg-gray-900 text-white rounded-full font-bold">
              提交反馈
            </button>
          </div>
        ))}

        {currentView === 'settings' && renderSubPage('账号与安全', (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between cursor-pointer">
              <span className="font-bold text-gray-900">手机号绑定</span>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                138****8888 <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between cursor-pointer">
              <span className="font-bold text-gray-900">修改密码</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between cursor-pointer">
              <span className="font-bold text-red-500">注销账号</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        ))}

      </AnimatePresence>
    </div>
  );
}

function MenuIcon({ icon: Icon, label, color, bg, border, onClick }: { icon: any, label: string, color: string, bg: string, border: string, onClick?: () => void }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center gap-2.5 cursor-pointer group">
      <div className={`w-14 h-14 rounded-[1.25rem] ${bg} border ${border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{label}</span>
    </div>
  );
}
