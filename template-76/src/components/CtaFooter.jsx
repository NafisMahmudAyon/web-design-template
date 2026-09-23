import React from 'react';
import { motion } from 'framer-motion';

export default function CtaFooter() {
  return (
    <footer className="p-3 sm:p-6 lg:p-8 bg-white">
      {/* Outer Dark Rounded Card */}
      <div className="max-w-7xl mx-auto rounded-[32px] sm:rounded-[44px] bg-[#111319] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden border border-gray-800/80 shadow-2xl">
        
        {/* Subtle Concentric Wireframe Arcs (Figma motif) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
          <svg viewBox="0 0 500 500" className="w-full h-full text-purple-400 stroke-current fill-none">
            <ellipse cx="380" cy="250" rx="300" ry="200" strokeWidth="1" />
            <ellipse cx="380" cy="250" rx="220" ry="140" strokeWidth="1" strokeDasharray="3 3" />
            <ellipse cx="380" cy="250" rx="140" ry="80" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Top Brand Mark */}
          <div className="mb-10">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#6D28D9] to-[#8B5CF6] flex items-center justify-center p-1.5 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current">
                <path d="M4 6h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zm0 5h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1zm0 5h8a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1z" />
              </svg>
            </div>
          </div>

          {/* Large Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 font-display"
          >
            Innovate. <span className="text-[#8B5CF6]">Deliver.</span> Grow.
          </motion.h2>

          {/* Links & Subtitle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-4 pb-14 border-b border-gray-800">
            {/* Left Subtitle */}
            <div className="md:col-span-6">
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm">
                Delivering secure, scalable, and easy-to-use SaaS tools designed to help your team work smarter every day.
              </p>
            </div>

            {/* Right Link Columns */}
            <div className="md:col-span-6 grid grid-cols-2 gap-8">
              {/* Pages */}
              <div>
                <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-4">
                  Pages
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
                  <li>
                    <a href="#business" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-white transition-colors">
                      Waitlist
                    </a>
                  </li>
                </ul>
              </div>

              {/* Other Pages */}
              <div>
                <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-4">
                  Other Pages
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Social Icons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>2025. All rights reserved.</p>

            {/* Social Icons (X, Instagram, Pinterest, LinkedIn, TikTok, YouTube) */}
            <div className="flex items-center space-x-4 text-gray-400">
              {/* X */}
              <a href="#" className="hover:text-white transition-colors font-bold text-sm">
                𝕏
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
