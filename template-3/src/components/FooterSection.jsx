import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FooterSection({ onOpenBooking }) {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-10 pb-8 pt-4">
      {/* Dark Container Wrapper */}
      <motion.div 
        className="w-full bg-[#141414] rounded-[36px] p-6 sm:p-10 md:p-14 text-white space-y-12 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Top Panoramic Image Banner */}
        <div className="w-full h-[220px] sm:h-[280px] rounded-[24px] overflow-hidden img-zoom-wrapper shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1400&auto=format&fit=crop" 
            alt="Woman walking with cow in green pasture sunny day" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Split 50/50 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pt-2">
          
          {/* Left Column: Brand & CTA */}
          <div className="space-y-6 max-w-md">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Homeland
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Weekend on the farm – relax in harmony with nature.
            </p>
            <div className="pt-2">
              <button className="btn-white" onClick={onOpenBooking}>
                Book
                <ArrowUpRight className="arrow-icon w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Columns of Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            
            {/* Col 1 */}
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors">
                About us
              </a>
              <a href="#gallery" className="block text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors">
                Gallery
              </a>
            </div>

            {/* Col 2 */}
            <div className="space-y-3">
              <a href="#activities" className="block text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors">
                Activities
              </a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors">
                Accommodation
              </a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors">
                Reviews
              </a>
            </div>

            {/* Col 3 */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <a href="#" className="block text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors">
                Contact us
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); onOpenBooking(); }} className="block text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors">
                Book now
              </a>
            </div>

          </div>

        </div>

      </motion.div>
    </footer>
  );
}
