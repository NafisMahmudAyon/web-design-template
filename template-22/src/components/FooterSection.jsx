import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { HERO_ASSETS } from '../data/mockData';

export default function FooterSection({ onOpenPlanTrip }) {
  return (
    <footer className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Final CTA Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-[36px] p-8 sm:p-16 lg:p-20 text-center overflow-hidden shadow-2xl border border-white/20"
      >
        {/* Snowy Mountain Photo Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_ASSETS.ctaMountain}
            alt="Snowy Blue Mountain Peak"
            className="w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b131c] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Plan Your Dream Trip with AI in Seconds
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto font-sans">
            Get personalized itineraries, smart recommendations, and seamless travel planning all powered by AI.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={onOpenPlanTrip}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all shadow-xl group"
            >
              <span>Join The Trip</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Multi-Column Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-8 border-t border-white/10 text-xs text-gray-400">
        {/* Column 1: Brand & Bio */}
        <div className="md:col-span-4 space-y-4">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🐱</span>
            <span className="font-display text-2xl font-bold text-white tracking-tight">
              Travelynx
            </span>
          </a>

          <p className="text-xs text-gray-400 max-w-xs leading-relaxed font-sans">
            Explore the world effortlessly with intelligent, personalized travel planning powered by AI.
          </p>

          <button
            onClick={onOpenPlanTrip}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            <span>Try it now</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Column 2: Releases */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-bold text-white uppercase text-xs tracking-wider">Releases</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Smart Routes</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AI Itineraries</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Vision Maps</a></li>
            <li><a href="#" className="hover:text-white transition-colors">100M Destinations</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-bold text-white uppercase text-xs tracking-wider">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Travel Stories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Apps</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Travel Library</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-bold text-white uppercase text-xs tracking-wider">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div>© {new Date().getFullYear()} Travelynx Inc. All rights reserved.</div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            {[Facebook, Twitter, Instagram, Linkedin].map((IconComp, i) => (
              <a key={i} href="#" className="hover:text-cyan-400 transition-colors">
                <IconComp className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
