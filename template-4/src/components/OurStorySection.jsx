import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { storyStats } from '../data/mockData';

function CounterItem({ stat }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = stat.number;
    const duration = 1800; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.number]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-bebas text-4xl sm:text-5xl lg:text-[56px] text-zinc-900 leading-none">
        {stat.prefix || ''}{isInView ? count : 0}{stat.suffix || ''}
      </div>
      <p className="text-zinc-600 text-sm sm:text-base font-normal mt-2">
        {stat.label}
      </p>
    </div>
  );
}

export default function OurStorySection({ onImageClick }) {
  const topImage = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85";
  const bottomImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85";

  return (
    <section id="story" className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-12 sm:gap-20">
        {/* Row 1: Image on Left, Story on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Top Left House Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 cursor-pointer group"
            onClick={() => onImageClick && onImageClick(topImage, "Modern Architectural Villa")}
          >
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[16/10] bg-zinc-200">
              <img
                src={topImage}
                alt="Modern luxury estate at dusk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          </motion.div>

          {/* Top Right Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center lg:pl-6"
          >
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-normal uppercase mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p className="italic">
                At Real World, our goal is to transform the real estate experience. Our team of experts merges industry expertise with tailored service to meet your requirements accurately.
              </p>
              <p className="italic">
                whether you are purchasing, selling, or renting, our team is devoted to fulfilling your needs. We present a varied range of properties in top-notch areas, simplifying the search for your ideal home or investment prospect. Allow us to assist you in creating a better future in real estate.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Stats Grid on Left, Luxury House Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center pt-4">
          {/* Stats 2x2 Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-2 gap-y-10 sm:gap-y-14 gap-x-8 lg:pr-6"
          >
            {storyStats.map((stat, idx) => (
              <CounterItem key={idx} stat={stat} />
            ))}
          </motion.div>

          {/* Bottom Right House Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 cursor-pointer group"
            onClick={() => onImageClick && onImageClick(bottomImage, "Hillside Modern Glass Residence")}
          >
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[16/10] bg-zinc-200">
              <img
                src={bottomImage}
                alt="Two-story luxury glass home with balcony"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
