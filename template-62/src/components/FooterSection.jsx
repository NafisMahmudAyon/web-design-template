import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { footerData } from '../data/homelyData';

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-[#15181C] text-neutral-400 pt-16 pb-12 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-14">
          {/* Brand Info (spans 2) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <svg className="w-8 h-8 text-[#C88C48]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M6 34V14L20 4L34 14V34" />
                <path d="M14 34V20H26V34" />
                <path d="M20 4V34" />
              </svg>
              <span className="text-xl font-extrabold text-white font-syne tracking-tight">
                Homely
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm font-sans">
              {footerData.description}
            </p>

            {/* Address & Phone */}
            <div className="space-y-2 text-xs text-neutral-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C88C48] shrink-0" />
                <span>{footerData.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C88C48] shrink-0" />
                <span>Phone: {footerData.phone}</span>
              </p>
            </div>
          </div>

          {/* Directory Columns */}
          {footerData.columns.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={(e) => e.preventDefault()}
                      className="text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Socials on Left, Copyright on Right */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          {/* Socials */}
          <div className="flex items-center gap-4 text-neutral-400">
            <a href="#facebook" aria-label="Facebook" className="hover:text-white transition-colors">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#twitter" aria-label="Twitter" className="hover:text-white transition-colors">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="#youtube" aria-label="YouTube" className="hover:text-white transition-colors">
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-white transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
