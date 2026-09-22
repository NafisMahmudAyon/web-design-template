import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Check, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { breadcrumbs, productData } from '../data/productData';

export default function ProductInfo({
  onAddToCart,
  onOpenReviews,
  onOpenRepair
}) {
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState(productData.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const [showSpecs, setShowSpecs] = useState(true);
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAdd = () => {
    onAddToCart({
      id: `${productData.id}-${selectedSize}-${selectedColor}`,
      name: productData.title,
      price: productData.price,
      selectedSize,
      selectedColor,
      quantity,
      image: productData.images[0].url,
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2200);
  };

  return (
    <div className="flex flex-col text-neutral-900">
      {/* Breadcrumb Bar */}
      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={crumb}>
            <span className="hover:text-black transition-colors cursor-pointer">
              {crumb}
            </span>
            {idx < breadcrumbs.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Reviews Rating Header */}
      <div
        onClick={onOpenReviews}
        className="flex items-center gap-2 cursor-pointer group w-fit mb-3"
      >
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        <span className="text-xs sm:text-sm font-bold text-neutral-900">
          {productData.rating}
        </span>
        <span className="text-xs sm:text-sm text-neutral-500 underline underline-offset-4 group-hover:text-black transition-colors">
          ({productData.reviewsCount})
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif text-neutral-950 tracking-tight leading-tight mb-4">
        {productData.title}
      </h1>

      {/* Price Display */}
      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-2xl sm:text-3xl font-bold font-sans text-neutral-950">
          {productData.currency}{productData.price}
        </span>
        <span className="text-lg font-normal text-neutral-400 line-through font-sans">
          {productData.currency}{productData.originalPrice}
        </span>
      </div>

      {/* Size & Color Customization Row */}
      <div className="space-y-5 pb-8 border-b border-neutral-200">
        {/* Colorway Selection */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-neutral-500 uppercase tracking-wider">Color</span>
            <span className="font-bold text-neutral-900">{selectedColor}</span>
          </div>
          <div className="flex items-center gap-2.5">
            {productData.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                  selectedColor === c.name
                    ? 'border-neutral-950 scale-110 shadow-xs'
                    : 'border-transparent hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-neutral-500 uppercase tracking-wider">Select Size</span>
            <span className="text-neutral-500 hover:text-black underline cursor-pointer">
              Fit Guide
            </span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {productData.availableSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2.5 rounded-xs text-xs font-mono font-semibold border transition-all ${
                  selectedSize === size
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                    : 'bg-white text-neutral-800 border-neutral-300 hover:border-black'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Bag CTA & Quantity */}
        <div className="flex items-center gap-3 pt-2">
          {/* Quantity stepper */}
          <div className="flex items-center border border-neutral-300 rounded-xs h-12 bg-white px-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 text-neutral-500 hover:text-black font-mono text-sm"
            >
              -
            </button>
            <span className="w-8 text-center font-mono text-xs font-bold text-neutral-900">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 text-neutral-500 hover:text-black font-mono text-sm"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            className={`flex-1 h-12 rounded-xs font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-md active:scale-98 ${
              addedNotice
                ? 'bg-emerald-700 text-white'
                : 'bg-neutral-950 hover:bg-neutral-800 text-white'
            }`}
          >
            {addedNotice ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag</span>
              </>
            ) : (
              <span>Add to Bag — {productData.currency}{productData.price * quantity}</span>
            )}
          </button>
        </div>
      </div>

      {/* DETAILS 2x2 Grid */}
      <div className="py-8 border-b border-neutral-200">
        <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-5">
          DETAILS
        </h3>

        <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-xs sm:text-sm font-mono">
          {productData.details.map((item) => (
            <div key={item.label} className="flex items-baseline justify-between gap-2">
              <span className="text-neutral-500">{item.label}</span>
              <span className="font-semibold text-neutral-900 text-right">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MATERIAL SPEC Section with Show Less / Show More Accordion */}
      <div className="py-8 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
            MATERIAL SPEC
          </h3>
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="text-xs font-mono font-bold text-neutral-900 underline underline-offset-2 hover:text-neutral-600 cursor-pointer flex items-center gap-1"
          >
            <span>{showSpecs ? 'Show Less' : 'Show More'}</span>
            {showSpecs ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {showSpecs && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden space-y-3 text-xs sm:text-sm font-mono"
            >
              {productData.materialSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1"
                >
                  <span className="text-neutral-500 w-28 shrink-0">{spec.label}</span>
                  <span className="font-medium text-neutral-900 flex-1 sm:text-right">
                    {spec.label === 'Repair' ? (
                      <button
                        onClick={onOpenRepair}
                        className="underline hover:text-neutral-600 transition-colors cursor-pointer"
                      >
                        {spec.value}
                      </button>
                    ) : (
                      spec.value
                    )}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Heritage Badges */}
      <div className="pt-6 grid grid-cols-3 gap-3 text-[11px] font-mono text-neutral-500">
        <button
          onClick={onOpenRepair}
          className="flex items-center gap-2 hover:text-black transition-colors text-left cursor-pointer group"
        >
          <ShieldCheck className="w-4 h-4 text-neutral-800 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="underline underline-offset-2">Lifetime Repair</span>
        </button>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-neutral-800 shrink-0" />
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw className="w-4 h-4 text-neutral-800 shrink-0" />
          <span>Trail Tested</span>
        </div>
      </div>
    </div>
  );
}
