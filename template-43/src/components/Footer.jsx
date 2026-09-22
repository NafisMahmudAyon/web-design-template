import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

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
    <footer className="bg-[#F8FAFC] border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          {/* Brand & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
                Finexa
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-700 max-w-xs leading-relaxed">
              Smarter finance through intelligent analytics.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-2">Social Media</span>
              <div className="flex items-center gap-3">
                {['f', 'in', '𝕏', '📸', '▶'].map((icon, i) => (
                  <button
                    key={i}
                    className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-xs flex items-center justify-center transition"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Product
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li><a href="#solutions" className="hover:text-slate-900 transition">How It Works</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-slate-900 transition">Pricing</a></li>
              <li><a href="#about" className="hover:text-slate-900 transition">Security</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li><a href="#about" className="hover:text-slate-900 transition">About Us</a></li>
              <li><a href="#about" className="hover:text-slate-900 transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition">Contact</a></li>
              <li><a href="#about" className="hover:text-slate-900 transition">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Resources
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li><a href="#about" className="hover:text-slate-900 transition">Help Center</a></li>
              <li><a href="#about" className="hover:text-slate-900 transition">FAQs</a></li>
              <li><a href="#about" className="hover:text-slate-900 transition">Case Studies</a></li>
              <li><a href="#about" className="hover:text-slate-900 transition">API Docs</a></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Subscribe to our Newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition active:scale-95 flex items-center justify-center gap-1.5 shadow-xs"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-lime-400" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            © 2026 Finexa. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-800 transition">Privacy Policy</a>
            <span>·</span>
            <a href="#terms" className="hover:text-slate-800 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
