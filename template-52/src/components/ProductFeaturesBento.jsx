import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Globe, Zap, Sparkles, Send, Bot, Lock, Smartphone } from 'lucide-react';

export const ProductFeaturesBento = () => {
  const socialIcons = [
    { name: 'Twitter', bg: 'bg-[#00A8F3]', text: '✕' },
    { name: 'Spotify', bg: 'bg-[#1DB954]', text: '●' },
    { name: 'Facebook', bg: 'bg-[#1877F2]', text: 'f' },
    { name: 'Pinterest', bg: 'bg-[#E60023]', text: 'P' },
    { name: 'Youtube', bg: 'bg-[#FF0000]', text: '▶' },
    { name: 'Instagram', bg: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600', text: '📷' },
    { name: 'Snapchat', bg: 'bg-[#FFFC00] text-black', text: '👻' },
    { name: 'Behance', bg: 'bg-[#0057FF]', text: 'Bē' },
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100/90">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5520]" />
            <span className="text-[11px] font-bold text-slate-700">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Products Features
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Choose the perfect plan to scale, save, and maximize value.
          </p>
        </div>

        {/* 4 Bento Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: All-In-One Solution (7 of 12 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/80 p-8 shadow-pollinate flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                All-In-One Solution & Scalable Infrastructure
              </h3>
              <p className="text-xs text-slate-500 max-w-lg mb-8">
                Email marketing, CRM syncing, analytics, and landing pages—all in one platform. Whether you're sending 100 or 1 million emails.
              </p>
            </div>

            {/* Workflow Pipeline Diagram */}
            <div className="p-6 rounded-2xl bg-slate-50/90 border border-slate-100 relative overflow-hidden flex items-center justify-between gap-4">
              <div className="flex items-center justify-between w-full relative z-10">
                {['⟲', '◫', '❖', '📅', 'N', '📦', '📑'].map((symbol, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-sm font-bold text-slate-700 hover:scale-110 hover:border-[#FF5520] transition-transform"
                  >
                    {symbol}
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-slate-200 pointer-events-none" />
            </div>
          </div>

          {/* Card 2: Comprehensive Reporting & Branding (5 of 12 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/80 p-8 shadow-pollinate flex flex-col justify-between">
            {/* 8 Social Icons Grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {socialIcons.map((soc) => (
                <div
                  key={soc.name}
                  className={`h-12 rounded-2xl ${soc.bg} text-white flex items-center justify-center font-bold text-base shadow-xs hover:scale-105 transition-transform`}
                >
                  {soc.text}
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                Comprehensive Reporting & Branding
              </h3>
              <p className="text-xs text-slate-500">
                White-label options for agencies and businesses needing full branding control.
              </p>
            </div>
          </div>

          {/* Card 3: International & Global Email Support (5 of 12 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/80 p-8 shadow-pollinate flex flex-col justify-between">
            {/* Chat & Avatar UI Mockup */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
                  SJ
                </div>
                <div className="h-3 w-40 bg-orange-200 rounded-full" />
                <div className="h-4 w-12 bg-orange-500 rounded-full ml-auto" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">
                  MC
                </div>
                <div className="h-3 w-28 bg-slate-200 rounded-full" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
                  ER
                </div>
                <div className="h-3 w-36 bg-slate-200 rounded-full" />
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                International & Global Email Support
              </h3>
              <p className="text-xs text-slate-500">
                All-in-one platform to collect, manage, and optimize payments securely and globally.
              </p>
            </div>
          </div>

          {/* Card 4: Enterprise Security & High Deliverability (7 of 12 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/80 p-8 shadow-pollinate flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                Enterprise-Grade Security & High Deliverability Rates
              </h3>
              <p className="text-xs text-slate-500 max-w-lg mb-6">
                Your data is encrypted and protected with industry-standard security protocols. We maintain strong ISP relationships to ensure your emails inboxes.
              </p>
            </div>

            {/* 2 Interactive Feature Toggles */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Marketing Strategies</div>
                    <div className="text-[10px] text-slate-400">K-Pop Merchandise Hub</div>
                  </div>
                </div>
                <span className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">↕</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Sales Optimization</div>
                    <div className="text-[10px] text-slate-400">Merchandise Superstore</div>
                  </div>
                </div>
                <span className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">↕</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tool Pills Dock */}
        <div className="mt-10 flex items-center justify-center flex-wrap gap-3">
          <div className="px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-800">
            <span>Preview Tool</span>
            <span className="w-4 h-4 rounded-full bg-[#FF5520] text-white flex items-center justify-center text-[9px]">⚡</span>
          </div>

          <div className="px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-800">
            <span>API Access</span>
          </div>

          <div className="px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-800">
            <span className="w-4 h-4 rounded-full bg-pink-500 text-white flex items-center justify-center text-[9px]">✿</span>
            <span>AI-Powered</span>
          </div>

          <div className="px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-800">
            <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px]">✉</span>
            <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px]">✈</span>
            <span>Optimization</span>
          </div>
        </div>
      </div>
    </section>
  );
};
