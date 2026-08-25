import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 150;
  const progressPct = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#F5F5F5] z-50 shadow-2xl border-l border-[#E2E2E2] flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#E2E2E2] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-black" />
                <h3 className="text-lg font-extrabold text-[#121212] tracking-tight">Your Cart</h3>
                <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full font-bold">
                  {cartItems.reduce((a, c) => a + c.quantity, 0)}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-[#121212] hover:bg-[#EAEAEA] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="bg-white px-6 py-3 border-b border-[#E2E2E2]">
              <p className="text-xs font-semibold text-[#555555] mb-1">
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-emerald-700 font-bold">🎉 You unlocked FREE Express Shipping!</span>
                ) : (
                  <>Add <span className="font-extrabold text-black">${freeShippingThreshold - subtotal}</span> more for Free Shipping</>
                )}
              </p>
              <div className="w-full bg-[#EAEAEA] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-black h-full transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#888888]">
                  <ShoppingBag className="w-16 h-16 stroke-[1]" />
                  <p className="text-base font-semibold text-[#444444]">Your cart is currently empty.</p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-black text-white text-xs uppercase font-bold tracking-wider"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white border border-[#E2E2E2] flex items-center gap-4 relative group"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 bg-[#F5F5F5] flex items-center justify-center shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain mix-blend-multiply"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[#121212] truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#777777] font-medium mt-0.5">
                        ${item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3 mt-3">
                        <div className="flex items-center border border-[#E2E2E2] bg-[#F5F5F5]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-[#E2E2E2] text-black"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-[#E2E2E2] text-black"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-xs text-red-500 hover:underline flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Total Price */}
                    <div className="text-right font-extrabold text-sm text-[#121212]">
                      ${item.price * item.quantity}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Subtotal & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-[#E2E2E2] space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#666666] font-medium">Subtotal</span>
                  <span className="font-extrabold text-xl text-[#121212]">${subtotal}</span>
                </div>
                <p className="text-xs text-[#888888]">Taxes and shipping calculated at checkout.</p>
                <button
                  onClick={onCheckout}
                  className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
