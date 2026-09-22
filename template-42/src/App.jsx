import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FinancialHeader from './components/FinancialHeader';
import TotalBalanceCard from './components/TotalBalanceCard';
import EarningOverviewCard from './components/EarningOverviewCard';
import MetricCards from './components/MetricCards';
import FinancialReportCard from './components/FinancialReportCard';
import SavingsGoalsCard from './components/SavingsGoalsCard';
import ActionModal from './components/ActionModal';
import NotificationPopover from './components/NotificationPopover';
import { NOTIFICATIONS as INITIAL_NOTIFICATIONS } from './data/steadiData';

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [activeSubtab, setActiveSubtab] = useState('Overview');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('receive'); // 'receive' | 'send' | 'request' | 'addGoal' | 'settings'
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const unreadCount = notifications.filter(n => n.unread).length;

  const openActionModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const handleMarkAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA] text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Main Navigation */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-40 shadow-2xs">
        <div className="max-w-7xl mx-auto">
          <Navbar 
            activeNav={activeNav}
            setActiveNav={setActiveNav}
            onOpenNotifications={() => setNotifOpen(!notifOpen)}
            unreadCount={unreadCount}
            onOpenSettings={() => openActionModal('settings')}
          />
        </div>
      </div>

      {/* Main Dashboard Canvas */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Header & Subtabs */}
        <FinancialHeader 
          activeSubtab={activeSubtab}
          setActiveSubtab={setActiveSubtab}
        />

        {/* First Row Grid: Total Balance + Earning Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 flex flex-col">
            <TotalBalanceCard 
              onOpenAction={(type) => openActionModal(type)}
            />
          </div>
          <div className="lg:col-span-5 flex flex-col">
            <EarningOverviewCard />
          </div>
        </div>

        {/* Second Row Grid: Income/Expense/Net Profit Metrics + Financial Report */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 flex flex-col">
            <MetricCards />
          </div>
          <div className="lg:col-span-5 flex flex-col">
            <FinancialReportCard 
              onOpenReport={() => openActionModal('request')}
            />
          </div>
        </div>

        {/* Third Row: Savings Goals Full Container */}
        <div>
          <SavingsGoalsCard 
            onOpenAddGoal={() => openActionModal('addGoal')}
          />
        </div>
      </main>

      {/* Floating Action Modal */}
      <ActionModal 
        isOpen={modalOpen}
        type={modalType}
        onClose={() => setModalOpen(false)}
      />

      {/* Notifications Popover */}
      <NotificationPopover 
        isOpen={notifOpen}
        onClose={() => setNotifOpen(false)}
        notifications={notifications}
        onMarkAllRead={handleMarkAllRead}
        onMarkAsRead={handleMarkAsRead}
      />
    </div>
  );
}
