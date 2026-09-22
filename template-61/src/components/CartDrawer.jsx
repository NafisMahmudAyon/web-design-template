import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
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
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 25;
  const total = subtotal + shipping;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-neutral-950 flex items-center justify-center text-white">
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 font-syne">
                    Shopping Bag
                  </h3>
                  <span className="text-xs bg-neutral-100 text-neutral-700 font-bold px-2 py-0.5 rounded-full ml-1">
                    {cartItems.reduce((acc, it) => acc + it.quantity, 0)}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="text-base font-bold text-neutral-900 mb-1">
                      Your bag is empty
                    </p>
                    <p className="text-xs text-neutral-500 max-w-xs mb-6">
                      Explore our latest collection and discover your signature footwear.
                    </p>
                    <button
                      onClick={onClose}
                      className="bg-neutral-950 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all"
                    >
                      Start Browsing
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedSize}`}
                      className="flex items-center gap-4 bg-neutral-50 p-3.5 rounded-2xl border border-neutral-100"
                    >
                      <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 shrink-0 border border-neutral-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-neutral-950 truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          Size: {item.selectedSize || '42'} • {item.category || 'Shoes'}
                        </p>
                        <p className="text-sm font-black text-neutral-950 mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => onRemoveItem(item.id, item.selectedSize)}
                          className="text-neutral-400 hover:text-rose-500 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="flex items-center border border-neutral-200 bg-white rounded-full px-1.5 py-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedSize, -1)}
                            className="p-1 text-neutral-500 hover:text-neutral-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-2 text-neutral-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedSize, 1)}
                            className="p-1 text-neutral-500 hover:text-neutral-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-neutral-100 bg-neutral-50 space-y-3">
                  <div className="flex items-center justify-between text-xs text-neutral-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-neutral-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-neutral-900">
                      {shipping === 0 ? (
                        <span className="text-emerald-600 font-bold">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-neutral-200/80 flex items-center justify-between">
                    <span className="text-sm font-bold text-neutral-900">Total</span>
                    <span className="text-lg font-black text-neutral-900 font-syne">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={onCheckout}
                    className="w-full mt-2 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm py-3.5 rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-lg active:scale-98"
                  >
                    <span>Checkout Now</span>
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
