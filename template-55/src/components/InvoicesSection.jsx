import React from 'react';
import { motion } from 'framer-motion';
import { Send, Eye, CreditCard } from 'lucide-react';
import { invoicesBlockData } from '../data/finoraData';

const invoiceIcons = {
  'inv-1': Send,
  'inv-2': Eye,
  'inv-3': CreditCard,
};

export default function InvoicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: White Card with Multi-Currency Country Receipts */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md rounded-[32px] bg-white p-6 sm:p-7 shadow-card border border-gray-200/80 space-y-3"
            >
              {invoicesBlockData.receipts.map((rcpt) => (
                <div
                  key={rcpt.country}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFAF9] border border-gray-200/60 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{rcpt.flag}</span>
                    <span className="text-sm font-bold text-gray-900">{rcpt.country}</span>
                  </div>
                  <span className="text-sm font-extrabold text-gray-950 font-display">
                    {rcpt.amount}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Narrative & 3 Dark Feature Rows */}
          <div className="lg:col-span-7 flex flex-col justify-between order-1 lg:order-2">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-950 tracking-tight leading-tight font-display"
              >
                {invoicesBlockData.headline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-lg"
              >
                {invoicesBlockData.subtitle}
              </motion.p>
            </div>

            {/* 3 Dark Feature Rows */}
            <div className="mt-8 sm:mt-10 space-y-3.5">
              {invoicesBlockData.features.map((feat, idx) => {
                const IconComp = invoiceIcons[feat.id] || Send;

                return (
                  <motion.div
                    key={feat.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="p-4 sm:p-5 rounded-2xl bg-gray-950 text-white border border-gray-900 shadow-md flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-white/10 text-white flex-shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {feat.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
