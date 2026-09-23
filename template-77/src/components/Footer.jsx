import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { footerQuickLinks1, footerQuickLinks2 } from '../data/elevateData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#2E5B53', '#76A69F', '#10B981'],
      });
    }
  };

  return (
    <footer className="p-3 sm:p-6 lg:p-8 bg-[#FAFDFB]">
      {/* Outer Dark Green Rounded Container */}
      <div className="max-w-7xl mx-auto rounded-[32px] sm:rounded-[44px] bg-[#1E433C] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-emerald-800/60">
          
          {/* Brand Info (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center text-white font-black text-sm">
                ▲
              </div>
              <span className="font-bold text-xl text-white tracking-tight font-display">
                Elevate Camp
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed max-w-sm">
              Empowering athletes of all disciplines to reach peak potential through structured conditioning and world-class mentorship.
            </p>
          </div>

          {/* Quick Links 1 (Span 2) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              {footerQuickLinks1.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 (Span 2) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              {footerQuickLinks2.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Sign Up Our Newsletters
            </h4>
            <p className="text-xs text-emerald-100/70">
              Receive seasonal athletic schedules, early registration discounts, and nutritional guides.
            </p>

            {subscribed ? (
              <div className="bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 px-4 py-3 rounded-full text-xs font-semibold">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-emerald-950/60 border border-emerald-700/80 rounded-full px-4 py-3 text-xs text-white placeholder-emerald-300/40 focus:outline-none focus:border-white transition-all pr-12"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 w-8 h-8 rounded-full bg-white text-[#1E433C] flex items-center justify-center hover:bg-emerald-100 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/60 gap-4">
          <p>© 2025 Elevate Camp. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Camp Safety Protocol</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
