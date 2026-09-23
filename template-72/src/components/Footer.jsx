import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer id="delivery" className="w-full bg-white text-[#2e1d1b] pt-20 pb-12 border-t border-[#2e1d1b]/5 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-100">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xl font-serif font-black tracking-[0.2em] text-[#2e1d1b] uppercase block mb-4">
                WILDLING
              </span>

              <p className="text-xs text-[#2e1d1b]/60 max-w-xs leading-relaxed font-normal mb-8">
                Sufficient particular impossible by reasonable oh expression is. Yet preference unpleasant.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  aria-label={item.label}
                  className="w-8 h-8 rounded-full bg-[#fcf8f5] hover:bg-[#2e1d1b] hover:text-white text-[#2e1d1b] flex items-center justify-center transition-all duration-300"
                >
                  <item.icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Nav Column 1: Menu */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#2e1d1b] mb-4">Menu</h4>
            <ul className="space-y-3 text-xs text-[#2e1d1b]/60">
              <li><a href="#about" className="hover:text-[#2e1d1b] transition-colors">Donations</a></li>
              <li><a href="#packaging" className="hover:text-[#2e1d1b] transition-colors">Features</a></li>
              <li><a href="#packaging" className="hover:text-[#2e1d1b] transition-colors">Category</a></li>
              <li><a href="#about" className="hover:text-[#2e1d1b] transition-colors">Volunteer</a></li>
              <li><a href="#about" className="hover:text-[#2e1d1b] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#2e1d1b] mb-4">Categories</h4>
            <ul className="space-y-3 text-xs text-[#2e1d1b]/60">
              <li><a href="#packaging" className="hover:text-[#2e1d1b] transition-colors">Healthy Food</a></li>
              <li><a href="#packaging" className="hover:text-[#2e1d1b] transition-colors">Education</a></li>
              <li><a href="#packaging" className="hover:text-[#2e1d1b] transition-colors">Clean Water</a></li>
              <li><a href="#packaging" className="hover:text-[#2e1d1b] transition-colors">Medical Help</a></li>
            </ul>
          </div>

          {/* Nav Column 3: About Us */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#2e1d1b] mb-4">About Us</h4>
            <ul className="space-y-3 text-xs text-[#2e1d1b]/60">
              <li><a href="#about" className="hover:text-[#2e1d1b] transition-colors">Who are you?</a></li>
              <li><button onClick={onOpenContact} className="hover:text-[#2e1d1b] transition-colors text-left">Contact Us</button></li>
              <li><a href="#about" className="hover:text-[#2e1d1b] transition-colors">FAQ</a></li>
              <li><button onClick={onOpenContact} className="hover:text-[#2e1d1b] transition-colors text-left">Help</button></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-[11px] text-[#2e1d1b]/40">
          <p>© Copyright Wildling. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
