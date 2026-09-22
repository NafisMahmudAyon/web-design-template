import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { PriceTickersRow } from './components/PriceTickersRow';
import { MarketLeadersCard } from './components/MarketLeadersCard';
import { PortfolioValueChart } from './components/PortfolioValueChart';
import { BalanceQuickActions } from './components/BalanceQuickActions';
import { TopAssetsList } from './components/TopAssetsList';
import { RecentTransactionsTable } from './components/RecentTransactionsTable';
import { TopGainersList } from './components/TopGainersList';
import DepositModal from './components/DepositModal';
import SwapModal from './components/SwapModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isSwapOpen, setIsSwapOpen] = useState(false);
  const [notice, setNotice] = useState(null);

  const showNotice = (msg) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-raxon-orange selection:text-white pb-16">
      {/* Toast Notification */}
      {notice && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl text-xs font-semibold flex items-center gap-2 border border-white/10 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-raxon-orange animate-ping" />
          <span>{notice}</span>
        </div>
      )}

      {/* Top Header Navigation */}
      <HeaderNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenDeposit={() => setIsDepositOpen(true)}
      />

      {/* Main Dashboard Workspace */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        {/* Row 1: 4 Live Price Tickers */}
        <section aria-label="Market Tickers">
          <PriceTickersRow />
        </section>

        {/* Row 2: Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (4 of 12 columns) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Market Leaders Card */}
            <MarketLeadersCard />

            {/* My Balance Quick Actions */}
            <BalanceQuickActions
              onDeposit={() => setIsDepositOpen(true)}
              onWithdraw={() => showNotice('Withdrawal pipeline ready. Select target cold wallet.')}
              onSwap={() => setIsSwapOpen(true)}
              onTransfer={() => showNotice('Cross-chain transfer initiated. Ready to broadcast.')}
            />

            {/* Top Assets Card */}
            <TopAssetsList />
          </div>

          {/* Right Column (8 of 12 columns) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Portfolio Value Chart Card */}
            <PortfolioValueChart />

            {/* Sub-grid: Recent Transactions & Top Gainers */}
            <div className="space-y-6">
              <RecentTransactionsTable />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TopGainersList onSelectGainer={(g) => showNotice(`Selected ${g.name} (${g.cap})`)} />
                
                {/* Multi-chain Liquidity & Security Banner */}
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 text-white shadow-raxon-card flex flex-col justify-between relative overflow-hidden border border-slate-800">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-raxon-orange/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-raxon-orange/20 border border-raxon-orange/30 text-raxon-orange text-[11px] font-bold mb-4">
                      <span>Live DEX Aggregator</span>
                    </div>
                    <h3 className="text-xl font-black tracking-tight mb-2">
                      Zero Slippage Smart Order Routing
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                      Execute high-volume trades across EVM, Solana, and Layer 2 liquidity pools with sub-second finality and guaranteed MEV protection.
                    </p>
                  </div>

                  <div className="pt-6 flex items-center gap-3">
                    <button
                      onClick={() => setIsSwapOpen(true)}
                      className="px-5 py-2.5 rounded-xl bg-raxon-orange hover:bg-raxon-orange-hover text-white text-xs font-bold transition-all shadow-md shadow-raxon-orange/30"
                    >
                      Launch Swap
                    </button>
                    <button
                      onClick={() => setIsDepositOpen(true)}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors border border-white/10"
                    >
                      Deposit Collateral
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Interactive Modals */}
      <DepositModal
        isOpen={isDepositOpen}
        onClose={() => setIsDepositOpen(false)}
      />
      <SwapModal
        isOpen={isSwapOpen}
        onClose={() => setIsSwapOpen(false)}
      />
    </div>
  );
}
