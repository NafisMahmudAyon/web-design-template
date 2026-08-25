import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, CheckCircle2, Box, Image as ImageIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ExportModal({ isOpen, onClose }) {
  const [isExported, setIsExported] = useState(false);

  const handleExport = () => {
    setIsExported(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#ff5722', '#2196f3']
    });

    setTimeout(() => {
      setIsExported(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-[#121418] rounded-[36px] p-6 shadow-2xl z-10 border border-white/20 text-white overflow-hidden"
        >
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {isExported ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-white text-gray-950 flex items-center justify-center shadow-xl">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">3D Render Downloaded!</h3>
              <p className="text-xs text-gray-400">4K PNG Texture & 3D GLTF Mesh ready in your downloads folder.</p>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-bold font-display text-white mb-1">Export 3D Render</h3>
              <p className="text-xs text-gray-400 mb-6">Choose format and resolution for production export.</p>

              <div className="space-y-3 mb-6">
                <div 
                  onClick={handleExport}
                  className="p-4 rounded-2xl bg-[#1a1d24] border border-white/10 hover:border-white cursor-pointer flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">4K High-Res Render (PNG)</h4>
                      <p className="text-[10px] text-gray-400">3840 × 2160 • Transparent Background</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-white" />
                </div>

                <div 
                  onClick={handleExport}
                  className="p-4 rounded-2xl bg-[#1a1d24] border border-white/10 hover:border-white cursor-pointer flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center">
                      <Box className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">3D Mesh Model (.GLTF / .OBJ)</h4>
                      <p className="text-[10px] text-gray-400">With UV Mapped Textures</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
