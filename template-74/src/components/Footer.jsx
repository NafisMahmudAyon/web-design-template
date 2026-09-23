import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer id="contact" className="w-full bg-[#121316] text-white select-none">
      {/* Top Banner: Get In Touch */}
      <div className="w-full border-b border-white/10 py-20 px-6 sm:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Get in touch
        </h2>
        <button
          onClick={onOpenContact}
          className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider rounded transition-all active:scale-95"
        >
          CONTACT US
        </button>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <h3 className="text-base font-bold text-white mb-3">Dust+Cream</h3>
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed mb-6 font-normal">
              Crechtenwoord K12 182 DK <br />
              Alknjcxb, All Rights Reserved
            </p>

            <div className="flex items-center gap-3 text-white">
              <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#5b7b99] flex items-center justify-center transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#5b7b99] flex items-center justify-center transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#5b7b99] flex items-center justify-center transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white mb-4">Links</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">Overons</a></li>
              <li><a href="#showcase-1" className="hover:text-white transition-colors">Social Media</a></li>
              <li><a href="#showcase-2" className="hover:text-white transition-colors">Counters</a></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white mb-4">Get in touch</h4>
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              Crechtenwoord K12 <br />
              182 DK Alknjcxb <br />
              085-132567 <br />
              info@lobar.net
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-[11px] text-gray-500">
          <p>© 2021 Dust+Cream. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
