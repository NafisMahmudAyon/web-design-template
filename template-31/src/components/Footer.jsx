import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#635BFF] flex items-center justify-center text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">Finvesto</span>
            </div>

            <div className="space-y-2 text-xs text-slate-400 font-medium">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>hellosajibur@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>+88 01701 076 703</span>
              </p>
            </div>
          </div>

          {/* Links Column 1: Solution */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Solution</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">Why Sequence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">OpenAI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Links Column 2: Customers */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Customers</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">Procurement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Links Column 3: Customers */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Customers</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">Procurement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Links Column 4: Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <p>© Copyright 2026 Finvesto. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
