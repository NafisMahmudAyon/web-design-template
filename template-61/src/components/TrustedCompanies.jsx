import React from 'react';
import { motion } from 'framer-motion';

// SVG Brand Logos for pixel-perfect fidelity
function FilaLogo() {
  return (
    <svg className="h-6 w-auto text-neutral-800" viewBox="0 0 100 30" fill="currentColor">
      <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="26" letterSpacing="4">
        FILA
      </text>
    </svg>
  );
}

function VansLogo() {
  return (
    <svg className="h-6 w-auto text-neutral-800" viewBox="0 0 100 30" fill="currentColor">
      <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="24" letterSpacing="2">
        VANS
      </text>
    </svg>
  );
}

function AdidasLogo() {
  return (
    <svg className="h-7 w-auto text-neutral-800" viewBox="0 0 80 40" fill="currentColor">
      <path d="M22 32 L30 18 L38 18 L26 32 Z M35 32 L46 12 L54 12 L39 32 Z M48 32 L62 6 L70 6 L52 32 Z" />
      <text x="46" y="39" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="sans-serif">adidas</text>
    </svg>
  );
}

function NewBalanceLogo() {
  return (
    <svg className="h-7 w-auto text-neutral-800" viewBox="0 0 110 32" fill="currentColor">
      <text x="16" y="24" fontFamily="sans-serif" fontStyle="italic" fontWeight="900" fontSize="26">NB</text>
      <text x="52" y="22" fontFamily="sans-serif" fontWeight="700" fontSize="10" letterSpacing="0.5">new balance</text>
    </svg>
  );
}

function UnderArmourLogo() {
  return (
    <svg className="h-7 w-auto text-neutral-800" viewBox="0 0 120 32" fill="currentColor">
      <circle cx="20" cy="16" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="30 20" />
      <circle cx="20" cy="16" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="30 20" transform="rotate(180 20 16)" />
      <text x="40" y="20" fontFamily="sans-serif" fontWeight="800" fontSize="9" letterSpacing="1">UNDER ARMOUR</text>
    </svg>
  );
}

function ReebokLogo() {
  return (
    <svg className="h-6 w-auto text-neutral-800" viewBox="0 0 100 30" fill="currentColor">
      <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="20" letterSpacing="1">
        Reebok
      </text>
    </svg>
  );
}

function ChanelLogo() {
  return (
    <svg className="h-6 w-auto text-neutral-800" viewBox="0 0 100 30" fill="currentColor">
      <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="19" letterSpacing="3">
        CHANEL
      </text>
    </svg>
  );
}

function PumaLogo() {
  return (
    <svg className="h-6 w-auto text-neutral-800" viewBox="0 0 100 30" fill="currentColor">
      <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="22" letterSpacing="3">
        PUMA
      </text>
    </svg>
  );
}

export default function TrustedCompanies() {
  const brandLogos = [
    { name: 'FILA', component: <FilaLogo /> },
    { name: 'VANS', component: <VansLogo /> },
    { name: 'adidas', component: <AdidasLogo /> },
    { name: 'new balance', component: <NewBalanceLogo /> },
    { name: 'UNDER ARMOUR', component: <UnderArmourLogo /> },
    { name: 'Reebok', component: <ReebokLogo /> },
    { name: 'CHANEL', component: <ChanelLogo /> },
    { name: 'PUMA', component: <PumaLogo /> },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 font-syne text-center tracking-tight mb-8 sm:mb-10">
          Trusted By Top Companies
        </h2>

        {/* 4x2 Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {brandLogos.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="h-20 sm:h-24 bg-[#F6F7F9] hover:bg-white rounded-2xl border border-neutral-100 flex items-center justify-center p-4 transition-all duration-300 hover:shadow-md cursor-pointer group"
            >
              <div className="transform transition-transform duration-300 group-hover:scale-105 opacity-80 group-hover:opacity-100">
                {brand.component}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
