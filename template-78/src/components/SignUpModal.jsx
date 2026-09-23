import React, { useState } from 'react';
import { X, Check, Lock, Mail, User, Sparkles } from 'lucide-react';

export const SignUpModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState('Penthouse Collection');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-neutral-200 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-investa-accent/60 text-neutral-900 mx-auto flex items-center justify-center mb-3">
            <Sparkles className="w-6 h-6 text-neutral-900" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900">
            Join Investa Private Club
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Access unlisted off-market penthouses and verified architectural estates.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-neutral-900">
              Welcome to Investa VIP
            </h4>
            <p className="text-xs text-neutral-600 max-w-xs mx-auto">
              Your member credentials and invitation key have been dispatched to your email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Full Legal Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Julian Montgomery"
                  className="w-full pl-9 pr-3.5 py-3 border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Primary Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="julian@montgomery.com"
                  className="w-full pl-9 pr-3.5 py-3 border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Preferred Portfolio Tier
              </label>
              <select
                value={tier}
                onChange={(e) => setTier(e.target.value)}
                className="w-full px-3.5 py-3 border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 bg-white"
              >
                <option value="Penthouse Collection">Penthouse Collection ($5M - $25M)</option>
                <option value="Waterfront Estates">Waterfront & Coastal Estates ($10M+)</option>
                <option value="Architectural Modern">Architectural Contemporary Residences</option>
                <option value="Commercial Hospitality">Commercial & Boutique Hospitality</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-investa-red hover:bg-investa-redHover text-white font-semibold text-sm rounded-md shadow-sm transition-all duration-200 mt-2"
            >
              Create VIP Member Account
            </button>

            <p className="text-[11px] text-center text-neutral-400 mt-3 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3 text-neutral-400" /> 256-bit encryption &bull; Strict confidentiality
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
