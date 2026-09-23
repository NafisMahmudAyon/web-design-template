import React from 'react';

export default function ServicesSection({ onServiceClick }) {
  return (
    <section id="services" className="w-full py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Giant Section Heading */}
        <div className="mb-20 text-center sm:text-left">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-condensed font-black tracking-tight text-black leading-none uppercase">
            EXPLORE OUR SERVICES
          </h2>
        </div>

        {/* Service 01: Buying a Home */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
              BUYING A HOME
            </span>

            <span className="text-7xl sm:text-8xl lg:text-9xl font-condensed font-black text-black leading-none mb-6">
              01
            </span>

            <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed font-normal">
              Finding your dream home has never been easier. Our experienced real estate agents are here to guide you through the process, ensuring you find a home that fits your lifestyle and preferences.
            </p>

            <div className="pt-6">
              <button
                onClick={() => onServiceClick?.('Buying a Home')}
                className="text-xs font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
                alt="Contemporary Architecture Villa"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Service 02: Selling Property */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Cantilever Luxury Villa"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
              SELLING PROPERTY
            </span>

            <span className="text-7xl sm:text-8xl lg:text-9xl font-condensed font-black text-black leading-none mb-6">
              02
            </span>

            <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed font-normal">
              Trust us to showcase your property in the best light. Our marketing strategies, professional photography, and expert negotiation skills will help you sell your property.
            </p>

            <div className="pt-6">
              <button
                onClick={() => onServiceClick?.('Selling Property')}
                className="text-xs font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
              >
                Consult an Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
