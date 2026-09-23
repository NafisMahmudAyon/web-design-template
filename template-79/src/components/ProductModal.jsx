import React, { useState } from 'react';
import { X, Check, ShoppingBag, Heart, Shield, RotateCcw, Truck } from 'lucide-react';

export const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart({ ...product, quantity });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-8 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Media Column */}
          <div className="md:col-span-6 bg-[#F4EFEA] p-8 flex items-center justify-center relative min-h-[320px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-72 w-full object-contain"
            />
            <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-neutral-700">
              {product.category}
            </span>
          </div>

          {/* Right Product Details Column */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
                {product.name}
              </h3>
              <p className="text-xl font-serif font-bold text-furn-forest mb-4">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specs & Dimensions */}
              <div className="space-y-2 py-4 border-y border-neutral-100 text-xs text-neutral-600">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Dimensions</span>
                  <span className="font-medium text-neutral-900">{product.dimensions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Craftsmanship</span>
                  <span className="font-medium text-neutral-900">{product.material}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 my-6 text-[11px] text-neutral-500 text-center">
                <div className="p-2 rounded-lg bg-[#FAF8F5] flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-furn-forest" />
                  <span>White Glove</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAF8F5] flex flex-col items-center gap-1">
                  <Shield className="w-4 h-4 text-furn-forest" />
                  <span>10 Yrs Warranty</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAF8F5] flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-furn-forest" />
                  <span>30-Day Return</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-neutral-100 flex items-center gap-4">
              <div className="flex items-center border border-neutral-200 rounded-full px-3 py-1.5 bg-[#FAF8F5]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 text-neutral-600 font-bold hover:text-neutral-950"
                >
                  -
                </button>
                <span className="px-2 text-xs font-bold text-neutral-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 text-neutral-600 font-bold hover:text-neutral-950"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-6 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#0E4334] hover:bg-[#092D23] text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag &bull; ${(product.price * quantity).toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
