import { Settings, ChevronRight, Grid, Bookmark, Crown, Shield, HelpCircle, LogOut } from 'lucide-react';

export default function Profile() {
  return (
    <div className="h-full w-full bg-gray-50 flex flex-col pb-16 overflow-y-auto no-scrollbar">
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
        
        <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between transition-all group shadow-sm">
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
        <div className="flex flex-col items-center cursor-pointer group">
          <span className="text-2xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors">128</span>
          <span className="text-xs font-medium text-gray-500 mt-1.5">关注</span>
        </div>
        <div className="w-px h-10 bg-gray-200" />
        <div className="flex flex-col items-center cursor-pointer group">
          <span className="text-2xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors">3.2k</span>
          <span className="text-xs font-medium text-gray-500 mt-1.5">粉丝</span>
        </div>
        <div className="w-px h-10 bg-gray-200" />
        <div className="flex flex-col items-center cursor-pointer group">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">42</span>
          <span className="text-xs font-medium text-gray-500 mt-1.5">奇遇匹配</span>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="p-6 pt-8 bg-white mt-2 border-y border-gray-200">
        <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-wider">常用功能</h3>
        <div className="grid grid-cols-4 gap-y-8">
          <MenuIcon icon={Grid} label="我的内容" color="text-blue-600" bg="bg-blue-50" border="border-blue-100" />
          <MenuIcon icon={Bookmark} label="我的收藏" color="text-yellow-600" bg="bg-yellow-50" border="border-yellow-100" />
          <MenuIcon icon={Crown} label="会员中心" color="text-pink-600" bg="bg-pink-50" border="border-pink-100" />
          <MenuIcon icon={Shield} label="隐私设置" color="text-green-600" bg="bg-green-50" border="border-green-100" />
          <MenuIcon icon={HelpCircle} label="帮助反馈" color="text-purple-600" bg="bg-purple-50" border="border-purple-100" />
        </div>
      </div>

      {/* Settings */}
      <div className="mt-auto p-6 space-y-4">
        <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between transition-colors shadow-sm">
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
    </div>
  );
}

function MenuIcon({ icon: Icon, label, color, bg, border }: { icon: any, label: string, color: string, bg: string, border: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5 cursor-pointer group">
      <div className={`w-14 h-14 rounded-[1.25rem] ${bg} border ${border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{label}</span>
    </div>
  );
}
