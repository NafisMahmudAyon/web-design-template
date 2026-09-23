import React from 'react';

export default function DiscoverySetSection({ onBuySet }) {
  return (
    <section id="farms" className="w-full py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Discovery Box Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#faf4ef] shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80"
                alt="WILDLING Discovery Set"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-lg">
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#2e1d1b] lowercase leading-tight mb-6">
              we provide you <br />
              the best taste
            </h2>

            <p className="text-xs sm:text-sm text-[#2e1d1b]/70 leading-relaxed mb-8 font-normal">
              By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.
            </p>

            <div>
              <button
                onClick={onBuySet}
                className="px-8 py-3 bg-[#2e1d1b] hover:bg-[#1e1211] text-white text-[11px] font-bold tracking-widest uppercase transition-all shadow-md active:scale-95"
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
