import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import MetricsRow from './components/MetricsRow';
import PerformanceChartCard from './components/PerformanceChartCard';
import HoldingsCard from './components/HoldingsCard';
import AllocationCard from './components/AllocationCard';
import MoversWatchlistCard from './components/MoversWatchlistCard';
import MarketIntelligenceCard from './components/MarketIntelligenceCard';
import AskAIModal from './components/AskAIModal';
import AddTransactionModal from './components/AddTransactionModal';

export default function App() {
  const [activeNav, setActiveNav] = useState('overview');
  const [activeTab, setActiveTab] = useState('overview');
  const [isAskAIOpen, setIsAskAIOpen] = useState(false);
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex text-[#090d16] font-sans antialiased selection:bg-purple-600 selection:text-white">
      
      {/* Left Sidebar Rail */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenAskAI={() => setIsAskAIOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenAskAI={() => setIsAskAIOpen(true)}
          onOpenAddTransaction={() => setIsAddTransactionOpen(true)}
        />

        <main className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 max-w-[1600px] w-full mx-auto">
          
          {/* Key Metrics Cards Row */}
          <MetricsRow />

          {/* Performance Vs Benchmarks + Holdings Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8">
              <PerformanceChartCard />
            </div>

            <div className="lg:col-span-4">
              <HoldingsCard />
            </div>
          </div>

          {/* Bottom 3 Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <AllocationCard />

            <MoversWatchlistCard />

            <MarketIntelligenceCard />
          </div>

        </main>
      </div>

      {/* Modals */}
      <AskAIModal
        isOpen={isAskAIOpen}
        onClose={() => setIsAskAIOpen(false)}
      />

      <AddTransactionModal
        isOpen={isAddTransactionOpen}
        onClose={() => setIsAddTransactionOpen(false)}
      />

    </div>
  );
}
