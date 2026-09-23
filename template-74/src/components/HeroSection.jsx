import React, { useState } from 'react';
import { Truck, Smile, Instagram, Twitter, Github } from 'lucide-react';

export default function HeroSection({ onAddToCart }) {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section id="home" className="w-full pt-8 pb-20 bg-white select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Socials Rail + Content */}
          <div className="lg:col-span-6 flex items-start gap-8">
            {/* Vertical Social Icons */}
            <div className="hidden sm:flex flex-col gap-5 pt-4 text-gray-400">
              <a href="#" aria-label="Instagram" className="hover:text-black transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-black transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Github" className="hover:text-black transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Headlines & CTA */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
                Today Is A <br />
                Good Day With <br />
                Dust+Cream
              </h1>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm mb-8 font-normal">
                Natural skincare products in the market in cause of their vision to premium and effective natural skincare cosmetics.
              </p>

              {/* Add to Cart & Price */}
              <div className="flex items-center gap-6 mb-12">
                <button
                  onClick={() =>
                    onAddToCart?.({
                      title: 'Dust+Cream Core Facial Hydrator',
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

              {/* Trust Badges */}
              <div className="flex items-center gap-10 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-800">Free Delivery</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                    <Smile className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-800">10k+ Happy User</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Slate Blue Cut-Corner Frame */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end">
            <div
              className="relative w-full max-w-md aspect-[4/5] bg-[#5b7b99] overflow-hidden shadow-2xl p-6 flex items-center justify-center group"
              style={{
                borderRadius: '0px 80px 0px 0px',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
                alt="Dust+Cream Architectural Product Arrangement"
                className="w-full h-full object-cover rounded group-hover:scale-103 transition-transform duration-700"
              />
            </div>

            {/* Slider Controls Bar */}
            <div className="w-full max-w-md flex items-center justify-between text-[11px] font-bold tracking-widest text-gray-500 pt-4 px-2">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveSlide((prev) => (prev > 1 ? prev - 1 : 4))}
                  className="hover:text-black uppercase"
                >
                  PREV
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev < 4 ? prev + 1 : 1))}
                  className="hover:text-black uppercase"
                >
                  NEXT
                </button>
              </div>

              <div>
                <span className="text-black">0{activeSlide}</span>
                <span className="text-gray-300"> - 02-03-04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
