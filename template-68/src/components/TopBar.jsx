import React from 'react';
import { Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function TopBar({ onSignUpClick }) {
  return (
    <div className="w-full bg-[#fed700] text-gray-900 text-xs font-medium py-2 px-4 sm:px-8 border-b border-[#ebd013] select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left: Phone */}
        <div className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-gray-800" />
          <span>Call Us: <strong className="font-semibold">+123-456-789</strong></span>
        </div>

        {/* Center: Promo Banner */}
        <div className="flex items-center gap-1">
          <span>Sign up and GET <strong>25% OFF</strong> for your first order.</span>
          <button
            type="button"
            onClick={onSignUpClick}
            className="underline font-bold hover:text-black transition-colors ml-1 cursor-pointer"
          >
            Sign up now
          </button>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex items-center gap-3">
          <a
            href="#facebook"
            aria-label="Facebook"
            className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a
            href="#twitter"
            aria-label="Twitter"
            className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <a
            href="#instagram"
            aria-label="Instagram"
            className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="#youtube"
            aria-label="YouTube"
            className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
          >
            <Youtube className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
