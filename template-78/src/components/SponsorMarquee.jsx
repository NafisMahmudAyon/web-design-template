import React from 'react';

export const SponsorMarquee = () => {
  const brandLogos = [
    {
      name: 'shopify',
      svg: (
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-neutral-800">
          <span className="text-xl">🛍️</span> shopify
        </div>
      ),
    },
    {
      name: 'attentive',
      svg: (
        <div className="flex items-center gap-1.5 font-semibold text-lg tracking-tight text-neutral-800 lowercase">
          attentive<span className="w-1.5 h-1.5 rounded-full bg-neutral-800 inline-block mb-0.5" />
        </div>
      ),
    },
    {
      name: 'zapier',
      svg: (
        <div className="flex items-center gap-1.5 font-bold text-lg tracking-wider text-neutral-800">
          <span className="text-orange-500 font-black">_</span>zapier
        </div>
      ),
    },
    {
      name: 'Layers',
      svg: (
        <div className="flex items-center gap-2 font-semibold text-lg text-neutral-800">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          Layers
        </div>
      ),
    },
    {
      name: 'Catalog',
      svg: (
        <div className="flex items-center gap-2 font-semibold text-lg text-neutral-800">
          <div className="w-5 h-5 rounded-full border-2 border-neutral-800 flex items-center justify-center text-[10px] font-bold">
            C
          </div>
          Catalog
        </div>
      ),
    },
    {
      name: 'Revolut',
      svg: (
        <div className="flex items-center gap-1.5 font-extrabold text-lg text-neutral-800 tracking-tight">
          <span className="font-serif italic text-xl">R</span> Revolut
        </div>
      ),
    },
    {
      name: 'Compass',
      svg: (
        <div className="flex items-center gap-2 font-semibold text-lg text-neutral-800 uppercase tracking-widest text-sm">
          COMPASS
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-400">
          Trusted by top tier global real estate networks
        </p>
      </div>

      <div className="relative w-full mask-marquee overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 md:gap-24 py-4">
          {/* First loop of items */}
          {brandLogos.map((brand, i) => (
            <div
              key={`b1-${i}`}
              className="flex items-center opacity-65 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer shrink-0"
            >
              {brand.svg}
            </div>
          ))}

          {/* Duplicated loop for infinite seamless scroll */}
          {brandLogos.map((brand, i) => (
            <div
              key={`b2-${i}`}
              className="flex items-center opacity-65 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer shrink-0"
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
