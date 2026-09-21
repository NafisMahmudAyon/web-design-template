import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CartModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  if (!isOpen) return null;

  // Calculate Subtotal
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  };

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parsePrice(item.price) * (item.quantity || 1);
  }, 0);

  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shippingThreshold = 40;
  const shippingCost = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 5.99;
  const total = Math.max(0, subtotal - discount + shippingCost);

  const freeShippingProgress = Math.min(100, (subtotal / shippingThreshold) * 100);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'FRESHSUMMER') {
      setPromoApplied(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      {/* Backdrop overlay click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#eae6df] h-full shadow-2xl flex flex-col justify-between z-10 border-l-4 border-[#0a4b5c]">
        
        {/* Drawer Header */}
        <div className="bg-[#0a4b5c] text-white p-6 flex items-center justify-between border-b-2 border-[#0a4b5c]">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-6 h-6 text-[#b8ff00]" />
            <h3 className="font-display-title text-2xl font-black tracking-wider uppercase">
              YOUR SIP CART
            </h3>
            <span className="bg-[#b8ff00] text-[#0a4b5c] text-xs font-black px-2.5 py-0.5 rounded-full">
              {cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#0a4b5c]/10 p-4 border-b border-[#0a4b5c]/10 text-xs font-extrabold text-[#0a4b5c]">
          <div className="flex justify-between items-center mb-1.5">
            <span>
              {subtotal >= shippingThreshold
                ? '🎉 YOU UNLOCKED FREE SHIPPING!'
                : `ADD $${(shippingThreshold - subtotal).toFixed(2)} MORE FOR FREE SHIPPING`}
            </span>
            <span>{Math.round(freeShippingProgress)}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white border border-[#0a4b5c]/20 overflow-hidden">
            <div
              className="h-full bg-[#b8ff00] transition-all duration-300"
              style={{ width: `${freeShippingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Item List Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <ShoppingBag className="w-16 h-16 text-[#0a4b5c]/30 mx-auto" />
              <h4 className="font-display-title text-2xl font-black text-[#0a4b5c] uppercase">
                YOUR CART IS EMPTY
              </h4>
              <p className="text-xs text-[#0a4b5c]/70 font-medium max-w-xs mx-auto">
                Explore our small-batch botanical sparkling drinks and add your favorite sips.
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center space-x-2 bg-[#0a4b5c] text-white font-extrabold text-xs px-6 py-3 rounded-full hover:bg-emerald-950 transition-colors"
              >
                <span>START SHOPPING</span>
                <ArrowRight className="w-4 h-4 text-[#b8ff00]" />
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-2xl border-2 border-[#0a4b5c] flex items-center space-x-4 shadow-sm"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl border border-gray-200"
                  />
                )}
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-display-title text-base font-black text-[#0a4b5c] uppercase truncate">
                    {item.name}
                  </h4>
                  <span className="text-xs font-bold text-emerald-800 block">
                    {item.price}
                  </span>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 mt-2">
                    <div className="flex items-center space-x-2 bg-[#eae6df] border border-[#0a4b5c]/20 rounded-lg px-2 py-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                        className="text-[#0a4b5c] hover:text-black p-0.5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-black text-[#0a4b5c] min-w-[16px] text-center">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="text-[#0a4b5c] hover:text-black p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-800 p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right font-display-title text-lg font-black text-[#0a4b5c]">
                  ${(parsePrice(item.price) * (item.quantity || 1)).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout Button */}
        {cartItems.length > 0 && (
          <div className="bg-white p-6 border-t-2 border-[#0a4b5c] space-y-4">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex space-x-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Discount code (FRESHSUMMER)"
                className="bg-[#eae6df] border border-[#0a4b5c]/20 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-[#0a4b5c] flex-1 text-[#0a4b5c] uppercase font-bold"
              />
              <button
                type="submit"
                className="bg-[#0a4b5c] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-950 transition-colors"
              >
                APPLY
              </button>
            </form>

            {promoApplied && (
              <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-200 flex justify-between">
                <span>Code FRESHSUMMER applied!</span>
                <span>10% OFF</span>
              </div>
            )}

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-[#0a4b5c] font-bold border-t border-gray-100 pt-3">
              <div className="flex justify-between text-gray-600">
                <span>SUBTOTAL</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>DISCOUNT (10%)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-gray-600">
                <span>SHIPPING</span>
                <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
              </div>

              <div className="flex justify-between text-[#0a4b5c] pt-2 border-t border-gray-200">
                <span className="font-display-title text-xl font-black">TOTAL</span>
                <span className="font-display-title text-2xl font-black text-[#0a4b5c]">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              onClick={() => alert('Proceeding to Checkout!')}
              className="w-full bg-[#b8ff00] hover:bg-[#a6eb00] text-[#0a4b5c] font-black text-sm py-4 rounded-full border-2 border-[#0a4b5c] shadow-lg flex items-center justify-center space-x-2 tracking-wider transition-all transform hover:-translate-y-0.5"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-bold text-gray-500 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>SECURE ENCRYPTED CHECKOUT • 100% SATISFACTION GUARANTEED</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
