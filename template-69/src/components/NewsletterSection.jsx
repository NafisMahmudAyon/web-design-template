import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="w-full py-16 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          {/* Left Column: Modern Architecture Photo */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80"
              alt="Urban Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Right Column: Warm Sunny Yellow Container */}
          <div className="lg:col-span-7 bg-[#ffe875] p-8 sm:p-14 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight leading-tight mb-4">
              Subscribe to Our Newsletter
            </h3>

            <p className="text-xs sm:text-sm text-gray-800/80 max-w-lg leading-relaxed mb-8">
              It is important to take care of the patient, the patient will be followed by the patient, but it will happen at the same time.
            </p>

            {isSubmitted ? (
              <div className="flex items-center gap-3 p-4 bg-white/90 rounded-2xl border border-white max-w-md shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="text-xs font-bold text-gray-900">
                  Thank you! You have successfully subscribed to our newsletter.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-full text-xs bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff] shadow-sm border border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full text-xs font-bold bg-[#0052ff] text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 shrink-0 inline-flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
