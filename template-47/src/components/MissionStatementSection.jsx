import React from 'react';
import { motion } from 'framer-motion';

export const MissionStatementSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-agro-cream relative overflow-hidden border-b border-agro-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        
        {/* Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agro-subtle border border-agro-border text-xs font-semibold text-agro-forest mb-8 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-agro-green" />
          <span>Cultiva Legacy</span>
        </motion.div>

        {/* Large Editorial Headline with Inline Image Pill */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-normal text-agro-dark leading-snug tracking-tight max-w-5xl mx-auto"
        >
          Our platform is built to support farmers, agribusinesses, and agricultural innovators by delivering{' '}
          <span className="inline-flex align-middle mx-2 -mt-1.5 rounded-full overflow-hidden border-2 border-white shadow-md w-20 sm:w-24 h-9 sm:h-11 relative">
            <img
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=200&auto=format&fit=crop&q=80"
              alt="Farmer in field"
              className="w-full h-full object-cover"
            />
          </span>{' '}
          practical tools that respect the land while improving productivity.
        </motion.h2>

      </div>
    </section>
  );
};
