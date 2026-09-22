import React, { useState } from 'react';
import { Mail, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({ particleCount: 35, spread: 50, origin: { y: 0.8 } });
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12 text-[#141814]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Top Newsletter & Contact Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-gray-100 items-start">
          
          {/* Newsletter (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Let's Build Your Financial Future.
            </h3>

            <form onSubmit={handleSubscribe} className="mt-6 flex items-center max-w-md bg-[#F8F9F7] p-1.5 rounded-full border border-gray-200">
              <div className="flex items-center pl-3 flex-1">
                <Mail className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-xs text-[#141814] placeholder-gray-400 focus:outline-none w-full"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-[#141814] hover:bg-black text-white text-xs font-bold transition-all shadow-sm flex-shrink-0"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>

            <p className="text-[10px] text-gray-400 mt-2 pl-2">
              By subscribing you agree to our <a href="#" className="underline hover:text-black">Privacy Policy</a>
            </p>
          </div>

          {/* Quick Contact Details (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            <div>
              <span className="font-bold text-gray-400 uppercase text-[10px] tracking-wider block mb-1">Location</span>
              <p className="font-semibold text-gray-800 leading-relaxed">
                Fintech HQ Innovation Park,<br />Global Financial District
              </p>
            </div>

            <div>
              <span className="font-bold text-gray-400 uppercase text-[10px] tracking-wider block mb-1">Call Us</span>
              <p className="font-semibold text-gray-800">
                +1 (800) 456-7890
              </p>
            </div>

            <div>
              <span className="font-bold text-gray-400 uppercase text-[10px] tracking-wider block mb-1">Email</span>
              <p className="font-semibold text-gray-800">
                hello@finora.io
              </p>
            </div>

            <div>
              <span className="font-bold text-gray-400 uppercase text-[10px] tracking-wider block mb-1">Working Hours</span>
              <p className="font-semibold text-gray-800 leading-relaxed">
                Mon – Fri: 9:00 AM – 6:00 PM (GMT)
              </p>
            </div>
          </div>

        </div>

        {/* Directory Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-gray-100 text-xs">
          {/* Products */}
          <div>
            <h4 className="font-bold text-[#141814] mb-4">Products</h4>
            <ul className="space-y-2.5 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">Personal Finance</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Business Accounts</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Virtual Cards</a></li>
              <li><a href="#" className="hover:text-black transition-colors">International Payments</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Developer APIs</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-bold text-[#141814] mb-4">Features</h4>
            <ul className="space-y-2.5 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">Spending Analytics</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Real-Time Alerts</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Multi-Currency Wallet</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Smart Savings Goals</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Credit Insights</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[#141814] mb-4">Resources</h4>
            <ul className="space-y-2.5 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Product Updates</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Guides & Tutorials</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-[#141814] mb-4">Social Media</h4>
            <div className="flex items-center gap-3 text-gray-600">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-gray-400">
          <p>© 2026 Finora. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
