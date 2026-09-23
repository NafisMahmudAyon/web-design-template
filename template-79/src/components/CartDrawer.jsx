import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export const CartDrawer = ({ isOpen, onClose, items, onUpdateQty, onRemoveItem }) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 25;
  const total = subtotal + (items.length > 0 ? shipping : 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-slideLeft">
          {/* Header */}
          <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-furn-forest" />
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Your Shopping Bag
              </h3>
              <span className="text-xs text-neutral-400 font-medium ml-1">
                ({items.reduce((acc, i) => acc + i.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-neutral-400">
                <ShoppingBag className="w-12 h-12 stroke-1 mb-3 text-neutral-300" />
                <p className="font-serif text-lg font-bold text-neutral-800">
                  Your bag is empty
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Explore our curated furniture pieces and add items to your bag.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3.5 rounded-xl border border-neutral-100 bg-[#FAF8F5]"
                >
                  <div className="w-16 h-16 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 border border-neutral-200/50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-bold text-neutral-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold text-furn-forest mt-0.5">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-neutral-800 w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-neutral-400 hover:text-rose-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-neutral-100 bg-white space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>Subtotal</span>
                <span className="font-semibold text-neutral-800">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>White Glove Delivery</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}.00`}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-neutral-900 pt-2 border-t border-neutral-100">
                <span>Total</span>
                <span className="font-serif text-lg text-furn-forest">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => {
                  alert('Order successfully submitted! Thank you for purchasing from FURN.');
                  onClose();
                }}
                className="w-full py-3.5 bg-furn-forest hover:bg-furn-forestDark text-white font-semibold text-xs tracking-wider rounded-full shadow-md flex items-center justify-center gap-2 transition-all mt-3"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
