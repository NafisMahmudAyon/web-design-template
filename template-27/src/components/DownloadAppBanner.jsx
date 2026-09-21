import React from 'react';

export default function DownloadAppBanner() {
  return (
    <section className="bg-[#090d16] text-white py-16 lg:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Title & Newsletter Input */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              Let's Build Your <br />
              Financial Future.
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs px-4 py-3.5 rounded-l-full focus:outline-none focus:border-sky-400 flex-1"
              />
              <button
                type="submit"
                className="bg-white text-[#090d16] font-black text-xs px-6 py-3.5 rounded-r-full hover:bg-sky-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-[10px] text-white/40 font-bold">
              By subscribing you agree to with our <a href="#" className="underline">Privacy Policy</a>
            </p>
          </div>

          {/* Right Contact Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 text-xs text-white/70 font-bold">
            <div>
              <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">Location</span>
              <p className="text-white">Fintech HQ Innovation Park, Global Financial District</p>
            </div>

            <div>
              <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">Call Us</span>
              <p className="text-white">+1 (800) 456-7890</p>
            </div>

            <div>
              <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">Email</span>
              <p className="text-white">hello@plantora.earth</p>
            </div>

            <div>
              <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">Working Hours</span>
              <p className="text-white">Mon - Fri: 9:00 AM - 6:00 PM (GMT)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
