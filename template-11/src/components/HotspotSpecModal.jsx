import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShieldCheck, Feather, Trees } from 'lucide-react';

export default function HotspotSpecModal({ hotspot, onClose }) {
  if (!hotspot) return null;

  const contentMap = {
    'premium-materials': {
      title: 'Premium Bouclé & Belgian Linen',
      subtitle: 'Soft Cushioning & Anti-Stain Coating',
      icon: Feather,
      details: 'Woven with 100% hypoallergenic natural wool and Belgian flax linen fibers. Treated with eco-friendly nano-coating that repels dust, spills, and everyday wear.',
      specs: [
        { key: 'Composition', val: '70% Wool, 30% Linen' },
        { key: 'Martindale Abrasion', val: '50,000 Rubs (Heavy Domestic)' },
        { key: 'Stain Protection', val: 'Integrated Dustproof Shield' }
      ]
    },
    'natural-finish': {
      title: 'Solid American Dark Oak',
      subtitle: 'Hand-Rubbed Organic Oil Finish',
      icon: Trees,
      details: 'Sourced from sustainably managed FSC-certified American forests. Kiln-dried to prevent warping, then hand-finished with non-toxic botanical oils.',
      specs: [
        { key: 'Timber Type', val: 'FSC-Certified Solid Dark Oak' },
        { key: 'Finish', val: 'Matte Botanical Oil' },
        { key: 'Joinery', val: 'Traditional Mortise & Tenon' }
      ]
    }
  };

  const data = contentMap[hotspot] || contentMap['premium-materials'];
  const Icon = data.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-[#16181d] rounded-[32px] p-6 shadow-2xl z-10 border border-white/20 text-white overflow-hidden"
        >
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-white text-gray-950 flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Craftsmanship Detail</span>
              <h3 className="text-lg font-bold font-display text-white">{data.title}</h3>
            </div>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium mb-5 bg-[#1f2229] p-3.5 rounded-2xl border border-white/5">
            {data.details}
          </p>

          <div className="space-y-2 mb-6">
            {data.specs.map((s, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                <span className="text-gray-400 font-medium">{s.key}</span>
                <span className="font-bold text-white">{s.val}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full bg-white hover:bg-gray-100 text-gray-950 font-bold py-3 rounded-2xl text-xs transition-colors shadow-md cursor-pointer"
          >
            Close Material View
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
