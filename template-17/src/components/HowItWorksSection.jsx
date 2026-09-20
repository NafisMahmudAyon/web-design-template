import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, CalendarCheck, Award, ArrowUpRight } from 'lucide-react';

const FEATURES = [
  {
    title: 'Find Nearby Courses',
    description: 'Find top-rated golf courses and training facilities based on your location.',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-[#e3eae3] flex items-center justify-center p-2 text-[#1b3b2b] border border-[#d2ddd2]">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="12" r="6" stroke="#1b3b2b" strokeWidth="2" fill="#E2F844" fillOpacity="0.4" />
          <circle cx="16" cy="12" r="2.5" fill="#1b3b2b" />
          <path d="M 6 24 C 10 21, 22 21, 26 24" stroke="#1b3b2b" strokeWidth="2" strokeLinecap="round" />
          <rect x="10" y="23" width="12" height="4" rx="2" fill="#1b3b2b" />
        </svg>
      </div>
    ),
  },
  {
    title: 'Choose Your Experience',
    description: 'Select tee times, private lessons, or group coaching sessions with certified golf instructors.',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-[#e3eae3] flex items-center justify-center p-2 text-[#1b3b2b] border border-[#d2ddd2]">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="11" r="5" stroke="#1b3b2b" strokeWidth="2" fill="#E2F844" fillOpacity="0.4" />
          <path d="M 16 16 L 16 22" stroke="#1b3b2b" strokeWidth="2" strokeLinecap="round" />
          <rect x="7" y="22" width="18" height="5" rx="2.5" stroke="#1b3b2b" strokeWidth="2" fill="#E2F844" />
        </svg>
      </div>
    ),
  },
  {
    title: 'Book Instantly',
    description: 'Confirm your booking in seconds with real-time availability and secure',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-[#e3eae3] flex items-center justify-center p-2 text-[#1b3b2b] border border-[#d2ddd2]">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="8" width="20" height="18" rx="4" stroke="#1b3b2b" strokeWidth="2" fill="white" />
          <line x1="6" y1="14" x2="26" y2="14" stroke="#1b3b2b" strokeWidth="2" />
          <circle cx="11" cy="19" r="1.5" fill="#1b3b2b" />
          <circle cx="16" cy="19" r="1.5" fill="#E2F844" />
          <circle cx="21" cy="19" r="1.5" fill="#1b3b2b" />
        </svg>
      </div>
    ),
  },
  {
    title: 'Play & Improve',
    description: 'Show up, play your round, and track your progress with personalized tips and performance insights.',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-[#e3eae3] flex items-center justify-center p-2 text-[#1b3b2b] border border-[#d2ddd2]">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 8 20 C 14 12, 18 10, 24 8" stroke="#1b3b2b" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <circle cx="24" cy="8" r="3" fill="#E2F844" stroke="#1b3b2b" strokeWidth="1.5" />
          <rect x="7" y="22" width="18" height="4" rx="2" fill="#1b3b2b" />
        </svg>
      </div>
    ),
  },
];

export default function HowItWorksSection({ onOpenBooking }) {
  return (
    <section id="how-it-works" className="relative bg-[#f5f6f2] text-[#131b17] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag & Big Heading */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1b3b2b]" />
            <span className="text-sm font-semibold tracking-wider uppercase text-[#1b3b2b]/80">
              How it work
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111814] tracking-tight leading-[1.2]"
          >
            Your journey to better golf begins here{' '}
            <span className="inline-flex items-center align-middle mx-1.5 rounded-full overflow-hidden border-2 border-[#1b3b2b]/30 shadow-md w-16 sm:w-20 h-7 sm:h-9 relative -top-0.5">
              <img
                src="/assets/capsule-course.png"
                alt="Golf Course Capsule"
                className="w-full h-full object-cover scale-110"
              />
            </span>{' '}
            with expert guidance, seamless booking and personalized experiences designed to elevate your game.
          </motion.h2>

          <p className="mt-6 text-base sm:text-lg text-[#55675d] leading-relaxed max-w-2xl">
            From beginners to advanced players, our certified golf instructors provide personalized lessons tailored to your skill level and goals.
          </p>
        </div>

        {/* Content Grid: Golfer Follow-through + 2x2 Features */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Golfer Cutout Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <img
                src="/assets/golfer-swing-transparent.png"
                alt="Golfer finishing powerful follow-through swing"
                className="w-full h-auto object-contain filter drop-shadow-2xl"
              />
              {/* Subtle background glow effect */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 blur-xl rounded-full" />
            </div>
          </motion.div>

          {/* Right Column: 2x2 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {FEATURES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={onOpenBooking}
                className="flex flex-col gap-4 p-6 rounded-3xl bg-white/70 hover:bg-white border border-[#e1e6df] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111814] group-hover:text-[#1e4a34] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-2 text-sm text-[#5a6c62] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
