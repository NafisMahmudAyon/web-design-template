import React, { useState } from 'react';
import { ArrowUp, CheckCircle, Mail, User } from 'lucide-react';
import { navLinks } from '../data/investaData';

export const NewsletterFooter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-white border-t border-neutral-100 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Newsletter Subscription Box */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight mb-8">
            Subscribe Our Newsletter
          </h2>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center justify-center gap-3 animate-fadeIn">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <p className="text-sm font-medium">
                Thank you for subscribing! Exclusive property briefings have been sent to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
                {/* Name Input */}
                <div className="w-full sm:w-1/3 relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div className="w-full sm:w-1/2 relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                  />
                </div>

                {/* Subscribe Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#202020] hover:bg-neutral-800 text-white text-sm font-medium rounded-md shadow-sm transition-all duration-200 shrink-0 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Subscribe
                </button>
              </div>

              {/* Checkbox consent */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900 cursor-pointer"
                />
                <label
                  htmlFor="consent"
                  className="text-xs text-neutral-400 cursor-pointer select-none"
                >
                  Vidit maiestatis principes &bull; I agree to the privacy statement and terms
                </label>
              </div>
            </form>
          )}
        </div>

        {/* Minimalist Footer Bar */}
        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif font-bold text-neutral-900">
              Investa
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-investa-red" />
            <span className="text-xs text-neutral-400 ml-4">
              &copy; {new Date().getFullYear()} Investa Real Estate. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#privacy" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors group"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
