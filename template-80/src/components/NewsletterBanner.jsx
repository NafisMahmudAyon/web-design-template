import React, { useState } from 'react';
import { Check, Mail } from 'lucide-react';

export const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-[#548A63] rounded-3xl p-8 sm:p-14 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading and Info */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-[#D4E8DA] font-semibold block mb-2">
                Newsletter
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                Subscribe to get updated
              </h2>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-lg">
                Warrant present garrets limited cordial in inquiry to. Supported me sweetness behaviour shameless excellent so arranging.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-5 flex justify-end">
              {subscribed ? (
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl flex items-center gap-2.5 text-xs font-semibold text-white animate-fadeIn">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>You're subscribed! Weekly physics problem sets will arrive soon.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2.5"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-lg text-xs sm:text-sm text-white placeholder-white/60 focus:outline-none focus:bg-white/25 focus:border-white transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white hover:text-[#548A63] border border-white/60 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 shrink-0"
                  >
                    Get Started
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
