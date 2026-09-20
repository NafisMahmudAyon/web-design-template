import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CtaFooterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#E2F844', '#1b3b2b', '#ffffff'],
    });
  };

  return (
    <footer className="relative bg-[#0b1812] text-white overflow-hidden">
      {/* 1. CTA Banner Section with Scenic Background */}
      <div className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        {/* Landscape Fairway & Giant Golfio Typography Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/footer-pure-landscape.png"
            alt="Golfio Course Landscape with Giant Logo"
            className="w-full h-full object-cover object-top filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f6f2] via-transparent to-[#102419]/90 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111814] leading-[1.15]"
          >
            Ready to elevate your golf game <br />
            with expert guidance today
          </motion.h2>

          <p className="mt-4 text-base sm:text-lg text-[#4a5c51] max-w-xl mx-auto leading-relaxed">
            Take your golf journey to the next level with easy course bookings, expert-led lessons, and personalized practice tools.
          </p>

          {/* Subscribe Form Pill */}
          <div className="mt-10 max-w-md mx-auto">
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#11231a] border border-[#E2F844]/40 text-white px-6 py-4 rounded-full flex items-center justify-center gap-2.5 shadow-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-[#E2F844]" />
                <span className="text-sm font-semibold">You're on the Golfio VIP Tee Sheet!</span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative bg-white rounded-full p-1.5 shadow-2xl border border-black/10 flex items-center"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent px-6 py-3 text-sm text-[#111814] placeholder-[#809187] outline-none font-medium"
                />
                <button
                  type="submit"
                  className="bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] font-bold text-sm px-7 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-md flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 2. Mega Footer Content & Details */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-64 sm:pt-80 md:pt-96 pb-12">
        {/* Address and Contact Information Overlaying the Green Fairway */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between items-end text-sm text-white/90">
          <div className="md:col-span-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
              Address
            </h4>
            <p className="text-white/90 leading-relaxed max-w-xs">
              123 Golf Course Road, <br />
              Springfield, IL, USA.
            </p>
          </div>

          <div className="md:col-span-6 md:text-right">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
              CONTACT
            </h4>
            <p className="text-white/90 leading-relaxed">
              <a href="mailto:Info@golfersclub.com" className="hover:text-[#E2F844] transition-colors">Info@golfersclub.com</a> <br />
              <a href="tel:+15551234567" className="hover:text-[#E2F844] transition-colors">+1(555)123-4567</a>
            </p>
          </div>
        </div>

        {/* Bottom Legal & Navigation Bar */}
        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div className="flex items-center gap-4">
            <span>© Golfio 2026.</span>
            <span>Play Better.</span>
            <span>Book Smarter.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#membership" className="hover:text-white transition-colors">Membership</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#blog" className="hover:text-white transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
