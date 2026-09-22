import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { LATEST_ARTICLES } from '../data/terraFarmData';

export const LatestArticlesSection = ({ onSelectArticle }) => {
  return (
    <section className="py-24 sm:py-32 bg-terra-cream border-t border-terra-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terra-muted uppercase tracking-wider mb-4">
              <span>[</span>
              <span className="text-terra-forest">Articles</span>
              <span>]</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-terra-dark leading-tight">
              Latest <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-terra-forest">Articles</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-terra-muted leading-relaxed">
              Insights, innovations, and smart farming practices for the future of agriculture.
            </p>
          </div>

          <div>
            <button
              onClick={() => onSelectArticle && onSelectArticle(LATEST_ARTICLES[0])}
              className="px-6 py-3 rounded-full border border-terra-border bg-white text-xs sm:text-sm font-bold text-terra-dark hover:border-terra-forest hover:bg-terra-forest hover:text-white transition-all shadow-xs"
            >
              View All Articles
            </button>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_ARTICLES.map((art, idx) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectArticle && onSelectArticle(art)}
              className="rounded-3xl bg-white border border-terra-border overflow-hidden flex flex-col group cursor-pointer shadow-terra-soft hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-terra-subtle">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-terra-forest uppercase tracking-wider shadow-xs">
                  {art.category}
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-terra-muted mb-3">
                    <Calendar className="w-3.5 h-3.5 text-terra-forest" />
                    <span>{art.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-terra-dark group-hover:text-terra-forest transition-colors leading-snug">
                    {art.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-terra-border flex items-center justify-between text-xs font-bold text-terra-forest">
                  <span>Read Full Article</span>
                  <div className="w-7 h-7 rounded-full bg-terra-subtle flex items-center justify-center group-hover:bg-terra-lime group-hover:text-terra-forest transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
