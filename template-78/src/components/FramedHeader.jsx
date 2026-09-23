import React from 'react';

/**
 * FramedHeader Component
 * Implements the signature fine-line wireframe header styling seen in Investa Figma mockup
 * Features an elegant border box with an overline category badge anchored into the top hairline border.
 */
export const FramedHeader = ({
  badge,
  title,
  italicWord,
  align = 'left',
  dark = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`relative inline-block ${isCenter ? 'text-center mx-auto' : ''} ${className}`}>
      {/* Outer subtle wireframe frame */}
      <div
        className={`relative inline-block border ${
          dark ? 'border-neutral-700/80' : 'border-neutral-300/90'
        } px-5 sm:px-7 pt-3.5 pb-4 transition-all duration-300`}
      >
        {/* Overline badge anchored onto top border */}
        <span
          className={`absolute -top-2.5 ${
            isCenter ? 'left-1/2 -translate-x-1/2' : 'left-4 sm:left-5'
          } px-2.5 text-[11px] sm:text-xs uppercase tracking-[0.18em] font-medium transition-colors ${
            dark ? 'bg-[#202020] text-neutral-400' : 'bg-white text-neutral-500'
          }`}
        >
          {badge}
        </span>

        {/* Main Heading with luxury editorial serif styling */}
        <h2
          className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight tracking-tight ${
            dark ? 'text-white' : 'text-neutral-900'
          }`}
        >
          {title}{' '}
          {italicWord && (
            <span className="italic font-normal font-serif text-investa-dark">
              {italicWord}
            </span>
          )}
        </h2>
      </div>
    </div>
  );
};
