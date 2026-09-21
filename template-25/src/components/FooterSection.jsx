import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function FooterSection({ onOpenAccount }) {
  return (
    <footer className="bg-[#0b2416] text-white pt-20 pb-12 overflow-hidden border-t-4 border-[#0b2416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & Newsletter Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#bef264] text-[#0b2416] flex items-center justify-center font-black text-lg">
                V
              </div>
              <span className="font-display text-3xl font-black tracking-tight text-white">
                VELD
              </span>
            </div>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed font-medium">
              Thoughtful banking automation for businesses and individuals who would rather be doing the work.
            </p>

            <div className="pt-2 max-w-sm">
              <label className="text-[10px] font-black uppercase text-[#bef264] tracking-wider block mb-1">
                SUBSCRIBE TO PRODUCT updates
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex">
                <input
                  type="email"
                  placeholder="name@work-email.com"
                  className="bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs px-4 py-2.5 rounded-l-full focus:outline-none focus:border-[#bef264] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#bef264] text-[#0b2416] font-black text-xs px-5 py-2.5 rounded-r-full hover:bg-[#aef043] transition-colors"
                >
                  JOIN
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-black text-[#bef264] uppercase tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-bold">
              <li><a href="#bento" className="hover:text-white transition-colors">Product</a></li>
              <li><a href="#bento" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#cards" className="hover:text-white transition-colors">Cards</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-wider">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security Audit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-black text-[#bef264] uppercase tracking-wider">
              CONTACT
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">hello@veld.com</a></li>
              <li><span>+44 (0) 161 248 7302</span></li>
              <li className="text-[11px] text-white/50 pt-2 leading-relaxed">
                Unit 14, Pollard Works<br />Manchester M4 6DE
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-bold space-y-4 sm:space-y-0">
          <p>© 2026 VELD TECHNOLOGIES LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">PRIVACY</a>
            <a href="#" className="hover:underline">TERMS</a>
            <a href="#" className="hover:underline">COOKIES</a>
          </div>
        </div>

        {/* Giant VELD Outline Typography */}
        <div className="mt-12 text-center pointer-events-none select-none">
          <span className="font-display text-7xl sm:text-[150px] lg:text-[220px] font-black stroke-text text-white/10 tracking-tighter leading-none block">
            VELD
          </span>
        </div>

      </div>
    </footer>
  );
}
