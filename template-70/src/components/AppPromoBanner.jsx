import React, { useState } from 'react';
import { ChevronDown, Download, Key, Home, Apple, Play } from 'lucide-react';

export default function AppPromoBanner() {
  const [downloadDropdownOpen, setDownloadDropdownOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const handleDownload = (platform) => {
    setDownloadDropdownOpen(false);
    setDownloadSuccess(`Rent H&U app downloaded for ${platform}!`);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <section className="w-full py-16 bg-[#fafbfc] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden bg-[#0f334c] shadow-2xl border border-[#1b4d70]/40 grid grid-cols-1 lg:grid-cols-12 min-h-[380px] items-center">
          {/* Floating Key & House illustration Badge (Top Left Corner) */}
          <div className="absolute -top-3 left-8 z-20 flex items-center -space-x-3 pointer-events-none">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#0f334c] flex items-center justify-center shadow-lg border border-gray-100 rotate-[-8deg]">
              <Key className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#0f334c] text-white flex items-center justify-center shadow-lg border border-white/20 rotate-[10deg]">
              <Home className="w-6 h-6 stroke-[2]" />
            </div>
          </div>

          {/* Left Column: Copy & App Buttons */}
          <div className="lg:col-span-7 p-8 sm:p-14 text-white relative z-10 pt-16">
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">
              Discover us in our app
            </h3>

            <p className="text-xs sm:text-sm text-white/70 max-w-md leading-relaxed mb-8">
              Discover a range of vacation homes worldwide. Book securely online and get expert customer support for a stress-free stay.
            </p>

            {downloadSuccess ? (
              <div className="p-3 bg-white/20 rounded-2xl text-xs font-bold text-white max-w-xs border border-white/30">
                {downloadSuccess}
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-4">
                {/* Store Icon Badges */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <Apple className="w-5 h-5 fill-white" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                </div>

                {/* Download Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setDownloadDropdownOpen(!downloadDropdownOpen)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-[#0f334c] bg-white hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg active:scale-95"
                  >
                    <span>Download</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>

                  {downloadDropdownOpen && (
                    <div className="absolute left-0 bottom-full mb-2 w-44 bg-white rounded-2xl shadow-2xl py-2 z-50 text-xs font-semibold text-gray-800 border border-gray-100">
                      <button
                        onClick={() => handleDownload('iOS')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 text-gray-700 hover:text-[#0f334c]"
                      >
                        <Apple className="w-3.5 h-3.5" />
                        <span>iOS (App Store)</span>
                      </button>
                      <button
                        onClick={() => handleDownload('Android')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 text-gray-700 hover:text-[#0f334c]"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Android (Google Play)</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Angled Modern Villa Photography */}
          <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[300px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="App Mobile Luxury Real Estate"
              className="w-full h-full object-cover"
            />
            {/* Soft angled overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f334c] via-[#0f334c]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
