import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TopTickerRow from './components/TopTickerRow';
import MarketLeadersCard from './components/MarketLeadersCard';
import PortfolioChartCard from './components/PortfolioChartCard';
import BalanceCard from './components/BalanceCard';
import RecentTransactionsTable from './components/RecentTransactionsTable';
import TopAssetsCard from './components/TopAssetsCard';
import TopGainersCard from './components/TopGainersCard';
import DepositModal from './components/DepositModal';
import WithdrawModal from './components/WithdrawModal';
import SwapModal from './components/SwapModal';
import TransferModal from './components/TransferModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState('Dashboard');
  const [activeModal, setActiveModal] = useState(null); // 'deposit', 'withdraw', 'swap', 'transfer'

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-[#F4F6F9] dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* Top Header */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeTab={activeNavTab} 
        setActiveTab={setActiveNavTab}
        openModal={openModal}
      />

      {/* Main Dashboard Workspace */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Row 1: Top 4 Crypto Tickers */}
        <TopTickerRow />

        {/* Row 2: Middle Section - Market Leaders + Portfolio Chart (Left 2 cols) | My Balance (Right 1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column (8 cols): Market Leaders + Portfolio Chart side-by-side or stacked */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-5">
              <MarketLeadersCard />
            </div>
            <div className="md:col-span-7">
              <PortfolioChartCard />
            </div>
          </div>

          {/* Right Column (4 cols): My Balance */}
          <div className="lg:col-span-4">
            <BalanceCard openModal={openModal} />
          </div>

        </div>

        {/* Row 3: Bottom Section - Recent Transactions Table (Left 8 cols) | Top Assets & Top Gainers (Right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left Main Table (8 cols) */}
          <div className="lg:col-span-8">
            <RecentTransactionsTable />
          </div>

          {/* Right Column (4 cols): Top Assets & Top Gainers stacked */}
          <div className="lg:col-span-4 space-y-5">
            <TopAssetsCard />
            <TopGainersCard />
          </div>

        </div>

      </main>

      {/* Interactive Modals */}
      <DepositModal isOpen={activeModal === 'deposit'} onClose={closeModal} />
      <WithdrawModal isOpen={activeModal === 'withdraw'} onClose={closeModal} />
      <SwapModal isOpen={activeModal === 'swap'} onClose={closeModal} />
      <TransferModal isOpen={activeModal === 'transfer'} onClose={closeModal} />

    </div>
  );
}
