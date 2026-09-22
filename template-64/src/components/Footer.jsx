import React, { useState } from 'react';
import { ArrowUp, MapPin, CheckCircle2 } from 'lucide-react';
import MonsterLogo from './MonsterLogo';
import { footerData } from '../data/agencyData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 border-t border-[#1B2B1F]/60 bg-[#070908] relative">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo + Newsletter Subscription */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-14 border-b border-[#1B2B1F]/60">
          <div>
            <MonsterLogo textClass="text-2xl" />
            <p className="text-xs text-neutral-400 mt-2 max-w-sm">
              Engineering high-velocity digital infrastructure, enterprise software, and scalable web apps.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-xs text-neutral-400 max-w-xs leading-relaxed">
              {footerData.newsletterText}
            </span>

            {subscribed ? (
              <div className="px-4 py-2.5 rounded-full bg-[#132218] border border-[#25E575]/40 text-[#25E575] text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed to developer dispatches</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="px-4 py-2.5 rounded-full bg-[#0D1510] border border-[#1B2B1F] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#25E575] w-64"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#25E575] hover:bg-[#1fd368] text-black font-bold text-xs tracking-wider transition-colors shrink-0 cursor-pointer shadow-[0_0_15px_rgba(37,229,117,0.35)]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle / Bottom Navigation & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>

          <div className="flex items-center gap-2 text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-[#25E575]" />
            <span>{footerData.address}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#1B2B1F]/30 text-center text-xs text-neutral-500 font-mono">
          {footerData.copyright}
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#25E575] text-black flex items-center justify-center shadow-[0_0_20px_rgba(37,229,117,0.5)] hover:scale-110 transition-transform cursor-pointer"
      >
        <ArrowUp className="w-5 h-5 font-bold" />
      </button>
    </footer>
  );
}
