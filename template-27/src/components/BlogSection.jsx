import React from 'react';
import { BLOG_ARTICLES } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section id="blogs" className="py-20 bg-[#f8f9fc] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-gray-200 px-3.5 py-1 rounded-full text-xs font-bold text-gray-700 mb-3">
              <span>⚙ News & Blogs</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#090d16] uppercase leading-tight tracking-tight">
              Insights to Help You <br />
              Make Smarter Financial <br />
              Decisions
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-md font-medium leading-relaxed">
            Discover why individuals and businesses rely on our secure platform for fast payments, seamless transfers, and smarter financial management.
          </p>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BLOG_ARTICLES.map((article, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-[10px] text-gray-400 font-bold uppercase">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display text-base font-black text-[#090d16] group-hover:text-sky-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <a
                  href="#blogs"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#090d16] hover:text-sky-600 transition-colors"
                >
                  <span>Read Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Center See All Button */}
        <div className="text-center">
          <button
            onClick={() => alert('Viewing all articles!')}
            className="inline-flex items-center space-x-2 bg-[#090d16] hover:bg-black text-white text-xs font-black px-8 py-3.5 rounded-full shadow-md transition-all"
          >
            <span>See All Blogs</span>
          </button>
        </div>

      </div>
    </section>
  );
}
