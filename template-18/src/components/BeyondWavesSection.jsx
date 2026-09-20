import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Globe, Sparkles, Waves } from 'lucide-react';

export default function BeyondWavesSection({ onStoryClick }) {
  const stats = [
    { number: '200+', label: 'Custom Boards Handcrafted', desc: 'Sanded by hand in our California & Byron Bay bays.' },
    { number: '30+', label: 'Coastal Communities', desc: 'Ridden across Hawaii, France, Costa Rica, & Japan.' },
    { number: '12', label: 'Years Of Refinement', desc: 'Iterating hull dynamics and flex patterns since 2017.' },
    { number: '98%', label: 'Rider Retention', desc: 'Surfers who order a second custom quiver model.' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#051C1A] text-white relative overflow-hidden">
      {/* Ambient Teal Gradient Glows */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#009E96]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-[#009E96]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-teal-300 text-xs font-mono font-medium border border-white/15 mb-4">
              <Compass className="w-3.5 h-3.5 text-[#009E96]" />
              <span>GLOBAL FOOTPRINT // 2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight">
              Beyond The Waves — <br />
              <span className="text-[#009E96]">A Culture Of Pursuit</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-teal-100/70 text-sm sm:text-base max-w-md font-light leading-relaxed">
              We travel the planet testing prototypes in heavy reef slabs and long gentle point
              breaks to craft shapes that hold true in any ocean condition.
            </p>
            <button
              onClick={onStoryClick}
              className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#051C1A] hover:bg-[#009E96] hover:text-white font-semibold text-xs tracking-wider transition-all duration-300 shadow-xl flex-shrink-0"
            >
              <span>EXPLORE THE STORY</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Hero Aerial Drone Photography Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl sm:rounded-5xl overflow-hidden border border-white/10 shadow-2xl group"
        >
          <div className="relative h-[380px] sm:h-[480px] md:h-[560px] overflow-hidden">
            <img
              src="/assets/beyond-waves-aerial.jpg"
              alt="Aerial top-down shot of turquoise ocean reef break"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051C1A] via-black/20 to-transparent" />

            {/* Top-Right Geographic Tag */}
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-mono">
              <Globe className="w-3.5 h-3.5 text-[#009E96]" />
              <span>MENTAWAI ARCHIPELAGO // FIELD LAB</span>
            </div>

            {/* Bottom In-Image Caption */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 max-w-xl">
              <span className="font-mono text-xs text-[#009E96] uppercase tracking-widest font-semibold block mb-1">
                HYDRODYNAMIC LAB NOTE
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white">
                Rocker profiles tested at 24 knots in peeling coral reefs
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Live Counters / Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#009E96]/50 transition-colors"
            >
              <div className="font-display font-black text-4xl sm:text-5xl text-[#009E96] mb-2 tracking-tight">
                {stat.number}
              </div>
              <h4 className="font-display font-bold text-base text-white">{stat.label}</h4>
              <p className="mt-1 text-xs text-teal-100/60 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
