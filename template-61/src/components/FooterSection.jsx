import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { footerData } from '../data/treadlyData';

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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

function PinterestIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
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

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-[#F8F9FA] text-neutral-700 pt-16 pb-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-14">
          {/* Brand Column (spans 2) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <a href="#" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-neutral-950 flex items-center justify-center text-white shadow-sm">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="text-2xl font-black text-neutral-950 font-display tracking-tight">
                {footerData.brand}
              </span>
            </a>

            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6 max-w-sm">
              {footerData.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 text-neutral-600 hover:text-white border border-neutral-200 flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 text-neutral-600 hover:text-white border border-neutral-200 flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 text-neutral-600 hover:text-white border border-neutral-200 flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <PinterestIcon className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 text-neutral-600 hover:text-white border border-neutral-200 flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 text-neutral-600 hover:text-white border border-neutral-200 flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory Columns */}
          {footerData.columns.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="text-sm font-bold text-neutral-950 font-syne mb-4 tracking-tight">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={(e) => e.preventDefault()}
                      className="text-xs text-neutral-500 hover:text-neutral-950 transition-colors"
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
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-6">
            {footerData.legal.map((item, idx) => (
              <a
                key={idx}
                href="#privacy"
                onClick={(e) => e.preventDefault()}
                className="hover:text-neutral-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
