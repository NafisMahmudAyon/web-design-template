import React from 'react';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/mockData';

export default function JournalSection() {
  return (
    <section id="journal" className="py-20 bg-[#eae6df] border-t border-[#0a4b5c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0a4b5c]/5 border border-[#0a4b5c]/10 rounded-full px-4 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span className="font-script text-2xl text-[#0a4b5c] font-bold tracking-wide">
              from our journal
            </span>
          </div>
          <h2 className="font-display-title text-4xl sm:text-6xl font-black text-[#0a4b5c] uppercase tracking-tight">
            NOTES FROM THE KITCHEN
          </h2>
          <p className="text-sm sm:text-base text-[#0a4b5c]/80 font-medium">
            Stories on botanical sourcing, flavor science, summer rituals, and how we craft our drinks.
          </p>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-3xl border-2 border-[#0a4b5c] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Article Image Header */}
                <div className="relative h-48 overflow-hidden bg-[#0a4b5c]/5 border-b border-[#0a4b5c]/10">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#b8ff00] text-[#0a4b5c] text-[10px] font-black px-3 py-1 rounded-full border border-[#0a4b5c]">
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-[#0a4b5c]/60 font-bold">
                    <span>{article.date}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#0a4b5c]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-display-title text-xl font-black text-[#0a4b5c] uppercase leading-tight group-hover:text-emerald-800 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#0a4b5c]/80 leading-relaxed font-medium">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer Link */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#journal"
                  className="inline-flex items-center space-x-2 text-xs font-black text-[#0a4b5c] group-hover:text-emerald-800 tracking-wider uppercase border-b-2 border-current pb-0.5"
                >
                  <span>READ STORY</span>
                  <ArrowUpRight className="w-4 h-4 text-[#b8ff00]" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
