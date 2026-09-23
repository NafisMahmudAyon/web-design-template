import React from 'react';
import { FramedHeader } from './FramedHeader';
import { experienceStats } from '../data/investaData';
import { Award, CheckCircle2, TrendingUp, Building } from 'lucide-react';

export const ExperienceSection = ({ onLearnMore }) => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Split Architecture Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-[#202020] border border-neutral-800">
          {/* Left Dark Content Block */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              {/* Framed Header in Dark Mode */}
              <div className="relative mb-6">
                <div className="relative inline-block border border-neutral-700/80 px-6 sm:px-8 pt-4 pb-5">
                  <span className="absolute -top-3 left-5 px-2.5 text-[11px] uppercase tracking-[0.16em] font-semibold bg-[#202020] text-neutral-400">
                    Experience
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                    Our <span className="italic font-normal font-serif text-neutral-300">Experience</span>
                  </h2>
                </div>
              </div>

              {/* Body Text */}
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-12">
                With 15 Years of experience we are ready to help you. Exponent is a pixel perfect theme, that is tailor made for startups and businesses. Build your website swiftly.
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-neutral-800">
              {experienceStats.map((stat, idx) => (
                <div key={idx} className="group">
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight group-hover:text-investa-accent transition-colors block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Champagne Yellow Vertical Banner */}
          <div className="lg:w-32 xl:w-36 bg-[#F6E9C9] flex items-center justify-center p-6 lg:p-0 border-t lg:border-t-0 lg:border-l border-neutral-800 shrink-0">
            <div className="lg:writing-mode-vertical text-neutral-900 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-investa-red shrink-0" />
              <p className="font-serif text-base sm:text-lg lg:text-xl font-medium tracking-wide text-neutral-900 leading-snug">
                With 15 Years of experience we are ready to help you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
