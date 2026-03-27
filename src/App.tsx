import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Home from './components/Home';
import Stream from './components/Stream';
import Match from './components/Match';
import TreeHole from './components/TreeHole';
import Profile from './components/Profile';
import BottomNav from './components/BottomNav';
import PostDetail from './components/PostDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState('home');
  const [pageData, setPageData] = useState<any>(null);

  const handleNavigate = (page: string, data?: any) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
    if (data !== undefined) {
      setPageData(data);
    }
  };

  // Hide bottom nav on detail pages
  const showBottomNav = !['post-detail'].includes(currentPage);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md h-[100dvh] bg-white text-gray-900 relative overflow-hidden flex flex-col shadow-2xl sm:rounded-[2.5rem] sm:h-[850px] sm:border-[6px] border-gray-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex-1 overflow-hidden relative"
          >
            {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
            {currentPage === 'stream' && <Stream onNavigate={handleNavigate} />}
            {currentPage === 'match' && <Match />}
            {currentPage === 'treehole' && <TreeHole />}
            {currentPage === 'profile' && <Profile onNavigate={handleNavigate} />}
            {currentPage === 'post-detail' && <PostDetail post={pageData} onBack={() => handleNavigate(previousPage)} />}
          </motion.div>
        </AnimatePresence>
        {showBottomNav && <BottomNav currentPage={currentPage} onNavigate={handleNavigate} />}
      </div>
    </div>
  );
}
