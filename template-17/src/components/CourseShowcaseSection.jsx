import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const COURSES = [
  {
    id: 'swing-correction',
    title: 'Swing correction',
    subtitle: 'Browse top-rated golf courses and professional instructors near you.',
    image: '/assets/course-swing.jpg',
    featured: false,
    tag: 'Coaching',
  },
  {
    id: 'beginner-fundamentals',
    title: 'Beginner fundamentals',
    subtitle: 'Browse top-rated golf courses and professional instructors near you.',
    image: '/assets/course-beginner.jpg',
    featured: false,
    tag: 'Beginners',
  },
  {
    id: 'discover-world-class',
    title: 'Discover world class golf courses near you',
    subtitle: 'Browse top-rated golf courses and professional instructors near you for seamless bookings, skill improvement, and unforgettable golfing experiences anytime.',
    image: '/assets/course-featured-glove.jpg',
    featured: true,
    tag: 'Championship',
  },
  {
    id: 'course-strategy',
    title: 'On-course Strategy',
    subtitle: 'Master course management, wind reading, and smart club selection with certified PGA tour veterans.',
    image: '/assets/session-card-2.jpg',
    featured: false,
    tag: 'Advanced',
  },
  {
    id: 'short-game-mastery',
    title: 'Short game mastery',
    subtitle: 'Dial in your wedges, bunker escapes, and delicate flop shots from 100 yards and in.',
    image: '/assets/session-card-5.jpg',
    featured: false,
    tag: 'Short Game',
  },
];

export default function CourseShowcaseSection({ onOpenBooking, onSelectCourse }) {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % COURSES.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + COURSES.length) % COURSES.length);
  };

  const handleSelectCard = (indexOffset, course) => {
    setStartIndex((prev) => (prev + indexOffset) % COURSES.length);
    if (onSelectCourse) onSelectCourse(course);
  };

  // Reorder visible courses based on startIndex: first card is the active featured slide
  const visibleCourses = [
    COURSES[startIndex % COURSES.length],
    COURSES[(startIndex + 1) % COURSES.length],
    COURSES[(startIndex + 2) % COURSES.length],
  ];

  return (
    <section id="courses" className="relative bg-[#08150f] text-white py-24 md:py-32 overflow-hidden">
      {/* Background Watermark Typography: "Lessons" */}
      <div className="absolute right-6 bottom-16 select-none pointer-events-none opacity-[0.03] text-[180px] sm:text-[280px] font-extrabold font-display leading-none tracking-tighter text-white">
        Lessons
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header & Carousel Track with Fading Edges */}
        <div className="overflow-x-auto pb-6 scrollbar-none [mask-image:linear-gradient(to_right,transparent,black_30px,black_calc(100%-30px),transparent)]">
          <div className="flex items-stretch gap-6 min-w-[900px] lg:min-w-0 py-2 px-6">
            {visibleCourses.map((course, idx) => {
              const isFeaturedSlide = idx === 0;

              if (isFeaturedSlide) {
                return (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    onClick={() => onSelectCourse && onSelectCourse(course)}
                    className="w-[440px] lg:w-[480px] flex-shrink-0 bg-white text-[#0a1711] rounded-3xl p-6 shadow-2xl flex flex-col justify-between group cursor-pointer hover:-translate-y-1 transition-transform duration-300 ring-2 ring-[#E2F844]/80 z-10"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0a1711] text-[#E2F844]">
                          {course.tag}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-[#0a1711] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#E2F844] group-hover:text-[#0a1711] transition-colors shadow-md">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug mt-3">
                        {course.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#4b5b52] leading-relaxed">
                        {course.subtitle}
                      </p>
                    </div>

                    <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9] bg-emerald-950 shadow-inner">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleSelectCard(idx, course)}
                  className="w-[320px] sm:w-[350px] flex-shrink-0 relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer border border-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 shadow-xl bg-[#0d2017]"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.82] group-hover:brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#E2F844] border border-white/10 mb-2 inline-block">
                      {course.tag}
                    </span>
                    <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-[#E2F844] transition-colors">
                      {course.title}
                    </h4>
                    <p className="mt-2 text-xs text-white/70 line-clamp-2 leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Title, Description & Controls */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Book the Perfect Course <br />
              for Your Next Round
            </h2>
            <p className="mt-4 text-base text-white/70 max-w-xl leading-relaxed">
              From beginners to advanced players, our certified golf instructors provide personalized lessons tailored to your skill level and goals.
            </p>
            <div className="mt-6">
              <button
                onClick={onOpenBooking}
                className="bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] font-bold text-sm px-7 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-[#E2F844]/20"
              >
                View More
              </button>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white text-[#0a1711] flex items-center justify-center hover:bg-white/90 active:scale-95 transition-all shadow-lg"
              aria-label="Previous courses"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#E2F844] text-[#0a1711] flex items-center justify-center hover:bg-[#d0e536] active:scale-95 transition-all shadow-lg shadow-[#E2F844]/25"
              aria-label="Next courses"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
