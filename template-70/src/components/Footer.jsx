import React from 'react';
import { Home, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="w-full bg-white text-[#0f334c] pt-20 pb-12 border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#0f334c] text-white flex items-center justify-center">
                  <Home className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-base tracking-tight text-[#0f334c]">
                  Rent H&U
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed mb-6">
                Discover a curated portfolio of world-class vacation homes, villas, and modern apartments designed for effortless living.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  aria-label={item.label}
                  className="w-8 h-8 rounded-full bg-gray-50 hover:bg-[#0f334c] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300"
                >
                  <item.icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Nav Column 1: Product */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#0f334c] mb-4">Product</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><a href="#location" className="hover:text-[#0f334c] transition-colors">Features</a></li>
              <li><a href="#location" className="hover:text-[#0f334c] transition-colors">Pricing</a></li>
              <li><a href="#about" className="hover:text-[#0f334c] transition-colors">Case studies</a></li>
              <li><a href="#location" className="hover:text-[#0f334c] transition-colors">Reviews</a></li>
              <li><a href="#about" className="hover:text-[#0f334c] transition-colors">Updates</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#0f334c] mb-4">Company</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><a href="#about" className="hover:text-[#0f334c] transition-colors">About</a></li>
              <li><button onClick={onOpenContact} className="hover:text-[#0f334c] transition-colors text-left">Contact us</button></li>
              <li><a href="#about" className="hover:text-[#0f334c] transition-colors">Careers</a></li>
              <li><a href="#about" className="hover:text-[#0f334c] transition-colors">Culture</a></li>
              <li><a href="#about" className="hover:text-[#0f334c] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Nav Column 3: Support */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#0f334c] mb-4">Support</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><a href="#home" className="hover:text-[#0f334c] transition-colors">Getting started</a></li>
              <li><button onClick={onOpenContact} className="hover:text-[#0f334c] transition-colors text-left">Help center</button></li>
              <li><a href="#home" className="hover:text-[#0f334c] transition-colors">Server status</a></li>
              <li><button onClick={onOpenContact} className="hover:text-[#0f334c] transition-colors text-left">Report a bug</button></li>
              <li><button onClick={onOpenContact} className="hover:text-[#0f334c] transition-colors text-left">Chat support</button></li>
            </ul>
          </div>

          {/* Nav Column 4: Contacts us */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#0f334c] mb-4">Contacts us</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0f334c] shrink-0" />
                <a href="mailto:contact@company.com" className="hover:text-[#0f334c] transition-colors truncate">
                  contact@company.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0f334c] shrink-0" />
                <a href="tel:4146875892" className="hover:text-[#0f334c] transition-colors">
                  (414) 687 - 5892
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0f334c] shrink-0 mt-0.5" />
                <span className="leading-tight">
                  794 Mcallister St <br />
                  San Francisco, 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>© 2026 Rent H&U. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
