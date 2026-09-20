import React from 'react';
import { motion } from 'framer-motion';

export default function AboutGolfioSection() {
  return (
    <section id="about" className="relative bg-[#f5f6f2] text-[#111814] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag & Title */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-[#1b3b2b]/70 block mb-3">
            About golfio
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111814] leading-[1.12]"
          >
            Our technologies enhance <br />
            course yields, reduce
          </motion.h2>
        </div>

        {/* Dynamic Circular Cluster Mosaic (Desktop layout & responsive mobile stack) */}
        <div className="mt-16 relative min-h-[640px] hidden md:block">
          {/* 1. Circle 01: Coaching Experience (Top Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute left-4 top-8 flex items-center gap-6"
          >
            <div className="relative w-44 h-44 rounded-full bg-[#0a1711] text-white p-5 flex flex-col items-center justify-center text-center shadow-xl group hover:scale-105 transition-transform duration-300">
              <span className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-white text-[#0a1711] text-sm font-bold flex items-center justify-center shadow-md border border-[#e2e8e2]">
                01
              </span>
              <h4 className="text-lg font-bold leading-tight">Coaching<br />Experience</h4>
            </div>

            <div className="max-w-[200px]">
              <span className="text-4xl lg:text-5xl font-extrabold text-[#111814] tracking-tight">12%</span>
              <p className="mt-1 text-xs text-[#526359] leading-relaxed">
                Our experience spans years of professional golf coaching and real on-course instruction.
              </p>
            </div>
          </motion.div>

          {/* 2. Circle 03: 3 Golfers looking down (Center Top) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-[38%] top-0"
          >
            <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl group hover:scale-105 transition-transform duration-500">
              <img
                src="/assets/mosaic-3golfers.jpg"
                alt="Three golfers looking into the cup"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute top-2 right-2 w-10 h-10 rounded-full bg-white text-[#0a1711] text-sm font-bold flex items-center justify-center shadow-md border border-[#e2e8e2]">
                03
              </span>
            </div>
          </motion.div>

          {/* 3. Metric 3,500+ (Top Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute right-12 top-6 max-w-[240px]"
          >
            <span className="text-5xl lg:text-6xl font-extrabold text-[#111814] tracking-tight">3,500+</span>
            <p className="mt-2 text-sm text-[#526359] leading-relaxed">
              Each year, we help golfers successfully book countless lessons and tee times with ease.
            </p>
          </motion.div>

          {/* 4. Circle 02: Certified Instructors Putting (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="absolute left-16 bottom-4 flex items-center gap-6"
          >
            <div className="max-w-[190px]">
              <span className="text-4xl font-extrabold text-[#111814] tracking-tight">20+</span>
              <p className="mt-1 text-xs text-[#526359] leading-relaxed">
                Our technologies enhance course yields, reduce resource, and support
              </p>
            </div>

            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl group hover:scale-105 transition-transform duration-500">
              <img
                src="/assets/mosaic-putting.jpg"
                alt="Golfer putting on green"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
              />
              <span className="absolute top-2 left-2 w-10 h-10 rounded-full bg-white text-[#0a1711] text-sm font-bold flex items-center justify-center shadow-md border border-[#e2e8e2]">
                02
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-4 text-center">
                <span className="text-xs font-bold text-white tracking-wide">
                  Certified Instructors
                </span>
              </div>
            </div>
          </motion.div>

          {/* 5. Metric 10+ (Bottom Center) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute left-[48%] bottom-6 max-w-[200px]"
          >
            <span className="text-5xl font-extrabold text-[#111814] tracking-tight">10+</span>
            <p className="mt-2 text-xs text-[#526359] leading-relaxed">
              Our team is made up of PGA and nationally certified golf professionals you can trust.
            </p>
          </motion.div>

          {/* 6. Circle 04: Rounds & Lessons Annually (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="absolute right-4 bottom-0"
          >
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl group hover:scale-105 transition-transform duration-500">
              <img
                src="/assets/mosaic-ball-hand.jpg"
                alt="Placing yellow golf ball on green grass"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white text-[#0a1711] text-sm font-bold flex items-center justify-center shadow-md border border-[#e2e8e2]">
                04
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end justify-center pb-8 px-6 text-center">
                <span className="text-base font-bold text-white tracking-tight">
                  Rounds & Lessons Annually
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Clean Responsive Stack */}
        <div className="mt-12 md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#e1e6df] shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#0a1711] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              12%
            </div>
            <div>
              <h4 className="font-bold text-base">Coaching Experience</h4>
              <p className="text-xs text-[#526359] mt-1">Professional golf coaching and on-course instruction.</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#e1e6df] shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img src="/assets/mosaic-putting.jpg" alt="Putting" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#111814]">20+</span>
              <h4 className="font-bold text-sm">Certified Instructors</h4>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#e1e6df] shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img src="/assets/mosaic-3golfers.jpg" alt="Golfers" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#111814]">3,500+</span>
              <h4 className="font-bold text-sm">Rounds Booked</h4>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#e1e6df] shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img src="/assets/mosaic-ball-hand.jpg" alt="Ball on tee" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#111814]">10+</span>
              <h4 className="font-bold text-sm">PGA Pro Staff</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
