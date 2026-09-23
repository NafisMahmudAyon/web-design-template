import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-10 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <span className="text-xl font-condensed font-black tracking-wider text-black uppercase">
            CASPER
          </span>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-8 text-xs font-semibold text-gray-500">
          <a href="#about" className="hover:text-black transition-colors">
            manufacturing
          </a>
          <a href="#services" className="hover:text-black transition-colors">
            packaging
          </a>
          <a href="#listings" className="hover:text-black transition-colors">
            farms
          </a>
          <a href="#home" className="hover:text-black transition-colors">
            delivery
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-black">
          <a href="#" aria-label="Facebook" className="hover:opacity-60 transition-opacity">
            <Facebook className="w-4 h-4 fill-current" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-60 transition-opacity">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-60 transition-opacity">
            <Twitter className="w-4 h-4 fill-current" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-60 transition-opacity">
            <Linkedin className="w-4 h-4 fill-current" />
          </a>
        </div>
      </div>
    </footer>
  );
}
