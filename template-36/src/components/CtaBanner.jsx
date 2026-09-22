import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export default function CtaBanner({ onDownloadClick }) {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1A1C] tracking-tight font-display">
            Start Building Your <br />
            Crypto Portfolio Today
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-lg mx-auto">
            Join thousands of investors using one secure platform to buy, trade, and grow digital assets with confidence.
          </p>

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDownloadClick}
              className="px-8 py-3.5 rounded-full bg-[#0B1A1C] text-white font-semibold text-sm hover:bg-[#163337] shadow-xl inline-flex items-center gap-2.5 transition-all"
            >
              <Download className="w-4 h-4 text-[#00D287]" />
              <span>Download App</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
