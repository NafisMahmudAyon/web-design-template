import React, { useState } from 'react';
import { X, Copy, Check, QrCode, AlertCircle } from 'lucide-react';

export default function DepositModal({ isOpen, onClose }) {
  const [selectedAsset, setSelectedAsset] = useState('BTC');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const depositAddress = 'bc1q8x9y0z7w6v5u4t3s2r1q0xyz9w8v7u6t5s4r3';

  const handleCopy = () => {
    navigator.clipboard?.writeText(depositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#E65D24]/10 text-[#E65D24] flex items-center justify-center font-black">
              +
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Deposit Crypto</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="space-y-4 mt-4">
          
          {/* Currency Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
              Select Currency
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['BTC', 'ETH', 'SOL', 'USDT'].map((asset) => (
                <button
                  key={asset}
                  onClick={() => setSelectedAsset(asset)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    selectedAsset === asset
                      ? 'bg-[#E65D24] text-white shadow-md shadow-[#E65D24]/30'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {asset}
                </button>
              ))}
            </div>
          </div>

          {/* QR Code Visual Box */}
          <div className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
            <div className="w-32 h-32 bg-white p-2 rounded-xl shadow-inner flex items-center justify-center mb-2 border">
              <QrCode className="w-24 h-24 text-slate-900" />
            </div>
            <p className="text-[11px] text-slate-400 font-semibold">Scan QR Code to deposit {selectedAsset}</p>
          </div>

          {/* Deposit Address Box */}
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
              Deposit Address
            </label>
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
              <input
                type="text"
                readOnly
                value={depositAddress}
                className="bg-transparent text-xs font-mono text-slate-800 dark:text-slate-200 flex-1 focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 bg-[#E65D24] hover:bg-[#CE4E1A] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Info Notice */}
          <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 rounded-xl text-xs border border-amber-200/60 dark:border-amber-800/40">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p>Send only {selectedAsset} to this address. 12 network confirmations required before crediting balance.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
