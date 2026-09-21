import React from 'react';
import { ArrowUpRight, ArrowUp, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090d16] text-white pt-20 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Logo Title Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-16 border-b border-white/10">
          <span className="font-display text-7xl sm:text-9xl font-black tracking-tight text-white leading-none">
            Finexa
          </span>
          <span className="text-xl font-bold text-white/60 mt-4 sm:mt-0">
            © 2026
          </span>
        </div>

        {/* Middle Navigation & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-white/10">
          
          {/* Newsletter Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-sm font-black text-white uppercase tracking-wider">
              Get News & Growth Tips
            </h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs px-4 py-3 rounded-l-full focus:outline-none focus:border-[#b0f92b] flex-1"
              />
              <button
                type="submit"
                className="bg-white text-[#090d16] font-black text-xs px-6 py-3 rounded-r-full hover:bg-[#b0f92b] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-white/40 font-bold">
              By subscribing you agree to our Privacy Policy
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-black text-gray-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-bold text-white/80">
              <li><a href="#" className="hover:text-[#b0f92b] transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-[#b0f92b] transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-[#b0f92b] transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-[#b0f92b] transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-[#b0f92b] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-black text-gray-400 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-bold text-white/80">
              <li><a href="#pricing" className="hover:text-[#b0f92b] transition-colors">Basic Plan</a></li>
              <li><a href="#pricing" className="hover:text-[#b0f92b] transition-colors">Pro Plan</a></li>
              <li><a href="#pricing" className="hover:text-[#b0f92b] transition-colors">Custom Plan</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-black text-gray-400 uppercase tracking-wider">
              Social Media
            </h4>
            <div className="flex items-center space-x-3 text-white/80">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Contact Info Bar */}
        <div className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-white/70 font-bold border-b border-white/10">
          <div>
            <span className="text-[10px] text-gray-500 uppercase block mb-1">Phone Number</span>
            <span className="text-white">+01 822 282 8289</span>
          </div>

          <div>
            <span className="text-[10px] text-gray-500 uppercase block mb-1">Address</span>
            <span className="text-white">123 Road, Dhaka, Bangladesh</span>
          </div>

          <div>
            <span className="text-[10px] text-gray-500 uppercase block mb-1">Monday - Friday</span>
            <span className="text-white">09:00 AM - 08:00 PM</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-bold space-y-4 sm:space-y-0">
          <p>© 2026 FinexaP, All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of services</a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-[#b0f92b] hover:text-[#090d16] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
