import React from 'react';

export default function AboutSection({ onExploreMore }) {
  return (
    <section id="about" className="w-full py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3-Photo Gallery Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {/* Tall Left Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[1/2] shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
                alt="Architectural Cosmetic Blue Still Life"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>

            {/* Right Column with 2 stacked images */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-xl overflow-hidden aspect-square shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
                  alt="Organic Sage Green Skincare Formula"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>

              <div className="relative rounded-xl overflow-hidden aspect-square shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
                  alt="Minimalist Cream Dropper Bottle"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Action */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About US
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-8 font-normal">
              SDA formed strategically the overall product visual and textual identity by providing a distinctive system that enables clarity and confidence in a competitive market segment. An approach that delivers purity through colour application, and openness through the democratisation of information.
            </p>

            <div>
              <button
                onClick={onExploreMore}
                className="px-8 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all active:scale-95"
              >
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
