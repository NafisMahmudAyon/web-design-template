import React from 'react';
import { ArrowUpRight, Facebook, Instagram, Twitter, Youtube, Mail, Phone, ShieldCheck } from 'lucide-react';

export default function LuxuryFooter() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  ];

  const footerNav = [
    { name: 'Market', href: '#features' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Collection', href: '#collection' },
    { name: 'Valuation', href: '#vault' },
    { name: 'Marketplace', href: '#marketplace' },
  ];

  return (
    <footer className="bg-[#030406] text-white pt-24 pb-12 border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Row: Mission Statement & Social Grid */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 border-b border-white/[0.08] gap-8">
          <div>
            {/* Avatars Row */}
            <div className="flex items-center -space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-white/10">
                <img src="/assets/avatar-michael.jpg" alt="Collector 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-white/10">
                <img src="/assets/avatar-james.jpg" alt="Collector 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-white/10">
                <img src="/assets/avatar-daniel.jpg" alt="Collector 3" className="w-full h-full object-cover" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-normal tracking-tight text-white">
              Collect With Purpose. <br />
              Invest With <span className="italic font-serif text-gold-400">Confidence.</span>
            </h3>
          </div>

          {/* Social Buttons 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 text-xs font-mono font-medium transition-all"
                >
                  <Icon className="w-4 h-4 text-gold-400" />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Middle Row: Integrated Watch Visual & Navigation List */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Watch Graphic + Contact Info */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-8">
            <div className="w-48 sm:w-60 aspect-square rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex-shrink-0 p-3 shadow-2xl">
              <img
                src="/assets/footer-watch-dial.jpg"
                alt="Chronova Integrated Luxury Watch Dial"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="text-center sm:text-left space-y-2">
              <span className="font-mono text-[10px] text-gold-400 uppercase tracking-widest font-semibold block">
                PRIVATE CLIENT SERVICES
              </span>
              <a
                href="mailto:hello@chronova.com"
                className="font-serif text-lg sm:text-xl text-white hover:text-gold-400 transition-colors block"
              >
                hello@chronova.com
              </a>
              <a
                href="tel:+01234567890"
                className="font-mono text-sm text-gray-400 hover:text-white transition-colors block"
              >
                +0123 456 7890
              </a>
              <div className="pt-2 text-xs font-mono text-gray-500">
                GENEVA // NEW YORK // LONDON // TOKYO
              </div>
            </div>
          </div>

          {/* Right Column: Links with Diagonal Arrows */}
          <div className="lg:col-span-5 flex flex-col justify-center divide-y divide-white/[0.08]">
            {footerNav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-4 flex items-center justify-between group hover:text-gold-400 transition-colors"
              >
                <span className="font-serif text-base sm:text-lg text-gray-300 group-hover:text-gold-300 transition-colors">
                  {link.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-gold-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © 2026 Chronova Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Security: Tier-IV Vault Protocol</span>
            <span>•</span>
            <span className="text-gold-400">Institutional Horology Indices</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
