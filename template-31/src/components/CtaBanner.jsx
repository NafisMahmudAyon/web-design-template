import React from 'react';

export default function CtaBanner({ openAuthModal, openDemoModal }) {
  return (
    <section className="py-16 bg-[#F8FAFC] dark:bg-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#635BFF] text-white rounded-[36px] p-8 sm:p-12 xl:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Subtle Glow Circle */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          {/* Headline */}
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight leading-tight">
              Discover the full scale of Clause capabilities
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={openDemoModal}
              className="px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-extrabold text-xs backdrop-blur-md border border-white/30 transition-all hover:scale-[1.03]"
            >
              Get a Demo
            </button>
            <button
              onClick={() => openAuthModal('signup')}
              className="px-7 py-3.5 rounded-full bg-slate-950 text-white font-extrabold text-xs shadow-xl transition-all hover:scale-[1.03]"
            >
              Start for free
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
