import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Compass, Mail, Sparkles, Waves } from 'lucide-react';

export default function CtaFooterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 4000);
    }
  };

  const boardSilhouettes = [
    { name: 'Twin Fish', length: `5'8"`, tail: 'Swallow Tail' },
    { name: 'Thruster Pro', length: `6'1"`, tail: 'Round Squash' },
    { name: 'Mid Hybrid', length: `7'2"`, tail: 'Round Pin' },
    { name: 'Log Cruiser', length: `9'4"`, tail: 'Square Tail' },
  ];

  return (
    <footer id="footer" className="bg-[#041513] text-white pt-24 pb-12 relative overflow-hidden border-t border-teal-900/40">
      {/* Background Subtle Wave Accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#009E96]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter & Action Card */}
        <div className="rounded-3xl sm:rounded-5xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-8 sm:p-12 md:p-16 mb-20 relative overflow-hidden backdrop-blur-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009E96]/20 border border-[#009E96]/40 text-teal-300 text-xs font-mono font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#009E96]" />
              <span>THE TIDELINE CIRCLE</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
              Never Miss A Custom Blank Drop
            </h3>

            <p className="text-teal-100/70 text-sm sm:text-base mb-8 leading-relaxed">
              Subscribers receive early access to limited seasonal glassing runs, shaper design logs,
              and private ocean test invitations.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#009E96] focus:ring-1 focus:ring-[#009E96] transition-all font-mono"
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribed}
                className="px-8 py-3.5 rounded-full bg-[#009E96] hover:bg-[#028B84] text-white font-semibold text-xs tracking-wider transition-all duration-300 shadow-teal-glow flex items-center justify-center gap-2 flex-shrink-0"
              >
                {isSubscribed ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>SUBSCRIBED!</span>
                  </>
                ) : (
                  <>
                    <span>JOIN CIRCLE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Minimalist Board Silhouettes Showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
            {boardSilhouettes.map((board) => (
              <div
                key={board.name}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#009E96]/40 transition-colors"
              >
                <div className="h-14 flex items-center justify-center mb-2">
                  <svg viewBox="0 0 60 140" className="h-full stroke-[#009E96] fill-transparent stroke-[2]">
                    <path d="M 30 5 C 45 30, 48 70, 45 110 C 42 130, 35 135, 30 135 C 25 135, 18 130, 15 110 C 12 70, 15 30, 30 5 Z" />
                    <line x1="30" y1="5" x2="30" y2="135" strokeDasharray="3 3" stroke="#009E96" strokeWidth="1" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="font-mono text-xs font-bold text-white block">{board.name}</span>
                  <span className="font-mono text-[10px] text-teal-300/70 block">{board.length} • {board.tail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#009E96] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                ✦
              </span>
              <span className="font-display font-black text-xl tracking-tight">Tideline ©</span>
            </div>
            <p className="text-teal-100/60 text-xs max-w-sm leading-relaxed mb-4">
              Handcrafted high-performance surfboards engineered in California and shaped for
              coastlines worldwide.
            </p>
            <div className="font-mono text-xs text-teal-300/80">
              STUDIO // 33.7490° N, 118.0410° W
            </div>
          </div>

          <div>
            <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-[#009E96] mb-4">
              Collection
            </h5>
            <ul className="space-y-2.5 text-xs text-teal-100/70">
              <li><a href="#boards" className="hover:text-white transition-colors">Coastal Cruiser</a></li>
              <li><a href="#boards" className="hover:text-white transition-colors">White Drift Fish</a></li>
              <li><a href="#boards" className="hover:text-white transition-colors">Sunset Twin</a></li>
              <li><a href="#boards" className="hover:text-white transition-colors">Ocean Voyager</a></li>
              <li><a href="#boards" className="hover:text-white transition-colors">Custom Shaping</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-[#009E96] mb-4">
              Studio
            </h5>
            <ul className="space-y-2.5 text-xs text-teal-100/70">
              <li><a href="#studio" className="hover:text-white transition-colors">Artisan Process</a></li>
              <li><a href="#manifesto" className="hover:text-white transition-colors">Hydrodynamics</a></li>
              <li><a href="#stories" className="hover:text-white transition-colors">Field Testing</a></li>
              <li><a href="#beyond" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Shaping Bays</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-[#009E96] mb-4">
              Legal
            </h5>
            <ul className="space-y-2.5 text-xs text-teal-100/70">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Craft</a></li>
              <li><a href="#shipping" className="hover:text-white transition-colors">Global Freight</a></li>
              <li><a href="#warranty" className="hover:text-white transition-colors">Lifetime Blank Care</a></li>
            </ul>
          </div>
        </div>

        {/* Giant Bottom Brand Watermark */}
        <div className="w-full text-center select-none pointer-events-none py-6 overflow-hidden">
          <span className="font-display font-black text-[17vw] leading-none text-white/[0.04] tracking-tighter uppercase block">
            TIDELINE
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-teal-100/50 gap-4">
          <div>
            © 2017-2026 Tideline Surfboard Co. All rights reserved. Hand-finished with pride.
          </div>
          <div className="flex items-center gap-6">
            <span>SERIES 26.4</span>
            <span>•</span>
            <span>PACIFIC WATERWAYS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
