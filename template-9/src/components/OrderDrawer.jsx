import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Check, Sparkles, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OrderDrawer({ isOpen, onClose }) {
  const [selectedPack, setSelectedPack] = useState('6-pack');
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [isOrdered, setIsOrdered] = useState(false);

  const packs = [
    { id: '3-pack', name: '3-Day Starter Pack', count: '3 Bottles', price: 24, discountPrice: 21 },
    { id: '6-pack', name: '6-Day Detox Pack', count: '6 Bottles (Most Popular)', price: 42, discountPrice: 35, popular: true },
    { id: '12-pack', name: '12-Day Transformation', count: '12 Bottles', price: 78, discountPrice: 65 },
  ];

  const activePackObj = packs.find(p => p.id === selectedPack) || packs[1];
  const finalPrice = isSubscribe ? activePackObj.discountPrice : activePackObj.price;

  const handleCheckout = () => {
    setIsOrdered(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#9ad972', '#2c4b2e', '#ffffff', '#e4f2df']
    });

    setTimeout(() => {
      setIsOrdered(false);
      onClose();
    }, 2400);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-[#132114] text-[#e4f2df] border-l border-[#2d462f] p-6 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2d462f] mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#9ad972]" />
                  <h2 className="text-lg font-bold text-white font-display">Order Green Fuel</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {isOrdered ? (
                <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#9ad972] text-gray-950 flex items-center justify-center shadow-lg">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Order Confirmed!</h3>
                  <p className="text-xs text-gray-300 max-w-xs">Your cold-pressed Green Fuel Smoothie pack will be freshly prepared and shipped within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Select Pack */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Select Detox Pack</label>
                    <div className="space-y-2.5">
                      {packs.map((p) => {
                        const isSelected = selectedPack === p.id;
                        return (
                          <div
                            key={p.id}
                            onClick={() => setSelectedPack(p.id)}
                            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#1b2d1c] border-[#9ad972] shadow-md'
                                : 'bg-[#182919]/60 border-white/10 hover:bg-[#1b2d1c]'
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-xs font-bold text-white">{p.name}</h4>
                                {p.popular && (
                                  <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#9ad972] text-gray-950">
                                    Best Value
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-400">{p.count}</p>
                            </div>

                            <span className="text-sm font-extrabold text-[#9ad972] font-display">
                              ${isSubscribe ? p.discountPrice : p.price}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Subscribe & Save 15% Toggle */}
                  <div 
                    onClick={() => setIsSubscribe(!isSubscribe)}
                    className="p-3.5 rounded-2xl bg-[#1c301e] border border-[#335436] flex items-center justify-between cursor-pointer"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#9ad972]" />
                        Subscribe & Save 15%
                      </h4>
                      <p className="text-[10px] text-gray-300">Deliver every 1, 2, or 4 weeks. Cancel anytime.</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                      isSubscribe ? 'bg-[#9ad972] border-[#9ad972] text-gray-950' : 'border-gray-500'
                    }`}>
                      {isSubscribe && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  {/* Guarantee highlights */}
                  <div className="space-y-2 pt-2 border-t border-white/10 text-[11px] text-gray-300">
                    <div className="flex items-center gap-2">
                      <Truck className="w-3.5 h-3.5 text-emerald-400" /> Free Refrigerated Express Delivery
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Satisfaction or 30-Day Money Back
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Total Price & Checkout Button */}
            {!isOrdered && (
              <div className="pt-4 border-t border-[#2d462f]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400 font-medium">Subtotal</span>
                  <span className="text-2xl font-extrabold text-white font-display">${finalPrice}.00</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full bg-[#9ad972] hover:bg-[#88c960] text-gray-950 font-bold py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 text-xs cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
