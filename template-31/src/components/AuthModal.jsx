import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode = 'signup' }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            {mode === 'signup' ? 'Create Finvesto Account' : 'Welcome Back'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              {mode === 'signup' ? 'Account Created!' : 'Logged In!'}
            </h4>
            <p className="text-xs text-slate-400 max-w-xs">
              Welcome to Finvesto. Directing to your main dashboard...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                Work Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-slate-100 dark:bg-slate-900/80 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#635BFF]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-100 dark:bg-slate-900/80 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#635BFF]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#635BFF] hover:bg-[#4F46E5] text-white font-extrabold text-xs rounded-xl shadow-lg shadow-[#635BFF]/30 transition-all"
            >
              {mode === 'signup' ? 'Start 14-Day Free Trial' : 'Sign In Now'}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-[#635BFF] font-semibold"
              >
                {mode === 'signup' ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
