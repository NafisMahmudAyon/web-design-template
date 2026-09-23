import React from 'react';
import { motion } from 'framer-motion';
import { twitterTestimonials } from '../data/saasData';

export default function TestimonialsSection() {
  const column1 = [...twitterTestimonials, ...twitterTestimonials];
  const column2 = [...twitterTestimonials.slice(2), ...twitterTestimonials.slice(0, 2), ...twitterTestimonials];

  return (
    <section id="reviews" className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Outer Dark Rounded Card */}
      <div className="rounded-[32px] sm:rounded-[44px] bg-[#12151D] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-gray-800/80 shadow-2xl">
        
        {/* Neon Squiggle Loop Artwork in Bottom-Left (Figma motif) */}
        <div className="absolute -bottom-8 -left-8 w-64 h-64 pointer-events-none opacity-40">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-pink-500">
            <path
              d="M20 180 C 20 80, 50 80, 50 180 C 50 80, 80 80, 80 180 C 80 80, 110 80, 110 180 C 110 80, 140 80, 140 180"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column: Heading + Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-950/60 border border-purple-800/50 text-purple-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 w-max">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>37K+ Satisfied Customers</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-6 font-display"
            >
              Hear From <br />
              Those We've <br />
              Helped Grow
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm mb-6"
            >
              Discover how our solutions have helped businesses like yours achieve real results. Our clients share their experience
            </motion.p>
          </div>

          {/* Right Column: 2 Vertical Twitter/X Review Columns with Smooth Edge-Masked Ticker */}
          <div className="lg:col-span-7 h-[500px] overflow-hidden relative mask-edges-v">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              
              {/* Column 1 Ticker */}
              <div className="animate-marquee-y flex flex-col space-y-4">
                {column1.map((item, idx) => (
                  <div
                    key={`col1-${idx}`}
                    className="bg-white text-gray-900 rounded-2xl p-5 shadow-lg border border-gray-100 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-gray-900">{item.name}</h4>
                          <span className="text-[10px] text-gray-400">{item.handle}</span>
                        </div>
                      </div>

                      {/* Twitter bird icon */}
                      <svg className="w-4 h-4 text-sky-400 fill-current" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                      </svg>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      "{item.text}"
                    </p>
                  </div>
                ))}
              </div>

              {/* Column 2 Ticker (Hidden on extra small devices, visible on sm+) */}
              <div className="hidden sm:flex animate-marquee-y flex-col space-y-4" style={{ animationDelay: '-12s' }}>
                {column2.map((item, idx) => (
                  <div
                    key={`col2-${idx}`}
                    className="bg-white text-gray-900 rounded-2xl p-5 shadow-lg border border-gray-100 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-gray-900">{item.name}</h4>
                          <span className="text-[10px] text-gray-400">{item.handle}</span>
                        </div>
                      </div>

                      <svg className="w-4 h-4 text-sky-400 fill-current" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                      </svg>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      "{item.text}"
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
