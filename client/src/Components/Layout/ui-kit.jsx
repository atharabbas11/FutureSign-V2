// src/Components/Layout/ui-kit.jsx
import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ id, children, className='', bg='' }) => (
  <section id={id} className={`relative overflow-hidden ${bg} ${className}`}>{children}</section>
);

export const Container = ({ children, className='' }) => (
  <div className={`relative max-w-7xl mx-auto px-5 md:px-8 ${className}`}>{children}</div>
);

export const Eyebrow = ({ icon: Icon, children, tone='blue' }) => {
  const tones = {
    blue: 'from-[#1e40af]/10 to-blue-400/10 border-blue-200 text-[#1e40af]',
    orange: 'from-[#dd5428]/10 to-orange-400/10 border-orange-200 text-[#dd5428]',
  };
  return (
    <div className={`inline-flex items-center px-4 py-1.5 rounded-full mb-4 border bg-gradient-to-r ${tones[tone]}`}>
      {Icon && <Icon className="h-3.5 w-3.5 mr-2" />}
      <span className="text-xs font-bold uppercase tracking-wider">{children}</span>
    </div>
  );
};

export const Heading = ({ children, sub, className='' }) => (
  <h2 className={`text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1] ${className}`}>
    {children}
    {sub && <span className="block brand-gradient-text pb-1">{sub}</span>}
  </h2>
);

export const DotGrid = ({ opacity=0.4 }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
    <defs>
      <pattern id="dg" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="#94a3b8" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dg)" />
  </svg>
);

export const GradientOrb = ({ className='', color='blue' }) => (
  <motion.div
    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
    transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
    className={`absolute rounded-full blur-3xl pointer-events-none ${color==='blue'?'bg-[#1e40af]/25':'bg-[#dd5428]/25'} ${className}`}
  />
);

export const PageTransition = ({ children }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
    {children}
  </motion.div>
);

export const PrimaryBtn = ({ children, ...p }) => (
  <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
    className="brand-gradient text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl inline-flex items-center gap-2" {...p}>
    {children}
  </motion.button>
);

export const GhostBtn = ({ children, className='', ...p }) => (
  <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
    className={`bg-white text-[#1e40af] font-semibold px-7 py-3.5 rounded-xl border-2 border-gray-200 hover:border-[#1e40af] inline-flex items-center gap-2 ${className}`} {...p}>
    {children}
  </motion.button>
);
