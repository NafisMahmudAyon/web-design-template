import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PageHeader from './components/PageHeader';
import StatCardsGrid from './components/StatCardsGrid';
import TotalProfitChart from './components/TotalProfitChart';
import TopProductsList from './components/TopProductsList';
import CustomerOrdersChart from './components/CustomerOrdersChart';
import SalesByCountriesMap from './components/SalesByCountriesMap';
import ExportReportModal from './components/ExportReportModal';
import ProductDetailModal from './components/ProductDetailModal';
import StatDetailModal from './components/StatDetailModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('Reports'); // 'Reports' is active in design
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedStat, setSelectedStat] = useState(null);

  return (
    <div className="min-h-screen bg-[#E9EBE8] text-[#141814] antialiased p-3 sm:p-6 lg:p-8 selection:bg-[#B4EE58] selection:text-[#141814] flex flex-col justify-between">
      
      {/* Centered Dashboard Container */}
      <div className="w-full max-w-[1440px] mx-auto flex-1 flex flex-col">
        
        {/* Navigation Bar */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        {/* Page Header */}
        <PageHeader 
          onExportClick={() => setExportModalOpen(true)} 
        />

        {/* Row 1: 4 KPI Stat Cards */}
        <StatCardsGrid 
          onSelectStat={(stat) => setSelectedStat(stat)} 
        />

        {/* Main Grid: Rows 2 & 3 */}
        <main className="flex-1 flex flex-col gap-6">
          
          {/* Row 2: Total Profit Overview (7 cols) & Top Products (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Total Profit Overview */}
            <div className="lg:col-span-8">
              <TotalProfitChart />
            </div>

            {/* Top Products */}
            <div className="lg:col-span-4">
              <TopProductsList 
                onSelectProduct={(product) => setSelectedProduct(product)} 
              />
            </div>

          </div>

          {/* Row 3: Customer Orders (4 cols) & Sales by Countries (8 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Customer Orders */}
            <div className="lg:col-span-4">
              <CustomerOrdersChart />
            </div>

            {/* Sales by Countries */}
            <div className="lg:col-span-8">
              <SalesByCountriesMap />
            </div>

          </div>

        </main>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A8376]">
          <p>© 2026 Rexora Technologies Inc. • Enterprise E-Commerce & Revenue Intelligence</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
              All Sync Integrations Operational
            </span>
            <span>GDPR & SOC-2 Type II Certified</span>
          </div>
        </footer>

      </div>

      {/* Interactive Modals */}
      <ExportReportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />

      <ProductDetailModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />

      <StatDetailModal
        isOpen={!!selectedStat}
        onClose={() => setSelectedStat(null)}
        stat={selectedStat}
      />

    </div>
  );
}
