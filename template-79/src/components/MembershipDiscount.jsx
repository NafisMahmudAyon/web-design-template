import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MembershipDiscount = ({ onJoinClick }) => {
  return (
    <section id="offers" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] sm:min-h-[400px] flex items-center justify-center text-center p-8 sm:p-12">
          {/* Background Photography with Jewel-Tone Pillows */}
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85"
            alt="Jewel-toned cushions on luxury velvet sofa"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark Forest Overlay */}
          <div className="absolute inset-0 bg-[#0E4334]/85 backdrop-blur-[2px]" />

          {/* Centered Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 leading-tight">
              Get Discount for <br className="hidden sm:inline" />
              <span className="italic font-normal font-serif text-white/90">
                Membership
              </span>
            </h2>

            <p className="text-white/80 text-xs sm:text-sm font-medium mb-8 max-w-md mx-auto">
              Every new membership will get a 40% discount for the first purchase.
            </p>

            <button
              onClick={onJoinClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#0E4334] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
