import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onRemoveItem, onUpdateQuantity }) {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 240 }}
          className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#009E96]" />
              <h3 className="font-display font-extrabold text-lg text-[#0F1E1B]">
                Your Surf Bag ({cart.reduce((s, i) => s + (i.quantity || 1), 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-400">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-[#009E96]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-base text-[#0F1E1B]">Your Bag Is Empty</h4>
                <p className="text-xs text-gray-500 mt-1 max-w-xs">
                  Discover our handcrafted boards shaped for point breaks and beach barrels.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#009E96] text-white text-xs font-semibold shadow-md"
                >
                  Explore Boards
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex gap-4 p-4 rounded-2xl bg-[#F5F6F3] border border-black/5 items-center justify-between"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="font-display font-bold text-sm text-[#0F1E1B] truncate">
                      {item.name}
                    </h5>
                    <span className="text-[11px] font-mono text-[#009E96] block">
                      ${item.price} • {item.dimensions}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-gray-500 font-mono">
                        Qty: {item.quantity || 1}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-gray-400 hover:text-rose-500 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-[#FAFAF7]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-gray-500">Subtotal</span>
                <span className="font-display font-bold text-lg text-[#0F1E1B]">
                  ${total.toFixed(2)} USD
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-teal-700 bg-teal-50 p-2.5 rounded-xl mb-4">
                <ShieldCheck className="w-4 h-4 text-[#009E96]" />
                <span>Complimentary padded cardboard crate & domestic freight</span>
              </div>

              <button
                onClick={() => alert('Demo checkout flow initialized! All boards are handcrafted to order.')}
                className="w-full py-3.5 px-6 rounded-full bg-[#009E96] hover:bg-[#028B84] text-white font-semibold text-xs tracking-wider transition-all duration-300 shadow-teal-subtle flex items-center justify-center gap-2"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
