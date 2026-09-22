import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Headphones } from 'lucide-react';
import { supportData } from '../data/agencyData';

export default function SupportSection({ onGetStarted }) {
  return (
    <section className="py-24 border-t border-[#1B2B1F]/50 relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#0D1510] border border-[#1B2B1F] relative overflow-hidden shadow-2xl">
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#25E575]/8 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: Narrative & Checklists */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                {supportData.title}
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mb-8 max-w-xl">
                {supportData.subtitle}
              </p>

              {/* Checklists */}
              <div className="space-y-3.5 mb-10">
                {supportData.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#25E575] shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={onGetStarted}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25E575] hover:bg-[#1fd368] text-black font-bold text-xs tracking-wider transition-all shadow-[0_0_30px_rgba(37,229,117,0.38)] hover:shadow-[0_0_40px_rgba(37,229,117,0.6)] cursor-pointer group"
                >
                  <span>{supportData.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Support Specialist Photograph */}
            <div className="lg:col-span-5">
              <div className="h-[320px] sm:h-[380px] rounded-2xl overflow-hidden relative border border-[#1B2B1F] group bg-[#070908] shadow-2xl">
                <img
                  src={supportData.image}
                  alt="Customer Support Specialist with Headset"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1510]/70 via-transparent to-transparent opacity-60" />

                {/* 24/7 Active Support Pill */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1510]/90 backdrop-blur-md border border-[#25E575]/40 text-[11px] font-mono font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#25E575] animate-ping" />
                  <span>24/7 Global Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
