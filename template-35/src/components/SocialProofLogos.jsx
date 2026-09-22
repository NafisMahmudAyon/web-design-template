import React from 'react';
import { Star } from 'lucide-react';

export default function SocialProofLogos() {
  const logos = [
    { name: 'Square', font: 'font-bold tracking-tight text-base' },
    { name: 'GitHub', font: 'font-extrabold tracking-tight text-base' },
    { name: 'Adobe', font: 'font-bold uppercase tracking-wider text-sm' },
    { name: 'Trello', font: 'font-bold tracking-tight text-base' },
    { name: 'Medium', font: 'font-serif font-bold text-base' },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
          Trusted by Top Companies & Peoples
        </p>

        <div className="flex flex-wrap items-center justify-around gap-8">
          
          {/* 4.9 Star Review with avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64&q=80',
              ].map((img, i) => (
                <img key={i} src={img} alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              ))}
              <div className="w-8 h-8 rounded-full bg-[#141814] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                10k+
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-gray-700">4.9 Star Review</span>
            </div>
          </div>

          {/* Partner Brand Logos */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-12 opacity-60">
            {logos.map((logo) => (
              <span key={logo.name} className={`${logo.font} text-gray-700 hover:text-black transition-colors`}>
                {logo.name}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
