import React from 'react';
import { Leaf, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { preFooterData, footerData } from '../data/evergreenData';

export const FooterSection = ({ onOpenTour }) => {
  return (
    <footer id="contact" className="bg-white text-slate-800 pt-16 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer: Discover Nature's Wonders + Address & Phone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16 border-b border-slate-200/80">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.18] max-w-2xl">
              {preFooterData.headline}
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-1 space-y-3">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-sans">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{preFooterData.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-900 font-semibold font-sans">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <a href={`tel:${preFooterData.phone}`} className="hover:text-emerald-700 transition-colors">
                {preFooterData.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Directory Navigation Row with Center Brand Logo */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-200/80">
          {/* Left Navigation Links */}
          <nav className="flex items-center gap-6 sm:gap-8">
            {footerData.navLeft.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Center Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-full bg-brandLime flex items-center justify-center text-brandDark shadow-sm group-hover:scale-105 transition-transform">
              <Leaf className="w-3.5 h-3.5 fill-brandDark" />
            </div>
            <span className="text-xl font-bold font-serif tracking-tight text-slate-900">
              {footerData.brand}
            </span>
          </a>

          {/* Right Navigation Links */}
          <nav className="flex items-center gap-6 sm:gap-8">
            {footerData.navRight.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-4">
            {footerData.legal.map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && <span>|</span>}
                <a href="#legal" className="hover:text-slate-600 transition-colors">
                  {item}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
