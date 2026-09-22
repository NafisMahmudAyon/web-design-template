import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  FileCode, 
  Plane, 
  Cloud, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';
import { RECENT_ACTIVITIES } from '../data/oripioFinData';

export const RecentActivitiesTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleSelectAll = () => {
    if (selectedRows.length === RECENT_ACTIVITIES.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(RECENT_ACTIVITIES.map((r) => r.id));
    }
  };

  const toggleRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rId) => rId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const renderIcon = (type) => {
    switch (type) {
      case 'adobe':
        return (
          <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">
            A
          </div>
        );
      case 'flight':
        return (
          <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
            <Plane className="w-4 h-4" />
          </div>
        );
      case 'cloud':
        return (
          <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
            <Cloud className="w-4 h-4" />
          </div>
        );
      case 'slack':
        return (
          <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
            <MessageSquare className="w-4 h-4" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        );
    }
  };

  const filtered = RECENT_ACTIVITIES.filter((item) =>
    item.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-fin-card">
      {/* Table Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <h2 className="text-base font-bold text-slate-900">Recent Activities</h2>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="py-1.5 pl-8 pr-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-emerald-700 w-40 sm:w-48 transition-colors"
            />
          </div>

          {/* Filter */}
          <button className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:border-slate-300 flex items-center gap-1.5 shadow-xs transition-colors">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Table Canvas */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 uppercase text-[10px] tracking-wider">
              <th className="py-3 px-3 w-8">
                <input
                  type="checkbox"
                  checked={selectedRows.length === RECENT_ACTIVITIES.length}
                  onChange={toggleSelectAll}
                  className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
              </th>
              <th className="py-3 px-3 font-semibold">Activity</th>
              <th className="py-3 px-3 font-semibold">Order ID</th>
              <th className="py-3 px-3 font-semibold">Date</th>
              <th className="py-3 px-3 font-semibold">Time</th>
              <th className="py-3 px-3 font-semibold">Price</th>
              <th className="py-3 px-3 font-semibold">Status</th>
              <th className="py-3 px-3 w-8 text-right font-semibold"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filtered.map((row) => {
              const isSelected = selectedRows.includes(row.id);

              return (
                <tr
                  key={row.id}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    isSelected ? 'bg-emerald-50/40' : ''
                  }`}
                >
                  <td className="py-3.5 px-3">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleRow(row.id)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                  </td>

                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-3">
                      {renderIcon(row.iconType)}
                      <span className="font-semibold text-slate-900">{row.activity}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-3 font-mono text-slate-500">{row.orderId}</td>

                  <td className="py-3.5 px-3 text-slate-600">{row.date}</td>

                  <td className="py-3.5 px-3 text-slate-500">{row.time}</td>

                  <td className="py-3.5 px-3 font-bold text-slate-900">{row.price}</td>

                  <td className="py-3.5 px-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        row.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          row.status === 'Completed' ? 'bg-emerald-600' : 'bg-amber-500'
                        }`}
                      />
                      <span>{row.status}</span>
                    </span>
                  </td>

                  <td className="py-3.5 px-3 text-right">
                    <button
                      aria-label="Row options"
                      className="text-slate-400 hover:text-slate-700 p-1 rounded"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
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
