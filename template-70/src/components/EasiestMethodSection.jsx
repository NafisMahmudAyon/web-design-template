import React from 'react';
import { Home, ArrowRight } from 'lucide-react';

export default function EasiestMethodSection({ onTryNowClick }) {
  return (
    <section id="about" className="w-full py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Photo with Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[380px] sm:h-[440px] border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Architectural Villa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2e]/50 via-transparent to-transparent" />

              {/* Floating House Icon Badge */}
              <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl">
                <Home className="w-7 h-7 text-white stroke-[1.75]" />
              </div>
            </div>
          </div>

          {/* Right Column: Headings & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f334c] tracking-tight leading-[1.15] mb-6">
              The Easiest Method <br />
              To Find a House
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-gray-500 leading-relaxed max-w-lg mb-8">
              <p>
                RentHomes.com is the perfect site for anyone looking to rent a home in the United States. We specialize in finding apartments, vacation homes, villas, and luxury properties across the country.
              </p>
              <p>
                With our easy-to-use search tool and extensive listings, finding your dream home has never been easier.
              </p>
            </div>

            <div>
              <button
                onClick={onTryNowClick}
                className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#0f334c] hover:bg-[#0a2334] transition-all shadow-lg shadow-navy-900/20 active:scale-95 inline-flex items-center gap-2 group"
              >
                <span>Try now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
