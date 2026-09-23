import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BLOGS } from '../data/groceryData';

export default function BlogSection() {
  return (
    <section id="blogs" className="w-full py-16 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
              News & Blogs
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Our Latest <span className="text-[#0c6b3e]">News & Blogs</span>
            </h2>
          </div>

          <button
            type="button"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0c6b3e] hover:bg-[#085430] text-white text-xs font-bold shadow-md transition-all active:scale-95"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Image Container with Badge */}
              <div className="relative w-full h-52 overflow-hidden bg-gray-100">
                <span
                  className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide shadow-sm ${blog.tagColor}`}
                >
                  {blog.tag}
                </span>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-2">
                    {blog.author} • {blog.date}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0c6b3e] transition-colors leading-snug">
                    {blog.title}
                  </h3>
                </div>

                <div className="pt-4">
                  <span className="text-xs font-bold text-[#0c6b3e] hover:underline underline-offset-4">
                    Read More
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
