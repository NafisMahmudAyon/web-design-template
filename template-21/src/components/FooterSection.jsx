import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, QrCode, Copy, Share2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function FooterSection({ onOpenSignUp }) {
  return (
    <footer className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Final CTA Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#121417] border border-white/10 rounded-[36px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to dive in and get started?
            </h2>

            <p className="text-base text-gray-400 max-w-xl font-sans leading-relaxed">
              Create a free account and begin investing in as little as four minutes, with a quick and seamless setup.
            </p>

            <button
              onClick={onOpenSignUp}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00e699] text-black font-bold text-sm hover:bg-[#34d399] transition-all shadow-neon-emerald group"
            >
              <span>Join for Zypto</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Mobile Phone QR Code Scanner Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 bg-[#0e1012] border-4 border-white/15 rounded-[36px] p-4 shadow-2xl text-center space-y-4">
              <div className="w-20 h-3 bg-black rounded-b-lg mx-auto mb-2" />
              <p className="text-xs text-gray-400 font-semibold">Receive Crypto</p>

              {/* QR Code Placeholder Graphic */}
              <div className="bg-white p-4 rounded-2xl w-36 h-36 mx-auto flex items-center justify-center shadow-md">
                <QrCode className="w-28 h-28 text-black" />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-2 font-mono text-[10px] text-[#00e699] truncate">
                BC1QARQ2...SERFRV59
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] text-white flex items-center justify-center gap-1">
                  <Copy className="w-3 h-3" />
                  <span>Copy Address</span>
                </button>
                <button className="flex-1 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] text-white flex items-center justify-center gap-1">
                  <Share2 className="w-3 h-3" />
                  <span>Share QR</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Multi-Column Links */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/10 text-sm text-gray-400">
        {/* Column 1: Links */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-bold text-white uppercase text-xs tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#markets" className="hover:text-white transition-colors">Markets</a></li>
            <li><a href="#trade" className="hover:text-white transition-colors">Trade</a></li>
            <li><a href="#zero-fees" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Column 2: Follow Us */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-bold text-white uppercase text-xs tracking-wider">Follow Us</h4>
          <div className="text-xs space-y-1 text-gray-300">
            <p>mail@studio.com</p>
            <p>+91 0123456789</p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            {[Facebook, Twitter, Instagram, Linkedin].map((IconComp, idx) => (
              <a
                key={idx}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#00e699] hover:text-black text-white flex items-center justify-center transition-colors"
              >
                <IconComp className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Address */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-bold text-white uppercase text-xs tracking-wider">Address</h4>
          <p className="text-xs text-gray-400 max-w-xs">
            #21, North Street, Velachery, Chennai.
          </p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div>© {new Date().getFullYear()} Zypto. All Rights Reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>

      {/* Massive Zypto Decorative Branding Logo */}
      <div className="pt-12 text-center overflow-hidden opacity-90">
        <div className="flex items-center justify-center gap-4 text-white font-display text-7xl sm:text-9xl font-extrabold tracking-tighter uppercase select-none">
          <Sparkles className="w-16 h-16 sm:w-28 sm:h-28 text-[#00e699] shrink-0" />
          <span>ZYPTO</span>
        </div>
      </div>
    </footer>
  );
}
