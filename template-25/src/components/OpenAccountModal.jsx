import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function OpenAccountModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState('personal');
  const [formData, setFormData] = useState({ name: '', email: '', country: 'United States' });
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setCompleted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0" onClick={handleReset}></div>

      <div className="relative w-full max-w-lg bg-white rounded-3xl border-3 border-[#0b2416] shadow-2xl p-6 sm:p-8 z-10 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0b2416] text-[#bef264] flex items-center justify-center font-black text-lg">
              V
            </div>
            <span className="font-display text-xl font-black text-[#0b2416]">
              OPEN VELD ACCOUNT
            </span>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-gray-400 hover:text-[#0b2416] rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {completed ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-700" />
            </div>
            <h3 className="font-display text-2xl font-black text-[#0b2416] uppercase">
              ACCOUNT READY!
            </h3>
            <p className="text-xs text-gray-600 font-medium max-w-sm mx-auto">
              Welcome to VELD, {formData.name || 'Friend'}! We've sent a verification link to <strong className="text-[#0b2416]">{formData.email || 'your email'}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="w-full bg-[#bef264] text-[#0b2416] font-extrabold text-xs py-3.5 rounded-full border-2 border-[#0b2416] shadow-md hover:bg-[#aef043] transition-all"
            >
              GO TO DASHBOARD
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Step indicator */}
            <div className="flex items-center justify-between text-xs font-bold text-gray-500">
              <span>STEP {step} OF 2</span>
              <span>{step === 1 ? 'Account Type' : 'Personal Details'}</span>
            </div>

            {step === 1 ? (
              <div className="space-y-4">
                <label className="text-xs font-black uppercase text-[#0b2416] block">
                  CHOOSE YOUR ACCOUNT CATEGORY
                </label>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAccountType('personal')}
                    className={`p-4 rounded-2xl border-2 font-bold text-left transition-all ${
                      accountType === 'personal'
                        ? 'border-[#0b2416] bg-[#bef264]/30 text-[#0b2416]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <span className="font-display text-lg font-black block text-[#0b2416]">PERSONAL</span>
                    <span className="text-[11px] font-normal text-gray-500 block mt-1">
                      For individuals & freelancers
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAccountType('business')}
                    className={`p-4 rounded-2xl border-2 font-bold text-left transition-all ${
                      accountType === 'business'
                        ? 'border-[#0b2416] bg-[#bef264]/30 text-[#0b2416]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <span className="font-display text-lg font-black block text-[#0b2416]">BUSINESS</span>
                    <span className="text-[11px] font-normal text-gray-500 block mt-1">
                      Multi-user corporate entities
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-black uppercase text-[#0b2416] block mb-1">
                    FULL LEGAL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Rivera"
                    className="w-full bg-[#eff1e8] border-2 border-[#0b2416]/20 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-[#0b2416] font-bold text-[#0b2416]"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase text-[#0b2416] block mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full bg-[#eff1e8] border-2 border-[#0b2416]/20 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-[#0b2416] font-bold text-[#0b2416]"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#bef264] hover:bg-[#aef043] text-[#0b2416] font-black text-xs py-4 rounded-full border-2 border-[#0b2416] shadow-lg flex items-center justify-center space-x-2 tracking-wider transition-all"
            >
              <span>{step === 1 ? 'CONTINUE TO DETAILS' : 'CREATE ACCOUNT NOW'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-bold text-gray-500 uppercase pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>NO CREDIT CHECK REQUIRED · READY IN 2 MINUTES</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
