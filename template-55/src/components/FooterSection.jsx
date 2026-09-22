import React, { useState } from 'react';
import { Mail, CheckCircle2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { footerData } from '../data/finoraData';

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
      }, 3500);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200/80 pt-16 sm:pt-20 pb-12 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Newsletter + Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-200/80">
          
          {/* Left Column: Let's Build Your Financial Future */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950 font-display whitespace-pre-line leading-tight">
              {footerData.headline}
            </h3>

            <form onSubmit={handleSubscribe} className="mt-6 max-w-md">
              <div className="flex items-center p-1.5 rounded-full border border-gray-300 bg-[#FAFAF9] shadow-xs focus-within:border-gray-950 focus-within:ring-1 focus-within:ring-gray-950 transition-all">
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
                  className="px-5 py-2 rounded-full bg-gray-950 hover:bg-black text-white text-xs font-semibold shadow-xs flex-shrink-0 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {subscribed ? 'Subscribed!' : footerData.newsletter.buttonText}
                </button>
              </div>
            </form>

            {subscribed && (
              <p className="mt-2 text-xs text-emerald-600 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Thank you for subscribing to Finora updates.</span>
              </p>
            )}

            <p className="mt-3 text-[11px] text-gray-400">
              {footerData.newsletter.disclaimer}
            </p>
          </div>

          {/* Right Column: Contact Details (Location, Phone, Email, Hours) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 sm:gap-8 text-xs">
            <div>
              <span className="font-bold text-gray-950 block mb-1">
                {footerData.contactDetails.location.label}
              </span>
              <p className="text-gray-500 leading-relaxed whitespace-pre-line">
                {footerData.contactDetails.location.value}
              </p>
            </div>

            <div>
              <span className="font-bold text-gray-950 block mb-1">
                {footerData.contactDetails.callUs.label}
              </span>
              <p className="text-gray-500">
                {footerData.contactDetails.callUs.value}
              </p>
            </div>

            <div>
              <span className="font-bold text-gray-950 block mb-1">
                {footerData.contactDetails.email.label}
              </span>
              <p className="text-gray-500">
                {footerData.contactDetails.email.value}
              </p>
            </div>

            <div>
              <span className="font-bold text-gray-950 block mb-1">
                {footerData.contactDetails.hours.label}
              </span>
              <p className="text-gray-500 leading-relaxed whitespace-pre-line">
                {footerData.contactDetails.hours.value}
              </p>
            </div>
          </div>

        </div>

        {/* Directory Columns */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-200/80">
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-950 mb-3.5">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-500">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-950 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-950 mb-3.5">
              Social Media
            </h4>
            <div className="flex items-center gap-3 text-gray-700">
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-6">
            {footerData.legal.map((item) => (
              <a key={item} href="#" className="hover:text-gray-950 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
