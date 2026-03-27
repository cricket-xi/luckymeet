import { Map, Sparkles, Zap, Coffee, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function BottomNav({ currentPage, onNavigate }: { currentPage: string, onNavigate: (p: string, data?: any) => void }) {
  const tabs = [
    { id: 'home', icon: Map, label: '同城' },
    { id: 'stream', icon: Sparkles, label: '奇遇' },
    { id: 'match', icon: Zap, label: '匹配' },
    { id: 'treehole', icon: Coffee, label: '树洞' },
    { id: 'profile', icon: User, label: '我的' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-xl border-t border-black/5 flex justify-around items-center px-1 z-50">
      {tabs.map((tab) => {
        const isActive = currentPage === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className="flex flex-col items-center justify-center w-14 h-full relative"
          >
            <Icon className={`w-6 h-6 mb-1 transition-colors ${isActive ? 'text-gray-900' : 'text-gray-400'}`} />
            <span className={`text-[10px] ${isActive ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
              {tab.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="bottomNavIndicator"
                className="absolute top-0 w-8 h-0.5 bg-gray-900 rounded-b-full"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
