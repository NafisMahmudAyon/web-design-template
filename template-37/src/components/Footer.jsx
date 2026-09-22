import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, Send } from 'lucide-react';
import { footerColumns } from '../data/flowzyData';

export default function Footer({ onAction }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.85 } });
  };

  return (
    <footer className="bg-white pt-20 pb-12 text-[#0F172A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Top Newsletter Card */}
        <div className="bg-[#FAF9FE] rounded-3xl p-8 sm:p-12 border border-purple-100 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-3">
              <div className="w-8 h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-0.5 opacity-80 mb-2" />
              <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#0F172A]">
                Bring Your Team Together
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md">
                Plan smarter, collaborate seamlessly, and track every project from one powerful workspace.
              </p>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              <div className="text-xs font-bold text-[#0F172A] mb-2">Get Our News And Updates</div>
              
              {subscribed ? (
                <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 p-3 rounded-2xl text-xs font-semibold">
                  Thank you for subscribing! Flowzy updates are on their way.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex items-center bg-white p-1.5 rounded-2xl border border-gray-200 shadow-xs">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent text-xs text-gray-700 px-3 py-1.5 focus:outline-none w-full"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-colors flex-shrink-0"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-400">
                    By subscribing you agree to our{' '}
                    <a href="#privacy" className="underline hover:text-black">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Directory Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-gray-100 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#6D28D9] to-[#8B5CF6] flex items-center justify-center text-white">
                <div className="w-3.5 h-3.5 rounded-sm border border-white rotate-12 flex items-center justify-center">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-[#0F172A] font-display">
                Flowzy
              </span>
            </div>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Experience next-generation productivity with powerful insights, automated workflows, and team collaboration.
            </p>
          </div>

          {/* Links Columns (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            <div>
              <div className="text-xs font-bold text-[#0F172A] mb-3">Platform</div>
              <ul className="space-y-2 text-xs text-gray-500">
                {footerColumns.platform.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-[#6D28D9] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-[#0F172A] mb-3">Resources</div>
              <ul className="space-y-2 text-xs text-gray-500">
                {footerColumns.resources.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-[#6D28D9] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-[#0F172A] mb-3">Company</div>
              <ul className="space-y-2 text-xs text-gray-500">
                {footerColumns.company.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-[#6D28D9] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <div>
            © 2026 Flowzy®. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-gray-700">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-gray-700">Terms of services</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
