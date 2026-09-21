import React from 'react';
import { ArrowRight, Instagram, Twitter, Facebook, Sparkles } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#0a4b5c] text-white overflow-hidden border-t-4 border-[#0a4b5c]">
      
      {/* Ticker Banner */}
      <div className="bg-[#b8ff00] text-[#0a4b5c] py-3 overflow-hidden border-b-2 border-[#0a4b5c]">
        <div className="flex space-x-8 whitespace-nowrap animate-scroll font-display-title text-base sm:text-lg font-black tracking-widest uppercase">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8">
              <span>MAKE EVERY SIP FEEL LIKE SUMMER</span>
              <span>•</span>
              <span>100% ORGANIC BOTANICALS</span>
              <span>•</span>
              <span>ZERO ADDED SUGAR</span>
              <span>•</span>
              <span>SHIPPED COLD TO YOUR DOOR</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Newsletter Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="font-display-title text-4xl font-black tracking-tight text-white">
                VERDA
              </span>
              <span className="w-3 h-3 rounded-full bg-[#b8ff00]"></span>
            </div>

            <p className="text-xs text-white/80 max-w-sm leading-relaxed font-medium">
              Organic botanical sparkling drinks pressed from real fruits, herbs, and cold spring water. Delivered cold to keep your summer crisp.
            </p>

            {/* Newsletter Input */}
            <div className="space-y-2 max-w-sm">
              <label className="text-[11px] font-black uppercase tracking-wider text-[#b8ff00] block">
                JOIN THE SIP CLUB (GET 10% OFF FIRST ORDER)
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs px-4 py-3 rounded-l-full focus:outline-none focus:border-[#b8ff00] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#b8ff00] text-[#0a4b5c] font-black text-xs px-5 py-3 rounded-r-full hover:bg-[#a6eb00] transition-colors"
                >
                  JOIN
                </button>
              </form>
            </div>
          </div>

          {/* Nav Column 1: Shop */}
          <div className="space-y-4">
            <h4 className="font-display-title text-lg font-black text-[#b8ff00] uppercase tracking-wider">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-bold">
              <li><a href="#flavors" className="hover:text-[#b8ff00] transition-colors">Lime & Ginger</a></li>
              <li><a href="#flavors" className="hover:text-[#b8ff00] transition-colors">Orange Flavor</a></li>
              <li><a href="#flavors" className="hover:text-[#b8ff00] transition-colors">Golden Hour</a></li>
              <li><a href="#flavors" className="hover:text-[#b8ff00] transition-colors">Apple & Pear</a></li>
              <li><a href="#subscribe" className="hover:text-[#b8ff00] transition-colors">Variety 4-Pack</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Learn */}
          <div className="space-y-4">
            <h4 className="font-display-title text-lg font-black text-[#f7c948] uppercase tracking-wider">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-bold">
              <li><a href="#story" className="hover:text-[#f7c948] transition-colors">Our Story</a></li>
              <li><a href="#ingredients" className="hover:text-[#f7c948] transition-colors">Botanical Ingredients</a></li>
              <li><a href="#journal" className="hover:text-[#f7c948] transition-colors">Kitchen Journal</a></li>
              <li><a href="#" className="hover:text-[#f7c948] transition-colors">Stockists & Cafes</a></li>
              <li><a href="#" className="hover:text-[#f7c948] transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Nav Column 3: Help */}
          <div className="space-y-4">
            <h4 className="font-display-title text-lg font-black text-white uppercase tracking-wider">
              HELP & CONTACT
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">FAQ & Shipping</a></li>
              <li><a href="#subscribe" className="hover:text-white transition-colors">Manage Subscription</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale Inquiries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">hello@verda-drinks.com</a></li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2 text-[#b8ff00]">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Giant Outline Text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-bold space-y-4 sm:space-y-0">
          <p>© 2026 VERDA BOTANICAL BEVERAGE CO. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">PRIVACY POLICY</a>
            <a href="#" className="hover:underline">TERMS OF SERVICE</a>
            <a href="#" className="hover:underline">ACCESSIBILITY</a>
          </div>
        </div>

        {/* Giant VERDA Outline Typography */}
        <div className="mt-12 text-center pointer-events-none select-none">
          <span className="font-display-title text-7xl sm:text-[140px] lg:text-[180px] font-black text-white stroke-white tracking-tighter opacity-10 leading-none">
            VERDA
          </span>
        </div>

      </div>
    </footer>
  );
}
