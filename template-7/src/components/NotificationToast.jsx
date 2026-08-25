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
        className="fixed bottom-6 right-6 z-50 bg-black text-white px-6 py-4 shadow-2xl border border-white/20 rounded-2xl flex items-center gap-3 min-w-[300px]"
      >
        {toast.type === 'saved' && <Heart className="w-5 h-5 text-rose-400 fill-rose-400 shrink-0" />}
        {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#F8BA8B] shrink-0" />}
        {toast.type === 'info' && <Info className="w-5 h-5 text-sky-400 shrink-0" />}

        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-[#F8BA8B]">
            {toast.title}
          </p>
          <p className="text-xs text-white/80 mt-0.5 font-light">
            {toast.message}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
