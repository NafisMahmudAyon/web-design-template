import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CtaSection({ onCollaborate }) {
  return (
    <section className="px-4 sm:px-8 py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Terminal Container with Trucks & Cargo Ship */}
        <div className="relative rounded-[3rem] overflow-hidden min-h-[460px] sm:min-h-[520px] p-8 sm:p-14 shadow-2xl flex flex-col justify-end">
          {/* Background Industrial Image */}
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&auto=format&fit=crop&q=85"
            alt="Container terminal with heavy cargo trucks and gantry cranes"
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          />

          {/* Dark Overlay for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl space-y-4 text-white">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-display leading-[1.1] text-white">
              Ready to Move Your <br />
              Business Forward?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg font-medium">
              From planning to delivery, Our logistics experts are here to simplify your supply chain and keep your business moving.
            </p>

            <div className="pt-2">
              <button
                onClick={onCollaborate}
                className="px-7 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs sm:text-sm font-bold shadow-red-glow hover:shadow-xl transition active:scale-95 flex items-center gap-2"
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
