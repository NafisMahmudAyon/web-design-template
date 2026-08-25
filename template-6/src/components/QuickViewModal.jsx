import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Heart, Shield, Truck, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuickViewModal({ product, onClose, onAddToCart, onToggleWishlist, isWishlisted }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart({ ...product, selectedSize }, quantity);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-4xl bg-[#F5F5F5] border border-[#E2E2E2] shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full text-black hover:bg-black hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Product Image */}
          <div className="w-full md:w-1/2 p-8 bg-[#EAEAEA] flex items-center justify-center relative min-h-[300px]">
            {product.badge && (
              <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[350px] max-w-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Column: Product Details */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              
              <p className="text-xs uppercase tracking-widest font-bold text-[#888888]">
                {product.category || "ORVIA Premium Collection"}
              </p>

              <h2 className="text-2xl md:text-3xl font-extrabold text-[#121212] tracking-tight">
                {product.title}
              </h2>

              <div className="flex items-center space-x-3">
                <span className="text-2xl font-extrabold text-[#121212]">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm line-through text-[#999999]">
                    ${product.originalPrice}
                  </span>
                )}
                {product.rating && (
                  <div className="flex items-center gap-1 bg-white border border-[#E2E2E2] px-2.5 py-1 text-xs font-bold text-black rounded-full">
                    <Star className="w-3.5 h-3.5 fill-black text-black" />
                    <span>{product.rating}</span>
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed border-t border-b border-[#E2E2E2] py-4">
                {product.description || "Carefully designed and crafted with premium materials to elevate your daily style with lasting durability."}
              </p>

              {/* Size Selector (If applicable) */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#555555]">
                  Select Size
                </span>
                <div className="flex gap-2 mt-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-10 h-10 text-xs font-bold border transition-colors cursor-pointer ${
                        selectedSize === s
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-[#E2E2E2] hover:border-black'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Picker */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#555555]">
                  Quantity
                </span>
                <div className="flex items-center space-x-3 mt-2">
                  <div className="flex items-center border border-[#E2E2E2] bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-black hover:bg-[#F0F0F0]"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-bold text-sm">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-black hover:bg-[#F0F0F0]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="pt-6 space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 py-4 bg-black text-white text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-4 border border-[#E2E2E2] bg-white transition-colors ${
                    isWishlisted(product.id) ? 'text-red-500' : 'text-[#888888] hover:text-black'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted(product.id) ? 'fill-red-500' : ''}`} />
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E2E2E2] text-[10px] text-[#777777]">
                <div className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Quality Guarantee</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Fast Shipping</span>
                </div>
                <div className="flex items-center gap-1">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Easy Returns</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
