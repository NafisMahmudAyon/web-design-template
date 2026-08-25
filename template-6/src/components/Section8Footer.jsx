import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, CheckCircle2 } from 'lucide-react';

export default function Section8Footer({ onSubscribe, onSelectCategory }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe(email);
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#F5F5F5] border-b border-[#E2E2E2] pt-16 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Newsletter Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E2E2] border-t border-b border-[#E2E2E2]">
          
          {/* Logo Column (3 Cols) */}
          <div className="lg:col-span-3 p-8 flex items-center">
            <span className="font-display font-extrabold text-3xl md:text-4xl tracking-[0.25em] text-[#121212]">
              ORVIA
            </span>
          </div>

          {/* Form Input Column (6 Cols) */}
          <div className="lg:col-span-6 p-8 flex flex-col justify-center">
            <h3 className="text-lg md:text-xl font-bold text-[#121212] mb-4">
              Get Exclusive Deals Before Everyone Else
            </h3>

            {subscribed ? (
              <div className="p-3 bg-emerald-50 text-emerald-800 text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <Mail className="w-5 h-5 text-[#888888] absolute left-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-[#BEBEBE] text-sm text-[#121212] focus:outline-none focus:border-black placeholder-[#999999] transition-colors"
                />
              </form>
            )}
          </div>

          {/* Subscribe Action Column (3 Cols) */}
          <div className="lg:col-span-3 p-8 flex flex-col justify-between items-start lg:items-end space-y-4">
            <span className="text-xs text-[#777777] font-medium">Only Valuable Resources</span>
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto bg-black text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Subscribe Now</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Middle Links Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E2E2] border-b border-[#E2E2E2] text-sm">
          
          {/* Company */}
          <div className="p-8 space-y-4">
            <h4 className="font-bold text-[#121212] mb-2">Company</h4>
            <ul className="space-y-2.5 text-[#666666]">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div className="p-8 space-y-4">
            <h4 className="font-bold text-[#121212] mb-2">Collections</h4>
            <ul className="space-y-2.5 text-[#666666]">
              <li><button onClick={() => onSelectCategory("Electronic Products")} className="hover:text-black transition-colors">Electronics</button></li>
              <li><button onClick={() => onSelectCategory("Self Care")} className="hover:text-black transition-colors">Self Care</button></li>
              <li><button onClick={() => onSelectCategory("Fashion & Clothing")} className="hover:text-black transition-colors">Fashion & Clothing</button></li>
              <li><button onClick={() => onSelectCategory("Food & Grocery")} className="hover:text-black transition-colors">Food & Grocery</button></li>
              <li><button onClick={() => onSelectCategory("Bags & Accessories")} className="hover:text-black transition-colors">Bags & Accessories</button></li>
            </ul>
          </div>

          {/* Support */}
          <div className="p-8 space-y-4">
            <h4 className="font-bold text-[#121212] mb-2">Support</h4>
            <ul className="space-y-2.5 text-[#666666]">
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Shipping Information</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Order Tracking</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="p-8 space-y-4">
            <h4 className="font-bold text-[#121212] mb-2">Social Media</h4>
            <ul className="space-y-2.5 text-[#666666]">
              {['Facebook', 'Instagram', 'Twitter', 'Youtube', 'Tiktok'].map((social, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-black transition-colors flex items-center justify-between group">
                    <span>{social}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Terms, Payment Badges */}
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#E2E2E2] border-b border-[#E2E2E2] text-xs text-[#666666]">
          
          <div className="md:col-span-3 p-6 flex items-center">
            <span>© 2026 Moss. All Rights Reserved.</span>
          </div>

          <div className="md:col-span-5 p-6 flex items-center space-x-6">
            <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy & Cookie Policy</a>
          </div>

          {/* Payment Badges */}
          <div className="md:col-span-4 p-6 flex items-center justify-start md:justify-end space-x-3">
            <span className="px-2.5 py-1 bg-white border border-[#E2E2E2] font-black text-blue-700 rounded text-[10px]">VISA</span>
            <span className="px-2.5 py-1 bg-white border border-[#E2E2E2] font-bold text-blue-900 rounded text-[10px]">PayPal</span>
            <span className="px-2.5 py-1 bg-white border border-[#E2E2E2] font-bold text-red-600 rounded text-[10px]">Mastercard</span>
            <span className="px-2.5 py-1 bg-white border border-[#E2E2E2] font-bold text-gray-800 rounded text-[10px]">G Pay</span>
            <span className="px-2.5 py-1 bg-white border border-[#E2E2E2] font-bold text-gray-900 rounded text-[10px]">Pay</span>
          </div>

        </div>

        {/* Giant Edge-to-Edge Background Watermark ORVIA Text */}
        <div className="w-full pt-8 pb-4 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display font-black text-[22vw] text-[#D8D8D8] opacity-50 leading-none tracking-[0.05em] uppercase text-center block w-full">
            ORVIA
          </span>
        </div>

      </div>
    </footer>
  );
}
