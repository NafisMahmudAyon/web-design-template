import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Check } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3500);
  };

  return (
    <footer className="bg-[#141716] text-white pt-20 pb-12 overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-neutral-800">
          {/* Left Column: Brand & Manifesto */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="font-serif text-3xl font-bold tracking-wider text-furn-gold inline-block mb-6"
              >
                FURN
              </a>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-8">
                Furniture serves as a visible illustration of the winning aesthetics, societal values, and technological improvements of a selected technology or culture. Each piece of fixture holds a tale inside its design, materials, and craftsmanship.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 mb-6">
              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-neutral-800/80 hover:bg-furn-gold hover:text-neutral-900 text-neutral-300 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                className="w-9 h-9 rounded-full bg-neutral-800/80 hover:bg-furn-gold hover:text-neutral-900 text-neutral-300 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                className="w-9 h-9 rounded-full bg-neutral-800/80 hover:bg-furn-gold hover:text-neutral-900 text-neutral-300 flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                className="w-9 h-9 rounded-full bg-neutral-800/80 hover:bg-furn-gold hover:text-neutral-900 text-neutral-300 flex items-center justify-center transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <p className="text-neutral-500 text-xs">
              Copyright &copy; {new Date().getFullYear()} FURN All rights reserved
            </p>
          </div>

          {/* Right Column: Newsletter & Navigation Columns */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Newsletter Input Box */}
            <div className="mb-14">
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-4">
                Sign up for our newsletter
              </h3>

              {submitted ? (
                <div className="p-4 bg-neutral-800/80 rounded-full flex items-center gap-3 text-emerald-400 text-xs max-w-md animate-fadeIn">
                  <Check className="w-4 h-4" />
                  <span>Welcome! Exclusive collections sent to your inbox.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center max-w-md bg-neutral-900 border border-neutral-700/80 rounded-full p-1.5 focus-within:border-furn-gold transition-colors"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-transparent px-5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 text-xs font-semibold tracking-wider transition-all"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-3 gap-8 pt-4">
              {/* Home */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                  Home
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-400">
                  <li>
                    <a href="#about" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#store" className="hover:text-white transition-colors">
                      Store
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Help */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                  Help
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-400">
                  <li>
                    <a href="#privacy" className="hover:text-white transition-colors">
                      Privacy and Policy
                    </a>
                  </li>
                  <li>
                    <a href="#terms" className="hover:text-white transition-colors">
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                  Social
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-400">
                  <li>
                    <a href="#facebook" className="hover:text-white transition-colors">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#twitter" className="hover:text-white transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#instagram" className="hover:text-white transition-colors">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
