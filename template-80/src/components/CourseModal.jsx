import React from 'react';
import { X, Check, BookOpen, Clock, BarChart2, Star, ShieldCheck } from 'lucide-react';

export const CourseModal = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  const syllabus = [
    'Unit 1: Foundations of Quantum State Vectors and Wave-Particle Duality',
    'Unit 2: The Schrödinger Equation & One-Dimensional Potential Wells',
    'Unit 3: Angular Momentum, Electron Spin & The Hydrogen Atom Solution',
    'Unit 4: Quantum Harmonic Oscillator & Matrix Mechanics Formulation',
    'Unit 5: Entanglement, Bell Inequalities & Quantum Cryptography Basics',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-neutral-200 animate-scaleUp my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-5 mb-6">
          <div className="w-20 h-28 rounded-xl overflow-hidden shrink-0 shadow-md bg-neutral-900 border border-neutral-200">
            <img
              src={course.coverImage}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#548A63] bg-[#EBF3ED] px-2.5 py-1 rounded-md">
              {course.level}
            </span>
            <h3 className="font-display text-2xl font-bold text-neutral-900 mt-2">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 my-1">
              {[...Array(course.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              ))}
              <span className="text-xs font-semibold text-neutral-500 ml-1.5">
                5.0 (420+ student ratings)
              </span>
            </div>
            <p className="text-sm font-bold text-[#548A63] mt-1 font-display">
              {course.price} One-time access
            </p>
          </div>
        </div>

        {/* Curriculum list */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
            Core Curriculum & Laboratory Syllabus
          </h4>
          <div className="space-y-2 max-h-52 overflow-y-auto pr-2">
            {syllabus.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#FAFBF9] border border-neutral-100 text-xs text-neutral-700"
              >
                <Check className="w-4 h-4 text-[#548A63] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#FAFBF9] border border-neutral-100 text-xs text-center mb-6">
          <div>
            <span className="text-neutral-400 block text-[11px]">Duration</span>
            <span className="font-semibold text-neutral-900">{course.lessons}</span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[11px]">Instructor</span>
            <span className="font-semibold text-neutral-900">Dr. Angela Doe</span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[11px]">Accreditation</span>
            <span className="font-semibold text-neutral-900">Certificate Included</span>
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            onEnroll(course);
          }}
          className="w-full py-3.5 bg-[#548A63] hover:bg-[#437150] text-white font-semibold text-xs sm:text-sm tracking-wide rounded-md shadow-sm transition-all"
        >
          Enroll in Course &bull; {course.price}
        </button>
      </div>
    </div>
  );
};
