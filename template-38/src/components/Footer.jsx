import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { footerLinks } from '../data/finexaData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({ particleCount: 35, spread: 55, origin: { y: 0.85 } });
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12 text-[#09182A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-100">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white">
                <div className="w-3.5 h-3.5 border-2 border-white rotate-45 rounded-[2px]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight font-display">
                Finexa
              </span>
            </div>

            <p className="text-base font-bold text-[#09182A] max-w-xs leading-snug">
              Smarter finance through intelligent analytics.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-xs font-bold text-gray-400 mb-2.5">Social Media</div>
              <div className="flex items-center gap-3 text-gray-600">
                <a href="#fb" className="hover:text-blue-600 transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#in" className="hover:text-blue-700 transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="#tw" className="hover:text-black transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#ig" className="hover:text-pink-600 transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#yt" className="hover:text-red-600 transition-colors"><Youtube className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

          {/* Directory Columns (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            <div>
              <div className="text-xs font-bold text-[#09182A] mb-3">Product</div>
              <ul className="space-y-2 text-xs text-gray-500">
                {footerLinks.product.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-black transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-[#09182A] mb-3">Company</div>
              <ul className="space-y-2 text-xs text-gray-500">
                {footerLinks.company.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-black transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-[#09182A] mb-3">Resources</div>
              <ul className="space-y-2 text-xs text-gray-500">
                {footerLinks.resources.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-black transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Box (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#09182A]">Subscribe to our Newsletter</div>
            {subscribed ? (
              <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-xl">
                Thanks for subscribing to Finexa!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center bg-[#F8FAFC] border border-gray-200 rounded-xl p-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent text-xs text-[#09182A] px-2.5 py-1.5 focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 bg-[#09182A] hover:bg-black text-white text-xs font-bold rounded-lg transition-colors flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <div>
            © 2026 Finexa. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-black">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-black">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
