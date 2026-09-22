import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner({ onGetStarted, onContactSales }) {
  return (
    <section className="py-24 flowzy-cta-bg text-center border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-display">
            Bring Your Team Together & <br />
            Deliver Better Projects
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-lg mx-auto">
            Plan smarter, collaborate seamlessly, and track every project from one powerful workspace.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onGetStarted}
              className="px-6 py-3 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-xs tracking-wide shadow-lg shadow-purple-500/25 inline-flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onContactSales}
              className="px-6 py-3 rounded-full bg-white hover:bg-gray-50 text-[#0F172A] border border-gray-200 font-semibold text-xs tracking-wide shadow-sm transition-all hover:scale-105"
            >
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
