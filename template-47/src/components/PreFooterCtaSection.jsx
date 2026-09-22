import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sprout } from 'lucide-react';

export const PreFooterCtaSection = ({ onContactUs }) => {
  return (
    <section className="relative pt-24 pb-40 overflow-hidden text-center">
      {/* Background field photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&auto=format&fit=crop&q=80"
          alt="Farmland landscape"
          className="w-full h-full object-cover"
        />
        {/* Soft white/cream haze gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-agro-cream via-white/80 to-agro-cream/40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-agro-dark leading-tight"
        >
          Make farming smarter, <br />
          <span className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-agro-forest">
            stronger, and simpler
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-sm sm:text-base text-agro-muted max-w-xl mx-auto"
        >
          Straightforward answers to help you make confident decisions for your farm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <button
            onClick={onContactUs}
            className="px-8 py-3.5 rounded-full bg-agro-forest text-white text-xs sm:text-sm font-bold hover:bg-agro-dark hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};
