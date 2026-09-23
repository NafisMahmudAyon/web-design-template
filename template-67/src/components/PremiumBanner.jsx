import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PremiumBanner() {
  return (
    <div className="relative rounded-[28px] p-5 bg-gradient-to-br from-[#9c7a5c] via-[#8c6c50] to-[#73543b] text-white shadow-xl overflow-hidden border border-[#b89574]/40 select-none group">
      {/* Background ambient radial glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Top Row: Iris Emblem & Pricing Pill */}
      <div className="flex items-center justify-between mb-4">
        {/* Iris Logo Badge */}
        <div className="w-9 h-9 rounded-full overflow-hidden p-0.5 border border-white/30 shadow-md">
          <img
            src="/assets/iris-logo.jpg"
            alt="Drank Iris"
            className="w-full h-full rounded-full object-cover group-hover:rotate-45 transition-transform duration-500"
          />
        </div>

        {/* Pricing Pill Button */}
        <button
          type="button"
          onClick={() => alert('Opening Drank Premium checkout...')}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black hover:bg-black/85 text-white text-[11px] font-semibold shadow-md transition-all active:scale-95"
        >
          <ArrowRight className="w-3.5 h-3.5" />
          <span>$12.99/month</span>
        </button>
      </div>

      {/* Title & Subtitle */}
      <div>
        <h4 className="text-base font-bold text-white tracking-tight leading-snug">
          Drank Premium
        </h4>
        <p className="text-xs text-[#e8dbcf] mt-1 font-medium">
          Automation, AI help & more for pros
        </p>
      </div>
    </div>
  );
}
