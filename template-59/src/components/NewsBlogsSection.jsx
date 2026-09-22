import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { newsBlogsData } from '../data/evergreen59Data';

export const NewsBlogsSection = ({ onOpenBlog }) => {
  return (
    <section className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
              {newsBlogsData.headline}
            </h2>
          </div>

          <button
            onClick={() => onOpenBlog?.(newsBlogsData.blogs[0])}
            className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900 text-xs font-semibold transition-colors self-start sm:self-auto"
          >
            {newsBlogsData.ctaText}
          </button>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsBlogsData.blogs.map((blog, idx) => (
            <div
              key={blog.id + idx}
              onClick={() => onOpenBlog?.(blog)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-slate-200 bg-white hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2">
                  <span>{blog.tag}</span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-brandLime-dark transition-colors mb-6 leading-snug">
                  {blog.title}
                </h3>

                <div>
                  <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 hover:border-slate-900 text-slate-800 text-xs font-semibold transition-colors">
                    <span>Read More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
