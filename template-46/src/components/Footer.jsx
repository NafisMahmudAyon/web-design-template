import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Send, 
  Twitter, 
  Linkedin, 
  Github, 
  ShieldCheck, 
  Smartphone,
  Apple
} from 'lucide-react';

export const Footer = ({ onGetStarted }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#090b07] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-finovia-lime/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-Footer Hero CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-finovia-card via-[#161c11] to-finovia-card border border-finovia-lime/20 p-8 sm:p-12 mb-20 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-finovia-lime/10 border border-finovia-lime/20 text-xs font-bold text-finovia-lime mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Bank-Grade Encryption & FDIC Insured</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Ready to take control of your financial destiny?
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Set up your account in under 3 minutes. Zero paperwork, instant virtual card issuance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-finovia-lime text-finovia-dark text-sm font-extrabold hover:bg-finovia-lime-glow hover:shadow-xl hover:shadow-finovia-lime/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#pricing"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all text-center"
            >
              Compare Plans
            </a>
          </div>
        </div>

        {/* Multi-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & Newsletter Column (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-finovia-lime flex items-center justify-center shadow-lg shadow-finovia-lime/20">
                <span className="font-black text-finovia-dark text-base">F</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Finovia<span className="text-finovia-lime">.</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Autonomous financial management platform designed for ambitious individuals and high-growth global ventures.
            </p>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="relative max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full py-3.5 pl-4 pr-28 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-finovia-lime transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-xl bg-finovia-lime text-finovia-dark text-xs font-bold hover:bg-finovia-lime-glow transition-all flex items-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Joined!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              {[
                { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
                { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
                { icon: <Github className="w-4 h-4" />, href: '#', label: 'GitHub' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-finovia-lime hover:border-finovia-lime/40 transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-finovia-lime transition-colors">Personal Accounts</a></li>
              <li><a href="#services" className="hover:text-finovia-lime transition-colors">Treasury Operations</a></li>
              <li><a href="#services" className="hover:text-finovia-lime transition-colors">VISA Platinum Card</a></li>
              <li><a href="#services" className="hover:text-finovia-lime transition-colors">Tax Automation</a></li>
              <li><a href="#services" className="hover:text-finovia-lime transition-colors">Multi-Currency Vaults</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-finovia-lime transition-colors">About Us</a></li>
              <li><a href="#about" className="hover:text-finovia-lime transition-colors">Careers (Hiring!)</a></li>
              <li><a href="#contact" className="hover:text-finovia-lime transition-colors">Press & Media</a></li>
              <li><a href="#contact" className="hover:text-finovia-lime transition-colors">Security & Trust</a></li>
              <li><a href="#contact" className="hover:text-finovia-lime transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Download App</h4>
            <p className="text-xs text-slate-400 mb-4">Manage wealth on the go with iOS and Android applications.</p>
            
            <div className="space-y-2.5">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-finovia-lime/40 text-left transition-all">
                <Apple className="w-6 h-6 text-white" />
                <div>
                  <div className="text-[10px] text-slate-400 leading-none">Download on the</div>
                  <div className="text-xs font-bold text-white leading-tight">Apple App Store</div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-finovia-lime/40 text-left transition-all">
                <Smartphone className="w-6 h-6 text-white" />
                <div>
                  <div className="text-[10px] text-slate-400 leading-none">Get it on</div>
                  <div className="text-xs font-bold text-white leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Finovia Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
