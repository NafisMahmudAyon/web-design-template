import React from 'react';
import { motion } from 'framer-motion';

export default function MarginsSection() {
  const facilityPhotos = [
    {
      code: 'D1',
      title: 'FLOODLIT HARD COURTS, OPEN UNTIL 22:00',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=85',
      span: 'col-span-12',
    },
    {
      code: 'D2',
      title: 'STRENGTH FLOOR',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=85',
      span: 'col-span-12 sm:col-span-6',
    },
    {
      code: 'D3',
      title: 'COACH CONTACT TIME',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=85',
      span: 'col-span-12 sm:col-span-6',
    },
    {
      code: 'D4',
      title: 'FEED & MACHINE REPETITION BLOCKS',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=85',
      span: 'col-span-12',
    },
  ];

  return (
    <section id="margins" className="py-24 bg-[#0d131b] border-y border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title & Key Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-tight text-white">
                MARGINS DECIDE MATCHES.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                Court surface, ball pressure, recovery windows, sleep, hydration — we track the small variables because they are the ones that show up at 5-5.
              </p>
            </div>

            {/* Stats Stack */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-condensed text-xs font-bold text-gray-400 tracking-wider uppercase">COURT BLOCKS / DAY</span>
                <span className="font-display text-4xl font-bold text-vantageNeon">2</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-condensed text-xs font-bold text-gray-400 tracking-wider uppercase">SQUAD SIZE</span>
                <span className="font-display text-4xl font-bold text-vantageNeon">6</span>
              </div>

              <div className="flex items-center justify-between pb-2">
                <span className="font-condensed text-xs font-bold text-gray-400 tracking-wider uppercase">FILM REVIEW / WEEK</span>
                <span className="font-display text-4xl font-bold text-vantageNeon">3</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Photo Facility Collage */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            {facilityPhotos.map((item, idx) => (
              <div
                key={idx}
                className={`${item.span} relative rounded-2xl overflow-hidden h-44 sm:h-52 border border-white/15 shadow-xl group`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d131b] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 right-3 text-xs font-condensed tracking-wider">
                  <span className="text-vantageNeon font-bold mr-1.5">{item.code} —</span>
                  <span className="text-white font-bold">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
