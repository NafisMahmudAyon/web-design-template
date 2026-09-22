import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const freeShippingThreshold = 200;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCost = isFreeShipping || subtotal === 0 ? 0 : 15;
  const total = subtotal + shippingCost;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-neutral-900" />
                  <h3 className="text-base font-bold text-neutral-950 font-serif">
                    Your Field Bag
                  </h3>
                  <span className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded text-neutral-600">
                    ({cartItems.reduce((acc, it) => acc + it.quantity, 0)})
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 text-neutral-400 hover:text-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Bar */}
              <div className="bg-neutral-50 px-6 py-3 border-b border-neutral-200/80 text-xs font-mono">
                {isFreeShipping ? (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> You have qualified for free worldwide shipping!
                  </span>
                ) : (
                  <div>
                    <p className="text-neutral-600 mb-1.5">
                      Add <span className="font-bold text-neutral-900">${amountToFreeShipping.toFixed(2)}</span> more for free shipping
                    </p>
                    <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-neutral-950 h-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="text-base font-bold text-neutral-900 mb-1 font-serif">
                      Your field bag is empty
                    </p>
                    <p className="text-xs text-neutral-500 max-w-xs mb-6 font-mono">
                      Equip yourself with handcrafted waxed canvas outerwear made for the wilderness.
                    </p>
                    <button
                      onClick={onClose}
                      className="bg-neutral-950 text-white text-xs font-mono font-bold px-6 py-3 rounded-xs hover:bg-neutral-800 transition-all uppercase tracking-wider"
                    >
                      Return to Product
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 p-3 bg-neutral-50 rounded-xs border border-neutral-200"
                    >
                      <div className="w-20 h-24 bg-[#EEEEEE] flex items-center justify-center shrink-0 p-1 border border-neutral-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-neutral-950 font-serif leading-snug truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs font-mono text-neutral-500 mt-1">
                          Size: {item.selectedSize} • {item.selectedColor}
                        </p>
                        <p className="text-sm font-bold font-sans text-neutral-900 mt-2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-neutral-400 hover:text-rose-600 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="flex items-center border border-neutral-300 bg-white rounded-xs">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 text-neutral-600 hover:text-black font-mono text-xs"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-mono font-bold text-neutral-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 text-neutral-600 hover:text-black font-mono text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-neutral-200 bg-neutral-50 space-y-3 font-mono">
                  <div className="flex items-center justify-between text-xs text-neutral-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-neutral-950">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-600">
                    <span>Shipping</span>
                    <span className="font-bold text-neutral-950">
                      {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-neutral-200 flex items-center justify-between">
                    <span className="text-sm font-bold text-neutral-950">Estimated Total</span>
                    <span className="text-lg font-bold text-neutral-950">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={onCheckout}
                    className="w-full mt-2 bg-neutral-950 hover:bg-neutral-800 text-white font-sans font-bold text-xs uppercase tracking-wider py-4 rounded-xs transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span>Proceed to Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
