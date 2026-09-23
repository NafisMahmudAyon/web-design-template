import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="w-full py-16 bg-[#fafcfa] select-none border-t border-emerald-900/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
          Our Newsletter
        </p>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
          Subscribe to Our Newsletter to <br />
          Get <span className="text-[#0c6b3e]">Updates on Our Latest Offers</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-2 mb-8">
          Get 25% off on your first order just by subscribing to our newsletter
        </p>

        {subscribed ? (
          <div className="inline-block px-6 py-3 rounded-full bg-emerald-100 text-[#0c6b3e] text-xs font-bold shadow-sm">
            🎉 Thank you for subscribing! Check your inbox for your 25% discount voucher.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center max-w-lg mx-auto bg-white rounded-full p-1.5 border border-gray-200 shadow-md gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="flex-1 w-full px-5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none rounded-full"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#fed700] hover:bg-[#ebd000] text-gray-900 font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
