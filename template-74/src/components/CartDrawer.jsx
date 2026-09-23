import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, items, onRemoveItem, onCheckout }) {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace('$', '')) || 280;
    return sum + priceNum * (item.quantity || 1);
  }, 0);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      onCheckout();
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-slideLeft">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gray-900" />
            <h3 className="text-base font-bold text-gray-900 tracking-tight">
              Shopping Bag ({items.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items List */}
        {checkoutSuccess ? (
          <div className="my-auto py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Order Confirmed!</h4>
            <p className="text-xs text-gray-500 max-w-xs">
              Thank you for ordering with Dust+Cream. Your order has been placed successfully.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="my-auto text-center py-12">
            <p className="text-sm text-gray-500 mb-4">Your shopping bag is empty</p>
            <button
              onClick={onClose}
              className="text-xs font-bold uppercase tracking-wider text-black underline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto py-6 space-y-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-3 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h5 className="text-xs font-bold text-gray-900 truncate">
                    {item.title}
                  </h5>
                  <p className="text-[11px] text-gray-500 mt-0.5">{item.price}</p>
                </div>
                <button
                  onClick={() => onRemoveItem(idx)}
                  className="p-1.5 text-gray-400 hover:text-rose-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && !checkoutSuccess && (
          <div className="pt-6 border-t border-gray-100 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-gray-900">
              <span>Subtotal</span>
              <span className="text-base font-bold">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-3.5 bg-[#5b7b99] hover:bg-[#486682] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <span>CHECKOUT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
