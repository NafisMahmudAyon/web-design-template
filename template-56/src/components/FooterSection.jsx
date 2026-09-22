import React, { useState } from 'react';
import { Compass, Facebook, Instagram, Twitter, Mail, Phone, Globe, Heart } from 'lucide-react';
import { footerData } from '../data/wanderlustData';

export const FooterSection = ({ onOpenBooking }) => {
  const [lang, setLang] = useState('ENG');

  return (
    <footer className="bg-brandForestDark text-white pt-20 pb-12 border-t border-emerald-900/40 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-emerald-900/50">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#home" className="flex items-center gap-2 mb-4 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brandEmerald to-brandAmber flex items-center justify-center text-white shadow-md">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-2xl font-bold font-serif tracking-tight text-white">
                  {footerData.brand}
                </span>
              </a>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm font-sans mb-6">
                {footerData.tagline}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-emerald-950/70 border border-emerald-800/60 flex items-center justify-center text-white/70 hover:text-white hover:border-brandAmber hover:bg-brandAmber/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-emerald-950/70 border border-emerald-800/60 flex items-center justify-center text-white/70 hover:text-white hover:border-brandAmber hover:bg-brandAmber/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-emerald-950/70 border border-emerald-800/60 flex items-center justify-center text-white/70 hover:text-white hover:border-brandAmber hover:bg-brandAmber/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerData.columns.map((col, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-sm font-serif font-bold text-white tracking-wider uppercase mb-4 text-emerald-400">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, linkIdx) => {
                    const isPhone = link.startsWith('+');
                    const isEmail = link.includes('@');

                    if (isPhone) {
                      return (
                        <li key={linkIdx}>
                          <a
                            href={`tel:${link}`}
                            className="text-white/60 hover:text-white text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5 text-brandAmber" />
                            <span>{link}</span>
                          </a>
                        </li>
                      );
                    }
                    if (isEmail) {
                      return (
                        <li key={linkIdx}>
                          <a
                            href={`mailto:${link}`}
                            className="text-white/60 hover:text-white text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5 text-brandAmber" />
                            <span>{link}</span>
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={linkIdx}>
                        <a
                          href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors block py-0.5"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Language */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
              <Globe className="w-3.5 h-3.5 text-brandAmber" />
              <span>Language: {lang}</span>
            </div>
            <span>•</span>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
