import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 50.0;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between z-10"
        >
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-emerald-50/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#0c6b3e]" />
              <h3 className="text-base font-bold text-gray-900">
                Your Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors shadow-sm"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-emerald-50/30 border-b border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-1.5 font-medium">
              <span>
                {subtotal >= freeShippingThreshold ? (
                  <strong className="text-[#0c6b3e]">🎉 You unlocked FREE Shipping!</strong>
                ) : (
                  <span>
                    Add <strong>${(freeShippingThreshold - subtotal).toFixed(2)}</strong> more for <strong>FREE Shipping</strong>
                  </span>
                )}
              </span>
              <span className="font-bold text-gray-900">{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0c6b3e] rounded-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              ></div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12 text-gray-400">
                <ShoppingBag className="w-12 h-12 text-gray-300 mb-3 stroke-[1.5]" />
                <p className="text-sm font-semibold text-gray-600">Your cart is currently empty</p>
                <p className="text-xs text-gray-400 mt-1 max-w-xs">
                  Discover farm fresh fruits, crisp organic vegetables, and fresh bakery items.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 p-3 rounded-2xl border border-gray-100 bg-gray-50/60 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain bg-white rounded-xl p-1 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-400">{item.weight || item.category}</p>
                    <p className="text-xs font-bold text-[#0c6b3e] mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 border border-gray-200 shadow-sm">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-400 hover:text-gray-700"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-gray-800 w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-400 hover:text-gray-700"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-400 hover:text-rose-500 transition-colors p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-gray-100 bg-gray-50 flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 font-medium">Subtotal</span>
                <span className="text-base font-black text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-gray-400">
                Taxes and shipping calculated at checkout.
              </p>

              <button
                type="button"
                onClick={() => alert('Proceeding to checkout with total: $' + subtotal.toFixed(2))}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#0c6b3e] hover:bg-[#085430] text-white text-xs font-bold shadow-lg shadow-emerald-900/20 transition-all active:scale-95"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
