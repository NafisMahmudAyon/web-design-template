import React, { useState } from 'react';
import { X, Headphones, Phone, Video, MessageSquare, Check, Calendar, Star, Clock } from 'lucide-react';

export default function SupportModal({ isOpen, onClose }) {
  const [callStatus, setCallStatus] = useState('idle'); // idle, calling, connected, scheduled
  const [selectedTopic, setSelectedTopic] = useState('Retirement & Wealth Strategy');

  if (!isOpen) return null;

  const topics = [
    'Retirement & Wealth Strategy',
    'Tax Optimization & Real Estate',
    'Crypto & High-Yield Portfolios',
    'Cash Flow & Budget Optimization',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-7 overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-5 border-b border-gray-100">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#186F65] flex items-center justify-center shrink-0">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">WealthWise Expert Desk</h3>
            <p className="text-xs text-gray-500">Connect with a certified private wealth advisor in minutes.</p>
          </div>
        </div>

        {/* Advisor Spotlight */}
        <div className="mt-5 p-4 rounded-2xl bg-gray-50/80 border border-gray-200/70 flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
            alt="Elena Vance, CFP"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-xs"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">Elena Vance, CFP®</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                Online Now
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">Senior Wealth Strategist • 12 yrs exp</p>
            <div className="flex items-center gap-1 mt-1 text-[11px] text-amber-600 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.98 (340+ consultations)</span>
            </div>
          </div>
        </div>

        {/* Consultation Topics */}
        <div className="mt-5">
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Select Consultation Focus
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {topics.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTopic(t)}
                className={`p-2.5 text-left text-xs font-medium rounded-xl border transition-all ${
                  selectedTopic === t
                    ? 'border-[#186F65] bg-teal-50/50 text-[#186F65] font-semibold'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={() => setCallStatus('calling')}
            disabled={callStatus === 'calling'}
            className="w-full sm:flex-1 py-3 px-4 bg-[#186F65] hover:bg-[#145a52] active:scale-[0.98] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-teal-900/10 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>{callStatus === 'calling' ? 'Connecting Secure Line...' : 'Start Voice Consultation'}</span>
          </button>

          <button
            type="button"
            onClick={() => setCallStatus('scheduled')}
            className="w-full sm:w-auto py-3 px-4 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] text-gray-800 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>Schedule</span>
          </button>
        </div>

        {/* Feedback Message */}
        {callStatus === 'calling' && (
          <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs flex items-center gap-2 animate-pulse">
            <Clock className="w-4 h-4 shrink-0" />
            <span>Connecting to encrypted line. Elena Vance will answer in ~15 seconds...</span>
          </div>
        )}

        {callStatus === 'scheduled' && (
          <div className="mt-4 p-3 bg-teal-50 text-teal-900 rounded-xl text-xs flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0 text-[#186F65]" />
            <span>Session scheduled! An invite has been sent to alex.wilkerson@wealthwise.io.</span>
          </div>
        )}
      </div>
    </div>
  );
}
