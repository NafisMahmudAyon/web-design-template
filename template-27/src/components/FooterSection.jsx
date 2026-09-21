import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#090d16] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-xs font-bold text-white/70">
          <div className="space-y-3">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Personal Finance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Accounts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Virtual Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">International Payments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer APIs</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-wider">
              Features
            </h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Spending Analytics</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Real-Time Alerts</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Multi-Currency Wallet</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Smart Savings Goals</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Credit Insights</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides & Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-wider">
              Social Media
            </h4>
            <div className="flex space-x-3 text-white/80">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-bold space-y-4 sm:space-y-0">
          <p>© 2026 Finora. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
