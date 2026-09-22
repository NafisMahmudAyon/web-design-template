import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail } from 'lucide-react';

export default function PreFooterSection({ onSubscribeSuccess }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
    onSubscribeSuccess?.(email);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="bg-[#111518] text-white pt-16 pb-12 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Headline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-syne tracking-tight leading-tight text-white">
              Stay updated, stay
              <br />
              connected
            </h2>
          </motion.div>

          {/* Right Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:max-w-md"
          >
            <p className="text-sm font-semibold text-neutral-200 mb-3">
              Get Our News And Updates
            </p>

            <form onSubmit={handleSubmit} className="relative flex items-center">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#1F2529] border border-neutral-700/80 focus:border-neutral-500 rounded-full pl-5 pr-32 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#FF5722] hover:bg-[#F4511E] disabled:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 rounded-full transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center gap-1.5"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
            </form>

            <p className="text-[11px] text-neutral-400 mt-2.5">
              By subscribing you agree to our{' '}
              <a
                href="#privacy"
                onClick={(e) => e.preventDefault()}
                className="text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                Privacy Policy
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
