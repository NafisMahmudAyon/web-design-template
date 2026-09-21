import React, { useState } from 'react';
import { Check, Sparkles, RefreshCw, Truck, Calendar } from 'lucide-react';

export default function SubscriptionSection({ onAddToCart }) {
  const [packSize, setPackSize] = useState('12'); // '12' or '24'
  const [frequency, setFrequency] = useState('monthly'); // '2-weeks', 'monthly', '2-months'
  const [flavorPreference, setFlavorPreference] = useState('variety'); // 'variety', 'lime', 'peach'

  const price12 = 32.64; // 15% off $38.40
  const price24 = 61.20; // 15% off $72.00
  const currentPrice = packSize === '12' ? price12 : price24;
  const originalPrice = packSize === '12' ? '38.40' : '72.00';

  const handleSubscribe = () => {
    onAddToCart({
      id: `sub-${packSize}-${frequency}`,
      name: `VERDA ${packSize}-Pack Subscription (${frequency})`,
      price: `$${currentPrice.toFixed(2)}`,
    });
  };

  return (
    <section id="subscribe" className="py-20 bg-[#eae6df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0a4b5c] text-white rounded-3xl border-3 border-[#0a4b5c] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Badge */}
          <div className="absolute top-4 right-4 bg-[#b8ff00] text-[#0a4b5c] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
            SAVE 15% ON EVERY SHIPMENT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Offer Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full">
                <RefreshCw className="w-4 h-4 text-[#b8ff00]" />
                <span className="font-script text-2xl text-[#b8ff00] font-bold tracking-wide">
                  never run out
                </span>
              </div>

              <h2 className="font-display-title text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none">
                KEEP THE FRIDGE <span className="text-[#b8ff00]">ALWAYS FRESH.</span>
              </h2>

              <p className="text-base text-white/80 font-medium leading-relaxed">
                Subscribe to get your favorite sips delivered straight to your doorstep on your schedule. Swap flavors, pause, or cancel anytime with zero friction.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm font-bold">
                  <div className="w-6 h-6 rounded-full bg-[#b8ff00] text-[#0a4b5c] flex items-center justify-center font-black text-xs">
                    ✓
                  </div>
                  <span>15% discount applied automatically on every order</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-bold">
                  <div className="w-6 h-6 rounded-full bg-[#b8ff00] text-[#0a4b5c] flex items-center justify-center font-black text-xs">
                    ✓
                  </div>
                  <span>Free chilled temperature-controlled shipping</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-bold">
                  <div className="w-6 h-6 rounded-full bg-[#b8ff00] text-[#0a4b5c] flex items-center justify-center font-black text-xs">
                    ✓
                  </div>
                  <span>Skip, modify or pause subscription anytime in 1-click</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Box Builder */}
            <div className="lg:col-span-6 bg-white text-[#0a4b5c] p-6 sm:p-8 rounded-2xl border-2 border-[#0a4b5c] shadow-xl space-y-6">
              
              {/* Step 1: Pack Size Selection */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-[#0a4b5c]/70 block mb-2">
                  1. CHOOSE YOUR CAN COUNT
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPackSize('12')}
                    className={`p-4 rounded-xl border-2 font-bold text-left transition-all ${
                      packSize === '12'
                        ? 'border-[#0a4b5c] bg-[#b8ff00]/20 text-[#0a4b5c]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-display-title text-xl font-black">12 CANS</span>
                      {packSize === '12' && <Check className="w-4 h-4 text-[#0a4b5c]" />}
                    </div>
                    <span className="text-xs font-semibold block mt-1 text-[#0a4b5c]/70">$2.72 / can</span>
                  </button>

                  <button
                    onClick={() => setPackSize('24')}
                    className={`p-4 rounded-xl border-2 font-bold text-left transition-all relative ${
                      packSize === '24'
                        ? 'border-[#0a4b5c] bg-[#b8ff00]/20 text-[#0a4b5c]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <span className="absolute -top-2.5 right-3 bg-[#f7c948] text-[#0a4b5c] text-[9px] font-black px-2 py-0.5 rounded border border-[#0a4b5c]">
                      BEST VALUE
                    </span>
                    <div className="flex justify-between items-center">
                      <span className="font-display-title text-xl font-black">24 CANS</span>
                      {packSize === '24' && <Check className="w-4 h-4 text-[#0a4b5c]" />}
                    </div>
                    <span className="text-xs font-semibold block mt-1 text-[#0a4b5c]/70">$2.55 / can</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Delivery Frequency */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-[#0a4b5c]/70 block mb-2">
                  2. DELIVERY FREQUENCY
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '2-weeks', label: 'Every 2 Wks' },
                    { id: 'monthly', label: 'Every Month' },
                    { id: '2-months', label: 'Every 2 Mos' },
                  ].map((freq) => (
                    <button
                      key={freq.id}
                      onClick={() => setFrequency(freq.id)}
                      className={`py-2.5 text-xs font-extrabold rounded-lg border transition-all ${
                        frequency === freq.id
                          ? 'bg-[#0a4b5c] text-white border-[#0a4b5c]'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'
                      }`}
                    >
                      {freq.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Flavor Pack Selection */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-[#0a4b5c]/70 block mb-2">
                  3. FLAVOR SELECTION
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'variety', label: 'All 4 Variety' },
                    { id: 'lime', label: 'Lime & Ginger' },
                    { id: 'peach', label: 'Golden Hour' },
                  ].map((flav) => (
                    <button
                      key={flav.id}
                      onClick={() => setFlavorPreference(flav.id)}
                      className={`py-2 text-[11px] font-bold rounded-lg border transition-all ${
                        flavorPreference === flav.id
                          ? 'border-[#0a4b5c] bg-[#eae6df] text-[#0a4b5c]'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {flav.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing & Subscribe Action */}
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 font-bold line-through block">
                    ${originalPrice}
                  </span>
                  <div className="flex items-baseline space-x-1">
                    <span className="font-display-title text-3xl font-black text-[#0a4b5c]">
                      ${currentPrice.toFixed(2)}
                    </span>
                    <span className="text-xs font-bold text-emerald-700">/ shipment</span>
                  </div>
                </div>

                <button
                  onClick={handleSubscribe}
                  className="bg-[#b8ff00] hover:bg-[#a6eb00] text-[#0a4b5c] font-black text-xs px-6 py-3.5 rounded-full border border-[#0a4b5c] shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  START SUBSCRIPTION
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
