import React from 'react';
import { TRUST_LOGOS } from '../data/flowzyData';

export default function MissionStatementSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-12">
        {/* Colorful Badge Emblem */}
        <div className="flex justify-center">
          <div className="p-2 rounded-2xl bg-gradient-to-tr from-purple-100 via-pink-50 to-blue-50 border border-purple-200/60 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Big Typographic Statement */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-500 tracking-tight leading-relaxed max-w-4xl mx-auto font-display">
          We simplify project management with{' '}
          <strong className="font-bold text-slate-900">
            powerful tools that help teams plan, collaborate, and deliver work on time
          </strong>
          . Built for modern teams that value productivity and seamless collaboration.
        </h2>

        {/* Logo Strip / Infinite Edge-Faded Marquee (Rule 1D) */}
        <div className="pt-10 border-t border-slate-100">
          <div className="marquee-mask overflow-hidden py-3">
            <div className="flex items-center justify-around gap-10 opacity-70 hover:opacity-100 transition duration-300">
              {TRUST_LOGOS.map((logo) => (
                <div key={logo.name} className="flex items-center gap-2 text-slate-800 hover:text-purple-700 transition cursor-default">
                  <span className="text-base sm:text-xl font-extrabold tracking-tight font-display">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
