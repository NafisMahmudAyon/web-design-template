import React from 'react';
import { Landmark, RefreshCw, Smartphone } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Landmark className="w-6 h-6 text-[#635BFF]" />,
      title: 'Bank Integration',
      description: 'Connect all your bank accounts for unified financial management and visibility.'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#635BFF]" />,
      title: 'Instant Transfers',
      description: 'Transfer funds between your accounts or to others instantly and securely.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#635BFF]" />,
      title: 'Mobile Payment',
      description: 'Accept and manage payments directly from your mobile devices effortlessly.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Grid matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-16">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-extrabold text-[#635BFF] uppercase tracking-wider bg-[#635BFF]/10 px-3 py-1 rounded-full">
              • How it work!
            </span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Experience the Next Generation of Global Payments
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-8">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
              Manage your finances easily with tools to track spending, set goals, and grow your wealth confidently.
            </p>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#F8FAFC] dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-xl hover:border-[#635BFF]/40 transition-all group duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-700 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
