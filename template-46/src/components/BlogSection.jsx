import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/finoviaData';

export const BlogSection = ({ onSelectArticle }) => {
  return (
    <section id="contact" className="py-24 bg-finovia-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-finovia-lime mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editorial & Market Intelligence</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              Latest Financial Insights &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-finovia-lime to-emerald-300">
                Market Trends
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <button
              onClick={() => onSelectArticle && onSelectArticle(BLOG_POSTS[0])}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 hover:border-finovia-lime/40 transition-all"
            >
              <span>Explore All Articles</span>
              <ArrowUpRight className="w-4 h-4 text-finovia-lime" />
            </button>
          </motion.div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectArticle && onSelectArticle(post)}
              className="rounded-3xl bg-finovia-card border border-white/10 overflow-hidden flex flex-col group cursor-pointer hover:border-finovia-lime/40 transition-all duration-300 shadow-xl"
            >
              {/* Image Container with zoom micro-interaction */}
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* City Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-finovia-dark/80 backdrop-blur-md text-xs font-semibold text-white border border-white/10">
                  <MapPin className="w-3 h-3 text-finovia-lime" />
                  <span>{post.city}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-finovia-lime" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-finovia-lime transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                  <span>Read Full Analysis</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-finovia-lime group-hover:bg-finovia-lime group-hover:text-finovia-dark transition-all">
                    <ArrowUpRight className="w-4 h-4" />
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
