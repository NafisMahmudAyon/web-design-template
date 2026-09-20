import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Compass, Instagram, Twitter, Youtube } from 'lucide-react';

export default function EditorialMagazineSection() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      issue: 'ISSUE NO. 26',
      year: '© 2026',
      title: 'Cold Water Alchemy: Shaping For The Oregon Coast',
      author: 'Kaelan Vance — Lead Shaper',
      time: '04 MIN READ',
      excerpt: 'How heavier cold water density alters hull suction and why we thickened the forward stringer rails for high-latitude beach breaks.',
      image: '/assets/story-paddle-surfer.jpg',
    },
    {
      issue: 'ISSUE NO. 25',
      year: '© 2026',
      title: 'The Keel Revolution: Why Two Fins Generate Pure Velocity',
      author: 'Maya Lin — Pro Surfer',
      time: '06 MIN READ',
      excerpt: 'Twin-fin physics decoded: dissecting zero-center fin drag and how down-the-line projection unlocks speed on flat sections.',
      image: '/assets/story-sup-male.jpg',
    },
  ];

  return (
    <section id="stories" className="py-24 sm:py-32 bg-white border-b border-[#0F1E1B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009E96]/10 text-[#009E96] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Tideline Editorial & Field Journal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0F1E1B] tracking-tight">
              Every Wave Tells A Story
            </h2>
          </div>

          <p className="text-[#5B6B67] text-sm sm:text-base max-w-md">
            Dispatches from shaping bays, remote point breaks, and the riders testing our shapes in
            raw ocean elements.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Essay Meta & Index */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-[#FAFAF7] border border-black/5">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#009E96] font-bold border-b border-black/10 pb-4 mb-6">
                <span>{stories[0].issue}</span>
                <span>{stories[0].year}</span>
              </div>

              <span className="font-mono text-[11px] text-gray-400 uppercase tracking-widest block mb-2">
                FEATURE ARTICLE
              </span>

              <h3 className="font-display font-bold text-2xl text-[#0F1E1B] hover:text-[#009E96] transition-colors leading-snug mb-4 cursor-pointer">
                {stories[0].title}
              </h3>

              <p className="text-sm text-[#5B6B67] leading-relaxed mb-6">
                {stories[0].excerpt}
              </p>

              <div className="flex items-center gap-3 text-xs font-mono text-[#0F1E1B]">
                <span className="font-bold">{stories[0].author}</span>
                <span className="text-gray-300">•</span>
                <span className="text-[#009E96] font-bold">{stories[0].time}</span>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-black/10 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500">PRINT EDITION NO. 04</span>
              <a
                href="#stories"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009E96] hover:underline"
              >
                <span>Read Full Essay</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Center Column: High Impact Surfer Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl border border-black/5 relative group min-h-[420px]"
          >
            <img
              src="/assets/story-paddle-surfer.jpg"
              alt="Surfer paddling out through ocean breakers"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-[#009E96] text-white text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                Photo Dispatch
              </span>
              <h4 className="text-xl font-display font-bold">
                Paddling out at sunrise into Cape Kiwanda south swell
              </h4>
              <p className="text-xs text-white/70 mt-1 font-mono">
                Captured on 35mm film by J. Sterling
              </p>
            </div>
          </motion.div>

          {/* Right Column: Secondary Story & Socials */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            {/* Secondary Story Card */}
            <div className="rounded-3xl bg-[#F5F6F3] p-5 border border-black/5 shadow-sm group hover:bg-white transition-colors flex-1 flex flex-col justify-between">
              <div>
                <div className="h-44 rounded-2xl overflow-hidden mb-4 relative">
                  <img
                    src="/assets/story-sup-male.jpg"
                    alt="Surfer checking equipment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white font-mono text-[9px] px-2 py-0.5 rounded">
                    INTERVIEW
                  </span>
                </div>

                <div className="font-mono text-[10px] text-[#009E96] font-bold uppercase mb-1">
                  SHAPER DIALOGUE
                </div>
                <h5 className="font-display font-bold text-base text-[#0F1E1B] leading-tight mb-2 group-hover:text-[#009E96] transition-colors">
                  {stories[1].title}
                </h5>
                <p className="text-xs text-[#5B6B67] line-clamp-2">
                  {stories[1].excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200 mt-4 flex items-center justify-between text-xs font-mono text-gray-500">
                <span>{stories[1].time}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#009E96]" />
              </div>
            </div>

            {/* Social / Connect Capsule */}
            <div className="p-5 rounded-3xl bg-[#0F1E1B] text-white flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-teal-300 block uppercase">
                  FOLLOW DISPATCHES
                </span>
                <span className="font-display font-bold text-sm">@tideline.surf</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#009E96] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#009E96] flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
