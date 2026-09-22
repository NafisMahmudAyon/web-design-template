import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { footerData } from '../data/evergreen59Data';

export const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-[#FAFAFA] text-slate-800 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#home" className="flex items-center gap-2 mb-6 group">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  EG
                </div>
                <span className="text-xl font-bold font-display tracking-tight text-slate-900">
                  {footerData.brand}
                </span>
              </a>

              <h4 className="text-sm font-bold font-display text-slate-900 mb-1.5 uppercase tracking-wider">
                Subscribe
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed mb-4 max-w-sm">
                {footerData.newsletterDesc}
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Subscribed! Check your inbox for the latest releases.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brandLime-dark transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-brandLime hover:bg-brandLime-hover text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-[11px] text-slate-400 mt-3 font-sans">
                By subscribing you agree to with our <a href="#privacy" className="underline hover:text-slate-600">Privacy Policy</a>
              </p>
            </div>
          </div>

          {/* Directory Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerData.columns.map((col, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4 font-display">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-xs sm:text-sm text-slate-500 hover:text-brandLime-dark transition-colors block py-0.5"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-4">
            {footerData.legal.map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && <span>|</span>}
                <a href="#legal" className="hover:text-slate-600 transition-colors">
                  {item}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
