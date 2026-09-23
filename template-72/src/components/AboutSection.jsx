import React from 'react';

export default function AboutSection({ onBuyNow, onReadMore }) {
  return (
    <section id="about" className="w-full py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="mb-10">
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#2e1d1b] lowercase mb-3">
                about us
              </h2>
              <p className="text-xs sm:text-sm text-[#2e1d1b]/70 max-w-sm leading-relaxed mb-6 font-normal">
                Improves lymphatic function, resulting in a naturally dewy, glowing complexion.
              </p>
              <button
                onClick={onBuyNow}
                className="px-8 py-3 bg-[#2e1d1b] hover:bg-[#1e1211] text-white text-[11px] font-bold tracking-widest uppercase transition-all shadow-md active:scale-95"
              >
                BUY NOW
              </button>
            </div>

            {/* Lily Flower & Serum Dropper Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md bg-[#faf4ef] shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
                alt="Botanical Essence & Lily"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-4 lg:pt-0">
            {/* Packaging Box Still Life Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md bg-[#faf4ef] shadow-md mb-10 group">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
                alt="Wildling Organic Skincare Packaging"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>

            <div className="max-w-md">
              <p className="text-xs text-[#2e1d1b]/70 leading-relaxed space-y-3 mb-8 font-normal">
                Gua Sha increases circulation and improves lymphatic function, resulting in a naturally dewy, glowing complexion. Gua Sha can also be used to prevent and clear acne, decongesting the skin and lessening inflammation. Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands.
              </p>

              <button
                onClick={onReadMore}
                className="px-8 py-3 border border-[#2e1d1b]/30 hover:border-[#2e1d1b] text-[#2e1d1b] text-[11px] font-bold tracking-widest uppercase transition-all"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
