import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgramSection from './components/ProgramSection';
import GallerySection from './components/GallerySection';
import FooterSection from './components/FooterSection';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="page-canvas">
      {/* Main Floating White Container with Squircle Border Radius */}
      <motion.div 
        className="app-container"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <Header onOpenBooking={handleOpenBooking} />
        
        <main>
          <Hero onOpenBooking={handleOpenBooking} />
          <ProgramSection />
          <GallerySection onOpenBooking={handleOpenBooking} />
        </main>

        <FooterSection onOpenBooking={handleOpenBooking} />
      </motion.div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
