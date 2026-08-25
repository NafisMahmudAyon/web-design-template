import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GallerySection({ onOpenBooking }) {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1000&auto=format&fit=crop",
      alt: "Farmer sitting on rustic wooden fence",
      className: "col-span-1 row-span-2 min-h-[380px] sm:min-h-[440px]"
    },
    {
      src: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1000&auto=format&fit=crop",
      alt: "Flock of sheep grazing across green pasture",
      className: "col-span-1 row-span-1 min-h-[220px] sm:min-h-[240px]"
    },
    {
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
      alt: "Wooden farm architecture and courtyard",
      className: "col-span-1 row-span-1 min-h-[220px] sm:min-h-[240px]"
    },
    {
      src: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?q=80&w=1000&auto=format&fit=crop",
      alt: "Fluffy sheep feeding at bucket",
      className: "col-span-1 row-span-1 min-h-[220px] sm:min-h-[240px]"
    },
    {
      src: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1000&auto=format&fit=crop",
      alt: "Shepherd caring for small lamb",
      className: "col-span-1 row-span-2 min-h-[380px] sm:min-h-[440px]"
    },
    {
      src: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=1000&auto=format&fit=crop",
      alt: "Young farmer in baseball cap looking across eco-farm",
      className: "col-span-1 row-span-2 min-h-[380px] sm:min-h-[440px]"
    }
  ];

  return (
    <section className="w-full py-16 px-6 md:px-14">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="tag-pill">Gallery</span>
        </motion.div>

        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our moments
        </motion.h2>

        <motion.p 
          className="text-gray-600 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here you can see photos of our farm, animals, and guests who have already enjoyed life on the farm. Immerse yourself in the atmosphere of our eco-tourism!
        </motion.p>
      </div>

      {/* Asymmetric Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {images.map((item, index) => (
          <motion.div
            key={index}
            className={`rounded-[28px] overflow-hidden shadow-sm img-zoom-wrapper relative bg-gray-100 ${item.className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <img 
              src={item.src} 
              alt={item.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Centered Action Button */}
      <div className="flex justify-center mt-12">
        <motion.button 
          className="btn-black"
          onClick={onOpenBooking}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          View more
          <ArrowUpRight className="arrow-icon w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
