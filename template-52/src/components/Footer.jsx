import React from 'react';
import { FOOTER_SECTIONS } from '../data/pollinateData';

export const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 6 Column Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-16">
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-[#FF5520] transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#FF5520] flex items-center justify-center text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <circle cx="12" cy="7" r="2.5" />
                <circle cx="12" cy="17" r="2.5" />
                <circle cx="7" cy="12" r="2.5" />
                <circle cx="17" cy="12" r="2.5" />
              </svg>
            </div>
            <span className="text-sm font-bold text-slate-900 tracking-tight">
              Pollinate
            </span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-400">
            Copyright © 2026 Pollinate All Rights Reserved. | <a href="#" className="hover:underline">Privacy Policy</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <a href="#" aria-label="Facebook" className="hover:text-slate-700 transition-colors">f</a>
            <a href="#" aria-label="Twitter" className="hover:text-slate-700 transition-colors">✕</a>
            <a href="#" aria-label="Instagram" className="hover:text-slate-700 transition-colors">📷</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-slate-700 transition-colors">in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
