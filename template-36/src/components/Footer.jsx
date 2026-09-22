import React from 'react';
import { ArrowUpRight, Linkedin, Instagram } from 'lucide-react';
import { footerLinks } from '../data/cryptoData';

export default function Footer({ onLinkClick }) {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-6 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Top Horizontal Navigation Links with Arrows */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-12 border-b border-gray-100">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (onLinkClick) {
                  e.preventDefault();
                  onLinkClick(link.label);
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0B1A1C] hover:text-[#00D287] transition-colors font-display"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#00D287]" />
            </a>
          ))}
        </div>

        {/* Middle Legal & Social Media Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-xs text-gray-500 font-medium">
          {/* Copyright */}
          <div>
            © 2026 Raxon. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#0B1A1C]">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-1 hover:text-[#00D287] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="p-1 hover:text-[#00D287] transition-colors font-mono font-bold" aria-label="X">
              <span>𝕏</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-1 hover:text-[#00D287] transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-[#0B1A1C] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-[#0B1A1C] transition-colors">Terms & Conditions</a>
          </div>
        </div>

        {/* Bottom Colossal Monumental Watermark */}
        <div className="pt-6 pb-2 select-none pointer-events-none text-center overflow-hidden">
          <div className="text-[18vw] sm:text-[20vw] lg:text-[22vw] font-black tracking-tighter text-[#163337] leading-none watermark-text uppercase opacity-95">
            Raxon
          </div>
        </div>

      </div>
    </footer>
  );
}
