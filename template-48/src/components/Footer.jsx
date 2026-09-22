import React, { useState } from 'react';
import { Sprout, Mail, ArrowRight, Check, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

export const Footer = ({ onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-terra-dark text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-terra-lime/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Pre-footer subscription block */}
        <div className="rounded-3xl bg-terra-card/5 border border-white/10 p-8 sm:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Stay ahead in smart agricultural tech
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/70">
              Receive bi-weekly NDVI indices, weather outlooks, and harvest intelligence directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="relative w-full lg:max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-full py-3.5 pl-4 pr-32 rounded-2xl bg-white/10 border border-white/15 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-terra-lime transition-colors"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-xl bg-terra-lime text-terra-forest text-xs font-bold hover:bg-terra-lime-hover transition-all flex items-center gap-1.5 shadow-sm"
            >
              {subscribed ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Joined</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-terra-lime flex items-center justify-center text-terra-forest shadow-sm">
                <Sprout className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                TerraFarm
              </span>
            </a>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Empowering global farmers and agribusinesses with AI-driven farm efficiency, precision irrigation, and real-time field monitoring.
            </p>

            <div className="flex items-center gap-2.5">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
                { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
                { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
                { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-terra-lime hover:bg-white/10 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li><a href="#home" className="hover:text-terra-lime transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-terra-lime transition-colors">About Us</a></li>
              <li><a href="#solutions" className="hover:text-terra-lime transition-colors">Solutions</a></li>
              <li><button onClick={onOpenContact} className="hover:text-terra-lime transition-colors text-left">Contact Us</button></li>
            </ul>
          </div>

          {/* Solutions (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Solutions</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li><a href="#solutions" className="hover:text-terra-lime transition-colors">Smart Crop Monitoring</a></li>
              <li><a href="#solutions" className="hover:text-terra-lime transition-colors">Modern Irrigation Systems</a></li>
              <li><a href="#solutions" className="hover:text-terra-lime transition-colors">Soil & Weather Analytics</a></li>
              <li><a href="#solutions" className="hover:text-terra-lime transition-colors">Yield Prediction Engine</a></li>
            </ul>
          </div>

          {/* Company (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li><button onClick={onOpenContact} className="hover:text-terra-lime transition-colors text-left">Help & Support</button></li>
              <li><a href="#about" className="hover:text-terra-lime transition-colors">Privacy Policy</a></li>
              <li><a href="#about" className="hover:text-terra-lime transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} TerraFarm Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
