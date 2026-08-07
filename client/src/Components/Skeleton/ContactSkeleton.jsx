// src/Components/Skeleton/ContactSkeleton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactSkeleton = () => {
  const pulse = {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
  };

  return (
    <div className="pt-0 space-y-0">

      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden pt-32 pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            {/* Badge */}
            <motion.div
              className="h-8 w-40 bg-blue-100 rounded-full mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            />
            
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.div
                className="h-14 w-3/4 bg-gray-200 rounded-lg mx-auto"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
              />
              <motion.div
                className="h-14 w-1/2 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-lg mx-auto"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
              />
            </div>
            
            {/* Description */}
            <motion.div
              className="h-6 w-2/3 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.3 }}
            />
          </div>
        </div>
      </section>

      {/* Contact Info Cards Skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array(4).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center space-y-4"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.08 
                }}
              >
                <div className={`h-14 w-14 rounded-2xl mx-auto ${
                  index % 2 === 0 ? 'bg-gradient-to-br from-[#1e40af] to-blue-400' : 'bg-gradient-to-br from-[#dd5428] to-orange-400'
                }`}></div>
                <div className="h-6 w-20 bg-gray-200 rounded-lg mx-auto"></div>
                <div className="h-5 w-32 bg-gray-300 rounded-lg mx-auto"></div>
                <div className="h-3 w-24 bg-gray-200 rounded-lg mx-auto"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info Section Skeleton */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Form Side */}
            <motion.div 
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="h-8 w-40 bg-blue-100 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-8 w-2/3 bg-gray-200 rounded-lg"></div>
                  <div className="h-8 w-1/2 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-lg"></div>
                </div>
                <div className="h-6 w-full bg-gray-200 rounded-lg"></div>
              </div>

              {/* Form fields */}
              <div className="mt-8 space-y-6">
                {/* Name & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="h-14 w-full bg-gray-100 rounded-xl"></div>
                  <div className="h-14 w-full bg-gray-100 rounded-xl"></div>
                </div>
                
                {/* Email */}
                <div className="h-14 w-full bg-gray-100 rounded-xl"></div>
                
                {/* Service Select */}
                <div className="h-14 w-full bg-gray-100 rounded-xl"></div>
                
                {/* Message */}
                <div className="h-32 w-full bg-gray-100 rounded-xl"></div>
                
                {/* Submit button */}
                <div className="h-14 w-full bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-xl"></div>
              </div>
            </motion.div>

            {/* Info Side */}
            <motion.div 
              className="space-y-6"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
            >
              {/* Map Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 space-y-5">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-[#1e40af] rounded-lg"></div>
                  <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
                </div>
                
                <div className="h-64 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl border border-gray-100 flex flex-col items-center justify-center space-y-4">
                  <div className="h-10 w-10 bg-[#1e40af]/20 rounded-full"></div>
                  <div className="space-y-2 text-center">
                    <div className="h-4 w-48 bg-gray-200 rounded-lg mx-auto"></div>
                    <div className="h-4 w-56 bg-gray-200 rounded-lg mx-auto"></div>
                  </div>
                </div>
                
                <div className="h-10 w-32 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-lg"></div>
              </div>

              {/* Hours Card */}
              <div className="bg-gradient-to-br from-[#1e40af] to-blue-500 rounded-3xl p-8 text-white shadow-lg space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20"></div>
                  <div className="space-y-2">
                    <div className="h-6 w-32 bg-white/30 rounded-lg"></div>
                    <div className="h-4 w-48 bg-white/20 rounded-lg"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  {Array(4).fill(0).map((_, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-white/15">
                      <div className="h-4 w-24 bg-white/30 rounded-lg"></div>
                      <div className="h-4 w-28 bg-white/40 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee Card */}
              <div className="bg-gradient-to-br from-[#dd5428] to-orange-500 rounded-3xl p-8 text-white shadow-lg space-y-4">
                <div className="h-7 w-48 bg-white/30 rounded-lg"></div>
                <ul className="mt-4 space-y-3">
                  {Array(4).fill(0).map((_, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                      <div className="h-4 w-56 bg-white/20 rounded-lg"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal Skeleton - Hidden by default */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4 pointer-events-none opacity-0">
        <div className="relative bg-white rounded-3xl p-10 max-w-md text-center shadow-2xl space-y-6">
          <div className="absolute top-4 right-4 h-5 w-5 bg-gray-200 rounded-full"></div>
          <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-r from-[#1e40af] to-[#dd5428]"></div>
          <div className="space-y-3">
            <div className="h-8 w-48 bg-gray-200 rounded-lg mx-auto"></div>
            <div className="h-6 w-64 bg-gray-200 rounded-lg mx-auto"></div>
          </div>
          <div className="h-12 w-32 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-xl mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;
