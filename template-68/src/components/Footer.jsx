import React from 'react';
import {
  ShoppingBag,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c6b3e] text-white pt-16 pb-8 border-t border-emerald-950 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#085430]">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-[#fed700] text-emerald-900 flex items-center justify-center shadow-md">
                <ShoppingBag className="w-5 h-5 fill-emerald-900" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Grocery<span className="text-[#fed700]">.</span>
              </span>
            </a>

            <p className="text-xs text-emerald-100/80 leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#09522f] hover:bg-[#fed700] hover:text-emerald-900 text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-[#09522f] hover:bg-[#fed700] hover:text-emerald-900 text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#09522f] hover:bg-[#fed700] hover:text-emerald-900 text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#09522f] hover:bg-[#fed700] hover:text-emerald-900 text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Company</h4>
            <ul className="flex flex-col gap-2 text-xs text-emerald-100/80">
              <li><a href="#about" className="hover:text-[#fed700] transition-colors">About Us</a></li>
              <li><a href="#blogs" className="hover:text-[#fed700] transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-[#fed700] transition-colors">Contact Us</a></li>
              <li><a href="#careers" className="hover:text-[#fed700] transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Customer Services</h4>
            <ul className="flex flex-col gap-2 text-xs text-emerald-100/80">
              <li><a href="#account" className="hover:text-[#fed700] transition-colors">My Account</a></li>
              <li><a href="#track" className="hover:text-[#fed700] transition-colors">Track Your Order</a></li>
              <li><a href="#returns" className="hover:text-[#fed700] transition-colors">Return</a></li>
              <li><a href="#faq" className="hover:text-[#fed700] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Our Information */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Our Information</h4>
            <ul className="flex flex-col gap-2 text-xs text-emerald-100/80">
              <li><a href="#privacy" className="hover:text-[#fed700] transition-colors">Privacy</a></li>
              <li><a href="#terms" className="hover:text-[#fed700] transition-colors">User Terms & Condition</a></li>
              <li><a href="#refund" className="hover:text-[#fed700] transition-colors">Return Policy</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Contact Info</h4>
            <ul className="flex flex-col gap-2 text-xs text-emerald-100/80">
              <li>+0123-456-789</li>
              <li>example@gmail.com</li>
              <li className="leading-relaxed">8502 Preston Rd. Inglewood, Maine 98380</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Currency Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/70">
          <p>
            Copyright © 2024 <strong className="text-white font-semibold">Grocery Website Design</strong>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer hover:text-white">
              <span>English</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <span className="text-emerald-100/40">|</span>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white">
              <span>USD</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
