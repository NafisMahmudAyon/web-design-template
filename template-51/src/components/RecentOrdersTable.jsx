import React, { useState } from 'react';
import { Search, ArrowUpDown, ChevronDown, Check } from 'lucide-react';
import { RECENT_ORDERS } from '../data/boltshiftData';

export const RecentOrdersTable = ({ onSelectOrder }) => {
  const [search, setSearch] = useState('');
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [sortField, setSortField] = useState('date');
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  // Filter orders by search
  const filtered = RECENT_ORDERS.filter((order) => {
    const term = search.toLowerCase();
    return (
      order.product.toLowerCase().includes(term) ||
      order.id.toLowerCase().includes(term) ||
      order.customer.toLowerCase().includes(term) ||
      order.category.toLowerCase().includes(term)
    );
  });

  const toggleSelectAll = () => {
    if (selectedOrders.length === filtered.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filtered.map((o) => o.id));
    }
  };

  const toggleSelectOrder = (id) => {
    setSelectedOrders((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-boltshift">
      {/* Table Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-base font-bold text-slate-900">
          Recent orders
        </h2>

        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="py-1.5 pl-8 pr-3 rounded-full bg-slate-50 border border-slate-200/80 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#5E43F3] w-44 sm:w-56 transition-colors"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSortMenuOpen(!sortMenuOpen)}
              className="px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span>Sort by</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {sortMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-white border border-slate-200 shadow-xl py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
                {['Date', 'Total', 'Status', 'Product'].map((field) => (
                  <button
                    key={field}
                    onClick={() => {
                      setSortField(field.toLowerCase());
                      setSortMenuOpen(false);
                    }}
                    className="w-full px-3.5 py-1.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#5E43F3] flex items-center justify-between transition-colors"
                  >
                    <span>{field}</span>
                    {sortField === field.toLowerCase() && (
                      <Check className="w-3.5 h-3.5 text-[#5E43F3]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-semibold text-[11px]">
              <th className="py-3 px-2 w-8">
                <input
                  type="checkbox"
                  checked={filtered.length > 0 && selectedOrders.length === filtered.length}
                  onChange={toggleSelectAll}
                  className="rounded border-slate-300 text-[#5E43F3] focus:ring-[#5E43F3]"
                />
              </th>
              <th className="py-3 px-3 min-w-[220px]">Product info</th>
              <th className="py-3 px-3">Order Id</th>
              <th className="py-3 px-3">Date</th>
              <th className="py-3 px-3 min-w-[150px]">Customer</th>
              <th className="py-3 px-3">Category</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3">Items</th>
              <th className="py-3 px-3 text-right">Total</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filtered.map((order) => {
              const isSelected = selectedOrders.includes(order.id);

              return (
                <tr
                  key={order.id}
                  onClick={() => onSelectOrder && onSelectOrder(order)}
                  className={`hover:bg-slate-50/70 transition-colors cursor-pointer ${
                    isSelected ? 'bg-indigo-50/30' : ''
                  }`}
                >
                  <td className="py-3.5 px-2" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelectOrder(order.id)}
                      className="rounded border-slate-300 text-[#5E43F3] focus:ring-[#5E43F3]"
                    />
                  </td>

                  {/* Product Info */}
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={order.image}
                        alt={order.product}
                        className="w-10 h-10 rounded-xl object-cover border border-slate-200/60 bg-slate-50 shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-[#5E43F3] transition-colors">
                          {order.product}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {order.variant}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Order Id */}
                  <td className="py-3.5 px-3 font-mono text-slate-600 font-medium">
                    {order.id}
                  </td>

                  {/* Date */}
                  <td className="py-3.5 px-3 text-slate-500 font-medium">
                    {order.date}
                  </td>

                  {/* Customer */}
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={order.customerAvatar}
                        alt={order.customer}
                        className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200"
                      />
                      <span className="font-semibold text-slate-800">
                        {order.customer}
                      </span>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3.5 px-3 text-slate-600">
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                      {order.category}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-3">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${order.statusStyle}`}>
                      {order.status}
                    </span>
                  </td>

                  {/* Items */}
                  <td className="py-3.5 px-3 font-semibold text-slate-700">
                    {order.items}
                  </td>

                  {/* Total */}
                  <td className="py-3.5 px-3 text-right font-bold text-slate-900 font-mono">
                    {order.total}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
