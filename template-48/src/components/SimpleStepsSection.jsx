import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Compass, Wheat, Tractor } from 'lucide-react';
import { SIMPLE_STEPS } from '../data/terraFarmData';

export const SimpleStepsSection = () => {
  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'tractor':
        return <Tractor className="w-5 h-5 text-terra-forest" />;
      case 'sprout':
        return <Sprout className="w-5 h-5 text-terra-forest" />;
      case 'wheat':
        return <Wheat className="w-5 h-5 text-terra-forest" />;
      default:
        return <Sprout className="w-5 h-5 text-terra-forest" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-terra-cream border-t border-terra-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terra-muted uppercase tracking-wider mb-4">
            <span>[</span>
            <span className="text-terra-forest">How It Works</span>
            <span>]</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-terra-dark leading-tight">
            Simple Steps Behind <br />
            <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-terra-forest">
              Smarter Farming
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-terra-muted leading-relaxed">
            We follow a simple process to help farmers grow healthier crops with less effort and smarter decisions.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SIMPLE_STEPS.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-terra-border p-8 flex flex-col justify-between shadow-terra-soft hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Step Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-terra-lime flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                  {getStepIcon(step.icon)}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-terra-dark mb-4">
                  {step.title}
                </h3>

                {/* Oval/Capsule Window Photo */}
                <div className="rounded-full overflow-hidden aspect-[16/9] mb-6 shadow-inner border border-terra-border/60">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p className="text-sm text-terra-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
