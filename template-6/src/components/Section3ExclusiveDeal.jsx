import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { featuredDealProduct } from '../data/products';

export default function Section3ExclusiveDeal({ onSubscribe, onExploreDeals }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe(email);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#F5F5F5] border-b border-[#E2E2E2] overflow-hidden py-16 md:py-24 relative">
      
      {/* Top Header */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-12 border-b border-[#E2E2E2] flex items-end justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#121212] tracking-tight max-w-2xl"
        >
          Exclusive Deals On Products You'll Love
        </motion.h2>

        <span className="text-xs font-mono text-[#888888] tracking-widest hidden sm:inline-block">
          //Featured Deal
        </span>
      </div>

      {/* Main Showcase Container with Giant ORVIA Watermark */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-12 relative min-h-[500px] md:min-h-[600px] flex flex-col justify-between">
        
        {/* Parallax Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display font-extrabold text-[15vw] md:text-[22vw] text-[#E7E7E7] opacity-60 tracking-widest uppercase leading-none">
            ORVIA
          </span>
        </div>

        {/* Center Hero Device Product Image */}
        <div className="relative z-10 my-4 md:my-0 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md lg:max-w-lg flex items-center justify-center drop-shadow-2xl"
          >
            <img
              src={featuredDealProduct.image}
              alt={featuredDealProduct.title}
              className="max-h-[380px] md:max-h-[480px] object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Bottom Split Layout: Left Info & Right Floating Card */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-sm md:text-base text-[#555555] leading-relaxed max-w-lg">
              Discover limited-time offers across electronics, self-care, fashion, groceries, and accessories. Shop smarter and save more on everyday essentials with fresh weekly exclusive deals for every shopper.
            </p>

            <button
              onClick={onExploreDeals}
              className="inline-flex items-center gap-3 border border-[#121212] text-[#121212] px-6 py-3.5 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Deals</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Floating White Card (Newsletter + Deal Callout) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 bg-white p-8 border border-[#E2E2E2] shadow-xl max-w-xl ml-auto"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#121212] tracking-tight mb-2">
              Up To 50% Off Bestselling Products
            </h3>
            
            <p className="text-xs uppercase tracking-wider font-bold text-[#888888] mb-4">
              Featured Collection
            </p>

            <p className="text-xs md:text-sm text-[#666666] leading-relaxed mb-6">
              Discover exclusive discounts on top customer favorites, with fresh weekly deals available across every major shopping category for everyone.
            </p>

            {submitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Thank you for subscribing! Check your inbox for exclusive codes.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E2E2E2] text-sm text-[#121212] focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Sign UP
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
