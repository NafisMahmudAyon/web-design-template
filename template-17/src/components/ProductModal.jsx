import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Star, ShoppingCart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProductModal({ item, isOpen, onClose }) {
  const [added, setAdded] = useState(false);

  if (!isOpen || !item) return null;

  const handleAdd = () => {
    setAdded(true);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#E2F844', '#11231a', '#ffffff'],
    });
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0e2218] border border-white/15 rounded-3xl w-full max-w-md p-6 text-white shadow-2xl relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 mb-5 border border-white/10">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>

        <span className="text-xs font-semibold text-[#E2F844] uppercase tracking-wider">{item.category}</span>
        <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
        
        <div className="flex items-center justify-between mt-3 mb-6">
          <span className="text-2xl font-extrabold text-white">{item.price}</span>
          <span className="text-sm text-[#E2F844] flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" /> {item.rating} (Verified Buyer Reviews)
          </span>
        </div>

        <button
          onClick={handleAdd}
          className={`w-full py-3.5 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
            added
              ? 'bg-emerald-500 text-white'
              : 'bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] shadow-lg shadow-[#E2F844]/20'
          }`}
        >
          {added ? (
            <>
              <Check className="w-5 h-5" />
              <span>Added to Golf Bag!</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Bag</span>
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
}
