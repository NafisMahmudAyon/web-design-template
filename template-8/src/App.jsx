import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Sidebar from './components/Sidebar.jsx';
import CourseHeaderCard from './components/CourseHeaderCard.jsx';
import CourseChapters from './components/CourseChapters.jsx';
import VideoPlayerCard from './components/VideoPlayerCard.jsx';
import ChapterProgressAnalytics from './components/ChapterProgressAnalytics.jsx';
import ProReviewsCard from './components/ProReviewsCard.jsx';
import AiMentorChat from './components/AiMentorChat.jsx';
import FeedbackModal from './components/FeedbackModal.jsx';
import NotificationDrawer from './components/NotificationDrawer.jsx';
import MentorDetailsModal from './components/MentorDetailsModal.jsx';
import { Sparkles, Menu, X, Bell } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isMentorOpen, setIsMentorOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Chapters dataset
  const [chapters, setChapters] = useState([
    { id: 'intro', title: 'Intro', duration: '12:00', completed: true },
    { id: 'creating-flow', title: 'Creating Flow', duration: '24:00', completed: true },
    { id: 'first-steps', title: 'First Steps', duration: '35:00', completed: false },
    { id: 'designing-header', title: 'Designing Header', duration: '32:00', completed: false },
    { id: 'sidebar-essentials', title: 'Sidebar Essentials', duration: '38:00', completed: false },
    { id: 'hero-section', title: 'Hero Section', duration: '33:00', completed: false },
    { id: 'content-religion', title: 'Content Religion', duration: '30:00', completed: false },
  ]);

  const [activeChapter, setActiveChapter] = useState(chapters[2]); // 'First Steps'
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(26.39);

  // Scroll animations for smooth parallax & zoom effects
  const { scrollY } = useScroll();
  const scaleEffect = useTransform(scrollY, [0, 300], [1, 0.98]);
  const opacityEffect = useTransform(scrollY, [0, 300], [1, 0.95]);

  const handleSelectChapter = (chapterOrId) => {
    let target = chapterOrId;
    if (typeof chapterOrId === 'string') {
      target = chapters.find(c => c.id === chapterOrId) || chapters[2];
    }
    setActiveChapter(target);
    if (target.id === 'first-steps') {
      setPlaybackProgress(26.39);
    } else {
      setPlaybackProgress(0);
    }
    setIsPlaying(true);
  };

  const handleNextChapter = () => {
    const currentIndex = chapters.findIndex(c => c.id === activeChapter.id);
    if (currentIndex < chapters.length - 1) {
      handleSelectChapter(chapters[currentIndex + 1]);
    }
  };

  const handlePrevChapter = () => {
    const currentIndex = chapters.findIndex(c => c.id === activeChapter.id);
    if (currentIndex > 0) {
      handleSelectChapter(chapters[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-6 px-3 md:px-8 md:py-12 overflow-x-hidden selection:bg-[#cbf168] selection:text-black">
      
      {/* Dynamic Animated Ambient Mesh Backdrop */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#d9f58c]/60 via-[#e0ebb0]/50 to-[#f5c7b3]/40 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -30, 0],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-tr from-[#f9d7c0]/60 via-[#edd9b2]/50 to-[#cde088]/40 rounded-full blur-[140px]"
        />
      </div>

      {/* Left Navigation Rail (Desktop) */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onToggleNotifications={() => setIsNotificationsOpen(true)}
        hasUnread={true}
      />

      {/* Mobile Top Header */}
      <div className="fixed top-0 inset-x-0 z-40 md:hidden glass-panel bg-white/90 p-4 border-b border-white/80 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black text-white font-bold flex items-center justify-center text-sm font-display">P</div>
          <span className="font-bold text-sm text-gray-900">How to design a website</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsNotificationsOpen(true)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Main Glassmorphic Dashboard Canvas Container */}
      <motion.main 
        style={{ scale: scaleEffect, opacity: opacityEffect }}
        className="relative z-10 w-full max-w-[1340px] md:ml-[72px] glass-panel rounded-[40px] md:rounded-[48px] p-4 md:p-7 shadow-2xl backdrop-blur-3xl bg-white/70 border border-white/90 my-12 md:my-0"
      >
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (Course info & Chapters) - 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <CourseHeaderCard onOpenMentorDetails={() => setIsMentorOpen(true)} />
            <CourseChapters 
              chapters={chapters} 
              activeChapterId={activeChapter.id} 
              onSelectChapter={handleSelectChapter}
              onOpenFeedback={() => setIsFeedbackOpen(true)}
            />
          </div>

          {/* Center Column (Video Player & Chapter Progress Analytics) - 6 cols */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <VideoPlayerCard 
              currentChapter={activeChapter}
              onPrevChapter={handlePrevChapter}
              onNextChapter={handleNextChapter}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              playbackProgress={playbackProgress}
              setPlaybackProgress={setPlaybackProgress}
            />
            <ChapterProgressAnalytics 
              currentProgress={playbackProgress}
              onSelectChapter={handleSelectChapter}
            />
          </div>

          {/* Right Column (Pro Reviews & AI Mentor Chat) - 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <ProReviewsCard onOpenAllReviews={() => setIsMentorOpen(true)} />
            <AiMentorChat />
          </div>

        </div>
      </motion.main>

      {/* Interactive Modals & Drawers */}
      <FeedbackModal 
        isOpen={isFeedbackOpen} 
        onClose={() => setIsFeedbackOpen(false)} 
      />

      <NotificationDrawer 
        isOpen={isNotificationsOpen} 
        onClose={() => setIsNotificationsOpen(false)} 
      />

      <MentorDetailsModal 
        isOpen={isMentorOpen} 
        onClose={() => setIsMentorOpen(false)} 
      />
    </div>
  );
}
