// src/Components/Skeleton/AboutSkeleton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutSkeleton = () => {
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
              className="h-8 w-32 bg-blue-100 rounded-full mx-auto"
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

      {/* Mission & Vision Section Skeleton */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Mission Card */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-10 border border-blue-100"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            >
              <div className="space-y-4">
                <div className="h-8 w-28 bg-blue-200 rounded-full"></div>
                <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
                <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded-lg"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded-lg"></div>
                  <div className="h-4 w-4/5 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-10 border border-orange-100"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
            >
              <div className="space-y-4">
                <div className="h-8 w-28 bg-orange-200 rounded-full"></div>
                <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
                <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded-lg"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded-lg"></div>
                  <div className="h-4 w-4/5 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section Skeleton */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
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

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e40af] via-blue-400 to-[#dd5428]" />
            <div className="space-y-10">
              {Array(5).fill(0).map((_, index) => (
                <div key={index} className={`relative flex items-center md:justify-normal ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 space-y-3"
                      initial={pulse.initial}
                      animate={pulse.animate}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: 'reverse', 
                        duration: 1.2,
                        delay: index * 0.1 
                      }}
                    >
                      <div className="h-4 w-16 bg-[#dd5428]/30 rounded-lg"></div>
                      <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
                      <div className="h-4 w-40 bg-gray-200 rounded-lg"></div>
                    </motion.div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 border-4 border-white shadow-xl"></div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section Skeleton */}
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

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.06 
                }}
              >
                <div className={`h-14 w-14 rounded-2xl ${index % 2 === 0 ? 'bg-gradient-to-br from-[#1e40af] to-blue-400' : 'bg-gradient-to-br from-[#dd5428] to-orange-400'}`}></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded-lg"></div>
                <div className="h-16 w-full bg-gray-200 rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Skeleton */}
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

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.08 
                }}
              >
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
                  <div className="h-4 w-28 bg-[#1e40af]/20 rounded-lg"></div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-amber-200 rounded-full"></div>
                    <div className="h-3 w-32 bg-gray-200 rounded-lg"></div>
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

export default AboutSkeleton;
