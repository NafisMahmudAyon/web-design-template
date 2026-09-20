import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const ACCORDION_ITEMS = [
  {
    num: '01',
    title: 'Premium & public courses',
    description: 'Gain entry to premier championship courses, member clubs, and top public links across the nation.',
    image: '/assets/session-card-1.jpg',
  },
  {
    num: '02',
    title: 'Real-time tee time availability',
    description: 'Direct connectivity with tee-sheet management software guarantees up-to-the-second slot reservations.',
    image: '/assets/session-card-3.jpg',
  },
  {
    num: '03',
    title: 'Flexible booking options',
    description: 'Real golfers share their experiences booking courses and learning from certified instructors on Golfio.',
    image: '/assets/accordion-golfer.png',
  },
  {
    num: '04',
    title: 'Instant confirmation',
    description: 'Zero booking lag. Instant confirmation emails, passbook mobile passes, and 24/7 dedicated golfer support.',
    image: '/assets/session-card-4.jpg',
  },
];

export default function ConfidenceSection({ onOpenBooking, onOpenLessonModal }) {
  const [activeItemNum, setActiveItemNum] = useState('03');

  return (
    <section className="relative bg-[#f5f6f2] text-[#111814] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111814] leading-[1.12]"
          >
            Book Golf Courses with <br />
            Confidence. Play Without Hassle.
          </motion.h2>
          <p className="mt-4 text-base sm:text-lg text-[#55675d] leading-relaxed max-w-2xl">
            From premium and public courses to real-time tee availability and instant confirmation, we make booking your next round simple, fast, and reliable.
          </p>
        </div>

        {/* 2-Column Split: Image on Left + Interactive Accordion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Two Golfers on Course */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl bg-[#dbe3dc] border border-[#d6ded7] relative group"
          >
            <img
              src="/assets/two-golfers.png"
              alt="Two golfers on fairway with clubs"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              {ACCORDION_ITEMS.map((item) => {
                const isExpanded = activeItemNum === item.num;

                return (
                  <motion.div
                    key={item.num}
                    layout
                    onClick={() => setActiveItemNum(item.num)}
                    className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                      isExpanded
                        ? 'bg-white shadow-xl border border-black/5 p-6'
                        : 'bg-white/80 hover:bg-white border border-[#e1e7e0] p-5'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-[#8b9c92]">
                          {item.num}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#111814]">
                          {item.title}
                        </h3>
                      </div>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isExpanded ? 'bg-[#111814] text-white' : 'bg-[#edf1eb] text-[#111814]'
                      }`}>
                        <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                    </div>

                    {/* Expanded Content Body */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-5 pt-4 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-5"
                        >
                          <div className="flex-1">
                            <p className="text-sm text-[#526359] leading-relaxed">
                              {item.description}
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenLessonModal ? onOpenLessonModal(item) : onOpenBooking();
                              }}
                              className="mt-4 px-5 py-2 rounded-full border border-black/15 text-xs font-bold text-[#111814] hover:bg-black/5 transition-colors inline-block"
                            >
                              View Details
                            </button>
                          </div>

                          {/* Thumbnail Image */}
                          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-md bg-[#e4ebe4]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={onOpenBooking}
                className="bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-xl shadow-[#E2F844]/25"
              >
                Book a Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
