import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { OverviewKpiCards } from './components/OverviewKpiCards';
import { WalletSection } from './components/WalletSection';
import { CashFlowAnalytics } from './components/CashFlowAnalytics';
import { RecentActivitiesTable } from './components/RecentActivitiesTable';
import { AddWalletModal } from './components/AddWalletModal';
import { ShareModal } from './components/ShareModal';
import { UpgradeModal } from './components/UpgradeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [addWalletOpen, setAddWalletOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [upgradeOpen, setUpgradeOpen] = useState(false);

  const handleResetData = () => {
    alert('Dashboard telemetry reset to baseline for the current period.');
  };

  return (
    <div className="min-h-screen bg-[#ECEEF1] p-2 sm:p-6 lg:p-8 flex items-center justify-center font-sans antialiased">
      {/* Framed Application Window */}
      <div className="w-full max-w-[1600px] bg-white rounded-3xl sm:rounded-4xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col md:flex-row min-h-[920px]">
        
        {/* Left Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={(tabId) => setActiveTab(tabId)}
          onOpenUpgrade={() => setUpgradeOpen(true)}
        />

        {/* Right Main Body */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">
          
          {/* Top Header */}
          <TopHeader
            onShare={() => setShareOpen(true)}
            onOpenNotifications={() => alert('You have 3 unread compliance notifications.')}
          />

          {/* Main Dashboard Content Area */}
          <main className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* 1. Overview & 3 Top KPI Cards */}
            <OverviewKpiCards
              onResetData={handleResetData}
              onCardAction={(card) => alert(`Navigating to ${card.title} deep telemetry view.`)}
            />

            {/* 2. Middle Row: My Wallet (left) & Cash Flow (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-5">
                <WalletSection
                  onAddNewWallet={() => setAddWalletOpen(true)}
                />
              </div>

              <div className="lg:col-span-7">
                <CashFlowAnalytics />
              </div>
            </div>

            {/* 3. Bottom Row: Recent Activities Table */}
            <RecentActivitiesTable />

          </main>
        </div>

      </div>

      {/* Interactive Modals */}
      <AddWalletModal
        isOpen={addWalletOpen}
        onClose={() => setAddWalletOpen(false)}
      />

      <ShareModal
        isOpen={shareOpen}
        onClose={() => setShareOpen(false)}
      />

      <UpgradeModal
        isOpen={upgradeOpen}
        onClose={() => setUpgradeOpen(false)}
      />
    </div>
  );
}
