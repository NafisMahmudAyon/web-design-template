import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import { newsletterData } from '../data/wanderlustData';

export const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[340px] flex items-center justify-center p-8 sm:p-14 shadow-2xl">
          {/* Background Image & Warm Sunset Overlay */}
          <img
            src={newsletterData.bgImage}
            alt="Scenic Sunset Shore"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brandForestDark/90 via-brandForestDark/75 to-brandForestDark/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15),transparent_70%)]" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brandAmber text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Weekly Travel Curation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight whitespace-pre-line">
              {newsletterData.headline}
            </h2>

            <p className="mt-3 text-white/80 text-sm sm:text-base font-light max-w-lg mb-8">
              Join 85,000+ wanderers receiving secret flight sales, bespoke packing guides, and handpicked boutique lodge discounts.
            </p>

            {/* Email Subscription Form */}
            {subscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 backdrop-blur-md"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold">Thank you for subscribing! Your curated welcome guide is on its way.</span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-lg focus-within:border-brandAmber/80 transition-all"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-white/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-brandAmber hover:bg-amber-400 text-brandForestDark font-bold text-sm shrink-0 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
