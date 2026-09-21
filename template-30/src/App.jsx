import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WelcomeBar from './components/WelcomeBar';
import PortfolioValueCard from './components/PortfolioValueCard';
import BitcoinChartCard from './components/BitcoinChartCard';
import TopGainersCard from './components/TopGainersCard';
import MarketLeadersCard from './components/MarketLeadersCard';
import MyAssetsCard from './components/MyAssetsCard';
import DepositModal from './components/DepositModal';
import WithdrawModal from './components/WithdrawModal';
import SwapModal from './components/SwapModal';
import TransferModal from './components/TransferModal';
import ExportReportModal from './components/ExportReportModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState('Dashboard');
  const [activeModal, setActiveModal] = useState(null); // 'deposit', 'withdraw', 'swap', 'transfer', 'export'

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const openModal = (name) => setActiveModal(name);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-[#EEF0F4] dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* Top Header */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeNavTab={activeNavTab} 
        setActiveNavTab={setActiveNavTab}
        openModal={openModal}
      />

      {/* Main Workspace */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Welcome & Action Bar */}
        <WelcomeBar openModal={openModal} />

        {/* Row 1: Portfolio Value (4 cols) & Bitcoin Chart (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          <div className="lg:col-span-4">
            <PortfolioValueCard openModal={openModal} />
          </div>

          <div className="lg:col-span-8">
            <BitcoinChartCard />
          </div>

        </div>

        {/* Row 2: 3-Column Equal Grid (Top Gainers | Market Leaders | My Assets) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          
          <div>
            <TopGainersCard />
          </div>

          <div>
            <MarketLeadersCard />
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <MyAssetsCard />
          </div>

        </div>

      </main>

      {/* Modals */}
      <DepositModal isOpen={activeModal === 'deposit'} onClose={closeModal} />
      <WithdrawModal isOpen={activeModal === 'withdraw'} onClose={closeModal} />
      <SwapModal isOpen={activeModal === 'swap'} onClose={closeModal} />
      <TransferModal isOpen={activeModal === 'transfer'} onClose={closeModal} />
      <ExportReportModal isOpen={activeModal === 'export'} onClose={closeModal} />

    </div>
  );
}
