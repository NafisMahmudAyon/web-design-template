import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Globe2, 
  Users, 
  Zap, 
  ChevronDown, 
  CheckCircle2, 
  Download,
  ArrowRightLeft,
  Check
} from 'lucide-react';

export default function TrustedWorldwideSection() {
  // Currency converter state
  const [fromAmount, setFromAmount] = useState('1000.00');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BDT');
  const [exchanging, setExchanging] = useState(false);
  const [exchangeSuccess, setExchangeSuccess] = useState(false);

  // Exchange rates relative to USD
  const rates = {
    USD: 1,
    BDT: 121.6065,
    EUR: 0.92,
    GBP: 0.78,
    CAD: 1.36,
  };

  const calculatedToAmount = (
    (parseFloat(fromAmount || 0) / rates[fromCurrency]) * rates[toCurrency]
  ).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleExchange = () => {
    setExchanging(true);
    setTimeout(() => {
      setExchanging(false);
      setExchangeSuccess(true);
      setTimeout(() => setExchangeSuccess(false), 2500);
    }, 800);
  };

  const [receiptDownloaded, setReceiptDownloaded] = useState(false);
  const handleDownloadReceipt = () => {
    setReceiptDownloaded(true);
    setTimeout(() => setReceiptDownloaded(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFF] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Trust Indicator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display max-w-xl">
              Trusted by individuals & businesses worldwide
            </h2>
          </div>

          <p className="text-sm text-slate-500 max-w-md leading-relaxed">
            Track spending, plan budgets, and manage your money effortlessly with intelligent financial tools built for everyday use.
          </p>
        </div>

        {/* 3 Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Real-Time Conversion with Interactive Converter */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-finexa-card flex flex-col justify-between hover:shadow-lg transition duration-200">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Real-Time Conversion
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 mb-6">
                Live exchange rates instantly
              </p>

              {/* Converter Mini-App */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3.5">
                <span className="text-[11px] font-bold text-slate-700 block">
                  Currency Details
                </span>

                {/* From Input */}
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex-1">
                    <span className="text-[10px] text-slate-400 block font-semibold">From</span>
                    <input
                      type="number"
                      value={fromAmount}
                      onChange={(e) => setFromAmount(e.target.value)}
                      className="text-sm font-bold text-slate-900 w-full focus:outline-none bg-transparent"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-bold text-slate-700">
                    <span>🇺🇸</span>
                    <span>{fromCurrency}</span>
                  </span>
                </div>

                {/* To Output */}
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex-1">
                    <span className="text-[10px] text-slate-400 block font-semibold">To</span>
                    <span className="text-sm font-bold text-slate-900 block font-mono truncate">
                      {calculatedToAmount}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-bold text-slate-700">
                    <span>🇧🇩</span>
                    <span>{toCurrency}</span>
                  </span>
                </div>

                {/* Network Fees */}
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 pt-1">
                  <span>Network Fees</span>
                  <span className="font-mono text-slate-800 font-bold">2.59 USD</span>
                </div>

                {/* Exchange Action Button */}
                <button
                  onClick={handleExchange}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition active:scale-95 flex items-center justify-center gap-2 shadow-xs"
                >
                  {exchanging ? (
                    <span>Processing conversion...</span>
                  ) : exchangeSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-lime-400" />
                      <span>Exchanged Successfully!</span>
                    </>
                  ) : (
                    <>
                      <ArrowRightLeft className="w-3.5 h-3.5 text-slate-400" />
                      <span>Exchange Money</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: 30M+ Users Worldwide with Editorial Photography */}
          <div className="bg-[#0B1120] text-white rounded-3xl p-6 shadow-xl flex flex-col justify-between overflow-hidden relative group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                30M+ Users Worldwide
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 mb-6">
                Send and receive money seamlessly across the globe.
              </p>
            </div>

            {/* Photo frame of users */}
            <div className="mt-4 rounded-2xl overflow-hidden aspect-[4/3] relative border border-white/10 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
                alt="30M Finexa users"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Card 3: Instant Transfers with Receipt Widget */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-finexa-card flex flex-col justify-between hover:shadow-lg transition duration-200">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 fill-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Instant Transfers
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 mb-6">
                Real-time payments with zero delays
              </p>

              {/* Transfer Success Card matching mockup */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Transfer Success
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Transfer has been successfully done
                  </p>
                </div>

                {/* Summary Box */}
                <div className="pt-2 border-t border-slate-200/60 space-y-1.5 text-[11px] font-semibold text-slate-500 text-left">
                  <div className="flex items-center justify-between">
                    <span>Date</span>
                    <span className="text-slate-800 font-bold">25 DEC 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Amount</span>
                    <span className="text-slate-900 font-extrabold text-xs font-mono">$20,000</span>
                  </div>
                </div>

                {/* Download Receipt button */}
                <button
                  onClick={handleDownloadReceipt}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition active:scale-95 flex items-center justify-center gap-2 mt-2 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                  <span>{receiptDownloaded ? 'Receipt Saved!' : 'Download receipt'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
