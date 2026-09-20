import React, { useState } from 'react';
import { MoreHorizontal, Plus, CheckCircle2 } from 'lucide-react';

export default function UpcomingBillsCard({ onAddBill }) {
  const [bills, setBills] = useState([
    {
      id: 1,
      name: 'Spotify',
      category: 'Music',
      amount: '-$12.12',
      date: 'Nov 25',
      paid: false,
      iconType: 'spotify',
    },
    {
      id: 2,
      name: "McDonald's",
      category: 'Food',
      amount: '-$72.25',
      date: 'Dec 01',
      paid: false,
      iconType: 'mcdonalds',
    },
    {
      id: 3,
      name: 'Starbugs',
      category: 'Food',
      amount: '-$24.32',
      date: 'Dec 12',
      paid: false,
      iconType: 'starbucks',
    },
    {
      id: 4,
      name: 'Youtube',
      category: 'Entreatment',
      amount: '-$15.00',
      date: 'Dec 13',
      paid: false,
      iconType: 'youtube',
    },
  ]);

  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const togglePaid = (id) => {
    setBills(bills.map(b => b.id === id ? { ...b, paid: !b.paid } : b));
  };

  const renderBrandIcon = (type) => {
    switch (type) {
      case 'spotify':
        return (
          <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center text-white shrink-0 shadow-2xs">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.435-5.308-1.76-8.793-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.808-.87 7.077-.5 9.722 1.113.294.18.386.563.207.857zm1.224-2.723c-.226.367-.707.482-1.074.256-2.69-1.653-6.79-2.132-9.972-1.166-.413.125-.85-.11-1-.523-.15-.413.11-.85.523-1 3.633-1.103 8.163-.564 11.267 1.341.367.226.482.707.256 1.092zm.105-2.835C14.692 8.95 9.375 8.77 6.297 9.704c-.494.15-1.02-.128-1.17-.622-.15-.494.128-1.02.622-1.17 3.535-1.073 9.404-.863 13.167 1.371.444.263.59.84.327 1.284-.263.444-.84.59-1.284.327z"/>
            </svg>
          </div>
        );
      case 'mcdonalds':
        return (
          <div className="w-10 h-10 rounded-full bg-[#186F65]/10 border border-[#186F65]/20 flex items-center justify-center text-[#DA291C] shrink-0 shadow-2xs">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.4 6.5C4 6.5 2.5 8 2.5 10.5V18h2.8v-6.8c0-1.8 1.1-2.9 2.5-2.9 1.4 0 2.5 1.1 2.5 2.9V18h2.8v-6.8c0-1.8 1.1-2.9 2.5-2.9 1.4 0 2.5 1.1 2.5 2.9V18H21v-7.5c0-2.5-1.5-4-2.9-4-1.6 0-3 1.2-3.7 2.8C13.7 7.7 12.3 6.5 10.7 6.5 9.1 6.5 7.7 7.7 7 9.3 6.3 7.7 4.9 6.5 5.4 6.5z"/>
            </svg>
          </div>
        );
      case 'starbucks':
        return (
          <div className="w-10 h-10 rounded-full bg-[#006241] flex items-center justify-center text-white shrink-0 shadow-2xs">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3c1.5 0 2.8.5 3.9 1.3-.3.4-.6.9-.9 1.3-.8-.4-1.8-.6-3-.6s-2.2.2-3 .6c-.3-.4-.6-.9-.9-1.3C9.2 5.5 10.5 5 12 5zm-4.8 3.5c.3.5.7.9 1.2 1.3-.6.6-1 1.4-1.2 2.2H5.6c.4-1.4 1-2.6 1.6-3.5zm9.6 0c.6.9 1.2 2.1 1.6 3.5h-1.6c-.2-.8-.6-1.6-1.2-2.2.5-.4.9-.8 1.2-1.3zM12 9.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5zm-4.7 4.5h1.5c.3.8.7 1.5 1.3 2.1-.5.4-1 .8-1.4 1.2-.7-.9-1.1-2.1-1.4-3.3zm7.9 3.3c-.4-.4-.9-.8-1.4-1.2.6-.6 1-1.3 1.3-2.1h1.5c-.3 1.2-.7 2.4-1.4 3.3zM12 19c-1.5 0-2.8-.5-3.9-1.3.3-.4.7-.8 1-1.2.9.4 1.9.5 2.9.5 1 0 2-.2 2.9-.5.3.4.7.8 1 1.2-1.1.8-2.4 1.3-3.9 1.3z"/>
            </svg>
          </div>
        );
      case 'youtube':
        return (
          <div className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white shrink-0 shadow-2xs">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="wealth-card p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <h2 className="text-base font-medium text-gray-700">Upcoming Bills</h2>

        <div className="relative">
          <button
            type="button"
            aria-label="More options"
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 border border-gray-200 rounded-xl transition-colors shadow-2xs"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
          {showMoreMenu && (
            <div className="absolute right-0 mt-1.5 w-36 bg-white border border-gray-200 rounded-xl shadow-lg py-1.5 z-20">
              <button
                type="button"
                onClick={() => {
                  setBills(bills.map(b => ({ ...b, paid: true })));
                  setShowMoreMenu(false);
                }}
                className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
              >
                Mark All Paid
              </button>
              <button
                type="button"
                onClick={() => setShowMoreMenu(false)}
                className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
              >
                Add Custom Bill
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bills List */}
      <div className="divide-y divide-gray-100 mt-1">
        {bills.map((bill) => (
          <div
            key={bill.id}
            onClick={() => togglePaid(bill.id)}
            className={`py-3.5 flex items-center justify-between group cursor-pointer transition-all ${
              bill.paid ? 'opacity-40 line-through' : 'hover:bg-gray-50/70 -mx-2 px-2 rounded-xl'
            }`}
          >
            {/* Left: Brand Icon + Info */}
            <div className="flex items-center gap-3.5">
              {renderBrandIcon(bill.iconType)}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-[#186F65] transition-colors">
                    {bill.name}
                  </span>
                  {bill.paid && (
                    <span className="inline-flex items-center text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-full">
                      Paid
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium text-gray-400 block mt-0.5">
                  {bill.category}
                </span>
              </div>
            </div>

            {/* Right: Amount & Date */}
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">
                {bill.amount}
              </div>
              <div className="text-xs font-medium text-gray-400 mt-0.5">
                {bill.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
