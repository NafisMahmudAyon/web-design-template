import React from 'react';
import { Settings, Shield, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export default function ValueSection({ onRequestCall }) {
  return (
    <section className="w-full py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headings & Value Badges */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-6">
              The perfect way to get <br />
              best property
            </h2>

            <p className="text-sm text-gray-500 max-w-lg leading-relaxed mb-10">
              Since our start in 2014, we are profesional and many experience in real state. We will always brings you the best value out of our best property. So, what are you waiting for? Let's talk business!
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mb-10">
              {/* Card 1: Service */}
              <div className="p-4 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center gap-3.5 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#0052ff] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-950">Service</h4>
                  <p className="text-[11px] text-gray-500">Smart real estate service</p>
                </div>
              </div>

              {/* Card 2: More Saver */}
              <div className="p-4 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center gap-3.5 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#0052ff] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-950">More saver</h4>
                  <p className="text-[11px] text-gray-500">Low taxes and interest</p>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div>
              <button
                onClick={onRequestCall}
                className="px-6 py-3 rounded-full text-xs font-bold bg-[#0c0d11] text-white hover:bg-[#0052ff] transition-colors duration-300 shadow-lg shadow-black/10 inline-flex items-center gap-2"
              >
                <span>Consult Our Advisors</span>
                <CheckCircle2 className="w-4 h-4 text-[#ffe875]" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Photography Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 relative">
            {/* Image 1: High-rise with yellow accents */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[340px] sm:h-[400px] border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
                alt="Contemporary architecture with balconies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Image 2: Yellow staircase structural building with badge */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[340px] sm:h-[400px] border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80"
                alt="Architectural building with yellow staircase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Floating dark badge in bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0c0d11]/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ffe875] text-gray-900 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-[#ffe875] tracking-wide">
                      Brings you the best value
                    </h5>
                    <p className="text-[10px] text-gray-300 leading-tight">
                      out of our best property
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
