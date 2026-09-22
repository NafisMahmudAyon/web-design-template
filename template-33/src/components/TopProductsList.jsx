import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, ChevronRight, ExternalLink } from 'lucide-react';
import { topProductsData } from '../data/mockAnalyticsData';

export default function TopProductsList({ onSelectProduct }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#141814] tracking-tight">
          Top Products
        </h2>
        <button 
          title="Product options"
          className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Products Roster */}
      <div className="space-y-3.5 flex-1 flex flex-col justify-between">
        {topProductsData.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.01 }}
            onClick={() => onSelectProduct && onSelectProduct(product)}
            className="group flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#F4F5F2] transition-all cursor-pointer border border-transparent hover:border-black/[0.03]"
          >
            {/* Thumbnail & Info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0 bg-[#F4F5F2] border border-black/[0.04] flex items-center justify-center p-1">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                />
              </div>
              <div className="truncate">
                <p className="text-xs sm:text-sm font-bold text-[#141814] group-hover:text-black transition-colors truncate">
                  {product.name}
                </p>
                <p className="text-[11px] text-[#6C736A] font-medium truncate">
                  {product.category}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 pl-2 flex-shrink-0">
              <span className="text-sm sm:text-base font-extrabold text-[#141814]">
                {product.price}
              </span>
              <div className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-[#141814] group-hover:text-white text-gray-400 flex items-center justify-center transition-colors hidden sm:flex">
                <ChevronRight className="w-3.5 h-3.5 stroke-[2]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
