import React from 'react';

export default function CryptoIcon({ type, className = "w-6 h-6" }) {
  switch (type) {
    case 'cardano':
      return (
        <div className={`rounded-full bg-blue-600 flex items-center justify-center text-white ${className}`}>
          <svg className="w-3/5 h-3/5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="4" r="1.5" />
            <circle cx="12" cy="20" r="1.5" />
            <circle cx="4" cy="12" r="1.5" />
            <circle cx="20" cy="12" r="1.5" />
            <circle cx="6" cy="6" r="1.2" />
            <circle cx="18" cy="18" r="1.2" />
            <circle cx="6" cy="18" r="1.2" />
            <circle cx="18" cy="6" r="1.2" />
          </svg>
        </div>
      );

    case 'solana':
      return (
        <div className={`rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center p-1 text-white ${className}`}>
          <svg className="w-3/4 h-3/4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M4 7h13l3 3H7L4 7z" fill="currentColor" stroke="none" />
            <path d="M20 12H7l-3 3h13l3-3z" fill="currentColor" stroke="none" />
            <path d="M4 17h13l3 3H7l-3-3z" fill="currentColor" stroke="none" />
          </svg>
        </div>
      );

    case 'avalanche':
      return (
        <div className={`rounded-full bg-red-600 flex items-center justify-center text-white ${className}`}>
          <svg className="w-3/5 h-3/5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L2 20h20L12 3zm0 5l6.5 10.5h-13L12 8z" />
          </svg>
        </div>
      );

    case 'polkadot':
      return (
        <div className={`rounded-full bg-pink-600 flex items-center justify-center text-white ${className}`}>
          <svg className="w-3/5 h-3/5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="3.5" r="2" />
            <circle cx="12" cy="20.5" r="2" />
            <circle cx="3.5" cy="12" r="2" />
            <circle cx="20.5" cy="12" r="2" />
          </svg>
        </div>
      );

    case 'ethereum':
      return (
        <div className={`rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 ${className}`}>
          <svg className="w-3/5 h-3/5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 13l8 4 8-4L12 2z" />
            <path d="M4 14.5L12 22l8-7.5-8 3.5-8-3.5z" opacity="0.75" />
          </svg>
        </div>
      );

    case 'chainlink':
      return (
        <div className={`rounded-full bg-blue-500 flex items-center justify-center text-white ${className}`}>
          <svg className="w-3/5 h-3/5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          </svg>
        </div>
      );

    case 'polygon':
      return (
        <div className={`rounded-full bg-purple-600 flex items-center justify-center text-white ${className}`}>
          <svg className="w-3/5 h-3/5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 3.2l5.5 3.5v7L12 19.2l-5.5-3.5v-7L12 5.2z" />
          </svg>
        </div>
      );

    default:
      return (
        <div className={`rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs ${className}`}>
          •
        </div>
      );
  }
}
