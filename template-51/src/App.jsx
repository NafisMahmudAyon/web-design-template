import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PageHeader } from './components/PageHeader';
import { KpiCardsRow } from './components/KpiCardsRow';
import { PerformanceOverviewChart } from './components/PerformanceOverviewChart';
import { SalesOverviewGauge } from './components/SalesOverviewGauge';
import { RecentOrdersTable } from './components/RecentOrdersTable';
import ExportModal from './components/ExportModal';
import FilterDrawerModal from './components/FilterDrawerModal';
import OrderDetailModal from './components/OrderDetailModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedTimeframe, setSelectedTimeframe] = useState('This Month');
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#DFE2E6] text-slate-900 font-sans p-2 sm:p-6 lg:p-8 flex justify-center items-start selection:bg-[#5E43F3] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl text-xs font-semibold flex items-center gap-2 border border-white/10 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#5E43F3] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main SaaS Window Frame */}
      <div className="w-full max-w-[1400px] bg-[#F7F8FA] rounded-4xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col">
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          onSelectTab={(tabId) => {
            setActiveTab(tabId);
            showToast(`Switched to ${tabId.charAt(0).toUpperCase() + tabId.slice(1)} view`);
          }}
          onOpenSettings={() => showToast('System Settings loaded')}
          onOpenNotifications={() => showToast('You have 3 unread sales notifications')}
        />

        {/* Dashboard Content Canvas */}
        <main className="px-6 sm:px-8 py-6 space-y-6">
          {/* Top Page Title & Filter/Export Bar */}
          <PageHeader
            selectedTimeframe={selectedTimeframe}
            onSelectTimeframe={(tf) => {
              setSelectedTimeframe(tf);
              showToast(`Timeframe updated to ${tf}`);
            }}
            onOpenExport={() => setIsExportOpen(true)}
            onOpenFilter={() => setIsFilterOpen(true)}
          />

          {/* 4 Top KPI Cards */}
          <section aria-label="Key Performance Indicators">
            <KpiCardsRow
              onCardClick={(card) => showToast(`Selected metric: ${card.title}`)}
            />
          </section>

          {/* Middle Row: Performance Overview & Radial Gauge */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" aria-label="Analytics & Overview">
            {/* Left 8 cols: Performance Overview Dual-Bar Chart */}
            <div className="lg:col-span-8 flex flex-col">
              <PerformanceOverviewChart />
            </div>

            {/* Right 4 cols: Sales Overview Radial Gauge */}
            <div className="lg:col-span-4 flex flex-col">
              <SalesOverviewGauge
                onOpenDetails={() => showToast('Sales Growth breakdown: Q3 target 75%')}
              />
            </div>
          </section>

          {/* Bottom Section: Recent Orders Table */}
          <section aria-label="Recent Orders">
            <RecentOrdersTable
              onSelectOrder={(order) => setSelectedOrder(order)}
            />
          </section>
        </main>
      </div>

      {/* Modals & Drawers */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      <FilterDrawerModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={(filters) => {
          showToast(`Applied ${filters.selectedStatuses.length} status filters`);
        }}
      />

      <OrderDetailModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </div>
  );
}
