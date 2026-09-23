import React from 'react';
import { X, CheckCircle2, ShieldCheck, Heart, ShoppingBag } from 'lucide-react';

export default function ProductModal({ isOpen, onClose, product, onAddToCart }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#faf4ef]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#2e1d1b]/50 block mb-1">
            Certified Organic Formula
          </span>
          <h3 className="text-2xl font-serif font-black text-[#2e1d1b] capitalize mb-2">
            {product.title}
          </h3>
          <p className="text-base font-serif font-bold text-[#2e1d1b] mb-4">
            {product.price || '$48.00'}
          </p>

          <p className="text-xs text-[#2e1d1b]/70 leading-relaxed mb-6 font-normal">
            {product.description ||
              'Formulated with organic botanicals to support natural cellular renewal, lymphatic drainage, and luminous barrier hydration.'}
          </p>

          <div className="space-y-2 mb-8 text-[11px] text-[#2e1d1b]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Dermatologically tested & 100% vegan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Sustainably harvested in Oregon, USA</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 py-3 bg-[#2e1d1b] hover:bg-[#1e1211] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ADD TO CART</span>
            </button>

            <button
              className="p-3 border border-[#2e1d1b]/20 hover:border-[#2e1d1b] text-[#2e1d1b] rounded-xl transition-colors"
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
