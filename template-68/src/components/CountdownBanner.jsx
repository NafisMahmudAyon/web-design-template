import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CountdownBanner({ onShopNowClick }) {
  // Functional live countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 48,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section className="w-full py-10 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-[36px] bg-[#f7f9f7] border border-[#e5ece5] p-6 sm:p-10 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Lifestyle Photo */}
          <div className="hidden lg:block lg:col-span-3 h-72 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80"
              alt="Grocery Shopping Aisle"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Center Promo & Live Countdown */}
          <div className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-6">
            <span className="text-xs sm:text-sm font-bold text-[#0c6b3e] uppercase tracking-wider mb-2">
              Summer Discount
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              Get 50% off - Limited Time Offer!
            </h2>

            {/* Live Countdown Display */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8">
              {/* Days */}
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                  {formatNumber(timeLeft.days)}
                </span>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mt-1">
                  Days
                </span>
              </div>

              <span className="text-2xl font-bold text-gray-400 -mt-4">:</span>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                  {formatNumber(timeLeft.hours)}
                </span>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mt-1">
                  Hours
                </span>
              </div>

              <span className="text-2xl font-bold text-gray-400 -mt-4">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                  {formatNumber(timeLeft.minutes)}
                </span>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mt-1">
                  Minutes
                </span>
              </div>

              <span className="text-2xl font-bold text-gray-400 -mt-4">:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-[#0c6b3e] tracking-tight">
                  {formatNumber(timeLeft.seconds)}
                </span>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mt-1">
                  Seconds
                </span>
              </div>
            </div>

            {/* Shop Now CTA */}
            <button
              type="button"
              onClick={onShopNowClick}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#0c6b3e] hover:bg-[#085430] text-white text-xs font-bold shadow-lg shadow-emerald-900/20 transition-all hover:gap-3 active:scale-95"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Lifestyle Photo */}
          <div className="hidden lg:block lg:col-span-3 h-72 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=500&q=80"
              alt="Fresh Organic Produce"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
