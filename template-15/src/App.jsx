import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NetWorthCard from './components/NetWorthCard';
import FinancialHealthScoreCard from './components/FinancialHealthScoreCard';
import CashFlowCard from './components/CashFlowCard';
import NetSpendingCard from './components/NetSpendingCard';
import UpcomingBillsCard from './components/UpcomingBillsCard';
import InvestmentPerformanceCard from './components/InvestmentPerformanceCard';
import SupportModal from './components/SupportModal';
import SearchModal from './components/SearchModal';
import FilterModal from './components/FilterModal';

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F6F8] flex">
      {/* Sidebar Navigation */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSupport={() => setIsSupportOpen(true)}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

        {/* Dashboard Grid Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-7 max-w-[1520px] w-full mx-auto space-y-6">
          {/* Row 1: Net Worth + AI Financial Health Score */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6 flex flex-col">
              <NetWorthCard />
            </div>
            <div className="lg:col-span-6 flex flex-col">
              <FinancialHealthScoreCard />
            </div>
          </div>

          {/* Row 2: Cash Flow Visualization + Net Spending */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
              <CashFlowCard onOpenFilter={() => setIsFilterOpen(true)} />
            </div>
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col">
              <NetSpendingCard />
            </div>
          </div>

          {/* Row 3: Upcoming Bills + Investment Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
              <UpcomingBillsCard onAddBill={() => setIsSupportOpen(true)} />
            </div>
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
              <InvestmentPerformanceCard onOpenFilter={() => setIsFilterOpen(true)} />
            </div>
          </div>
        </main>
      </div>

      {/* Interactive Overlays / Modals */}
      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
