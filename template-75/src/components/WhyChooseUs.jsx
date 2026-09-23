import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Armchair, Maximize2, Compass } from 'lucide-react';
import { whyChooseFeatures } from '../data/casalaData';

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const icons = {
    '01': Sparkles,
    '02': Armchair,
    '03': Maximize2,
    '04': Compass,
  };

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading + Paragraph + Lounge Chair Visual */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-serif text-[#171A1F] tracking-tight mb-4"
            >
              Why Choose Us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-[#60646C] leading-relaxed max-w-lg mb-10"
            >
              Capsule chairs are more than just pieces of furniture; they are a lifestyle. Here's why they're the perfect addition to your space:
            </motion.p>

            {/* Lounge Chair Visual with Soft Floor Shadow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative max-w-[440px] w-full mx-auto lg:mx-0 group cursor-pointer"
            >
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/10 blur-xl rounded-full transition-transform duration-500 group-hover:scale-105" />
              <img
                src="/assets/why-choose-lounge.png"
                alt="Casala Capsule Lounge Chair"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:-translate-y-1.5"
              />
            </motion.div>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseFeatures.map((item, idx) => {
                const IconComponent = icons[item.id] || Sparkles;
                const isHovered = hoveredCard === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    /* Zero CLS Spacing Stability: fixed min-height with subtle internal transform */
                    className={`h-[220px] p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                      isHovered
                        ? 'bg-white border-casala-teal/30 shadow-lg -translate-y-1'
                        : 'bg-white/80 border-gray-100 shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Numbered Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                            isHovered
                              ? 'bg-casala-teal text-white shadow-sm'
                              : 'bg-[#F0F7FF] text-[#0284C7]'
                          }`}
                        >
                          {item.id}
                        </span>
                        <IconComponent
                          className={`w-5 h-5 transition-colors ${
                            isHovered ? 'text-casala-teal' : 'text-gray-300'
                          }`}
                        />
                      </div>

                      {/* Feature Title */}
                      <h3 className="text-lg font-bold text-[#171A1F] tracking-tight mb-2">
                        {item.title}
                      </h3>

                      {/* Feature Description */}
                      <p className="text-xs text-[#6B7280] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Subtle bottom indicator line on hover */}
                    <div className="w-full h-0.5 bg-gray-100 rounded-full overflow-hidden mt-2">
                      <div
                        className={`h-full bg-casala-teal transition-all duration-300 ${
                          isHovered ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
