import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 2500);
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Newsletter Callout Box matching screenshot */}
        <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-md">
            <div className="inline-flex p-1 rounded-lg bg-purple-100 text-purple-700">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display">
              Bring Your Team Together
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Plan smarter, collaborate seamlessly, and track every project from one powerful workspace.
            </p>
          </div>

          {/* Subscribe Form */}
          <div className="w-full lg:max-w-md space-y-2">
            <span className="text-xs font-bold text-slate-700 block">
              Get Our News And Updates
            </span>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition shadow-xs flex items-center justify-center flex-shrink-0"
              >
                {subscribed ? (
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Done</span>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </form>
            <p className="text-[10px] text-slate-400">
              By subscribing you agree to our <a href="#privacy" className="underline hover:text-slate-600">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pt-4">
          {/* Logo & Brand statement */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-purple-600 flex items-center justify-center text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
                Flowzy
              </span>
            </div>

            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Experience next-generation project management with powerful insights, automation, and effortless teamwork.
            </p>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-500">
              <li><a href="#about" className="hover:text-slate-900 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition">Contact</a></li>
              <li><a href="#how-it-works" className="hover:text-slate-900 transition">How It Works</a></li>
              <li><a href="#blogs" className="hover:text-slate-900 transition">Blog</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-500">
              <li><a href="#help" className="hover:text-slate-900 transition">Help Center</a></li>
              <li><a href="#docs" className="hover:text-slate-900 transition">Documentation</a></li>
              <li><a href="#api" className="hover:text-slate-900 transition">API Access</a></li>
              <li><a href="#community" className="hover:text-slate-900 transition">Community Forum</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-500">
              <li><a href="#terms" className="hover:text-slate-900 transition">Terms</a></li>
              <li><a href="#privacy" className="hover:text-slate-900 transition">Privacy Policy</a></li>
              <li><a href="#trust" className="hover:text-slate-900 transition">Trust Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <div>
            © 2026 Flowzy®. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-600 transition">Terms of services</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
