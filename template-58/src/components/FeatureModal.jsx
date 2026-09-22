import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

export const FeatureModal = ({ isOpen, onClose, feature, onStartTrial }) => {
  if (!isOpen || !feature) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-brandOrange flex items-center justify-center mb-4">
            <Shield className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
            {feature.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
            {feature.description} Designed to seamlessly connect with all global clearing networks, Catalxg ensures your assets are protected, liquid, and accessible 24 hours a day, 7 days a week.
          </p>

          <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brandOrange" />
              <span>Real-time multi-currency ledger synchronization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brandOrange" />
              <span>Zero foreign transaction fees on standard accounts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brandOrange" />
              <span>End-to-end 256-bit AES encryption & SOC2 Type II compliance</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onStartTrial?.();
            }}
            className="w-full py-3.5 rounded-full bg-brandOrange hover:bg-brandOrange-hover text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <span>Start Free Trial with {feature.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
