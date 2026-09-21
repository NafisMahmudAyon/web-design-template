import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function InnovativeSolutionsSection({ openAuthModal }) {
  const highlights = [
    '50+ Countries Worldwide',
    '98% Customer Satisfaction',
    'Over 500K+ App Downloads',
    '24/7 Customer Support'
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with floating flag badges */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Global Business Solutions"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Country Flag Badges matching mockup */}
              <div className="absolute top-6 -left-6 bg-white dark:bg-slate-800 p-2.5 rounded-2xl shadow-xl border border-slate-200/60 dark:border-slate-700 flex items-center gap-2 animate-bounce duration-1000">
                <span className="text-xl">🇨🇳</span>
              </div>

              <div className="absolute top-1/3 -right-6 bg-white dark:bg-slate-800 p-2.5 rounded-2xl shadow-xl border border-slate-200/60 dark:border-slate-700 flex items-center gap-2">
                <span className="text-xl">🇯🇵</span>
              </div>

              <div className="absolute bottom-10 -left-4 bg-white dark:bg-slate-800 p-2.5 rounded-2xl shadow-xl border border-slate-200/60 dark:border-slate-700 flex items-center gap-2">
                <span className="text-xl">🇧🇩</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold text-[#635BFF] uppercase tracking-wider bg-[#635BFF]/10 px-3 py-1 rounded-full">
              • Future of Finvesto
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Innovative finance solutions built for today's global businesses
            </h2>

            <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              Our platform offers advanced financial tools and global payment solutions to support the growth and success of modern businesses worldwide.
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#635BFF] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => openAuthModal('signup')}
                className="px-7 py-3.5 rounded-full bg-[#635BFF] hover:bg-[#4F46E5] text-white font-extrabold text-sm shadow-lg shadow-[#635BFF]/30 transition-all flex items-center gap-2 group"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
