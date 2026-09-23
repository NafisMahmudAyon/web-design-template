import React from 'react';

export default function Showcase2({ onAddToCart }) {
  return (
    <section id="showcase-2" className="w-full py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Terracotta Rust Framing with Dot Grid */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Dot grid accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 grid grid-cols-6 gap-2 opacity-30 pointer-events-none">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-black" />
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md w-full bg-[#b56041] shadow-xl group p-6 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
                alt="Natural Skincare Botanical Solution"
                className="w-full h-full object-cover rounded group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Copy & Price */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              The internal need <br />
              to communicate <br />
              an optimistic
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-8 font-normal">
              Dust and Cream introduces the natural skincare products in the market in cause of their vision to unify knowledge from nature and science in order to deliver premium and effective natural skincare cosmetics. Demanding environments to deliver impactful and time-resistant solutions.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() =>
                  onAddToCart?.({
                    title: 'Dust+Cream Antioxidant Protective Cream',
                    price: '$280.00',
                    image:
                      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
                  })
                }
                className="px-8 py-3.5 bg-[#5b7b99] hover:bg-[#486682] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-md active:scale-95"
              >
                ADD TO CART
              </button>

              <span className="text-xl sm:text-2xl font-bold text-gray-800">
                $280.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
