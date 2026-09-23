import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { FamousCourses } from './components/FamousCourses';
import { ReviewsSection } from './components/ReviewsSection';
import { NewsletterBanner } from './components/NewsletterBanner';
import { Footer } from './components/Footer';
import { EnrollModal } from './components/EnrollModal';
import { CourseModal } from './components/CourseModal';

export function App() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenEnrollWithCourse = (course) => {
    setSelectedCourse(course);
    setIsEnrollOpen(true);
  };

  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#548A63] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenEnroll={() => setIsEnrollOpen(true)} />

      {/* Hero Section */}
      <HeroSection
        onGetStarted={() => setIsEnrollOpen(true)}
        onLearnMore={scrollToAbout}
      />

      {/* Stats with Hand-drawn Spring Doodle */}
      <StatsSection />

      {/* About Section with Frosted Glass & Chalkboard Equations */}
      <AboutSection onReadMore={scrollToCourses} />

      {/* How It Works with 4 Process Cards */}
      <HowItWorks />

      {/* Famous Courses with Zero CLS Spacing Stability */}
      <FamousCourses
        onSelectCourse={(course) => setSelectedCourse(course)}
        onGetStarted={handleOpenEnrollWithCourse}
      />

      {/* Reviews from Students with Slider Navigation */}
      <ReviewsSection />

      {/* Newsletter Banner */}
      <NewsletterBanner />

      {/* Footer with Categories, About, Socials and Green Copyright Bar */}
      <Footer />

      {/* Tutoring Enrollment Modal */}
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => {
          setIsEnrollOpen(false);
          setSelectedCourse(null);
        }}
        selectedCourse={selectedCourse}
      />

      {/* Course Curriculum Modal */}
      {selectedCourse && !isEnrollOpen && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={(course) => {
            setSelectedCourse(course);
            setIsEnrollOpen(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
