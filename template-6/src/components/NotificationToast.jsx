import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Heart, Info } from 'lucide-react';

export default function NotificationToast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-4 shadow-2xl border border-neutral-800 flex items-center gap-3 min-w-[280px]"
      >
        {toast.type === 'cart' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
        {toast.type === 'wishlist' && <Heart className="w-5 h-5 text-rose-400 fill-rose-400 shrink-0" />}
        {toast.type === 'info' && <Info className="w-5 h-5 text-sky-400 shrink-0" />}

        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-300">
            {toast.title}
          </p>
          <p className="text-xs text-neutral-400 mt-0.5">
            {toast.message}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
