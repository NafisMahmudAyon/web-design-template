import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { footerData } from '../data/greenovaData';

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200/80 pt-16 sm:pt-20 pb-12 overflow-hidden text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-gray-200/70">
          {/* Left Column: Brand & Newsletter (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#home" className="inline-block group">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950 font-display flex items-center gap-1.5">
                  {footerData.brand}
                  <span className="w-2 h-2 rounded-full bg-brand-lime inline-block group-hover:scale-125 transition-transform" />
                </span>
              </a>

              <div className="mt-8">
                <h4 className="text-base font-bold text-gray-950">
                  {footerData.newsletter.title}
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-500 max-w-sm">
                  {footerData.newsletter.subtitle}
                </p>

                {/* Newsletter Form Pill */}
                <form onSubmit={handleSubscribe} className="mt-5">
                  <div className="flex items-center p-1.5 rounded-full border border-gray-300 bg-[#FAFAF9] shadow-xs max-w-md focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 transition-all">
                    <div className="pl-3.5 pr-2 text-gray-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder={footerData.newsletter.placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-full bg-[#0F172A] hover:bg-black text-white text-xs font-semibold shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex-shrink-0"
                    >
                      {subscribed ? 'Subscribed!' : footerData.newsletter.buttonText}
                    </button>
                  </div>
                </form>

                {subscribed && (
                  <p className="mt-2 text-xs text-emerald-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Thank you for subscribing to Greenova clean power updates.</span>
                  </p>
                )}

                <p className="mt-3 text-[11px] text-gray-400">
                  {footerData.newsletter.disclaimer}
                </p>
              </div>
            </div>
          </div>

          {/* Right Columns: Navigation Links (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerData.columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3.5">
                <h4 className="text-sm font-bold text-gray-950 tracking-tight">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-gray-500 hover:text-gray-950 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-6">
            {footerData.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
