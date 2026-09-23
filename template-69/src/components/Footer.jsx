import React from 'react';
import { Globe, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="w-full bg-[#0a0b0e] text-white pt-20 pb-12 border-t border-white/5 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#0052ff] font-black text-2xl tracking-tighter">///</span>
                <span className="font-extrabold text-xl text-white tracking-tight">SaleHouse</span>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-400 max-w-sm leading-relaxed mb-8">
                Search and find your dream house at affordable prices, but with the best quality. Only available in Brixhome!
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, label: 'Google / Web' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  aria-label={item.label}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0052ff] hover:border-transparent transition-all duration-300"
                >
                  <item.icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Nav Column 1: About */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-6">About</h4>
            <ul className="space-y-3.5 text-xs text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-white transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="#why-medix" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Support */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-6">Support</h4>
            <ul className="space-y-3.5 text-xs text-gray-400">
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors text-left">
                  FAQS
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors text-left">
                  Support Center
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-6">Services</h4>
            <ul className="space-y-3.5 text-xs text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffe875] hover:underline pt-2"
                >
                  <span>Request a Valuation</span>
                  <Send className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            <p>Copyright©2021.saleHouse.All rights reserved</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Term & Conditions
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy & Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
