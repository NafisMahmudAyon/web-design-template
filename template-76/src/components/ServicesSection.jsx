import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronUp, ArrowRight, Briefcase } from 'lucide-react';
import { servicesList } from '../data/saasData';

export default function ServicesSection({ onViewAllServices }) {
  const [expandedService, setExpandedService] = useState('api');

  const toggleService = (id) => {
    setExpandedService((prev) => (prev === id ? null : id));
  };

  return (
    <section id="features" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Category Badge + Title + Description + CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Small Category Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 w-max border border-purple-100">
              <Briefcase className="w-3.5 h-3.5 text-purple-600" />
              <span>Business Approach</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-[1.12] mb-6 font-display"
            >
              Driving Growth <br />
              Through Innovation <br />
              And Expertise
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md mb-8"
            >
              We combine smart strategy, innovative technology, and personalized support to help your business grow, adapt, and lead in today's fast-paced world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={onViewAllServices}
                className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white pl-6 pr-3 py-3 rounded-full text-sm font-semibold tracking-wide inline-flex items-center space-x-3 transition-all duration-300 shadow-[0_10px_25px_rgba(109,40,217,0.3)] hover:shadow-[0_14px_30px_rgba(109,40,217,0.5)] hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>View all services</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Services Accordion */}
          <div className="lg:col-span-7 divide-y divide-gray-200 border-y border-gray-200">
            {servicesList.map((service) => {
              const isExpanded = expandedService === service.id;

              return (
                <div
                  key={service.id}
                  className="py-6 sm:py-7 transition-colors cursor-pointer group"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                        isExpanded
                          ? 'text-[#6D28D9]'
                          : 'text-[#111827] group-hover:text-purple-700'
                      }`}
                    >
                      {service.title}
                    </h3>

                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 group-hover:text-purple-600 transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-[#6D28D9]" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-3 max-w-2xl">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
