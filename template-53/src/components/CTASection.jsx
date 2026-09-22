import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection({ onOpenQuoteModal }) {
  return (
    <section className="py-16 sm:py-20 bg-[#FAFAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[36px] overflow-hidden min-h-[440px] sm:min-h-[500px] flex flex-col items-center justify-center text-center p-8 sm:p-14 shadow-2xl"
        >
          {/* Background Landscape with Wind Turbines & Solar Panel Foreground */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=2000&auto=format&fit=crop"
              alt="Wind turbines and solar farm under blue sky"
              className="w-full h-full object-cover object-center transform scale-105"
            />
            {/* Ambient Deep Blue/Cyan Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/85 via-sky-900/60 to-sky-950/80" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/60" />
          </div>

          {/* Centered Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12] font-display"
            >
              Ready to Power Your Future?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-sm sm:text-lg text-white/90 font-normal max-w-xl leading-relaxed"
            >
              Join thousands switching to clean energy. Get your free consultation today.
            </motion.p>

            {/* CTA Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-3.5 rounded-full bg-brand-lime hover:bg-brand-limeHover text-gray-950 font-bold text-sm sm:text-base shadow-xl hover:shadow-brand-lime/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:5551234567"
                className="px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium text-sm sm:text-base backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5"
              >
                <Phone className="w-4 h-4 opacity-90" />
                <span>(555) 123-4567</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
