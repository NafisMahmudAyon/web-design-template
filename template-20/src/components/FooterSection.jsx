import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Leaf, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

export default function FooterSection({ onOpenDemo }) {
  return (
    <footer className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Final CTA Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-[#efece6] rounded-3xl p-8 sm:p-14 lg:p-20 text-center border border-black/5 shadow-lg overflow-hidden"
      >
        {/* Subtle mountain outline vector background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-end justify-center">
          <svg className="w-full h-48" viewBox="0 0 1000 200" fill="none" preserveAspectRatio="none">
            <path d="M0 200 L250 80 L500 160 L750 40 L1000 200 Z" fill="#18191c" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#18191c] tracking-tight leading-tight">
            See Environmental Risk Before It Becomes Business Risk.
          </h2>

          <p className="text-base sm:text-lg text-[#525860] max-w-2xl mx-auto font-sans">
            Global risk intelligence for businesses managing assets, operations, and supply chains.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#18191c] text-white text-base font-medium hover:bg-black transition-all shadow-md group"
            >
              <span>Explore Live Intelligence</span>
              <span className="w-6 h-6 rounded-full bg-white/15 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#18191c] transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Multi-Column Footer Bottom */}
      <div className="pt-8 border-t border-black/10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Column 1: Brand Logo & Bio */}
        <div className="md:col-span-4 space-y-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#18191c] text-white flex items-center justify-center">
              <Leaf className="w-4 h-4 text-[#22c55e]" />
            </div>
            <span className="font-serif text-2xl font-semibold tracking-tight text-[#18191c]">
              EcoIntel
            </span>
          </a>

          <p className="text-sm text-[#525860] max-w-xs leading-relaxed font-sans">
            Global risk intelligence for businesses managing assets, operations, and supply chains.
          </p>
        </div>

        {/* Column 2: Get In Touch */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Get In Touch</h4>

          <div className="space-y-2 text-sm text-[#525860]">
            <div>
              <span className="block text-xs font-semibold uppercase text-gray-400">EMAIL</span>
              <a href="mailto:contact@aerovista.com" className="hover:text-black font-medium transition-colors">
                contact@aerovista.com
              </a>
            </div>

            <div>
              <span className="block text-xs font-semibold uppercase text-gray-400">LOCATION</span>
              <p className="font-medium">5567 Washington Ave, America, 32289</p>
            </div>
          </div>
        </div>

        {/* Column 3: Follow Our Journey */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Follow Our Journey</h4>

          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'X (Twitter)' },
              { icon: Youtube, label: 'YouTube' },
            ].map((soc, i) => {
              const IconComp = soc.icon;
              return (
                <a
                  key={i}
                  href="#"
                  aria-label={soc.label}
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-gray-700 hover:bg-[#18191c] hover:text-white transition-colors shadow-sm"
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <div className="pt-2 text-xs text-gray-400">
            © {new Date().getFullYear()} EcoIntel Inc. All rights reserved. Built with precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
