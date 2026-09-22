import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Cpu, Database, ArrowRight, ShieldCheck } from 'lucide-react';
import { capabilitiesData } from '../data/agencyData';

const iconMap = {
  Smartphone,
  Cpu,
  Database,
};

export default function CoreCapabilities({ onSelectService, onSecureFuture }) {
  const [activeCardId, setActiveCardId] = useState(capabilitiesData.cards[0].id);

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#25E575]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            {capabilitiesData.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed"
          >
            {capabilitiesData.subtitle}
          </motion.p>
        </div>

        {/* 2-Column Grid: Left 3 Cards, Right Featured Security Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: 3 Capability Cards with Polymorphism (Rule 1.A) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {capabilitiesData.cards.map((card) => {
              const Icon = iconMap[card.icon] || Cpu;
              const isActive = activeCardId === card.id;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveCardId(card.id)}
                  onClick={() => onSelectService(card.title)}
                  className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? 'bg-[#101913] border-[#25E575] shadow-[0_0_30px_rgba(37,229,117,0.18)] translate-x-1'
                      : 'bg-[#0D1510] border-[#1B2B1F] hover:border-[#1B2B1F]/80'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#25E575] text-black shadow-[0_0_15px_rgba(37,229,117,0.6)]'
                          : 'bg-[#142017] text-[#25E575]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {card.title}
                        </h3>
                        <ArrowRight
                          className={`w-4 h-4 transition-all duration-300 ${
                            isActive
                              ? 'text-[#25E575] translate-x-1 opacity-100'
                              : 'text-neutral-500 opacity-0 group-hover:opacity-100'
                          }`}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Featured "Where Security Meets Scalability" */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-[#0D1510] border border-[#1B2B1F] flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            {/* Ambient emerald back-glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#25E575]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top 3D Glowing Ribbon M Emblem */}
            <div className="mb-8">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 drop-shadow-[0_0_24px_rgba(37,229,117,0.8)] group-hover:scale-105 transition-transform duration-500"
              >
                <path
                  d="M18 78C18 52 25 20 38 20C50 20 44 70 56 70C67 70 69 36 77 36C84 36 86 56 86 78"
                  stroke="url(#cap-ribbon)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="cap-ribbon" x1="18" y1="20" x2="86" y2="78" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#25E575" />
                    <stop offset="0.5" stopColor="#34D399" />
                    <stop offset="1" stopColor="#059669" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-4">
                {capabilitiesData.featuredCard.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed mb-8">
                {capabilitiesData.featuredCard.description}
              </p>

              <button
                onClick={onSecureFuture}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25E575] hover:bg-[#1fd368] text-black font-bold text-xs tracking-wider transition-all shadow-[0_0_25px_rgba(37,229,117,0.35)] hover:shadow-[0_0_35px_rgba(37,229,117,0.55)] cursor-pointer group"
              >
                <span>{capabilitiesData.featuredCard.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
