import React from 'react';
import { Truck, CreditCard, Headphones } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Truck,
      title: 'Free Shipping',
      subtitle: 'Free shipping for order above $50',
      iconBg: 'bg-emerald-100 text-[#0c6b3e]',
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      subtitle: 'Multiple secure payment options',
      iconBg: 'bg-amber-100 text-amber-700',
    },
    {
      icon: Headphones,
      title: '24x7 Support',
      subtitle: 'We support online all days',
      iconBg: 'bg-sky-100 text-sky-700',
    },
  ];

  return (
    <section className="w-full py-12 bg-white border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${badge.iconBg}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 leading-snug">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
