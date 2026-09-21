import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function GetStartedModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0" onClick={handleReset}></div>

      <div className="relative w-full max-w-md bg-white rounded-3xl border border-gray-200 shadow-2xl p-6 sm:p-8 z-10 text-[#090d16] space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <span className="font-display text-xl font-extrabold text-[#090d16]">
            Get Started with Paylio
          </span>
          <button
            onClick={handleReset}
            className="p-1.5 text-gray-400 hover:text-[#090d16] rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-700" />
            </div>
            <h3 className="font-display text-2xl font-black uppercase">
              WELCOME ABOARD!
            </h3>
            <p className="text-xs text-gray-600 font-medium max-w-xs mx-auto">
              Welcome, {formData.name || 'Friend'}! We've sent a confirmation email to <strong className="text-[#090d16]">{formData.email || 'your email'}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="w-full bg-[#090d16] text-white font-extrabold text-xs py-3.5 rounded-full shadow-md hover:bg-black transition-all"
            >
              ACCESS DASHBOARD
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-black uppercase tracking-wider block mb-1">
                FULL NAME
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Liam Chen"
                className="w-full bg-[#f8f9fc] border border-gray-300 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-[#090d16] font-bold"
              />
            </div>

            <div>
              <label className="text-xs font-black uppercase tracking-wider block mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="liam@novastudios.com"
                className="w-full bg-[#f8f9fc] border border-gray-300 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-[#090d16] font-bold"
              />
            </div>

            <div>
              <label className="text-xs font-black uppercase tracking-wider block mb-1">
                PASSWORD
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••••••"
                className="w-full bg-[#f8f9fc] border border-gray-300 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-[#090d16] font-bold"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#090d16] hover:bg-black text-white font-black text-xs py-4 rounded-full shadow-lg flex items-center justify-center space-x-2 tracking-wider transition-all"
            >
              <span>CREATE FREE ACCOUNT</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-bold text-gray-500 uppercase pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>NO CREDIT CARD REQUIRED · INSTANT ACCESS</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
