import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { preFooterData } from '../data/catalxgData';

export const PreFooterSection = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.18] max-w-2xl">
              {preFooterData.headline}
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2 space-y-3">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-sans">
              <MapPin className="w-4 h-4 text-brandOrange shrink-0 mt-0.5" />
              <span>{preFooterData.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold font-sans">
              <Phone className="w-4 h-4 text-brandOrange shrink-0" />
              <a href={`tel:${preFooterData.phone}`} className="hover:text-brandOrange transition-colors">
                {preFooterData.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold font-sans">
              <Mail className="w-4 h-4 text-brandOrange shrink-0" />
              <a href={`mailto:${preFooterData.email}`} className="hover:text-brandOrange transition-colors">
                {preFooterData.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
