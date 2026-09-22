import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { footerData } from '../data/journeoData';

export default function FooterSection() {
  return (
    <footer className="relative bg-[#FAFAF9] border-t border-gray-200/80 pt-16 sm:pt-20 pb-12 overflow-hidden text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-gray-200/70">
          {/* Brand & Mission Statement */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tight text-gray-950 font-display block">
              {footerData.brand}
            </a>
            <p className="mt-2 text-base sm:text-lg font-bold text-gray-950 max-w-xs leading-snug font-display">
              {footerData.tagline}
            </p>
          </div>

          {/* Right Navigation Links & Social Icons */}
          <div className="flex flex-col md:items-end gap-5">
            {/* Links */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-gray-600">
              {footerData.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-gray-950 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Icons & Copyright */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs text-gray-400">
              <div className="flex items-center gap-4 text-gray-600">
                <a href="#" className="hover:text-gray-950 transition-colors p-1" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-gray-950 transition-colors p-1" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-gray-950 transition-colors p-1" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-gray-950 transition-colors p-1" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
              <span>{footerData.copyright}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Giant Background Watermark Display Typography "JOURNEO" */}
      <div className="relative w-full pt-10 pointer-events-none select-none overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <div
            className="text-[19vw] lg:text-[250px] font-black tracking-tighter leading-none text-gray-300/40 uppercase"
            style={{
              fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif',
              letterSpacing: '-0.05em',
            }}
          >
            JOURNEO
          </div>
        </div>
      </div>
    </footer>
  );
}
