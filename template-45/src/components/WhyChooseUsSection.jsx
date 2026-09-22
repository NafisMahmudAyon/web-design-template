import React from 'react';
import { ArrowUpRight, Truck, Package, Headphones } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/logistiqoData';

export default function WhyChooseUsSection({ onGetQuote }) {
  const getIcon = (type) => {
    switch (type) {
      case 'truck':
        return <Truck className="w-5 h-5 text-red-600" />;
      case 'package':
        return <Package className="w-5 h-5 text-red-600" />;
      case 'headset':
        return <Headphones className="w-5 h-5 text-red-600" />;
      default:
        return <Truck className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Full-width Container Yard Backdrop */}
        <div className="relative rounded-[3rem] overflow-hidden min-h-[600px] p-8 sm:p-14 shadow-2xl flex flex-col justify-between">
          {/* Background Industrial Port Photo */}
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&auto=format&fit=crop&q=85"
            alt="Container yard terminal with heavy reach stacker"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark Contrast Overlay */}
          <div className="absolute inset-0 bg-slate-950/60 via-slate-900/40 to-slate-950/70 pointer-events-none" />

          {/* Interior Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[500px]">
            {/* Left Column Headline & Quote Action */}
            <div className="lg:col-span-6 space-y-6 text-white">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300 block">
                // WHY CHOOSE US //
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-display leading-[1.1] text-white">
                Why Businesses <br />
                Choose Us For <br />
                Their Logistics & <br />
                Shipping
              </h2>

              <div className="pt-4">
                <button
                  onClick={onGetQuote}
                  className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-bold shadow-lg transition active:scale-95 flex items-center gap-2"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Stacked Glass Cards matching mockup */}
            <div className="lg:col-span-6 space-y-4">
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.id}
                  className="glass-port-panel rounded-3xl p-6 shadow-xl border border-white/80 hover:shadow-2xl hover:scale-[1.01] transition duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      {getIcon(item.icon)}
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
