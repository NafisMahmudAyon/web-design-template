import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { feedbackData } from '../data/evergreen59Data';

export const FeedbackSection = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
              {feedbackData.headline}
            </h2>
          </div>

          {/* Avatars + Count */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                alt="Client 1"
                className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                alt="Client 2"
                className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop"
                alt="Client 3"
                className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
              />
            </div>
            <span className="text-xs font-semibold text-slate-600">
              {feedbackData.reviewCount}
            </span>
          </div>
        </div>

        {/* Panoramic Architectural Background Card with Centered Floating Review */}
        <div className="relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[500px] flex items-center justify-center p-6 sm:p-12 shadow-xl bg-slate-900">
          <img
            src={feedbackData.bgImage}
            alt="Modern Luxury Residence"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Floating White Testimonial Card */}
          <div className="relative z-10 w-full max-w-xl bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-100 flex flex-col justify-between">
            <div>
              {/* Quote icon & 5 Stars */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-brandLime/20 text-brandLime-dark flex items-center justify-center">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-lg font-sans text-slate-800 leading-relaxed font-normal mb-8">
                {feedbackData.quote}
              </p>
            </div>

            {/* Author Row */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={feedbackData.authorImage}
                  alt={feedbackData.author}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold font-display text-slate-900">
                    {feedbackData.author}
                  </h4>
                  <span className="text-xs text-slate-400 font-sans">
                    {feedbackData.role}
                  </span>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-1.5 rounded-full bg-brandLime" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
