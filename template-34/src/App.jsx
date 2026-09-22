import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import TotalBalanceCard from './components/TotalBalanceCard';
import YourCardsCard from './components/YourCardsCard';
import MoneyManagementChart from './components/MoneyManagementChart';
import RecentTransactions from './components/RecentTransactions';
import InvoicePanel from './components/InvoicePanel';
import TransferModal from './components/TransferModal';
import AddCardModal from './components/AddCardModal';
import TransactionDetailModal from './components/TransactionDetailModal';
import { initialCards } from './data/mockFinanceData';

export default function App() {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const [cards, setCards] = useState(initialCards);

  // Modals state
  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [transferMode, setTransferMode] = useState('transfer');
  const [addCardModalOpen, setAddCardModalOpen] = useState(false);
  const [selectedTx, setSelectedTx] = useState(null);

  const handleOpenTransfer = (mode = 'transfer') => {
    setTransferMode(mode);
    setTransferModalOpen(true);
  };

  const handleAddCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };

  return (
    <div className="min-h-screen bg-[#F6F2EC] text-[#141814] antialiased flex flex-col md:flex-row">
      
      {/* Collapsible Left Sidebar */}
      <Sidebar
        activeItem={activeNav}
        setActiveItem={setActiveNav}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Main Content Dashboard Container */}
      <main className="flex-1 p-3 sm:p-6 lg:p-8 flex flex-col justify-between overflow-x-hidden">
        <div className="max-w-[1400px] w-full mx-auto flex-1 flex flex-col">
          
          {/* Top Navbar */}
          <TopNavbar onInviteClick={() => handleOpenTransfer('request')} />

          {/* Grid Layout Rows */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Row 1: Left Stack [Total Balance + Your Cards] & Right [Money Management Overview Chart] */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
                <TotalBalanceCard
                  onTransferClick={() => handleOpenTransfer('transfer')}
                  onRequestClick={() => handleOpenTransfer('request')}
                />
                <YourCardsCard
                  cards={cards}
                  onAddCardClick={() => setAddCardModalOpen(true)}
                  onSelectCard={(card) => console.log('Card selected:', card)}
                />
              </div>

              {/* Right Column (8 cols) */}
              <div className="lg:col-span-8">
                <MoneyManagementChart />
              </div>

            </div>

            {/* Row 2: Left [Recent Transactions Table] & Right [Invoice Panel] */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column (8 cols): Recent Transactions */}
              <div className="lg:col-span-8">
                <RecentTransactions
                  onSelectTransaction={(tx) => setSelectedTx(tx)}
                  onSeeAllClick={() => setActiveNav('Transactions')}
                />
              </div>

              {/* Right Column (4 cols): Invoice & Payment Score */}
              <div className="lg:col-span-4">
                <InvoicePanel
                  onSelectInvoice={(inv) => console.log('Invoice:', inv)}
                />
              </div>

            </div>

          </div>

          {/* Footer Note */}
          <footer className="mt-8 pt-4 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A8376]">
            <p>© 2026 Finora Financial Technologies Inc. • Treasury & Corporate Money Management</p>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                Instant Settlement Gateway
              </span>
              <span>FDIC-Insured Partner Banks</span>
            </div>
          </footer>

        </div>
      </main>

      {/* Interactive Modals */}
      <TransferModal
        isOpen={transferModalOpen}
        onClose={() => setTransferModalOpen(false)}
        mode={transferMode}
      />

      <AddCardModal
        isOpen={addCardModalOpen}
        onClose={() => setAddCardModalOpen(false)}
        onAddCard={handleAddCard}
      />

      <TransactionDetailModal
        isOpen={!!selectedTx}
        onClose={() => setSelectedTx(null)}
        transaction={selectedTx}
      />

    </div>
  );
}
