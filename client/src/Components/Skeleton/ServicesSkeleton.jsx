// src/Components/Skeleton/ServicesSkeleton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ServicesSkeleton = () => {
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
                <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl mx-auto"></div>
                <div className="h-10 w-20 bg-gray-200 rounded-lg mx-auto"></div>
                <div className="h-4 w-24 bg-gray-200 rounded-lg mx-auto"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Skeleton */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <motion.div
              className="h-8 w-32 bg-blue-100 rounded-full mx-auto"
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

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {Array(4).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.1 
                }}
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute top-5 right-5 h-14 w-14 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8 space-y-6">
                  <div className="h-8 w-2/3 bg-gray-200 rounded-lg"></div>
                  <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {Array(4).fill(0).map((_, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-green-200 rounded-full"></div>
                        <div className="h-4 w-20 bg-gray-200 rounded-lg"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="h-12 w-32 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section Skeleton */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
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

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {Array(4).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl p-8 border border-gray-100"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.1 
                }}
              >
                {/* Step Badge */}
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl mx-auto"></div>
                
                {/* Icon */}
                <div className="h-5 w-5 bg-gray-300 rounded-lg mx-auto mt-5"></div>
                
                {/* Content */}
                <div className="h-6 w-3/4 bg-gray-200 rounded-lg mx-auto mt-3"></div>
                <div className="h-4 w-32 bg-gray-200 rounded-lg mx-auto mt-1"></div>
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
                <motion.div
                  className="h-12 w-40 bg-white/10 border-2 border-white/40 rounded-xl"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSkeleton;
