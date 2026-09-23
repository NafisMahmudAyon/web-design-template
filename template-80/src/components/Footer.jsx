import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, GraduationCap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-neutral-100 pt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          {/* Left Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#548A63] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold text-neutral-900">
                Dr. Angela Doe
              </span>
            </div>

            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Automate your entire learning journey, tutoring sessions, and physics mastery with an award-winning personalized academic framework.
            </p>

            <div className="flex items-center space-x-3">
              <a
                href="#facebook"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#548A63] hover:text-white text-neutral-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#twitter"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#548A63] hover:text-white text-neutral-600 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#548A63] hover:text-white text-neutral-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 1: Categories */}
          <div className="md:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-neutral-900 mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-500">
              <li>
                <a href="#courses" className="hover:text-[#548A63] transition-colors">
                  Quantum Physics For Beginners
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#548A63] transition-colors">
                  Super Simple Physics
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#548A63] transition-colors">
                  Physics for Curious Kids
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#548A63] transition-colors">
                  Advanced University Physics
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#548A63] transition-colors">
                  Mathematics for Physicists
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#548A63] transition-colors">
                  Equations of Mathematical Physics
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: About */}
          <div className="md:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-neutral-900 mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-500">
              <li>
                <a href="#about" className="hover:text-[#548A63] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#548A63] transition-colors">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#finance" className="hover:text-[#548A63] transition-colors">
                  Finance Experts
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#548A63] transition-colors">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-[#548A63] transition-colors">
                  Product Manager
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#548A63] transition-colors">
                  The Team
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="md:col-span-2">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-neutral-900 mb-4">
              Follow Us
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-500">
              <li>
                <a href="#facebook" className="hover:text-[#548A63] transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#twitter" className="hover:text-[#548A63] transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-[#548A63] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#linkedin" className="hover:text-[#548A63] transition-colors">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Green Copyright Bar */}
      <div className="bg-[#548A63] py-4 text-center text-xs text-white/90">
        Copyright &copy; {new Date().getFullYear()} all rights reserved Dr. Angela Doe
      </div>
    </footer>
  );
};
