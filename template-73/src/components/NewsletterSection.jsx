import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="w-full py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Giant Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-condensed font-black tracking-tight text-black leading-none uppercase">
            KEEP UPDATE WITH US
          </h2>
        </div>

        {/* Soft Gray/Cream Container */}
        <div className="max-w-4xl mx-auto bg-[#f6f6f6] rounded-2xl p-8 sm:p-14 text-center">
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed mb-8">
            Join our newsletter for the latest updates on our luxury architectural listings. Have questions or need assistance? Contact our friendly customer support team.
          </p>

          {isSent ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm text-xs font-bold text-black border border-gray-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Thank you for subscribing to Casper exclusive property alerts.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center max-w-md mx-auto bg-white rounded-xl p-1.5 shadow-sm border border-gray-200">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full px-4 py-2.5 text-xs text-black placeholder-gray-400 focus:outline-none bg-transparent"
              />
              <button
                type="submit"
                aria-label="Submit"
                className="w-10 h-10 rounded-lg bg-[#0088cc] hover:bg-[#0077b3] text-white flex items-center justify-center shrink-0 transition-colors"
              >
                <Send className="w-4 h-4 fill-white translate-x-0.5 -translate-y-0.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
