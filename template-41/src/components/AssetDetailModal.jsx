import React, { useState } from 'react';
import { X, TrendingUp, DollarSign, Activity, Check } from 'lucide-react';
import CryptoIcon from './CryptoIcon';

export default function AssetDetailModal({ asset, isOpen, onClose }) {
  const [orderType, setOrderType] = useState('buy');
  const [orderAmount, setOrderAmount] = useState('100');
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isOpen || !asset) return null;

  const handleOrder = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-[#12151F] rounded-3xl w-full max-w-lg shadow-2xl border border-white/10 overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CryptoIcon type={asset.iconType} className="w-8 h-8" />
            <div>
              <h3 className="text-base font-bold text-white">{asset.name}</h3>
              <span className="text-xs text-slate-400 font-semibold">{asset.symbol}</span>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-[#181B26] rounded-2xl border border-white/5">
              <span className="text-[10px] text-slate-400 block mb-0.5">Price</span>
              <span className="text-sm font-bold text-white">{asset.price || asset.balance}</span>
            </div>
            <div className="p-3 bg-[#181B26] rounded-2xl border border-white/5">
              <span className="text-[10px] text-slate-400 block mb-0.5">24h Change</span>
              <span className={`text-sm font-bold ${asset.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                {asset.change || asset.dynamic}
              </span>
            </div>
            <div className="p-3 bg-[#181B26] rounded-2xl border border-white/5">
              <span className="text-[10px] text-slate-400 block mb-0.5">Liquidity</span>
              <span className="text-sm font-bold text-indigo-400">High Tier</span>
            </div>
          </div>

          {/* Quick Order Book Simulator */}
          <form onSubmit={handleOrder} className="bg-[#181B26] p-4 rounded-2xl border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Instant Order Execution</span>
              <div className="flex items-center gap-1 bg-[#12151F] p-0.5 rounded-full border border-white/5">
                <button
                  type="button"
                  onClick={() => setOrderType('buy')}
                  className={`px-3 py-0.5 rounded-full text-xs font-semibold ${orderType === 'buy' ? 'bg-emerald-500 text-white' : 'text-slate-400'}`}
                >
                  Buy
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('sell')}
                  className={`px-3 py-0.5 rounded-full text-xs font-semibold ${orderType === 'sell' ? 'bg-red-500 text-white' : 'text-slate-400'}`}
                >
                  Sell
                </button>
              </div>
            </div>

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">USDT Amount</label>
              <input
                type="number"
                value={orderAmount}
                onChange={(e) => setOrderAmount(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#12151F] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className={`
                w-full py-2.5 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-1.5
                ${orderType === 'buy' ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-red-600 hover:bg-red-500'}
              `}
            >
              {orderSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Order Filled!</span>
                </>
              ) : (
                <span>Execute {orderType.toUpperCase()} Order</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
