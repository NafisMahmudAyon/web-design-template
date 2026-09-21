import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FooterSection({ onOpenJoin }) {
  return (
    <footer className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Top CTA Row */}
      <div className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-white/10">
        <div className="space-y-2 max-w-md">
          <span className="font-display text-3xl font-extrabold text-white tracking-wider uppercase">
            VANTAGE
          </span>
          <p className="text-xs text-gray-400 font-sans leading-relaxed">
            Performance tennis for players who treat every point as a decision. Structure, load, and match craft — built around you.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenJoin}
            className="px-6 py-3 rounded-full bg-vantageNeon text-black font-bold text-xs uppercase tracking-wider hover:bg-[#b8e600] transition-colors shadow-neon-glow flex items-center gap-1.5"
          >
            <span>EXPLORE PROGRAMS</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenJoin}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors flex items-center gap-1.5"
          >
            <span>BOOK A TRIAL</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="grid grid-cols-2 md:grid-cols-12 gap-8 text-xs text-gray-400">
        {/* Column 1: Menu */}
        <div className="col-span-1 md:col-span-4 space-y-3">
          <h4 className="font-condensed font-bold text-white uppercase tracking-wider text-sm">MENU</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-vantageNeon transition-colors">Academy</a></li>
            <li><a href="#tracks" className="hover:text-vantageNeon transition-colors">Programs</a></li>
            <li><a href="#coaches" className="hover:text-vantageNeon transition-colors">Coaches</a></li>
            <li><a href="#margins" className="hover:text-vantageNeon transition-colors">Training</a></li>
            <li><a href="#pricing" className="hover:text-vantageNeon transition-colors">Membership</a></li>
            <li><a href="#events" className="hover:text-vantageNeon transition-colors">Events</a></li>
          </ul>
        </div>

        {/* Column 2: Help */}
        <div className="col-span-1 md:col-span-4 space-y-3">
          <h4 className="font-condensed font-bold text-white uppercase tracking-wider text-sm">HELP</h4>
          <ul className="space-y-2">
            <li><a href="#faq" className="hover:text-vantageNeon transition-colors">Contact</a></li>
            <li><a href="#faq" className="hover:text-vantageNeon transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-vantageNeon transition-colors">Returns</a></li>
          </ul>
        </div>

        {/* Column 3: Social */}
        <div className="col-span-2 md:col-span-4 space-y-3">
          <h4 className="font-condensed font-bold text-white uppercase tracking-wider text-sm">SOCIAL</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-vantageNeon transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-vantageNeon transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-vantageNeon transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-vantageNeon transition-colors">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
        <span>hello@vantage.com</span>
        <span>© 2026 VANTAGE — All Rights Reserved</span>
      </div>

      {/* Massive Bottom Decorative Typography */}
      <div className="pt-8 text-center overflow-hidden opacity-90">
        <div className="font-display text-8xl sm:text-[160px] md:text-[220px] font-extrabold tracking-tighter text-[#141e2b] select-none leading-none">
          VANTAGE
        </div>
      </div>
    </footer>
  );
}
