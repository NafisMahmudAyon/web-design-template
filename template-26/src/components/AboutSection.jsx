import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { ABOUT_METRICS } from '../data/mockData';

export default function AboutSection({ onOpenSignUp }) {
  return (
    <section className="py-20 bg-[#f6f7f9] text-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top About Text */}
        <div className="max-w-4xl space-y-4 mb-16">
          <span className="text-xs font-black uppercase text-gray-400 tracking-widest block">
            | About Finexa |
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-[#090d16]">
            Finexa{' '}
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#b0f92b] text-[#090d16] align-middle mx-1 shadow-sm">
              <ArrowUpRight className="w-6 h-6 stroke-[3]" />
            </span>{' '}
            is an AI-powered finance platform designed to simplify how you manage, move, and grow your money.{' '}
            <span className="text-gray-400 font-normal">
              From everyday transactions to advanced financial insights, we turn complex processes into seamless experiences.
            </span>
          </h2>
        </div>

        {/* 3 Column Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="rounded-2xl overflow-hidden h-44 bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-display text-4xl font-black text-[#090d16] block mb-1">
                {ABOUT_METRICS.countriesCount}
              </span>
              <p className="text-xs text-gray-600 font-medium">
                Trusted by individuals and businesses across 50+ countries to manage finances.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase block mb-1">
                Client satisfaction
              </span>
              <span className="font-display text-5xl font-black text-[#090d16] block mb-4">
                {ABOUT_METRICS.satisfactionRate}
              </span>

              {/* Avatar Stack */}
              <div className="flex -space-x-2 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
            </div>

            <p className="text-xs text-gray-700 italic font-medium leading-relaxed">
              "Having everything in one place makes managing my finances simple and stress-free."
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f0f2f5] rounded-3xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <span className="font-display text-xl font-black text-[#090d16]">Finexa</span>
              <ArrowUpRight className="w-5 h-5 text-[#090d16]" />
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200 space-y-2">
              <span className="text-[10px] text-gray-500 font-bold uppercase block">Earnings</span>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl font-black text-[#090d16]">
                  {ABOUT_METRICS.earnings}
                </span>
                <span className="bg-[#b0f92b] text-[#090d16] text-[10px] font-black px-2 py-0.5 rounded-full">
                  +8k
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="font-display text-3xl font-black text-[#090d16]">
                {ABOUT_METRICS.totalVolume}
              </span>

              <button
                onClick={onOpenSignUp}
                className="inline-flex items-center space-x-1.5 bg-[#b0f92b] text-[#090d16] text-xs font-black px-4 py-2.5 rounded-full shadow-sm hover:bg-[#a0eb1b] transition-colors"
              >
                <span>Start Free Trial</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
