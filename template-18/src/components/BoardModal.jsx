import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShoppingBag, Waves, ShieldCheck, Ruler, ArrowRight } from 'lucide-react';

export default function BoardModal({ board, isOpen, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('standard');
  const [selectedTint, setSelectedTint] = useState('seafoam');
  const [isAdded, setIsAdded] = useState(false);

  if (!isOpen || !board) return null;

  const tints = [
    { id: 'seafoam', name: 'Seafoam Teal', color: '#009E96' },
    { id: 'coral', name: 'Pacific Coral', color: '#E06D53' },
    { id: 'sand', name: 'Raw Sand Clear', color: '#D9D7CE' },
  ];

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart({
      ...board,
      selectedSize,
      selectedTint,
    });
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl sm:rounded-4xl shadow-2xl max-w-3xl w-full overflow-hidden z-10 border border-black/10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Board Visual */}
            <div className="relative bg-[#F5F6F3] p-8 flex items-center justify-center overflow-hidden min-h-[320px]">
              <img
                src={board.image}
                alt={board.name}
                className="w-full h-full max-h-[420px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-mono">
                {board.dimensions}
              </div>
            </div>

            {/* Board Specs & Configuration */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#009E96] font-bold uppercase mb-1">
                  <span>{board.category}</span>
                  <span>•</span>
                  <span>{board.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0F1E1B]">
                  {board.name}
                </h3>
                <div className="text-xl font-display font-bold text-[#009E96] mt-1">
                  ${board.price} USD
                </div>

                <p className="mt-3 text-xs text-[#5B6B67] leading-relaxed">
                  {board.description}
                </p>

                {/* Specs List */}
                <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-200/70 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volume:</span>
                    <span className="font-bold text-[#0F1E1B]">{board.volume}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fin System:</span>
                    <span className="font-bold text-[#0F1E1B]">{board.finSetup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Glass Layup:</span>
                    <span className="font-bold text-[#0F1E1B]">4oz + 4oz Deck / 4oz Bottom</span>
                  </div>
                </div>

                {/* Tint Resin Selector */}
                <div className="mt-5">
                  <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-2">
                    Resin Tint Finish
                  </label>
                  <div className="flex items-center gap-3">
                    {tints.map((tint) => (
                      <button
                        key={tint.id}
                        onClick={() => setSelectedTint(tint.id)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                          selectedTint === tint.id
                            ? 'border-[#009E96] bg-teal-50 text-[#009E96] font-bold ring-1 ring-[#009E96]'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: tint.color }}
                        />
                        <span>{tint.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                <button
                  onClick={handleAdd}
                  disabled={isAdded}
                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#009E96] hover:bg-[#028B84] text-white shadow-teal-subtle'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>BOARD ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO BAG • ${board.price}</span>
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
