import React from 'react';
import { footerLinks } from '../data/casalaData';
import { Play, Apple, Monitor } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12 text-[#4B515D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 pb-12 border-b border-gray-100">
          
          {/* Brand Info (Span 2 on large screens) */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="inline-flex items-center gap-1 group">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1A1D20] group-hover:text-casala-teal transition-colors">
                casala
              </span>
              <span className="text-xs font-semibold text-gray-500 self-start mt-0.5">®</span>
            </a>

            <div className="space-y-1.5 pt-2 text-xs sm:text-sm text-gray-500">
              <p>
                <a
                  href="mailto:Info@besnik.agency"
                  className="hover:text-casala-teal transition-colors"
                >
                  Info@besnik.agency
                </a>
              </p>
              <p>
                <a
                  href="tel:+4588435849"
                  className="hover:text-casala-teal transition-colors"
                >
                  +458 843 5849
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Blog */}
          <div>
            <h4 className="text-xs font-bold text-[#171A1F] uppercase tracking-wider mb-4">
              Blog
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {footerLinks.blog.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-casala-teal transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h4 className="text-xs font-bold text-[#171A1F] uppercase tracking-wider mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-casala-teal transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Product */}
          <div>
            <h4 className="text-xs font-bold text-[#171A1F] uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-casala-teal transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div>
            <h4 className="text-xs font-bold text-[#171A1F] uppercase tracking-wider mb-4">
              Download App
            </h4>
            <div className="space-y-2.5 text-xs sm:text-[13px]">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-600 hover:text-casala-teal transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Google Play</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-600 hover:text-casala-teal transition-colors"
              >
                <Apple className="w-3.5 h-3.5 fill-current" />
                <span>Apple Store</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-600 hover:text-casala-teal transition-colors"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Social Icons and Copyright */}
        <div className="pt-8 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-5 text-gray-500">
            {/* Medium */}
            <a
              href="#"
              className="font-bold text-xs hover:text-casala-teal transition-colors tracking-tight"
            >
              M
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="font-bold text-xs hover:text-casala-teal transition-colors"
            >
              f
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="font-bold text-xs hover:text-casala-teal transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="font-bold text-xs hover:text-casala-teal transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          <p className="text-[11px] text-gray-400">
            ©2021 Casala Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
