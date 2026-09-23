import React from 'react';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { StarburstDoodle } from './HandDoodles';

export const HeroSection = ({ onGetStarted, onLearnMore }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, CTA, and Trustpilot rating */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Overline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Meet With
              </span>
              <div className="w-8 h-px bg-neutral-300" />
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] font-bold text-neutral-900 tracking-tight mb-6">
              Advanced Physics <br />
              with <span className="text-[#548A63]">Expert</span> Online <br />
              Tutoring <StarburstDoodle />
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
              He preference connection astonished on of ye. Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onGetStarted}
                className="px-7 py-3 bg-[#548A63] hover:bg-[#437150] text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Started Today
              </button>
              <button
                onClick={onLearnMore}
                className="px-7 py-3 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-xs sm:text-sm font-semibold rounded-md transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Trustpilot Social Proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-neutral-900 flex items-center gap-1">
                  <span className="text-emerald-500 text-base">★</span> Trustpilot
                </span>
                <div className="flex text-emerald-500 text-xs">
                  {'★★★★★'}
                </div>
              </div>

              <div className="w-px h-5 bg-neutral-200" />

              {/* Student Avatars Stack */}
              <div className="flex items-center -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Student"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Student"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Student"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <div className="w-7 h-7 rounded-full bg-[#1C2420] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                  +9k
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Split Green Chalkboard & Smiling Physics Educator */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Split Green Rounded Backdrop with Chalkboard Formulas */}
              <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-[#548A63] rounded-3xl overflow-hidden -z-0">
                {/* Chalk Physics Equations SVG Background */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 600"
                  fill="none"
                  stroke="currentColor"
                >
                  <text x="50" y="80" fontSize="16" fontFamily="serif" fill="currentColor">
                    F = G(m₁m₂)/r²
                  </text>
                  <text x="60" y="160" fontSize="18" fontFamily="serif" fill="currentColor">
                    ∇ × B = μ₀J + μ₀ε₀(∂E/∂t)
                  </text>
                  <text x="40" y="240" fontSize="16" fontFamily="serif" fill="currentColor">
                    E = mc² &bull; λ = h/p
                  </text>
                  <text x="70" y="320" fontSize="16" fontFamily="serif" fill="currentColor">
                    iℏ ∂ψ/∂t = Ĥψ
                  </text>
                  <circle cx="180" cy="420" r="40" strokeWidth="1" strokeDasharray="4 4" />
                  <ellipse cx="180" cy="420" rx="60" ry="20" strokeWidth="1" transform="rotate(-30 180 420)" />
                  <text x="60" y="520" fontSize="16" fontFamily="serif" fill="currentColor">
                    PV = nRT
                  </text>
                </svg>
              </div>

              {/* Educator Cutout Photo */}
              <div className="relative z-10 pt-8 pl-4 pr-6 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85"
                  alt="Dr. Angela Doe - Online Physics Tutor"
                  className="w-full max-h-[520px] object-cover object-top rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
