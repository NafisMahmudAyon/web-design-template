import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UtilityRail from './components/UtilityRail';
import SidebarNav from './components/SidebarNav';
import TopHeader from './components/TopHeader';
import MarketIndicesRow from './components/MarketIndicesRow';
import StrengthMeterCard from './components/StrengthMeterCard';
import StockExchangeCard from './components/StockExchangeCard';
import DsexChartCard from './components/DsexChartCard';
import SectorStrengthCard from './components/SectorStrengthCard';
import TopValueListTable, { STOCK_DATA } from './components/TopValueListTable';
import QuickTradeModal from './components/QuickTradeModal';

export default function App() {
  const [activeRailIcon, setActiveRailIcon] = useState('chart');
  const [activeNavItem, setActiveNavItem] = useState('Protfolio');
  const [selectedStock, setSelectedStock] = useState(null);
  const [tradeModalOpen, setTradeModalOpen] = useState(false);

  const handleSelectStock = (stock) => {
    setSelectedStock(stock);
    setTradeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121417] text-slate-100 font-sans flex antialiased selection:bg-emerald-500 selection:text-black">
      {/* 1. Leftmost Slim Icon Utility Rail */}
      <UtilityRail
        activeIcon={activeRailIcon}
        onSelectIcon={setActiveRailIcon}
      />

      {/* 2. Secondary Left Sidebar Nav (MetaMint) */}
      <SidebarNav
        activeItem={activeNavItem}
        onSelectItem={setActiveNavItem}
      />

      {/* 3. Main Dashboard Workspace */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto max-h-screen">
        {/* Top Header */}
        <TopHeader
          onOpenSettings={() => {}}
          onOpenNotifications={() => {}}
        />

        {/* Dashboard Content Grid */}
        <main className="p-7 space-y-6 max-w-[1700px] w-full mx-auto">
          {/* Section 1: Market Indices Row (5 Ticker Cards) */}
          <MarketIndicesRow />

          {/* Section 2: Middle Row (3 Analysis Cards) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {/* Card 1: Strength Meter Gauge */}
            <StrengthMeterCard />

            {/* Card 2: Stock Exchange 52-Week Range */}
            <StockExchangeCard />

            {/* Card 3: DSEX Interactive Chart */}
            <DsexChartCard />
          </motion.div>

          {/* Section 3: Bottom Row (Sector Strength + Top Value List Table) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left: Sector Strength Meter (Span 5) */}
            <div className="lg:col-span-5 h-full">
              <SectorStrengthCard />
            </div>

            {/* Right: Top Value List Table (Span 7) */}
            <div className="lg:col-span-7 h-full">
              <TopValueListTable
                onSelectStock={handleSelectStock}
              />
            </div>
          </motion.div>
        </main>
      </div>

      {/* Quick Trade Dialog */}
      <QuickTradeModal
        isOpen={tradeModalOpen}
        onClose={() => setTradeModalOpen(false)}
        stock={selectedStock}
      />
    </div>
  );
}
