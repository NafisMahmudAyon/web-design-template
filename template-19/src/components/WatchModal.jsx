import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShieldCheck, TrendingUp, Sparkles, Award, ArrowUpRight, Lock } from 'lucide-react';

export default function WatchModal({ watch, isOpen, onClose, onAddToVault }) {
  const [inquirySent, setInquirySent] = useState(false);

  if (!isOpen || !watch) return null;

  const handleInquire = () => {
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#0A0D12] border border-gold-500/40 rounded-3xl sm:rounded-4xl shadow-2xl max-w-3xl w-full overflow-hidden z-10 my-8 text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Watch Media */}
            <div className="relative bg-[#07090D] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/[0.08]">
              <div className="w-60 h-60 rounded-full overflow-hidden border border-white/10 shadow-2xl relative">
                <img
                  src={watch.image}
                  alt={watch.model}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/70 px-3 py-1 rounded-full border border-gold-500/30 text-[10px] font-mono text-gold-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>CHRONOVA VERIFIED ESCROW</span>
              </div>
            </div>

            {/* Watch Details & Valuation */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-gold-400 uppercase tracking-widest font-bold mb-1">
                  <span>{watch.brand || 'Luxury Horology'}</span>
                  <span>•</span>
                  <span>{watch.ref || 'Ref. 116500LN'}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  {watch.model}
                </h3>

                <div className="flex items-baseline gap-3 mt-2 mb-4">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-white">
                    {watch.current || watch.askPrice || '$38,500'}
                  </span>
                  <span className="font-mono text-xs text-emerald-400 font-bold flex items-center">
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                    {watch.returnRate || '+18.4% 3Y Return'}
                  </span>
                </div>

                {/* Specs Table */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] font-mono text-xs space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Authenticity:</span>
                    <span className="text-white font-bold">100% Original Box & Papers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Secondary Liquidity:</span>
                    <span className="text-gold-400 font-bold">Tier 1 (High Demand)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vault Custody:</span>
                    <span className="text-white font-bold">Insured by Lloyd's</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  Every timepiece authenticated by master watchmakers with complete micro-spectrometry
                  gold testing and movement timegrapher analysis.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center gap-3">
                <button
                  onClick={handleInquire}
                  disabled={inquirySent}
                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-xs tracking-wider transition-all duration-300 shadow-gold-subtle flex items-center justify-center gap-2 ${
                    inquirySent
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black shadow-gold-glow'
                  }`}
                >
                  {inquirySent ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>VAULT DOSSIER REQUEST SENT</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>INQUIRE / ACQUIRE TIMEPIECE</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
