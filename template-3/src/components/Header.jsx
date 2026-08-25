import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  return (
    <header className="w-full flex items-center justify-between px-8 md:px-14 py-8">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-extrabold text-2xl tracking-tight text-gray-900">
          Homeland
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-10">
        <a 
          href="#about" 
          className="text-gray-700 font-medium text-base hover:text-gray-900 transition-colors duration-200"
        >
          About us
        </a>
        <a 
          href="#activities" 
          className="text-gray-700 font-medium text-base hover:text-gray-900 transition-colors duration-200"
        >
          Activities
        </a>
        <a 
          href="#schedule" 
          className="text-gray-700 font-medium text-base hover:text-gray-900 transition-colors duration-200"
        >
          Schedule
        </a>
      </nav>

      {/* Action CTA */}
      <div>
        <button className="btn-black" onClick={onOpenBooking}>
          Book
          <ArrowUpRight className="arrow-icon w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
