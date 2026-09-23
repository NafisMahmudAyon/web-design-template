import React from 'react';

export default function Showcase1({ onAddToCart }) {
  return (
    <section id="showcase-1" className="w-full py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Price */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              SDA formed <br />
              strategically the <br />
              overall product
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-8 font-normal">
              SDA formed strategically the overall product visual and textual identity by providing a distinctive system that enables clarity and confidence in a competitive market segment. An approach that delivers purity through colour application, and openness through the democratisation of information.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() =>
                  onAddToCart?.({
                    title: 'SDA Organic Hydrating Emulsion',
                    price: '$280.00',
                    image:
                      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
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

          {/* Right Column: Architectural Product Shot with Dot Grid */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Dot grid accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-6 gap-2 opacity-30 pointer-events-none">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-black" />
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md w-full bg-[#f7f4ed] shadow-xl group p-6 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
                alt="SDA Skincare Packaging Design"
                className="w-full h-full object-cover rounded group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
