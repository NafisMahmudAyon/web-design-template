import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { athleticPrograms } from '../data/elevateData';

export default function ProgramsSection({ onSelectProgram }) {
  const [activeProgramId, setActiveProgramId] = useState('basketball');

  const toggleProgram = (id) => {
    setActiveProgramId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="programs" className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-bold text-[#182623] tracking-tight font-display max-w-lg"
            >
              Programs Designed For Every Athlete
            </motion.h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
            Join elite sports camps designed to sharpen skills, boost confidence, and elevate your game.
          </p>
        </div>

        {/* Programs Accordion List */}
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {athleticPrograms.map((program) => {
            const isOpen = activeProgramId === program.id;

            return (
              <div
                key={program.id}
                className="py-6 sm:py-8 cursor-pointer transition-colors"
                onClick={() => toggleProgram(program.id)}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${
                      isOpen ? 'text-[#2E5B53]' : 'text-[#182623] hover:text-[#2E5B53]'
                    }`}
                  >
                    {program.name}
                  </h3>

                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#2E5B53]' : ''
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden pt-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#FAFDFB] p-6 sm:p-8 rounded-3xl border border-gray-100">
                        {/* Description & Action */}
                        <div className="md:col-span-6 space-y-4">
                          <div className="flex items-center space-x-3 text-xs font-semibold text-emerald-800">
                            <span className="bg-emerald-100/80 px-3 py-1 rounded-full">{program.duration}</span>
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">{program.ageGroup}</span>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md">
                            {program.description}
                          </p>

                          <div className="pt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectProgram(program);
                              }}
                              className="bg-[#182623] hover:bg-[#2E5B53] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wide inline-flex items-center space-x-2 transition-all group"
                            >
                              <span>Learn More</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                          </div>
                        </div>

                        {/* Program Image Visual */}
                        <div className="md:col-span-6">
                          <img
                            src={program.image}
                            alt={program.name}
                            className="w-full h-56 sm:h-64 object-cover rounded-2xl shadow-md"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
