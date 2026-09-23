import React, { useState } from 'react';
import {
  Search,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Filter,
  Star,
  Paperclip,
  PenTool,
  Check,
  ChevronDown,
} from 'lucide-react';
import { EMAILS } from '../data/emailData';

export default function MessageList({
  activeEmailId,
  onSelectEmail,
  onOpenCompose,
  searchQuery,
  onSearchChange,
}) {
  const [selectedIds, setSelectedIds] = useState(['msg-2']);
  const [starredIds, setStarredIds] = useState(['msg-2']);

  const toggleSelect = (id, e) => {
    e.stopPropagation();
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const toggleStar = (id, e) => {
    e.stopPropagation();
    if (starredIds.includes(id)) {
      setStarredIds(starredIds.filter((item) => item !== id));
    } else {
      setStarredIds([...starredIds, id]);
    }
  };

  const filteredEmails = EMAILS.filter(
    (msg) =>
      msg.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.snippet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-80 sm:w-96 bg-white border-r border-gray-100 flex flex-col justify-between h-full select-none shrink-0 relative">
      {/* Top Header & Search */}
      <div className="p-4 border-b border-gray-100/80">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-black text-gray-900 tracking-tight">Inbox</h2>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#a7a7fc] text-gray-950">
              17
            </span>
          </div>
        </div>
        <p className="text-[11px] text-gray-400 font-medium mb-3">1112 Messages</p>

        {/* Search input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search"
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#a7a7fc]"
          />
        </div>
      </div>

      {/* Toolbar: Select all, pagination & filter */}
      <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between text-gray-400 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
            <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center">
              {selectedIds.length > 0 && <Check className="w-3 h-3 text-[#0f334c]" />}
            </div>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>

          <button
            className="hover:text-gray-700 transition-colors"
            title="Refresh inbox"
            aria-label="Refresh"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-500">
            <button className="p-0.5 hover:text-gray-900">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span>1 of 223</span>
            <button className="p-0.5 hover:text-gray-900">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button className="hover:text-gray-700 transition-colors" aria-label="Filter">
            <Filter className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Messages Scrollable List */}
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100 p-2 space-y-1">
        {filteredEmails.map((msg) => {
          const isSelected = activeEmailId === msg.id;
          const isStarred = starredIds.includes(msg.id);
          const isChecked = selectedIds.includes(msg.id);

          return (
            <div
              key={msg.id}
              onClick={() => onSelectEmail(msg.id)}
              className={`p-3.5 rounded-2xl transition-all duration-200 cursor-pointer relative group ${
                isSelected
                  ? 'bg-white shadow-lg ring-1 ring-black/5 -translate-y-0.5 z-10'
                  : 'hover:bg-gray-50/90'
              }`}
            >
              {/* Row 1: Checkbox, Avatar, Name, Blue Dot & Star */}
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2.5">
                  <div
                    onClick={(e) => toggleSelect(msg.id, e)}
                    className={`w-4 h-4 rounded border transition-colors flex items-center justify-center shrink-0 ${
                      isChecked
                        ? 'bg-[#0f334c] border-[#0f334c] text-white'
                        : 'border-gray-300 hover:border-gray-400 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 text-white stroke-[2.5]" />}
                  </div>

                  <div className="relative">
                    <img
                      src={msg.sender.avatar}
                      alt={msg.sender.name}
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-gray-100"
                    />
                    {msg.sender.online && (
                      <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      className={`text-xs truncate ${
                        msg.unread || isSelected ? 'font-bold text-gray-900' : 'font-medium text-gray-600'
                      }`}
                    >
                      {msg.sender.name}
                    </span>
                    {msg.unread && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    )}
                  </div>
                </div>

                <button
                  onClick={(e) => toggleStar(msg.id, e)}
                  aria-label="Star message"
                  className="text-gray-300 hover:text-amber-400 transition-colors shrink-0"
                >
                  <Star
                    className={`w-3.5 h-3.5 ${
                      isStarred
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              </div>

              {/* Row 2: Subject */}
              <div className="pl-6 mb-1">
                <h4
                  className={`text-xs truncate ${
                    msg.unread || isSelected ? 'font-bold text-gray-950' : 'font-medium text-gray-800'
                  }`}
                >
                  {msg.subject}
                </h4>
              </div>

              {/* Row 3: Snippet */}
              <div className="pl-6 mb-2">
                <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                  {msg.snippet}
                </p>
              </div>

              {/* Row 4: Footer Info (Date, Tags, Attachments) */}
              <div className="pl-6 flex items-center justify-between gap-2 text-[10px] text-gray-400">
                <div className="flex items-center gap-2">
                  <span>{msg.date.split(',')[0]}</span>
                  {msg.hasAttachment && (
                    <Paperclip className="w-3 h-3 text-gray-400" />
                  )}
                </div>

                {/* Tags / Badges */}
                <div className="flex items-center gap-1.5 overflow-hidden">
                  {msg.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 rounded-md border text-[9px] font-semibold uppercase tracking-wider shrink-0"
                      style={{
                        borderColor: `${tag.color}40`,
                        color: tag.color,
                        backgroundColor: `${tag.color}10`,
                      }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Sticky Compose Button */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <button
          onClick={onOpenCompose}
          className="w-full py-3 rounded-2xl bg-[#fbe871] hover:bg-[#f6df60] text-gray-950 text-xs font-black shadow-md shadow-yellow-500/10 flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <PenTool className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Compose</span>
        </button>
      </div>
    </section>
  );
}
