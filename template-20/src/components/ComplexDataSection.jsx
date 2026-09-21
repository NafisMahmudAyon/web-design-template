import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, AlertCircle, ChevronDown, Layers, Activity } from 'lucide-react';
import { DATA_DECISIONS_STEPS, HERO_ASSETS } from '../data/mockData';

export default function ComplexDataSection({ onOpenDemo }) {
  const [activeStepId, setActiveStepId] = useState('step-1');

  const activeStep = DATA_DECISIONS_STEPS.find((s) => s.id === activeStepId) || DATA_DECISIONS_STEPS[0];

  return (
    <section id="complex-data" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Title & Accordion Tab Selector */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#18191c] tracking-tight leading-tight"
            >
              From Complex Data to Confident Decisions.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-base sm:text-lg text-[#525860] leading-relaxed"
            >
              Our intelligence platform brings environmental data together and transforms it into insights your team can actually use.
            </motion.p>
          </div>

          {/* Accordion Tabs */}
          <div className="space-y-4">
            {DATA_DECISIONS_STEPS.map((step, idx) => {
              const isActive = activeStepId === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`p-6 rounded-2xl transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-white border-black/15 shadow-xl ring-1 ring-black/5'
                      : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`font-serif text-xl sm:text-2xl font-bold ${isActive ? 'text-[#18191c]' : 'text-gray-500'}`}>
                      {step.title}
                    </h3>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                        isActive ? 'bg-[#18191c] text-white rotate-90' : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm text-[#525860] leading-relaxed font-sans">
                          {step.subtitle}
                        </p>

                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-4 text-xs">
                          <span className="font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                            {step.metrics.riskIncrease} {step.metrics.period}
                          </span>
                          <span className="text-gray-500">{step.metrics.mainDriver}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Interactive UI Card over Forest Aerial Image */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl border border-black/10 aspect-square flex items-center justify-center">
            {/* Background forest image */}
            <img
              src={HERO_ASSETS.forestAerial}
              alt="Aerial Forest Landscape"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Overlay White UI Card */}
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900 text-lg">Portfolio Risk Trend</h4>
                <div className="flex items-center gap-1 text-xs bg-gray-100 px-3 py-1 rounded-lg font-medium text-gray-700">
                  <span>12 months</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Dynamic Line Graph */}
              <div className="relative h-44 w-full my-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120">
                  <path
                    d={`M 0,${100 - activeStep.trendData[0].val} L 40,${100 - activeStep.trendData[1].val} L 80,${100 - activeStep.trendData[2].val} L 120,${100 - activeStep.trendData[3].val} L 160,${100 - activeStep.trendData[4].val} L 200,${100 - activeStep.trendData[5].val} L 240,${100 - activeStep.trendData[6].val} L 280,${100 - activeStep.trendData[7].val}`}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {activeStep.trendData.map((d, i) => (
                    <circle
                      key={i}
                      cx={(i / 7) * 280}
                      cy={100 - d.val}
                      r="4"
                      fill="#ef4444"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                  ))}
                </svg>

                {/* Month labels */}
                <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                  {activeStep.trendData.map((d, i) => (
                    <span key={i}>{d.month}</span>
                  ))}
                </div>
              </div>

              {/* Highlight callout inside card */}
              <div className="bg-[#f8fafc] border border-red-100 rounded-xl p-3 text-xs">
                <p className="font-bold text-gray-900">
                  Risk exposure increased {activeStep.metrics.riskIncrease} {activeStep.metrics.period.toLowerCase()}.
                </p>
                <p className="text-gray-500 mt-0.5">{activeStep.metrics.mainDriver}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
