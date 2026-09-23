import React, { useState } from 'react';
import { Star, ArrowRight, BookOpen, Clock, BarChart2 } from 'lucide-react';
import { CrownDoodle } from './HandDoodles';
import { famousCourses } from '../data/physicsData';

export const FamousCourses = ({ onSelectCourse, onGetStarted }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#FBFBFB] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Top Hand-drawn Doodle */}
        <div className="mb-4">
          <CrownDoodle className="text-[#548A63]" />
        </div>

        {/* Section Heading */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight mb-3">
          My Most Famous Courses
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-500 text-xs sm:text-sm max-w-lg mx-auto mb-16">
          Beyond genius really enough passed is up.
        </p>

        {/* Courses Cards Grid - Zero CLS fixed container height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left mb-12">
          {famousCourses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[520px] sm:h-[540px]"
            >
              {/* Media Container: Stylized Textbook Cover */}
              <div className="relative h-[270px] w-full overflow-hidden bg-neutral-900 shrink-0">
                <img
                  src={course.coverImage}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay for Book Title Typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#A3D9B1] mb-1">
                    Certified Syllabus
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
                    {course.badge}
                  </h4>
                </div>
              </div>

              {/* Card Body & Footer */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-bold text-neutral-900 group-hover:text-[#548A63] transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                  </div>

                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1 mb-2.5">
                    {[...Array(course.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>

                  <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Buttons Row */}
                <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onGetStarted(course);
                    }}
                    className="flex-1 py-2.5 px-3 bg-[#548A63] hover:bg-[#437150] text-white text-xs font-semibold rounded-md shadow-sm transition-all duration-200 text-center"
                  >
                    Get Started Today
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCourse(course);
                    }}
                    className="py-2.5 px-4 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 text-xs font-semibold rounded-md transition-all duration-200 text-center shrink-0"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-2">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setActivePageIndex(dot)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                activePageIndex === dot
                  ? 'bg-[#548A63] w-6'
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
