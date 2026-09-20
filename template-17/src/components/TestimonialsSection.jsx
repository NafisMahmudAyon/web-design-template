import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#f5f6f2] text-[#111814] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Proof Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-[#d6ded7] text-[#1b3b2b] inline-block mb-6 shadow-sm">
            Lesson
          </span>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="/assets/trusted-avatars.png"
                alt="Partner golfers"
                className="h-9 w-auto object-contain rounded-full shadow-sm"
              />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#526359] block">Trusted by Industry Partner</span>
              <div className="flex items-center gap-1 text-[#f59e0b] mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111814] leading-[1.12]"
          >
            Real golfers share honest <br />
            experiences about booking <br />
            courses, lessons, and <br />
            improving their game together.
          </motion.h2>
        </div>

        {/* 2-Row Testimonial Grid */}
        <div className="space-y-6">
          {/* Top Row: Card 01 (Span 4) + Card 02 (Span 8 - Featured Dark Card with Portrait) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Card 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 bg-white rounded-3xl p-7 border border-[#e1e7e0] shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-[#111814] block mb-6">01</span>
                <h4 className="text-lg font-bold text-[#111814] leading-snug">
                  Booking my tee time was incredibly
                </h4>
                <p className="mt-4 text-sm text-[#526359] italic leading-relaxed">
                  "Booking a tee time took seconds, and the lesson feedback helped fix my swing instantly. The entire experience felt simple, professional, and motivating from start to finish."
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-end justify-between">
                <div>
                  <h5 className="text-sm font-bold text-[#111814]">Aiko Matsuda</h5>
                  <p className="text-xs text-[#829288]">Amateur Golfer</p>
                </div>
                <span className="text-3xl text-[#d4ded6] font-serif select-none">””</span>
              </div>
            </motion.div>

            {/* Card 02: Featured Dark Green Card with Golfer Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8 bg-[#11231a] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 group"
            >
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <span className="text-3xl font-extrabold text-white block mb-6">02</span>
                  <h4 className="text-xl font-bold text-white leading-snug">
                    Booking my tee time was incredibly
                  </h4>
                  <p className="mt-4 text-sm text-white/80 italic leading-relaxed">
                    "Booking my tee time was incredibly easy, and the lesson I took helped lower my score immediately, boosting my confidence and overall enjoyment of the game. The smooth experience, expert guidance, and intuitive platform made every step feel effortless and rewarding."
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-end justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-white">Aiko Matsuda</h5>
                    <p className="text-xs text-white/60">Amateur Golfer</p>
                  </div>
                  <span className="text-4xl text-white font-serif select-none">””</span>
                </div>
              </div>

              {/* Golfer Portrait Photo */}
              <div className="w-full md:w-64 h-64 sm:h-72 rounded-2xl overflow-hidden flex-shrink-0 bg-emerald-950 border border-white/15 shadow-xl">
                <img
                  src="/assets/testimonial-portrait.png"
                  alt="Golfer portrait in polo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: 3 Equal Cards (03, 04, 05) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-3xl p-7 border border-[#e1e7e0] shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-[#111814] block mb-6">03</span>
                <h4 className="text-lg font-bold text-[#111814] leading-snug">
                  Lessons that actually improved my score
                </h4>
                <p className="mt-4 text-sm text-[#526359] italic leading-relaxed">
                  "I booked a lesson and saw real improvement within days. The platform made scheduling effortless, and the coaching insights were clear, practical, and easy to apply on the course."
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-end justify-between">
                <div>
                  <h5 className="text-sm font-bold text-[#111814]">Aiko Matsuda</h5>
                  <p className="text-xs text-[#829288]">Amateur Golfer</p>
                </div>
                <span className="text-3xl text-[#d4ded6] font-serif select-none">””</span>
              </div>
            </motion.div>

            {/* Card 04 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-7 border border-[#e1e7e0] shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-[#111814] block mb-6">04</span>
                <h4 className="text-lg font-bold text-[#111814] leading-snug">
                  A stress-free way to plan my golf days
                </h4>
                <p className="mt-4 text-sm text-[#526359] italic leading-relaxed">
                  "From finding nearby courses to confirming my slot, everything worked seamlessly. The smooth flow and helpful guidance made every round more enjoyable and well-planned."
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-end justify-between">
                <div>
                  <h5 className="text-sm font-bold text-[#111814]">Aiko Matsuda</h5>
                  <p className="text-xs text-[#829288]">Amateur Golfer</p>
                </div>
                <span className="text-3xl text-[#d4ded6] font-serif select-none">””</span>
              </div>
            </motion.div>

            {/* Card 05 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-white rounded-3xl p-7 border border-[#e1e7e0] shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-[#111814] block mb-6">05</span>
                <h4 className="text-lg font-bold text-[#111814] leading-snug">
                  Perfect balance of booking and learning
                </h4>
                <p className="mt-4 text-sm text-[#526359] italic leading-relaxed">
                  "I loved how easy it was to book both courses and lessons in one place. The expert tips boosted my confidence and helped me enjoy the game more consistently."
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-end justify-between">
                <div>
                  <h5 className="text-sm font-bold text-[#111814]">Aiko Matsuda</h5>
                  <p className="text-xs text-[#829288]">Amateur Golfer</p>
                </div>
                <span className="text-3xl text-[#d4ded6] font-serif select-none">””</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
