import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShieldCheck, Truck, RefreshCw, ShoppingBag } from 'lucide-react';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '#0B6577');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedColor,
      quantity,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="relative flex items-center justify-center bg-[#FAFAFA] rounded-xl p-6 border border-gray-100 min-h-[280px]">
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/10 blur-lg rounded-full" />
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[240px] w-auto object-contain drop-shadow-sm select-none"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase text-casala-teal tracking-wider mb-1 block">
                  {product.tag}
                </span>

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{product.designer}</p>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                </div>

                <div className="text-2xl font-bold text-[#DC2626] mb-4">
                  ${product.price.toFixed(2)}
                </div>

                {/* Color Selector */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-700 block mb-2">
                    Fabric Tone
                  </span>
                  <div className="flex items-center space-x-2">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        style={{ backgroundColor: color }}
                        className={`w-6 h-6 rounded-full transition-all ${
                          selectedColor === color
                            ? 'ring-2 ring-offset-2 ring-casala-teal scale-110'
                            : 'hover:scale-105'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Dimensions */}
                <div className="text-xs text-gray-600 mb-6 bg-gray-50 p-2.5 rounded border border-gray-100">
                  <span className="font-semibold text-gray-800">Dimensions: </span>
                  {product.dimensions}
                </div>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAdd}
                className="w-full py-3.5 bg-casala-teal hover:bg-casala-teal-dark text-white font-medium text-sm rounded-sm transition-all shadow-md flex items-center justify-center space-x-2 group"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart • ${(product.price * quantity).toFixed(2)}</span>
              </button>

              {/* Guarantee badges */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100 text-[10px] text-gray-500 text-center">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-gray-400 mb-1" />
                  <span>10-Yr Warranty</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-4 h-4 text-gray-400 mb-1" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex flex-col items-center">
                  <RefreshCw className="w-4 h-4 text-gray-400 mb-1" />
                  <span>100-Day Trial</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
