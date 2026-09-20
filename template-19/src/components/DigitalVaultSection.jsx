import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, FileText, Cloud, Award, Clock, ArrowUpRight } from 'lucide-react';

export default function DigitalVaultSection({ onExploreVault }) {
  const [activePill, setActivePill] = useState('ownership');

  const vaultFeatures = [
    {
      id: 'ownership',
      title: 'Ownership Records',
      desc: 'Immutable cryptographic timestamping of title and serial numbers directly linked to your verified identity.',
      icon: FileText,
    },
    {
      id: 'cloud',
      title: 'Secure Cloud Storage',
      desc: 'Encrypted multi-region vault backing up appraisal paperwork, original receipts, and box & papers photos.',
      icon: Cloud,
    },
    {
      id: 'service',
      title: 'Service History',
      desc: 'Complete log of official boutique overhauls, pressure tests, polishing records, and replacement components.',
      icon: Clock,
    },
    {
      id: 'insurance',
      title: 'Insurance Information',
      desc: 'Automated valuation certificate export compliant with Lloyd’s of London, Chubb, and Hodinkee Insurance.',
      icon: ShieldCheck,
    },
    {
      id: 'warranty',
      title: 'Warranty Tracking',
      desc: 'Proactive alerts on 5-year manufacture international guarantee deadlines and recommended service windows.',
      icon: Award,
    },
  ];

  return (
    <section id="vault" className="py-24 sm:py-32 bg-[#05070A] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Gold Ambient Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-500/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-mono text-xs text-gold-400 uppercase tracking-widest font-semibold mb-2">
            DIGITAL VAULT
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white tracking-tight">
            A Digital Vault For Your <br className="hidden sm:block" />
            <span className="italic font-serif text-gold-400">Collection</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Bank-grade military encryption protecting high-resolution macro photography, service
            dossiers, and international insurance documentation.
          </p>
        </div>

        {/* Massive Luxury Watch Showcase Visual */}
        <div className="relative rounded-3xl sm:rounded-5xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] shadow-2xl p-6 sm:p-12 mb-12 group">
          <div className="relative h-[320px] sm:h-[440px] md:h-[520px] w-full rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center">
            <img
              src="/assets/vault-rolex-rose-gold.jpg"
              alt="Rose gold Rolex Daytona Cosmograph with black Oysterflex strap resting on dark reflective surface"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-black/30 pointer-events-none" />

            {/* Top Vault Security Tag */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-500/30 text-xs font-mono text-gold-300">
              <Lock className="w-3.5 h-3.5 text-gold-400" />
              <span>AES-256 ZERO-KNOWLEDGE ENCRYPTION</span>
            </div>
          </div>
        </div>

        {/* Floating Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {vaultFeatures.map((feat) => {
            const isActive = activePill === feat.id;
            const Icon = feat.icon;

            return (
              <button
                key={feat.id}
                onClick={() => setActivePill(feat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gold-500 text-black shadow-gold-glow font-bold border-gold-500 scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-gold-500/40 hover:bg-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-gold-400'}`} />
                <span>{feat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Vault Feature Drawer / Detail */}
        <AnimatePresence mode="wait">
          {activePill && (
            <motion.div
              key={activePill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-8 max-w-xl mx-auto p-5 rounded-2xl bg-[#0A0D12] border border-gold-500/30 text-center shadow-xl"
            >
              <span className="font-mono text-[10px] text-gold-400 uppercase font-bold tracking-widest block mb-1">
                VAULT PROTOCOL ACTIVE
              </span>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                {vaultFeatures.find((f) => f.id === activePill)?.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
