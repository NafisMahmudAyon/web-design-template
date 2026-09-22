import React, { useState } from 'react';
import Navbar from './components/Navbar';
import KpiStrip from './components/KpiStrip';
import TotalBalanceCard from './components/TotalBalanceCard';
import YourAssetsCard from './components/YourAssetsCard';
import MarketLeadersCard from './components/MarketLeadersCard';
import TopAssetsCard from './components/TopAssetsCard';
import TransactionsHistoryCard from './components/TransactionsHistoryCard';
import ActionModal from './components/ActionModal';
import AssetDetailModal from './components/AssetDetailModal';
import NotificationPopover from './components/NotificationPopover';
import { NOTIFICATIONS } from './data/coinixData';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [actionModalType, setActionModalType] = useState('deposit');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const handleOpenAction = (type) => {
    setActionModalType(type);
    setActionModalOpen(true);
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CAD2EE] via-[#BAC4E2] to-[#A6B2D6] p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center font-sans antialiased text-white selection:bg-indigo-500 selection:text-white">
      {/* Outer Coinix Dashboard Frame */}
      <div className="w-full max-w-[1580px] bg-[#0E1017] rounded-3xl sm:rounded-[36px] shadow-2xl border border-white/10 overflow-hidden flex flex-col min-h-[920px] relative">
        
        {/* Top Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenNotifications={() => setNotificationsOpen(prev => !prev)}
          unreadCount={unreadCount}
          onOpenSearch={() => handleOpenAction('swap')}
        />

        {/* Dashboard Main Content Body */}
        <main className="flex-1 px-4 sm:px-6 md:px-8 py-3 space-y-6 overflow-y-auto">
          {/* Welcome Greeting & 4 KPI Metrics */}
          <KpiStrip />

          {/* Top 3-Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <TotalBalanceCard onOpenAction={handleOpenAction} />
            <YourAssetsCard onSelectAsset={(asset) => setSelectedAsset(asset)} />
            <MarketLeadersCard />
          </div>

          {/* Bottom 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pb-8">
            {/* Top Assets Watchlist (4 cols) */}
            <div className="lg:col-span-4">
              <TopAssetsCard onSelectAsset={(asset) => setSelectedAsset(asset)} />
            </div>

            {/* Transactions History Table with Sparklines (8 cols) */}
            <div className="lg:col-span-8">
              <TransactionsHistoryCard onSelectTransaction={(item) => setSelectedAsset(item)} />
            </div>
          </div>
        </main>
      </div>

      {/* Global Modals */}
      <ActionModal
        isOpen={actionModalOpen}
        onClose={() => setActionModalOpen(false)}
        initialType={actionModalType}
      />

      <AssetDetailModal
        asset={selectedAsset}
        isOpen={!!selectedAsset}
        onClose={() => setSelectedAsset(null)}
      />

      <NotificationPopover
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllRead={handleMarkAllRead}
      />
    </div>
  );
}
