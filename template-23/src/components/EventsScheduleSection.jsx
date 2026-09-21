import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { EVENTS } from '../data/mockData';

export default function EventsScheduleSection({ onOpenJoin }) {
  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight">
            WHAT'S ON COURT
          </h2>
        </div>

        <p className="text-xs text-gray-400 font-sans italic">
          *Entries close 10 days before each draw.
        </p>
      </div>

      {/* Events Schedule List */}
      <div className="bg-[#080d14] border border-white/15 rounded-3xl overflow-hidden shadow-2xl divide-y divide-white/10">
        {EVENTS.map((ev, idx) => (
          <div
            key={idx}
            onClick={onOpenJoin}
            className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <span className="font-mono text-xs font-bold text-gray-400 w-24 shrink-0">
                {ev.date}
              </span>
              <div>
                <h3 className="font-condensed text-lg sm:text-xl font-bold text-white uppercase tracking-wider group-hover:text-vantageNeon transition-colors">
                  {ev.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 font-sans mt-0.5">
                  <span className="text-gray-300">{ev.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-vantageNeon" /> {ev.location}</span>
                </div>
              </div>
            </div>

            <div className="w-9 h-9 rounded-full bg-white/10 text-white group-hover:bg-vantageNeon group-hover:text-black flex items-center justify-center transition-all self-end sm:self-auto">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* View All Events Button */}
      <div>
        <button
          onClick={onOpenJoin}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vantageNeon text-black font-bold text-xs uppercase tracking-wider hover:bg-[#b8e600] transition-colors shadow-neon-glow"
        >
          <span>VIEW ALL EVENTS</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
