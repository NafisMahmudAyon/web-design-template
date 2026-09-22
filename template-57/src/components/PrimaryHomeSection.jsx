import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { primaryHomeData } from '../data/evergreenData';

export const PrimaryHomeSection = ({ onOpenProperty, onOpenVideo }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const bentoSlides = [
    {
      card1: {
        title: 'Big things can happen in small spaces.',
        desc: 'With thoughtful design and smart organization, you can maximize every inch, making room for creativity',
        cta: 'Details'
      },
      card2: {
        title: 'Nordic Horizon Villa',
        pricing: 'Pricing Start at $256K',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop',
        cta: 'Explore Properties →'
      }
    },
    {
      card1: {
        title: 'Light-filled sanctuaries in pristine nature.',
        desc: 'Floor-to-ceiling thermal glass walls dissolve boundaries between architectural comfort and ancient woodland.',
        cta: 'Details'
      },
      card2: {
        title: 'Solstice Alpine Chalet',
        pricing: 'Pricing Start at $340K',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop',
        cta: 'Explore Properties →'
      }
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? bentoSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === bentoSlides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = bentoSlides[activeSlide];

  return (
    <section id="about" className="py-20 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.18]">
              {primaryHomeData.headline}
            </h2>
          </div>

          {/* Video / Location Feature Capsule */}
          <div
            onClick={() => onOpenVideo?.()}
            className="inline-flex items-center gap-3.5 p-2 pr-5 rounded-full bg-slate-100 hover:bg-slate-200/80 cursor-pointer border border-slate-200 transition-all self-start lg:self-auto group"
          >
            <div className="w-10 h-10 rounded-full bg-brandDark text-white flex items-center justify-center shadow-md group-hover:bg-brandLime group-hover:text-brandDark transition-colors shrink-0">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <p className="text-xs text-slate-600 font-medium max-w-xs line-clamp-2">
              {primaryHomeData.videoTag}
            </p>
          </div>
        </div>

        {/* Bento Grid: Left Main Showcase Card vs Right Compact Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Large Showcase Villa Card */}
          <div
            onClick={() => onOpenProperty?.(primaryHomeData.mainCard)}
            className="lg:col-span-7 h-[420px] sm:h-[480px] rounded-3xl overflow-hidden relative group cursor-pointer border border-slate-200 shadow-lg bg-slate-900"
          >
            <img
              src={primaryHomeData.mainCard.image}
              alt={primaryHomeData.mainCard.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Overlapping Circles Preview Bubbles on Bottom Right */}
            <div className="absolute bottom-6 right-6 flex items-center -space-x-3 bg-white/30 backdrop-blur-md p-1.5 rounded-full border border-white/40 shadow-lg">
              {primaryHomeData.mainCard.thumbnails.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
              ))}
            </div>

            {/* Bottom Left Title */}
            <div className="absolute bottom-6 left-6 text-white max-w-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brandLime">
                Featured Architectural Residence
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                {primaryHomeData.mainCard.title}
              </h3>
            </div>
          </div>

          {/* Right Column: 2 Bento Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {/* Card 1: Text & Details */}
              <div className="h-[280px] sm:h-[360px] rounded-3xl p-6 sm:p-7 bg-[#F7F8F9] border border-slate-200/90 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
                <div>
                  <div className="w-8 h-8 rounded-full bg-brandLime/30 flex items-center justify-center text-brandDark mb-4">
                    <Sparkles className="w-4 h-4 text-brandDark" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 leading-snug mb-3">
                    {currentSlide.card1.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {currentSlide.card1.desc}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onOpenProperty?.({ title: currentSlide.card1.title })}
                    className="px-5 py-2 rounded-full border border-slate-300 hover:border-brandDark text-slate-800 text-xs font-semibold transition-colors"
                  >
                    {currentSlide.card1.cta}
                  </button>
                </div>
              </div>

              {/* Card 2: Property Image & Pricing Start */}
              <div
                onClick={() => onOpenProperty?.({ title: currentSlide.card2.title })}
                className="h-[280px] sm:h-[360px] rounded-3xl p-5 bg-[#F7F8F9] border border-slate-200/90 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all cursor-pointer group"
              >
                <div className="relative h-36 rounded-2xl overflow-hidden bg-slate-200">
                  <img
                    src={currentSlide.card2.image}
                    alt={currentSlide.card2.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-2">
                  <p className="text-sm sm:text-base font-serif font-bold text-slate-900 mb-3">
                    {currentSlide.card2.pricing}
                  </p>
                  <button className="w-full py-2.5 rounded-full bg-brandDark group-hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-1.5">
                    <span>Explore Properties</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: Narrative Text + Carousel Arrow Buttons */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-slate-500 font-sans max-w-xs leading-normal">
                {primaryHomeData.footerNote}
              </p>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all active:scale-95 shadow-sm"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-900 bg-brandDark hover:bg-slate-800 text-white flex items-center justify-center transition-all active:scale-95 shadow-md"
                  aria-label="Next Slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
