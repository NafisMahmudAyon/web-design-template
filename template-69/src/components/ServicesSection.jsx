import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/salehouseData';

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-tight">
              Our Excellent <br />
              Services
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl leading-relaxed">
              Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services.
            </p>
          </div>
        </div>

        {/* 3 Architectural Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-64 overflow-hidden bg-gray-100 relative">
                <img
                  src={serv.image}
                  alt={serv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Info */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#0052ff] transition-colors mb-3">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    {serv.description}
                  </p>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052ff] group-hover:gap-2.5 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
