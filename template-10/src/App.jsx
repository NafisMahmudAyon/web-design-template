import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SidebarNav from './components/SidebarNav.jsx';
import DashboardHeader from './components/DashboardHeader.jsx';
import OverviewMetricsRow from './components/OverviewMetricsRow.jsx';
import SalesChartCard from './components/SalesChartCard.jsx';
import UserActivityCard from './components/UserActivityCard.jsx';
import TopPerformersGrid from './components/TopPerformersGrid.jsx';
import AddRecordModal from './components/AddRecordModal.jsx';
import NotificationsDrawer from './components/NotificationsDrawer.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('Last 7 Days');
  const [isAddRecordOpen, setIsAddRecordOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Scroll animations
  const { scrollY } = useScroll();
  const scaleEffect = useTransform(scrollY, [0, 400], [1, 0.99]);

  return (
    <div className="min-h-screen bg-[#0d0e11] py-4 px-2 sm:px-4 md:py-8 flex items-center justify-center selection:bg-[#00e676] selection:text-black">
      
      {/* Background Ambient Neon Glow Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#00e676]/20 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#ff5722]/15 rounded-full blur-[140px]"
        />
      </div>

      {/* Master Dark Glass Dashboard Frame */}
      <motion.main 
        style={{ scale: scaleEffect }}
        className="relative z-10 w-full max-w-[1400px] kortex-glass rounded-[32px] md:rounded-[40px] p-4 md:p-7 shadow-2xl backdrop-blur-3xl border border-white/10 flex flex-col lg:flex-row gap-6 items-stretch my-2"
      >
        {/* Left Sidebar Navigation */}
        <SidebarNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          onOpenProfile={() => setIsNotificationsOpen(true)}
        />

        {/* Main Analytics Content Canvas */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          
          {/* Top Header Bar */}
          <DashboardHeader 
            onOpenAddRecord={() => setIsAddRecordOpen(true)}
            onOpenNotifications={() => setIsNotificationsOpen(true)}
            unreadCount={2}
          />

          {/* Overview KPI Row */}
          <OverviewMetricsRow 
            timeRange={timeRange} 
            setTimeRange={setTimeRange} 
          />

          {/* Analytics Charts Grid (Sales Chart + User Activity Insights) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <SalesChartCard />
            <UserActivityCard />
          </div>

          {/* Top Performers Section */}
          <TopPerformersGrid />

        </div>
      </motion.main>

      {/* Interactive Modals & Drawers */}
      <AddRecordModal 
        isOpen={isAddRecordOpen} 
        onClose={() => setIsAddRecordOpen(false)} 
      />

      <NotificationsDrawer 
        isOpen={isNotificationsOpen} 
        onClose={() => setIsNotificationsOpen(false)} 
      />

    </div>
  );
}
