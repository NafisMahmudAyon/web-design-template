import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { heroData } from '../data/agencyData';
import MonsterLogo from './MonsterLogo';

export default function HeroSection({ onStartProject, onLearnMore }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Ambient background mesh glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#25E575]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#10B981]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Dominate Your Digital Space.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed mb-8">
              {heroData.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25E575] hover:bg-[#1fd368] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(37,229,117,0.38)] hover:shadow-[0_0_40px_rgba(37,229,117,0.6)] cursor-pointer group"
              >
                <span>{heroData.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-[#25E575] transition-colors group py-2"
              >
                <span>{heroData.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Proof & Ratings */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#1B2B1F]/60 max-w-md">
              <div className="flex -space-x-2.5">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&auto=format&fit=crop&q=80',
                ].map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt="Industry expert"
                    className="w-8 h-8 rounded-full border-2 border-[#070908] object-cover ring-1 ring-[#25E575]/30"
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <div className="flex text-emerald-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#25E575] text-[#25E575]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">{heroData.rating}</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">{heroData.badge}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Bento Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch"
          >
            {/* Card 1: $500K Metric + Glowing Emblem */}
            <div className="rounded-3xl p-7 bg-[#0D1510] border border-[#1B2B1F] flex flex-col justify-between relative overflow-hidden group hover:border-[#25E575]/40 transition-colors shadow-xl">
              {/* Background ambient radial glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#25E575]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {heroData.stats.costSaved}
                </div>
                <div className="text-xs text-neutral-400 mt-2 max-w-[180px] leading-relaxed">
                  {heroData.stats.costLabel}
                </div>
              </div>

              {/* Glowing Ribbon M Monogram */}
              <div className="my-6 flex justify-center py-2">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-24 h-24 drop-shadow-[0_0_20px_rgba(37,229,117,0.7)] group-hover:scale-105 transition-transform duration-300"
                >
                  <path
                    d="M14 62C14 42 20 16 30 16C40 16 35 56 44 56C53 56 55 30 61 30C67 30 69 46 69 62"
                    stroke="url(#hero-ribbon)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="hero-ribbon" x1="14" y1="16" x2="69" y2="62" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#25E575" />
                      <stop offset="0.6" stopColor="#34D399" />
                      <stop offset="1" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* 100% Clean Code Badge */}
              <div className="w-full py-2.5 rounded-full bg-[#132017] border border-[#1B2B1F] text-center text-xs font-semibold text-[#25E575] tracking-wide flex items-center justify-center gap-1.5 shadow-inner">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{heroData.stats.cleanCode}</span>
              </div>
            </div>

            {/* Right Stack: Software Engineer Portrait + 10+ Years Innovation */}
            <div className="flex flex-col gap-4">
              {/* Card 2: Software Engineer Portrait */}
              <div className="h-[280px] sm:h-[300px] rounded-3xl overflow-hidden relative border border-[#1B2B1F] group bg-[#0D1510]">
                <img
                  src="/hero-engineer.jpg"
                  alt="Lead Software Engineer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070908] via-transparent to-transparent opacity-60" />
              </div>

              {/* Card 3: 10+ Years of Innovation */}
              <div className="rounded-3xl p-6 bg-[#0D1510] border border-[#1B2B1F] flex flex-col justify-center text-center group hover:border-[#25E575]/40 transition-colors shadow-xl">
                <div className="text-4xl font-extrabold text-white tracking-tight">
                  {heroData.stats.years}
                </div>
                <div className="text-xs text-neutral-400 mt-1 font-medium">
                  {heroData.stats.yearsLabel}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
