import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Lock, Layers } from 'lucide-react';
import { deliverablesData } from '../data/agencyData';

export default function DeliverablesGrid({ onSelectDeliverable }) {
  // Card polymorphism active ID for the bottom row ("One Different Card" rule)
  const [hoveredCardId, setHoveredCardId] = useState('webdev');

  return (
    <section id="deliverables" className="py-24 border-t border-[#1B2B1F]/50 relative">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {deliverablesData.title}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              {deliverablesData.subtitle}
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 1. Large Card: Business Process Optimization (8 Cols) */}
          <div
            onClick={() => onSelectDeliverable('Business Process Optimization')}
            className="lg:col-span-8 rounded-3xl p-8 bg-[#0D1510] border border-[#1B2B1F] hover:border-[#25E575]/40 transition-colors flex flex-col md:flex-row gap-6 items-center justify-between overflow-hidden group cursor-pointer shadow-xl relative"
          >
            <div className="flex-1 max-w-md z-10">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                Business Process Optimization
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Custom-built software ecosystems designed to streamline your operations, eliminate bottlenecks, and turn your raw data into actionable growth strategies. We make your business run faster and smarter.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#25E575] group-hover:underline">
                <span>Get Started Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* Photo Column */}
            <div className="w-full md:w-[320px] h-[220px] rounded-2xl overflow-hidden relative shrink-0 border border-[#1B2B1F]">
              <img
                src="/business-dev.jpg"
                alt="Business Process Optimization"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1510]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* 2. Artificial Intelligence Solutions (4 Cols) */}
          <div
            onClick={() => onSelectDeliverable('Artificial Intelligence Solutions')}
            className="lg:col-span-4 rounded-3xl p-8 bg-[#0D1510] border border-[#1B2B1F] hover:border-[#25E575]/40 transition-colors flex flex-col justify-between overflow-hidden group cursor-pointer shadow-xl relative"
          >
            {/* AI Frequency / Neural Waveform Graphic */}
            <div className="relative h-28 flex items-center justify-center mb-4">
              <svg viewBox="0 0 300 100" fill="none" className="w-full h-full">
                <path
                  d="M10 50 Q 50 10, 90 50 T 170 50 T 250 50 T 290 50"
                  stroke="#25E575"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M10 50 Q 50 85, 90 50 T 170 50 T 250 50 T 290 50"
                  stroke="#34D399"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <path
                  d="M10 50 Q 70 20, 130 50 T 210 50 T 290 50"
                  stroke="#10B981"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                />
              </svg>

              {/* AI Badge */}
              <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-[#16271D] border border-[#25E575]/40 text-[11px] font-mono font-bold text-[#25E575]">
                AI
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Artificial Intelligence Solutions
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                Harness the power of machine learning and predictive analytics. We integrate smart algorithms that automate the complex and keep you ahead of the curve.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#25E575] group-hover:underline">
                <span>Explore AI Tech</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Row 2: 3 Cards with Card Polymorphism (Zero CLS Spacing Stability) */}

          {/* 3. UI/UX Breakdown (4 Cols) */}
          <div
            onMouseEnter={() => setHoveredCardId('uiux')}
            onClick={() => onSelectDeliverable('UI/UX Breakdown')}
            className={`lg:col-span-4 rounded-3xl p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden border ${
              hoveredCardId === 'uiux'
                ? 'bg-[#101913] border-[#25E575] shadow-[0_0_35px_rgba(37,229,117,0.2)]'
                : 'bg-[#0D1510] border-[#1B2B1F]'
            }`}
          >
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                UI/UX Breakdown
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                We don't just make it look good; we make it work. We engineer user-centric interface that turn visitors into loyal users.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#25E575]">
                <span>See our designs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Bottom 3D Ribbon Geometry Preview */}
            <div className="mt-8 h-24 rounded-xl overflow-hidden relative bg-gradient-to-tr from-[#132218] to-[#0A100C] border border-[#1B2B1F] flex items-center justify-center">
              <div className="w-32 h-14 rounded-full border-2 border-[#25E575]/60 rotate-12 blur-[1px] transform -translate-y-2 shadow-[0_0_20px_rgba(37,229,117,0.5)]" />
              <div className="w-24 h-10 rounded-full border-2 border-[#34D399] -rotate-6 transform translate-y-1" />
            </div>
          </div>

          {/* 4. Website Development (4 Cols - Featured Active State in Design) */}
          <div
            onMouseEnter={() => setHoveredCardId('webdev')}
            onClick={() => onSelectDeliverable('Website Development')}
            className={`lg:col-span-4 rounded-3xl p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden border ${
              hoveredCardId === 'webdev'
                ? 'bg-[#101913] border-[#25E575] shadow-[0_0_35px_rgba(37,229,117,0.25)]'
                : 'bg-[#0D1510] border-[#1B2B1F]'
            }`}
          >
            {/* Ambient emerald back-glow when active */}
            {hoveredCardId === 'webdev' && (
              <div className="absolute inset-0 bg-radial-card opacity-80 pointer-events-none" />
            )}

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Website Development
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                We also provide high quality, well performing websites for your business that really helps you to grow
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#25E575]">
                <span>Checkout our portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* 3D Glass Green Cuboid Visual */}
            <div className="mt-8 h-24 rounded-xl relative flex items-center justify-center z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#25E575]/30 to-[#10B981]/10 border border-[#25E575]/60 transform rotate-12 shadow-[0_0_25px_rgba(37,229,117,0.35)] backdrop-blur-sm flex items-center justify-center">
                <div className="w-10 h-10 rounded-lg bg-[#25E575]/20 border border-[#25E575]/40 rotate-45" />
              </div>
            </div>
          </div>

          {/* 5. Security & Reliability (4 Cols) */}
          <div
            onMouseEnter={() => setHoveredCardId('security')}
            onClick={() => onSelectDeliverable('Security & Reliability')}
            className={`lg:col-span-4 rounded-3xl p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden border ${
              hoveredCardId === 'security'
                ? 'bg-[#101913] border-[#25E575] shadow-[0_0_35px_rgba(37,229,117,0.2)]'
                : 'bg-[#0D1510] border-[#1B2B1F]'
            }`}
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Security & Reliability
              </div>
              <div className="text-5xl font-extrabold text-[#25E575] tracking-tight font-display mb-1">
                100%
              </div>
              <div className="text-xs text-neutral-300 font-semibold mb-3">
                Vulnerability Protection
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                We prioritize data integrity and system resilience, ensuring your platform stands strong against digital threats.
              </p>
            </div>

            {/* Customer Avatars Row */}
            <div className="flex items-center justify-between pt-4 border-t border-[#1B2B1F]/60">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80',
                ].map((av, idx) => (
                  <img
                    key={idx}
                    src={av}
                    alt="Security client"
                    className="w-7 h-7 rounded-full border-2 border-[#0D1510] object-cover"
                  />
                ))}
              </div>
              <span className="text-[11px] font-mono text-[#25E575]">ISO 27001 Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
