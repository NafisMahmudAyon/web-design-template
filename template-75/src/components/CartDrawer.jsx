import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 500;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

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
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
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
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-casala-teal" />
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">Your Cart</h3>
                  <span className="text-xs text-gray-400 font-semibold">({items.length} items)</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="px-6 py-3 bg-[#F8FAFC] border-b border-gray-100">
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  {subtotal >= freeShippingThreshold ? (
                    <span className="text-emerald-700 font-semibold">🎉 You unlocked Free White-Glove Delivery!</span>
                  ) : (
                    <span className="text-gray-600">
                      Add <strong className="text-gray-900">${(freeShippingThreshold - subtotal).toFixed(2)}</strong> for Free Shipping
                    </span>
                  )}
                  <span className="text-gray-400">{Math.round(progressToFreeShipping)}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-casala-teal transition-all duration-300 rounded-full"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-3">
                    <ShoppingBag className="w-12 h-12 stroke-[1] text-gray-300" />
                    <p className="text-sm font-medium text-gray-500">Your cart is currently empty</p>
                    <button
                      onClick={onClose}
                      className="text-xs text-casala-teal font-semibold hover:underline"
                    >
                      Browse the Capsule collection
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-3 rounded-lg border border-gray-100 bg-[#FAFAFA]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain bg-white rounded-md p-1 border border-gray-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-gray-900 truncate">{item.name}</h4>
                        <p className="text-xs text-gray-500 mb-2">${item.price.toFixed(2)}</p>
                        
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-white space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">White-Glove Shipping</span>
                    <span className="font-semibold text-emerald-600">
                      {subtotal >= freeShippingThreshold ? 'FREE' : '$45.00'}
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-base font-bold text-gray-900">
                    <span>Total</span>
                    <span>
                      ${(subtotal + (subtotal >= freeShippingThreshold ? 0 : 45)).toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={onCheckout}
                    className="w-full py-3.5 bg-casala-teal hover:bg-casala-teal-dark text-white font-medium text-sm rounded-sm transition-all shadow-md flex items-center justify-center space-x-2 group"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
