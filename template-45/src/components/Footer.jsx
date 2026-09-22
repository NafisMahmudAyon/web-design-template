import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 2500);
  };

  return (
    <footer className="bg-[#0B0F17] text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Top Section: Action Headline + Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          {/* Left: Action Headline & Email input */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-display text-white">
              Let's Plan Your Next <br />
              Delivery
            </h3>

            <form onSubmit={handleSubmit} className="relative max-w-md">
              <input
                type="email"
                placeholder="Send email to us"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border-b border-white/30 py-3 pr-10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white hover:text-red-500 transition"
                title="Send"
              >
                {subscribed ? <Check className="w-4 h-4 text-emerald-400" /> : <ArrowUpRight className="w-4 h-4" />}
              </button>
            </form>
          </div>

          {/* Right: 4 Coordinates Grid matching mockup */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 text-xs font-medium">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                LOCATION
              </span>
              <p className="text-slate-300">
                457 Westbridge Ave,<br />
                Manchester, 28403
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                CALL US
              </span>
              <p className="text-slate-300 font-mono">
                +1200-555-0194
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                EMAIL
              </span>
              <p className="text-slate-300">
                hello@logistiqo.com
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                OPEN TIME
              </span>
              <p className="text-slate-300">
                09:00am – 06:00pm
              </p>
            </div>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-xs">
          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
              GENERAL
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition">Project</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
              ABOUT
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
              <li><a href="#discount" className="hover:text-white transition">Discount</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#free" className="hover:text-white transition">Free Content</a></li>
              <li><a href="#glossary" className="hover:text-white transition">Glossary</a></li>
              <li><a href="#tutorials" className="hover:text-white transition">Tutorials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
              SOCIAL
            </h4>
            <div className="flex items-center gap-3">
              {['f', 'in', '📸', '𝕏'].map((icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-red-500 hover:text-red-500 flex items-center justify-center text-xs transition"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Logo & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center text-white">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M2 20h20" />
                <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.1" />
              </svg>
            </div>
            <span className="text-base font-bold text-white font-display">
              Logistiqo
            </span>
          </div>

          <div>
            © 2026 LOGISTIQO. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-slate-300 transition">Terms & Conditions</a>
            <a href="#privacy" className="hover:text-slate-300 transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
