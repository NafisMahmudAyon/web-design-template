import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function FooterSection({ onOpenContact, onNavigate }) {
  return (
    <footer className="w-full pt-8 pb-12 px-3 sm:px-6 max-w-[1400px] mx-auto">
      {/* 1. TOP CTA ROW: "Let's Build Your Dream House" */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 sm:pb-16 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-[1.05] tracking-tight">
            Let's Build Your <br />
            Dream House
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => onOpenContact('Direct Build Inquiries')}
        >
          <div className="text-right">
            <span className="text-xs text-zinc-600 font-normal block mb-1">
              Interested to build you home?
            </span>
            <span className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-breeze-600 transition-colors">
              contact@ofspace.agency
            </span>
          </div>

          <div className="w-12 h-12 rounded-full bg-white border border-zinc-300 text-zinc-900 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all shadow-md group-hover:scale-110">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>

      {/* 2. BOTTOM MISTY VILLA CONTAINER */}
      <div className="relative rounded-[32px] sm:rounded-[48px] overflow-hidden bg-zinc-950 text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-white/15 min-h-[460px] flex flex-col justify-between">
        {/* Background Misty Architectural Estate Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Misty Concrete Architectural House"
            className="w-full h-full object-cover object-center transform scale-105 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        </div>

        {/* Content Top: Brand & Links */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14">
          {/* Left Column: Brand & Paragraph */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Breeze
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              We're here to help you with any inquiries or project ideas you may have. Whether you have a question about our services,
            </p>
          </div>

          {/* Right Column: 2 Link Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-12 lg:justify-items-end text-xs sm:text-sm font-medium">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <button onClick={() => onNavigate('hero')} className="text-left text-zinc-300 hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => onNavigate('module-tech')} className="text-left text-zinc-300 hover:text-white transition-colors">
                About Us
              </button>
              <button onClick={() => onNavigate('deluxe-condos')} className="text-left text-zinc-300 hover:text-white transition-colors">
                Our Works
              </button>
              <button onClick={() => onNavigate('feedback')} className="text-left text-zinc-300 hover:text-white transition-colors">
                Community
              </button>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <button onClick={() => onNavigate('map-section')} className="text-left text-zinc-300 hover:text-white transition-colors">
                Features
              </button>
              <button onClick={() => onOpenContact('Get Started')} className="text-left text-zinc-300 hover:text-white transition-colors">
                Get Started
              </button>
              <button onClick={() => onNavigate('faq')} className="text-left text-zinc-300 hover:text-white transition-colors">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Giant Breeze Watermark Running Across Bottom */}
        <div className="relative -mb-6 sm:-mb-10 select-none pointer-events-none overflow-hidden text-center">
          <span className="font-bold text-[100px] sm:text-[180px] md:text-[240px] lg:text-[300px] text-white/[0.07] tracking-tight leading-none block whitespace-nowrap">
            Breeze
          </span>
        </div>

        {/* Bottom Bar: Copyright, Legal Links, Social Icons */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
          <p>© 2024 Copyright By Breeze</p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-zinc-400">
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Terms</a>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy</a>
            <a href="#cookies" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Cookies</a>
            <a href="#legal" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Legal</a>
            <a href="#recalls" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Recalls</a>
          </div>

          {/* Social Circles */}
          <div className="flex items-center gap-2">
            <a
              href="#facebook"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white text-white hover:text-zinc-900 flex items-center justify-center transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5 fill-current" />
            </a>
            <a
              href="#instagram"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white text-white hover:text-zinc-900 flex items-center justify-center transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="#linkedin"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white text-white hover:text-zinc-900 flex items-center justify-center transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="#youtube"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white text-white hover:text-zinc-900 flex items-center justify-center transition-all"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
