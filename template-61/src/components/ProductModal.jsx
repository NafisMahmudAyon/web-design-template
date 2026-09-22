import React, { useState } from 'react';
import { X, Heart, Check, ShieldCheck, Truck, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  isFavorite,
  onToggleWishlist
}) {
  const [selectedSize, setSelectedSize] = useState('42');
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart({ ...product, selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-neutral-100 z-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Product Visual */}
              <div className="bg-[#F6F7F9] rounded-2xl p-6 flex flex-col items-center justify-center relative min-h-[260px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-52 w-auto object-contain filter drop-shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                />
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    isFavorite
                      ? 'bg-rose-50 border-rose-200 text-rose-500'
                      : 'bg-white border-neutral-200 text-neutral-400 hover:text-rose-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              {/* Details & Customization */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    {product.category || 'Shoes'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-950 font-syne tracking-tight mt-1">
                    {product.name}
                  </h3>

                  {/* Color dots selection */}
                  <div className="mt-3">
                    <span className="text-xs font-bold text-neutral-500 block mb-1.5">
                      Available Colorways:
                    </span>
                    <div className="flex items-center gap-2">
                      {product.colorDots?.map((color, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedColorIndex(idx)}
                          className={`w-6 h-6 rounded-full border-2 transition-all ${
                            selectedColorIndex === idx
                              ? 'border-neutral-900 scale-110 shadow-xs'
                              : 'border-transparent hover:scale-105'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-2xl font-black text-neutral-950 mt-4 font-syne">
                    {product.priceDisplay || `$${product.price}`}
                  </p>

                  {/* Size Selector */}
                  <div className="mt-4">
                    <label className="text-xs font-bold text-neutral-700 block mb-2">
                      Select Size (EU): <span className="text-neutral-950 font-extrabold">{selectedSize}</span>
                    </label>
                    <div className="flex items-center gap-2">
                      {['41', '42', '43', '44', '45'].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-9 h-9 text-xs font-bold rounded-xl border transition-all ${
                            selectedSize === size
                              ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                              : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <button
                    onClick={handleAdd}
                    className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg active:scale-98 ${
                      added
                        ? 'bg-emerald-600 text-white'
                        : 'bg-neutral-950 hover:bg-neutral-800 text-white'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <span>Add to Bag • {product.priceDisplay}</span>
                        <ShoppingBag className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="mt-4 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-neutral-500" /> Free Shipping
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" /> 100% Authentic
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
