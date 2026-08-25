import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Instagram, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';

export default function FooterSection({ onOpenContact, onNavigate, onSearch, onImageClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const footerImage = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85";

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      onNavigate('picks');
    }
  };

  return (
    <footer className="w-full pt-8 pb-12 px-3 sm:px-6 max-w-[1400px] mx-auto">
      {/* Outer Dark Rounded Card */}
      <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#07080A] text-white pt-10 sm:pt-14 pb-8 px-6 sm:px-12 lg:px-16 overflow-hidden border border-white/10 shadow-2xl">
        {/* Top Navigation Links */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-10 sm:pb-14 border-b border-white/10">
          {/* Left Nav Group */}
          <div className="flex items-center gap-8 sm:gap-12 text-sm sm:text-base font-medium">
            <button
              onClick={() => onOpenContact()}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => onNavigate('story')}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              About Us
            </button>
          </div>

          {/* Right Nav Group */}
          <div className="flex items-center gap-8 sm:gap-12 text-sm sm:text-base font-medium">
            <button
              onClick={() => onNavigate('services')}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Our Services
            </button>
            <button
              onClick={() => onOpenContact('Careers & Joining Team')}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Join Our Team
            </button>
          </div>
        </div>

        {/* Middle Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center py-10 sm:py-14">
          {/* Left: Location, Socials, Search */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Location */}
            <div>
              <h4 className="text-zinc-200 font-semibold text-sm sm:text-base mb-2 tracking-wide">
                Location
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                1234 Maple Avenue, Suite <br />
                600, Rivertown, AZ 12345
              </p>
            </div>

            {/* Social Circle Pills */}
            <div className="flex items-center gap-2.5">
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center font-bold text-xs hover:bg-zinc-200 transition-transform hover:scale-110 shadow-md"
                aria-label="X Twitter"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center hover:bg-zinc-200 transition-transform hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center hover:bg-zinc-200 transition-transform hover:scale-110 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#github"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center hover:bg-zinc-200 transition-transform hover:scale-110 shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="max-w-md relative">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-zinc-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-zinc-900/90 border border-white/20 rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition-all"
                />
              </div>
            </form>
          </div>

          {/* Right: Featured Villa Image Card */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end">
            <div
              className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden aspect-[16/10] w-full max-w-lg shadow-2xl border border-white/15 cursor-pointer group"
              onClick={() => onImageClick && onImageClick(footerImage, "RealWorld Executive Estate")}
            >
              <img
                src={footerImage}
                alt="Modern executive residence"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Giant REALWORLD Watermark Typography */}
        <div className="relative -mb-6 sm:-mb-10 mt-6 select-none pointer-events-none overflow-hidden text-center">
          <span className="font-bebas text-[110px] sm:text-[190px] md:text-[250px] lg:text-[310px] text-white/[0.06] tracking-tight leading-none block whitespace-nowrap">
            REALWORLD
          </span>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2024 RealWORLD. All rights reserved.</p>
          <p className="flex items-center gap-1 text-zinc-400">
            Designed by: <span className="text-zinc-200 font-medium hover:text-white transition-colors cursor-pointer">SahilDesign.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
