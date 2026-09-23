import React from 'react';
import { Award, Truck, RefreshCw, Headphones } from 'lucide-react';
import { AUTHENTIC_FEATURES } from '../data/skincareData';

const iconMap = {
  ShieldCheck: Award,
  Truck: Truck,
  RefreshCw: RefreshCw,
  Headphones: Headphones,
};

export default function AuthenticFeatures() {
  return (
    <section className="w-full py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Authentic Product
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed font-normal">
            Are unpleasing occasional celebrated motionless unaffected conviction evil. Evil make to no five they.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUTHENTIC_FEATURES.map((item) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <div
                key={item.id}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="text-xs font-bold text-gray-900 leading-snug max-w-[150px]">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
