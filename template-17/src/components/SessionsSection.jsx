import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SESSION_ITEMS = [
  {
    num: '01',
    title: 'Premium & public courses',
    image: '/assets/session-card-1.jpg',
    badge: 'TechEd Academy',
    description: 'Explore an exclusive network of championship courses and premier local clubs with guaranteed tee slots.',
  },
  {
    num: '02',
    title: 'Flexible booking options',
    image: '/assets/session-card-2.jpg',
    badge: 'TechEd Academy',
    description: 'Real golfers share their experiences booking courses and learning from certified instructors on Golfio, highlighting easy reservations, expert coaching.',
  },
  {
    num: '03',
    title: 'Real-time tee time availability',
    image: '/assets/session-card-3.jpg',
    badge: 'TechEd Academy',
    description: 'Live sync with clubhouse booking engines ensures you lock in prime morning and afternoon tee times instantly.',
  },
  {
    num: '04',
    title: 'Instant confirmation',
    image: '/assets/session-card-4.jpg',
    badge: 'TechEd Academy',
    description: 'No waiting on hold. Receive instant digital passes, clubhouse check-in barcodes, and calendar reminders.',
  },
  {
    num: '05',
    title: 'Trusted Golf Venues',
    image: '/assets/session-card-5.jpg',
    badge: 'TechEd Academy',
    description: 'Every partner facility is verified for turf quality, practice range condition, and clubhouse hospitality.',
  },
];

export default function SessionsSection({ onOpenBooking, onOpenDetails }) {
  const [activeCardNum, setActiveCardNum] = useState('02');

  return (
    <section id="lessons" className="relative bg-[#07130e] text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/10 inline-block mb-4">
              Lesson
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Book Golf Sessions with Ease <br />
              Play with Confidence.
            </h2>
            <p className="mt-4 text-base text-white/70 max-w-xl leading-relaxed">
              From flexible booking options to real time availability and instant confirmation, we make finding and reserving the right golf experience simple and stress-free.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenDetails || onOpenBooking}
              className="bg-white hover:bg-white/90 text-[#0a1711] font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-xl"
            >
              View Details
            </button>
          </div>
        </div>

        {/* 5-Column Grid with Constant Height: Zero Layout Shift / Fluctuation */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch"
          onMouseLeave={() => setActiveCardNum('02')}
        >
          {SESSION_ITEMS.map((item) => {
            const isActive = activeCardNum === item.num;

            return (
              <div
                key={item.num}
                onMouseEnter={() => setActiveCardNum(item.num)}
                onClick={() => setActiveCardNum(item.num)}
                className="flex flex-col cursor-pointer group"
              >
                {/* Number header */}
                <div className="text-sm font-bold text-white/70 mb-2.5 px-1 flex items-center justify-between">
                  <span>{item.num}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E2F844]" />}
                </div>

                {/* Fixed Dimension Card Container: Height is ALWAYS constant 450px */}
                <div
                  className={`relative h-[430px] sm:h-[450px] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                    isActive
                      ? 'ring-2 ring-[#E2F844] shadow-2xl shadow-black/60 bg-white'
                      : 'border border-white/10 hover:border-white/30 bg-[#0e2118]'
                  }`}
                >
                  {/* Top Image Area: Flexes gracefully inside the fixed card container */}
                  <div className={`relative overflow-hidden transition-all duration-300 ${isActive ? 'h-[270px] sm:h-[285px] flex-shrink-0' : 'h-full'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Top Right Arrow Pill */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-[#E2F844] group-hover:text-[#0a1711] transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    {/* Title inside image for all cards */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-lg font-bold text-white leading-snug group-hover:text-[#E2F844] transition-colors">
                        {item.title}
                      </h4>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[11px] text-white/60 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/5">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Active Card Bottom Drawer: Fixed allocation inside container, zero layout jump */}
                  {isActive && (
                    <div className="h-[160px] sm:h-[165px] p-4 bg-white text-[#0a1711] flex flex-col justify-between flex-shrink-0">
                      <p className="text-xs text-[#425248] leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                      <div className="pt-2 border-t border-black/5 flex items-center justify-between">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenBooking();
                          }}
                          className="text-xs font-bold text-[#143123] hover:text-[#000] flex items-center gap-1 group/btn"
                        >
                          <span>Reserve Slot</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
