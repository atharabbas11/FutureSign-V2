// src/Components/Skeleton/HomeSkeleton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HomeSkeleton = () => {
  const pulse = {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
  };

  return (
    <div className="pt-0 space-y-20">

      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden pt-32 pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                className="h-8 w-56 bg-blue-200/50 rounded-full"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
              />
              
              {/* Main Heading */}
              <div className="space-y-4">
                <motion.div
                  className="h-14 w-4/5 bg-gray-200 rounded-lg"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
                />
                <motion.div
                  className="h-14 w-3/5 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-lg"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
                />
              </div>

              {/* Description */}
              <motion.div
                className="h-6 w-full bg-gray-200 rounded-lg"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.3 }}
              />
              <motion.div
                className="h-6 w-5/6 bg-gray-200 rounded-lg"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.4 }}
              />

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.div
                  className="h-12 w-44 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-xl"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.5 }}
                />
                <motion.div
                  className="h-12 w-40 bg-gray-200 rounded-xl border border-gray-300"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.6 }}
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                {Array(4).fill(0).map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/70 backdrop-blur rounded-xl p-4"
                    initial={pulse.initial}
                    animate={pulse.animate}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: 'reverse', 
                      duration: 1.2,
                      delay: idx * 0.1
                    }}
                  >
                    <div className="h-8 w-16 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-lg mx-auto mb-2"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded-lg mx-auto"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Image Carousel */}
            <div className="relative h-[520px] rounded-3xl overflow-hidden bg-gray-200 border-8 border-white shadow-2xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-3xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logo Carousel Skeleton */}
      <section className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.div
              className="h-8 w-36 bg-blue-100 rounded-full mx-auto"
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
            <motion.div
              className="h-8 w-1/2 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
            />
          </div>

          {/* Logo Grid */}
          <div className="flex gap-8 overflow-hidden h-64 pt-6">
            {Array(6).fill(0).map((_, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-40 h-36 bg-white/90 rounded-2xl p-4 space-y-3 shadow-md border border-blue-100"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: idx * 0.05
                }}
              >
                <div className="h-28 w-28 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl mx-auto"></div>
                <div className="h-4 w-20 bg-gray-200 rounded-lg mx-auto"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editing Section Skeleton */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* About Us Box */}
            <motion.div
              className="bg-gradient-to-br from-[#1e40af] to-blue-500 rounded-2xl lg:rounded-r-[60px] p-8"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            >
              <div className="space-y-4">
                <div className="h-8 w-28 bg-white/30 rounded-full"></div>
                <div className="h-10 w-32 bg-white/30 rounded-lg"></div>
                <div className="h-20 w-full bg-white/20 rounded-lg"></div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-2 flex flex-wrap lg:flex-nowrap gap-8">
              {/* Left */}
              <div className="flex-1 space-y-4">
                <div className="h-16 w-3/4 bg-gray-200 rounded-lg"></div>
                <div className="h-16 w-1/2 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-lg"></div>
              </div>
              
              {/* Right */}
              <div className="flex-1 space-y-6">
                <div className="h-24 w-full bg-gray-200 rounded-lg"></div>
                <div className="h-12 w-40 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="flex flex-col space-y-8">
              {/* Customer Satisfaction Box */}
              <motion.div
                className="relative bg-gradient-to-br from-[#1e40af] to-blue-500 rounded-2xl p-6 flex-1 min-h-[180px]"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-16 w-16 bg-white/20 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-6 w-40 bg-white/30 rounded-lg"></div>
                      <div className="h-10 w-20 bg-white/30 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-white/30 rounded-full"></div>
                    <div className="flex justify-between">
                      <div className="h-4 w-20 bg-white/30 rounded-lg"></div>
                      <div className="h-6 w-28 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Section */}
              <div className="flex flex-col lg:flex-row gap-8 flex-1">
                <div className="rounded-2xl overflow-hidden shadow-lg w-full lg:w-[40%] min-h-[150px] bg-gray-200"></div>
                <div className="w-full lg:w-[60%] bg-gradient-to-r from-[#dd5428] to-orange-500 rounded-2xl p-6 min-h-[150px] space-y-4">
                  <div className="h-16 w-16 bg-white/20 rounded-full"></div>
                  <div className="h-12 w-32 bg-white/30 rounded-lg"></div>
                  <div className="h-6 w-48 bg-white/30 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Middle Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg min-h-[500px] bg-gray-200"></div>

            {/* Right Column */}
            <div className="flex flex-col space-y-8">
              {/* Top Carousel */}
              <div className="flex-1 min-h-[250px] bg-gray-100 rounded-2xl"></div>
              
              {/* Bottom Slider */}
              <div className="flex-1 min-h-[250px] bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border border-blue-100">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="h-12 w-20 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-lg mx-auto"></div>
                    <div className="h-6 w-32 bg-blue-200 rounded-lg mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Skeleton */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <motion.div
              className="h-6 w-3/4 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Array(3).fill(0).map((_, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: idx * 0.1
                }}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl"></div>
                <div className="h-8 w-3/4 bg-gray-200 rounded-lg"></div>
                <div className="h-20 w-full bg-gray-200 rounded-lg"></div>
                <div className="h-1 w-12 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section Skeleton */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid md:grid-cols-3 gap-6 relative">
            {Array(3).fill(0).map((_, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: idx * 0.1
                }}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl"></div>
                <div className="h-5 w-5 bg-gray-300 rounded-lg"></div>
                <div className="h-8 w-3/4 bg-gray-200 rounded-lg"></div>
                <div className="h-16 w-full bg-gray-200 rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Skeleton */}
      <section className="py-24 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
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

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-14 space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="h-20 w-20 bg-gradient-to-br from-[#1e40af] to-[#dd5428] rounded-2xl"></div>
                <div className="flex-1 space-y-6">
                  <div className="flex gap-1">
                    {Array(5).fill(0).map((_, idx) => (
                      <div key={idx} className="h-5 w-5 bg-amber-200 rounded-full"></div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 w-full bg-gray-200 rounded-lg"></div>
                    <div className="h-6 w-5/6 bg-gray-200 rounded-lg"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
                    <div className="h-4 w-40 bg-blue-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Skeleton */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  className="h-8 w-24 bg-blue-100 rounded-full"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
                />
                <motion.div
                  className="h-12 w-3/4 bg-gray-200 rounded-lg"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
                />
                <motion.div
                  className="h-6 w-2/3 bg-gray-200 rounded-lg"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
                />
              </div>

              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-100 space-y-4"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.3 }}
              >
                <div className="h-6 w-48 bg-gray-200 rounded-lg"></div>
                <div className="h-4 w-64 bg-gray-200 rounded-lg"></div>
                <div className="h-12 w-40 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-xl"></div>
              </motion.div>
            </div>

            <div className="space-y-3">
              {Array(3).fill(0).map((_, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: 'reverse', 
                    duration: 1.2,
                    delay: idx * 0.1
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div className="h-6 w-3/4 bg-gray-200 rounded-lg"></div>
                    <div className="h-8 w-8 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-lg"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl brand-gradient p-12 md:p-16 text-white shadow-2xl">
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <motion.div
                  className="h-12 w-3/4 bg-white/30 rounded-lg"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
                />
                <motion.div
                  className="h-6 w-2/3 bg-white/20 rounded-lg"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
                />
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
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

export default HomeSkeleton;
