import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Section7Footer({ onExplore, onNavigate, onSubscribe }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe(email);
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">
      
      {/* 1. CTA Banner Hero */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center p-8 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Estate Dusk View"
            className="w-full h-full object-cover object-center brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Start Your Journey to <br />
            <span className="font-italic-serif font-normal text-white">Smarter Living</span>
          </h2>

          <p className="text-sm md:text-base text-white/80 font-light max-w-xl mx-auto">
            From modern apartments to luxury estates your perfect home awaits.
          </p>

          <div className="pt-4">
            <button
              onClick={onExplore}
              className="inline-flex items-center gap-2 bg-[#F8BA8B] hover:bg-[#F6A870] text-black font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer group"
            >
              <span>Explore Homes</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* 2. Footer Main Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-12 space-y-16">
        
        {/* Top Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          
          {/* Logo & Email Column (4 Cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#F8BA8B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" />
                  <path d="M9 21V12h6v9" />
                </svg>
              </div>
              <span className="font-serif italic text-2xl font-bold tracking-tight text-white">
                Housen
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-white/50 tracking-widest block uppercase">
                // SHOT US AN EMAIL
              </span>
              <a
                href="mailto:info@housenrealty.com"
                className="text-sm font-semibold text-white/90 hover:text-[#F8BA8B] transition-colors"
              >
                info@housenrealty.com
              </a>
            </div>
          </div>

          {/* Navigation Links Column (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-mono text-white/50 tracking-widest block uppercase">
              • NAVIGATION
            </span>
            <ul className="space-y-2.5 text-base font-semibold text-white/90">
              <li><button onClick={() => onNavigate('hero')} className="hover:text-[#F8BA8B] transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('featured')} className="hover:text-[#F8BA8B] transition-colors">Listings</button></li>
              <li><button onClick={() => onNavigate('stories')} className="hover:text-[#F8BA8B] transition-colors">About</button></li>
              <li><button onClick={() => onNavigate('why-us')} className="hover:text-[#F8BA8B] transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Socials Column (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-mono text-white/50 tracking-widest block uppercase">
              • SOCIALS
            </span>
            <ul className="space-y-2.5 text-base font-semibold text-white/90">
              <li><a href="#" className="hover:text-[#F8BA8B] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#F8BA8B] transition-colors">Linkedin</a></li>
              <li><a href="#" className="hover:text-[#F8BA8B] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#F8BA8B] transition-colors">Facebook</a></li>
            </ul>
          </div>

        </div>

        {/* Middle Newsletter Input Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-16">
          
          <div className="md:col-span-5 space-y-1">
            <span className="text-[11px] font-mono text-white/50 tracking-widest block uppercase">
              • NEWSLETTER
            </span>
            <p className="text-xs font-mono text-white/60 tracking-wider uppercase">
              //RECEIVE UPDATE AND NEWS FROM US
            </p>
          </div>

          <div className="md:col-span-7">
            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Thank you for subscribing to Housen Newsletter!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent border-b border-white/30 py-3 text-sm text-white focus:outline-none focus:border-[#F8BA8B] placeholder-white/40 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 bg-[#F8BA8B] hover:bg-[#F6A870] text-black font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Submit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Enormous Framed Watermark Typography HOUSEN */}
        <div className="relative py-12 px-6 border-l border-r border-white/10 my-8">
          {/* Wireframe Bracket Corners: Top Left, Top Right, Bottom Left, Bottom Right */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/40" />

          <h2 className="text-[17vw] font-black tracking-tighter leading-none text-white text-center font-display uppercase w-full select-none">
            HOUSEN
          </h2>
        </div>

        {/* Bottom Rights Copyright Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/50 pt-4">
          <div>
            © 2025 VTRL WRLD // ALL RIGHTS RESERVED
          </div>

          <div>
            WE RESPECT YOUR <a href="#" className="underline hover:text-white transition-colors">PRIVACY</a>
          </div>

          <div>
            WEBSITE BY <a href="#" className="underline hover:text-white transition-colors">HUY</a>
          </div>
        </div>

      </div>

    </footer>
  );
}
