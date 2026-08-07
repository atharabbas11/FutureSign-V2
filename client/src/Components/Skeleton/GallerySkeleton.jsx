// src/Components/Skeleton/GallerySkeleton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GallerySkeleton = () => {
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
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <motion.div
                className="h-12 w-44 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-xl"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.4 }}
              />
              <motion.div
                className="h-12 w-40 bg-gray-200 rounded-xl border border-gray-300"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.5 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-14 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array(4).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.1 
                }}
              >
                <div className={`h-14 w-14 ${
                  index % 2 === 0 ? 'bg-gradient-to-br from-[#1e40af] to-blue-400' : 'bg-gradient-to-br from-[#dd5428] to-orange-400'
                } rounded-2xl mx-auto`}></div>
                <div className="h-10 w-20 bg-gray-200 rounded-lg mx-auto"></div>
                <div className="h-4 w-24 bg-gray-200 rounded-lg mx-auto"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section Skeleton */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
            <motion.div
              className="h-8 w-32 bg-orange-100 rounded-full mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            />
            <motion.div
              className="h-12 w-2/3 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Array(5).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className={`h-10 w-24 rounded-full ${index === 0 ? 'bg-gradient-to-r from-[#1e40af] to-[#dd5428]' : 'bg-white border border-gray-200'}`}
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.05 
                }}
              />
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.05 
                }}
              >
                {/* Image */}
                <div className="relative h-60 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute top-3 left-3 h-8 w-20 bg-white/95 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="h-6 w-3/4 bg-gray-200 rounded-lg"></div>
                  <div className="h-4 w-full bg-gray-200 rounded-lg"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded-lg"></div>
                  
                  <div className="flex justify-between pt-2">
                    <div className="h-4 w-16 bg-gray-200 rounded-lg"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl brand-gradient p-12 md:p-16 text-white shadow-2xl">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="relative text-center space-y-10">
              <div className="space-y-4">
                <motion.div
                  className="h-12 w-3/4 bg-white/30 rounded-lg mx-auto"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
                />
                <motion.div
                  className="h-8 w-2/3 bg-white/20 rounded-lg mx-auto"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
                />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div
                  className="h-12 w-44 bg-white rounded-xl"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Skeleton - Hidden by default, shown when needed */}
      <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 pointer-events-none opacity-0">
        <div className="relative max-w-5xl w-full">
          {/* Close button */}
          <div className="absolute -top-12 right-0 h-10 w-10 bg-white/10 rounded-full"></div>
          
          {/* Image */}
          <div className="w-full h-[70vh] bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl"></div>
          
          {/* Info panel */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 to-transparent rounded-b-2xl">
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-gray-300 rounded-lg"></div>
              <div className="h-4 w-full bg-gray-400 rounded-lg"></div>
              <div className="h-4 w-5/6 bg-gray-400 rounded-lg"></div>
              
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="h-4 w-24 bg-gray-400 rounded-lg"></div>
                <div className="h-4 w-20 bg-gray-400 rounded-lg"></div>
                <div className="h-4 w-24 bg-gray-400 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySkeleton;
