import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/pollinateData';

export const TestimonialsSection = ({ onReadCaseStudy }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const testimonialsList = [
    {
      caseStudy: {
        quote: '"I Boosted Sales Efficiency By 50% With This Platform"',
        author: 'Lali Esok Maharmaaz',
        role: 'Growth Lead at NexaCorp',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      },
      reviews: [
        {
          id: 'rev-1',
          name: 'Max Hunter',
          title: 'Maxwell Bright, Tech Innovator',
          comment: 'The real-time data and reporting features have empowered us to make better-informed decisions across our global outreach.',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        },
        {
          id: 'rev-2',
          name: 'Jake Rivers',
          title: 'Jasper Stone, Renewable Energy Consultant',
          comment: "Thanks to the real-time data and reporting features, we've been able to make more informed adjustments to every outbound campaign.",
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        },
      ],
    },
    {
      caseStudy: {
        quote: '"Scaled Outbound Click-Through Rates by 3.8x in Under 90 Days"',
        author: 'Samantha Reynolds',
        role: 'VP of Marketing at HorizonCloud',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      },
      reviews: [
        {
          id: 'rev-3',
          name: 'David Zhao',
          title: 'Principal Architect, OmniScale',
          comment: 'Standardizing 2,400 team email signatures used to take weeks. With Pollinate it happened in 10 minutes with complete brand fidelity.',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
        },
        {
          id: 'rev-4',
          name: 'Clara Oswald',
          title: 'Director of Brand, ChronoTech',
          comment: 'Dynamic promotional banners in our signatures generated over $140,000 in inbound ARR this quarter alone.',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
        },
      ],
    },
  ];

  const currentSlide = testimonialsList[slideIndex % testimonialsList.length];

  const handlePrev = () => {
    setSlideIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Top Header Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5520]" />
            <span className="text-[11px] font-bold text-slate-700">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Email signature marketing on autopilot
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            All-in-one platform to collect, manage, and optimize payments securely and globally.
          </p>
        </div>

        {/* Carousel Arrow Controls adhering to Rule 1B */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-[#FF5520] transition-colors shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-[#FF5520] transition-colors shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Testimonials Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Featured Case Study (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden relative min-h-[380px] sm:min-h-[440px] shadow-pollinate group">
          <img
            src={currentSlide.caseStudy.image}
            alt={currentSlide.caseStudy.author}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Tag top right */}
          <div className="absolute top-6 right-6">
            <button
              onClick={onReadCaseStudy}
              className="px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-[10px] font-bold text-white tracking-wider uppercase flex items-center gap-1 transition-colors"
            >
              <span>Read The Case Study</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Bottom Quote Info */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold leading-snug max-w-lg mb-2">
              {currentSlide.caseStudy.quote}
            </h3>
            <p className="text-xs text-white/80 font-medium">
              {currentSlide.caseStudy.author} · <span className="opacity-70">{currentSlide.caseStudy.role}</span>
            </p>
          </div>
        </div>

        {/* Right 2 Stacked Reviews (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {currentSlide.reviews.map((rev) => (
            <div
              key={rev.id}
              className="flex-1 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-pollinate flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                    <p className="text-[11px] text-slate-400">{rev.title}</p>
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF5520] text-[#FF5520]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
