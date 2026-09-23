import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#0B6577', '#0066FF', '#10B981', '#F59E0B'],
    });
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Floating Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-8 sm:p-12 lg:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#171A1F] tracking-tight mb-3">
                Get in touch
              </h2>
              <p className="text-xs sm:text-sm text-[#737883] leading-relaxed max-w-md">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-5 py-4 rounded-lg flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="text-sm font-medium">
                    Thank you! Our design consultant will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2.5">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your email address"
                      className="w-full h-12 px-4 bg-[#F8FAFC] border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-casala-blue/20 focus:border-casala-blue transition-all"
                    />
                    {error && (
                      <span className="absolute -bottom-5 left-1 text-[11px] text-red-500 font-medium">
                        {error}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="h-12 px-8 bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm rounded-sm transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] flex items-center justify-center shrink-0"
                  >
                    <span>Sign Up</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
