import React from 'react';
import { Truck, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ValuePropsSection() {
  const propsList = [
    {
      id: 'vp-1',
      title: 'FAST & FREE SHIPPING',
      desc: 'Every single order ships for free. No extra credit need.',
      icon: <Truck className="w-8 h-8 text-neutral-900 stroke-[1.75]" />
    },
    {
      id: 'vp-2',
      title: '30 DAYS RETURNS POLICY',
      desc: 'Product returns are accepted within 30 days.',
      icon: <Clock className="w-8 h-8 text-neutral-900 stroke-[1.75]" />
    },
    {
      id: 'vp-3',
      title: 'TOP QUALITY PRODUCTS',
      desc: 'We always provide high quality shoes',
      icon: <Award className="w-8 h-8 text-neutral-900 stroke-[1.75]" />
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 font-syne text-center tracking-tight mb-10">
          We Supported By
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {propsList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#F6F7F9] hover:bg-white rounded-3xl border border-neutral-100/80 p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-xs border border-neutral-100 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-sm sm:text-base font-black text-neutral-950 font-syne tracking-tight mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-500 max-w-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
