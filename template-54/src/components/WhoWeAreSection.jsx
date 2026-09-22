import React from 'react';
import { motion } from 'framer-motion';
import { whoWeAreData } from '../data/journeoData';

export default function WhoWeAreSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Mission Statement */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white text-xs font-semibold text-gray-800 shadow-xs mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gray-950" />
            <span>{whoWeAreData.badge}</span>
          </motion.div>

          {/* Styled Typography Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-[34px] font-normal leading-relaxed text-gray-700 tracking-tight font-display"
          >
            {whoWeAreData.statementPart1}
            <span className="font-bold text-gray-950">
              {whoWeAreData.statementBold1}
            </span>
            {whoWeAreData.statementPart2}
            <span className="font-bold text-gray-950">
              {whoWeAreData.statementBold2}
            </span>
            {whoWeAreData.statementPart3}
          </motion.h2>

          {/* Photo Trio */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {whoWeAreData.photos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="h-48 sm:h-56 rounded-[22px] overflow-hidden shadow-sm border border-gray-200/80 relative group bg-gray-100"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider with "Our Achievements" Pill */}
        <div className="mt-20 sm:mt-28 relative flex items-center justify-center">
          <div className="w-full border-t border-gray-200" />
          <div className="absolute px-4 bg-[#FAFAF9]">
            <span className="px-4 py-1.5 rounded-full border border-gray-300 bg-white text-xs font-semibold text-gray-700 shadow-xs">
              {whoWeAreData.achievementsTag}
            </span>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {whoWeAreData.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="p-6 sm:p-8 rounded-[24px] bg-[#F4F4F5]/80 hover:bg-[#EDEDF0] border border-gray-200/70 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 font-display tracking-tight leading-none">
                {metric.value}
              </div>
              <div className="mt-2.5 text-xs sm:text-sm font-medium text-gray-500">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
