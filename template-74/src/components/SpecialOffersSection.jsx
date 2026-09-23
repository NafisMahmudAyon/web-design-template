import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SpecialOffersSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setEmail('');
      setPassword('');
    }, 4000);
  };

  return (
    <section className="w-full py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image in Slate Blue Setting */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md w-full bg-[#5b7b99] shadow-xl p-6 flex items-center justify-center group">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
                alt="Special Offer Skincare Pack"
                className="w-full h-full object-cover rounded group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Sign Up Form */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
              For Special Offers <br />
              join us
            </h2>

            <p className="text-xs text-gray-500 leading-relaxed mb-8 font-normal">
              Sign up for the newsletter and receive 10% off your first order.
            </p>

            {isSuccess ? (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="text-xs font-bold text-emerald-800">
                  Welcome to Dust+Cream! Check your email for your 10% off discount code.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-[#f7f7f7] border border-gray-100 rounded-lg text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5b7b99]"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-[#f7f7f7] border border-gray-100 rounded-lg text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5b7b99]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#5b7b99] hover:bg-[#486682] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-md active:scale-95"
                  >
                    SIGN UP NOW
                  </button>
                </div>

                <p className="text-[10px] text-gray-400 text-center leading-relaxed pt-2">
                  By subscribing you to our Term & Conditions and privacy & cookies policy
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
