import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Bookmark } from 'lucide-react';
import { blogsData } from '../data/wanderlustData';

export const BlogSection = ({ onOpenArticle }) => {
  return (
    <section id="blog" className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and "See More Blogs ↗" Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Bookmark className="w-3.5 h-3.5 text-brandEmerald" />
              <span>Travel Insights & Journal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              {blogsData.headline}
            </h2>
          </div>

          <button
            onClick={() => onOpenArticle?.(blogsData.posts[0])}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-800 hover:border-brandAmber hover:text-brandAmber font-semibold text-sm transition-all duration-300 self-start sm:self-auto group"
          >
            <span>{blogsData.ctaText}</span>
          </button>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.posts.map((post) => (
            <article
              key={post.id}
              onClick={() => onOpenArticle?.(post)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-brandAmber/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image with Tag & Date */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-brandForestDark/85 backdrop-blur-md text-white text-xs font-bold tracking-wider">
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-2.5">
                    <Calendar className="w-3.5 h-3.5 text-brandEmerald" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-brandEmerald transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>

                {/* Read More Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brandEmerald group-hover:text-brandAmber transition-colors uppercase tracking-wider flex items-center gap-1">
                    Read More <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="text-xs text-slate-600">5 min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
