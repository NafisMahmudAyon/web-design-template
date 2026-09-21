import React, { useState } from 'react';
import { ArrowRight, CreditCard, Landmark, Check } from 'lucide-react';

export default function EmpoweringSection({ openAuthModal }) {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendPayment = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 2500);
    }, 1200);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold text-[#635BFF] uppercase tracking-wider bg-[#635BFF]/10 px-3 py-1 rounded-full">
              • About Us
            </span>
            
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Empowering your finances with smart and seamless solutions daily
            </h2>

            <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              We provide innovative tools and secure services to simplify money management, helping you achieve your financial goals with confidence every day.
            </p>

            <button
              onClick={() => openAuthModal('signup')}
              className="px-7 py-3.5 rounded-full bg-[#635BFF] hover:bg-[#4F46E5] text-white font-extrabold text-sm shadow-lg shadow-[#635BFF]/30 transition-all flex items-center gap-2 group"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 3 Stats Cards Row */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">160M+</h3>
                <p className="text-[11px] font-bold text-slate-400 mt-1">Transactions yearly</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">24K+</h3>
                <p className="text-[11px] font-bold text-slate-400 mt-1">Business</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">$16M+</h3>
                <p className="text-[11px] font-bold text-slate-400 mt-1">Transaction</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Credit Card & Payment Drawer matching mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#F8FAFC] dark:bg-slate-800 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700 shadow-xl space-y-5">
              
              {/* Top VISA Credit Card */}
              <div className="bg-gradient-to-tr from-indigo-600 via-[#635BFF] to-purple-500 text-white rounded-2xl p-5 shadow-xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-extrabold text-lg tracking-wider">VISA</span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">Debit</span>
                </div>
                <div className="mb-4">
                  <p className="text-[9px] opacity-75 uppercase tracking-widest font-semibold">Card Number</p>
                  <p className="text-lg font-mono font-bold tracking-widest">•••• •••• 6782</p>
                </div>
                <div className="flex justify-between items-end text-xs">
                  <div>
                    <p className="text-[8px] opacity-75 uppercase">Name</p>
                    <p className="font-bold">Sajibur Rahman</p>
                  </div>
                  <div>
                    <p className="text-[8px] opacity-75 uppercase">EXP</p>
                    <p className="font-bold">09/29</p>
                  </div>
                  <div>
                    <p className="text-[8px] opacity-75 uppercase">CVV</p>
                    <p className="font-bold">611</p>
                  </div>
                </div>
              </div>

              {/* Amount Box */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700">
                <p className="text-[10px] font-semibold text-slate-400">Amount</p>
                <div className="flex justify-between items-baseline mt-0.5">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">$2,687,738</h3>
                  <span className="text-xs font-semibold text-slate-400">Dec 25, 2026</span>
                </div>
              </div>

              {/* Payment Method Radio Selector */}
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedMethod('card')}
                  className={`w-full p-3 rounded-2xl border transition-all flex items-center justify-between text-xs font-bold ${
                    selectedMethod === 'card'
                      ? 'border-[#635BFF] bg-white dark:bg-slate-900 shadow-sm text-slate-900 dark:text-white'
                      : 'border-slate-200 dark:border-slate-700 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <CreditCard className="w-4 h-4 text-[#635BFF]" />
                    <span>Credit Card</span>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === 'card' ? 'border-[#635BFF] bg-[#635BFF]' : 'border-slate-300'
                  }`}>
                    {selectedMethod === 'card' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>

                <button
                  onClick={() => setSelectedMethod('bank')}
                  className={`w-full p-3 rounded-2xl border transition-all flex items-center justify-between text-xs font-bold ${
                    selectedMethod === 'bank'
                      ? 'border-[#635BFF] bg-white dark:bg-slate-900 shadow-sm text-slate-900 dark:text-white'
                      : 'border-slate-200 dark:border-slate-700 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Landmark className="w-4 h-4 text-[#635BFF]" />
                    <span>Bank Account</span>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === 'bank' ? 'border-[#635BFF] bg-[#635BFF]' : 'border-slate-300'
                  }`}>
                    {selectedMethod === 'bank' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>
              </div>

              {/* Send Payment Button */}
              <button
                onClick={handleSendPayment}
                disabled={isSending}
                className="w-full py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold text-sm rounded-2xl shadow-lg transition-all hover:bg-slate-800 dark:hover:bg-slate-100 flex items-center justify-center gap-2"
              >
                {sentSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                    <span>Payment Dispatched!</span>
                  </>
                ) : isSending ? (
                  <span>Processing Transfer...</span>
                ) : (
                  <span>Send Payment</span>
                )}
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
