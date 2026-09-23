import React from 'react';

export const SpringDoodle = ({ className = 'text-[#548A63]' }) => (
  <svg
    viewBox="0 0 100 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-20 h-5 inline-block ${className}`}
  >
    <path
      d="M5 14C12 4 18 20 25 10C32 2 38 19 45 10C52 2 58 19 65 10C72 2 78 19 85 10C90 4 95 12 98 14"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CrownDoodle = ({ className = 'text-[#548A63]' }) => (
  <svg
    viewBox="0 0 40 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-4 inline-block ${className}`}
  >
    <path
      d="M3 17L11 4L20 15L29 4L37 17"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SoundwavesDoodle = ({ className = 'text-neutral-700' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 inline-block ${className}`}
  >
    <path
      d="M4 18C4 18 8 15 8 12C8 9 4 6 4 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M9 20C9 20 14 16 14 12C14 8 9 4 9 4"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M14 22C14 22 20 17 20 12C20 7 14 2 14 2"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const StarburstDoodle = ({ className = 'text-[#548A63]' }) => (
  <span className={`inline-block font-sans font-bold text-2xl select-none animate-pulse ${className}`}>
    ✶
  </span>
);
