import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, Award, Users, CheckCircle, Sparkles, Zap, Target, TrendingUp, Printer, Truck, Shield, ChevronLeft, ChevronRight, Plus, Minus, CircleUser, } from 'lucide-react';
import { IMAGES, TESTIMONIALS, FAQS } from '../data/mock';
import { Section, Container, Eyebrow, Heading, GradientOrb, DotGrid, PageTransition, PrimaryBtn, GhostBtn } from '../Components/Layout/ui-kit';
import { useInView } from "react-intersection-observer";

const Counter = ({ to, suffix = '' }) => {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        let s = 0; const inc = to / 60;
        const t = setInterval(() => { s += inc; if (s >= to) { setV(to); clearInterval(t); } else setV(Math.floor(s)); }, 25);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
};

// Premium Logo Carousel Component
const SmoothLogoCarousel = () => {
  const logos = [
    { id: 1, name: "Acc", image: "/public/images/logos/acc.png" },
    { id: 2, name: "Afstar", image: "/public/images/logos/afstar.png" },
    { id: 3, name: "Ambuja", image: "/public/images/logos/ambuja.png" },
    { id: 4, name: "Hangyo", image: "/public/images/logos/hangyo.jpg" },
    { id: 5, name: "Maha", image: "/public/images/logos/maha.png" },
    { id: 6, name: "Mslife", image: "/public/images/logos/mslife.png" },
    { id: 7, name: "Ramco", image: "/public/images/logos/ramco.jpg" },
    { id: 8, name: "Sudhakar", image: "/public/images/logos/sudhakar.png" },
    { id: 9, name: "Supreme", image: "/public/images/logos/supreme.png" },
    { id: 10, name: "Ultratech", image: "/public/images/logos/ultratech.png" },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1e40af]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#dd5428]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-[#dd5428]/10 rounded-full mb-4 border border-blue-200/50">
            <Users className="h-4 w-4 text-[#1e40af] mr-2" />
            <span className="text-sm font-semibold text-[#1e40af]">Our Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted By Industry
            <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Brands that trust us with their premium printing needs
          </p>
        </motion.div>

        <div className="relative overflow-hidden pt-6 h-64">
          <div className="flex gap-8 animate-scroll" style={{ width: 'max-content' }}>
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {logos.map((logo) => (
                  <motion.div
                    key={`${setIndex}-${logo.id}`}
                    whileHover={{ scale: 1.1, y: -8 }}
                    className="flex-shrink-0 w-40 h-36 bg-white/90 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-4 shadow-md border border-blue-100 cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl"
                  >
                    <div className="w-28 h-28 rounded-xl overflow-hidden flex items-center justify-center">
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/112x112/1e40af/ffffff?text=' + logo.name;
                        }}
                      />
                    </div>
                    <div className="text-xs font-semibold text-gray-700 text-center mt-2 truncate w-full px-2">
                      {logo.name}
                    </div>
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-192px * 10 - 32px * 9));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Background Pattern Component
const BackgroundPattern = ({ type = "dots", color = "blue", opacity = 0.1 }) => {
  const patterns = {
    dots: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full bg-${color}-500`}
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 10}%`,
              opacity: opacity
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [opacity, opacity * 1.5, opacity]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    ),
    hexagons: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-8 h-8 border border-${color}-300`}
            style={{
              left: `${(i % 5) * 20}%`,
              top: `${Math.floor(i / 5) * 20}%`,
              opacity: opacity * 0.5
            }}
            animate={{
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    ),
    circles: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full border border-${color}-300`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              opacity: opacity * 0.3
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    ),
    grid: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <React.Fragment key={i}>
            <motion.div
              className={`absolute w-full h-px bg-gradient-to-r from-transparent via-${color}-300 to-transparent`}
              style={{
                top: `${i * 5}%`,
                opacity: opacity * 0.5
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className={`absolute h-full w-px bg-gradient-to-b from-transparent via-${color}-300 to-transparent`}
              style={{
                left: `${i * 5}%`,
                opacity: opacity * 0.5
              }}
              animate={{
                backgroundPosition: ['0% 0%', '0% 100%', '0% 0%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </React.Fragment>
        ))}
      </div>
    )
  };

  return patterns[type] || patterns.dots;
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// AnimatedCounter Component
const AnimatedCounter = ({ from, to }) => {
  const [count, setCount] = useState(from);
  const hasAnimated = useRef(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = from;
      const duration = 2000;
      const increment = (to - from) / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, from, to]);

  return <span ref={ref}>{count}</span>;
};

export default function Home() {
  const [confettiActive, setConfettiActive] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [tIdx, setTIdx] = useState(0);
  const [faqIdx, setFaqIdx] = useState(0);

  // TOP CAROUSEL Component
  function TopCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const totalSlides = Math.ceil(oriImages.length / 2);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 3000);

      return () => clearInterval(timer);
    }, [totalSlides]);

    const handleDragEnd = (event, info) => {
      const threshold = 50;

      if (info.offset.x < -threshold) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      } else if (info.offset.x > threshold) {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    return (
      <div className="relative h-full bg-gray-100 rounded-2xl overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const startIdx = slideIndex * 2;
            const slideImages = [
              oriImages[startIdx],
              oriImages[(startIdx + 1) % oriImages.length]
            ];

            return (
              <div key={slideIndex} className="w-full h-full flex-shrink-0 flex">
                {slideImages.map((src, imgIndex) => (
                  <div key={`${slideIndex}-${imgIndex}`} className="w-1/2 px-2">
                    <img
                      src={src}
                      alt={`Slide ${startIdx + imgIndex + 1}`}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </motion.div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? "bg-white" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    );
  };

  // BOTTOM SLIDER Component
  function BottomSlider() {
    const [currentAchIndex, setCurrentAchIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleAchDragEnd = (event, info) => {
      const threshold = 50;

      if (info.offset.x < -threshold) {
        setCurrentAchIndex((prev) => (prev + 1) % achievements.length);
      } else if (info.offset.x > threshold) {
        setCurrentAchIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
      }
    };

    const goToAchSlide = (index) => {
      setCurrentAchIndex(index);
    };

    return (
      <div className="relative h-full overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleAchDragEnd}
          animate={{ x: `-${currentAchIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {achievements.map((a, index) => (
            <div key={index} className="w-full px-2 flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent mb-3">
                    {a.number}
                  </div>
                  <p className="text-blue-700 font-semibold text-lg">
                    {a.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
          {achievements.map((_, i) => (
            <button
              key={i}
              onClick={() => goToAchSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentAchIndex ? "bg-[#1e40af]" : "bg-blue-300"
                }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const BoxConfetti = ({ isActive }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
        {[...Array(60)].map((_, i) => {
          const fromLeft = i % 2 === 0;
          const startX = fromLeft ? Math.random() * 40 : 60 + Math.random() * 40;

          return (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 ${i % 6 === 0 ? 'bg-yellow-400' :
                i % 6 === 1 ? 'bg-blue-400' :
                  i % 6 === 2 ? 'bg-orange-400' :
                    i % 6 === 3 ? 'bg-[#dd5428]' :
                      i % 6 === 4 ? 'bg-[#1e40af]' : 'bg-white'
                } rounded-sm`}
              style={{
                left: `${startX}%`,
                top: '-20px'
              }}
              initial={{
                opacity: 0,
                y: 0,
                x: 0,
                rotate: 0
              }}
              animate={isActive ? {
                opacity: [0, 1, 0],
                y: [0, 400],
                x: Math.random() * 40 - 20,
                rotate: Math.random() * 360
              } : {
                opacity: 0,
                y: 0
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                ease: "easeOut",
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </div>
    );
  };

  const oriImages = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  // ACHIEVEMENTS SLIDER
  const achievements = [
    { number: "2000+", text: "Projects Completed" },
    { number: "50+", text: "Happy Clients" },
    { number: "35+", text: "Years Experience*" },
  ];

  useEffect(() => { const t = setInterval(() => setHeroIdx(i => (i + 1) % IMAGES.hero.length), 4500); return () => clearInterval(t); }, []);
  useEffect(() => { const t = setInterval(() => setTIdx(i => (i + 1) % TESTIMONIALS.length), 5000); return () => clearInterval(t); }, []);

  const stats = [{ n: 2000, s: '+', l: 'Projects Completed' }, { n: 98, s: '%', l: 'Client Satisfaction' }, { n: 24, s: '/7', l: 'Support Available' }, { n: 35, s: '+', l: 'Years Experience*' }];
  const features = [
    { icon: Award, title: 'Premium Quality', desc: 'Highest quality materials and printing technology for lasting brilliance.', color: 'from-[#1e40af] to-blue-400' },
    { icon: Users, title: 'Expert Team', desc: 'Experienced designers and print technicians ready to bring ideas to life.', color: 'from-[#dd5428] to-orange-400' },
    { icon: CheckCircle, title: 'Fast Delivery', desc: 'Rapid turnaround without compromising on precision or finish.', color: 'from-[#1e40af] to-blue-400' },
  ];

  const steps = [
    { n: '01', title: 'Design Consultation', desc: 'Share your vision with our expert team for professional guidance.', icon: Sparkles, color: 'from-[#1e40af] to-blue-400' },
    { n: '02', title: 'Material Selection', desc: 'Choose from premium materials tailored to your needs.', icon: Printer, color: 'from-[#dd5428] to-orange-400' },
    { n: '03', title: 'Production & Delivery', desc: 'High-quality printing and timely delivery to your location.', icon: Truck, color: 'from-[#1e40af] to-blue-400' },
  ];

  return (
    <PageTransition>
      {/* HERO */}
      <Section className="pt-32 pb-24 md:pb-28 noise" bg="bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <GradientOrb className="top-10 left-1/4 w-96 h-96" color="blue" />
        <GradientOrb className="bottom-10 right-1/4 w-[500px] h-[500px]" color="orange" />
        <DotGrid opacity={0.35} />
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur border border-blue-200/50 rounded-full mb-6 shadow-sm">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-current" />
                <span className="text-xs font-bold text-gray-800 tracking-wide">Premium Flex Printing Solutions</span>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">
              Bold Design.<br />
              <span className="brand-gradient-text">Flawless Print.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
              From billboards that stop traffic to backlit displays that own the night — FutureSign turns ambitious brands into unmissable experiences.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-9 flex flex-wrap gap-4">
              <Link to="/services"><PrimaryBtn>Explore Services <ArrowRight className="h-4 w-4 m-1.5" /></PrimaryBtn></Link>
              <Link to="/gallery"><GhostBtn><Play className="h-4 w-4" /> View Our Work</GhostBtn></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map(s => (
                <div key={s.l} className="bg-white/70 backdrop-blur border border-white shadow-sm rounded-xl p-4">
                  <div className="text-3xl font-extrabold brand-gradient-text"><Counter to={s.n} suffix={s.s} /></div>
                  <div className="text-xs font-semibold text-gray-600 mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative h-[520px]">
            <div className="absolute -inset-4 brand-gradient rounded-3xl opacity-20 blur-2xl" />
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={heroIdx}
                  src={IMAGES.hero[heroIdx]}
                  alt=""
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
                  <div className="text-xs text-gray-500 font-medium">Featured Project</div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={heroIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm font-bold text-gray-900"
                    >
                      {IMAGES.heroProjects?.[heroIdx] || 'Metro Billboard Series'}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex gap-1.5">
                  {IMAGES.hero.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setHeroIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${i === heroIdx ? 'w-8 bg-white' : 'w-1.5 bg-white/60'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="hidden md:flex absolute -left-6 top-10 bg-white shadow-xl rounded-2xl px-4 py-3 items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-600" /></div>
              <div><div className="text-xs text-gray-500">Delivered today</div><div className="text-sm font-bold text-gray-900">3 new signages</div></div>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="hidden md:flex absolute -right-6 bottom-16 bg-white shadow-xl rounded-2xl px-4 py-3 items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center"><Star className="h-5 w-5 text-amber-500 fill-current" /></div>
              <div><div className="text-xs text-gray-500">Client rating</div><div className="text-sm font-bold text-gray-900">4.9 / 5.0</div></div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* PARTNERS LOGO CAROUSEL */}
      <SmoothLogoCarousel />

      {/* Editing Section */}
      <Section className="relative py-20 bg-white overflow-hidden">
        <BackgroundPattern type="circles" color="orange" opacity={0.3} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* First Row - About Us & Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* About Us in Curve Box */}
            <motion.div
              variants={slideInLeft}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#1e40af] to-blue-500 text-white p-8 rounded-2xl lg:rounded-r-[60px] shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6"
                >
                  <Users className="h-4 w-4 text-white mr-2" />
                  <span className="font-semibold">About Us</span>
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">Our Story</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  We are passionate about delivering exceptional printing solutions that bring your brand to life with precision and creativity.
                </p>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-2 flex flex-wrap lg:flex-nowrap gap-8">
              {/* Left Section */}
              <motion.div
                variants={slideInLeft}
                className="flex flex-col justify-center"
              >
                <h2 className="text-4xl md:text-7xl font-bold text-gray-900">
                  Bold Design, <span className="bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">Flawless Print</span>
                </h2>
              </motion.div>

              {/* Right Section */}
              <motion.div
                variants={slideInRight}
                className="flex flex-col justify-between space-y-6"
              >
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  We deliver high-quality flex printing with vibrant colors, sharp detail, and lasting durability to elevate your brand visibility.
                </p>

                <ul className="space-y-2 text-gray-600 text-base">
                  <li>🎨 Vibrant & high-resolution prints</li>
                  <li>🛠️ Durable materials for indoor & outdoor use</li>
                  <li>📐 Custom sizes & flexible designs</li>
                  <li>🚀 Fast turnaround & reliable delivery</li>
                </ul>

                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e40af] to-[#dd5428] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all"
                  >
                    Read More
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Second Row - Customer Satisfaction & Slides */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className='flex flex-col space-y-8'>
              {/* Customer Satisfaction Box */}
              <motion.div
                variants={slideInLeft}
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setConfettiActive(true)}
                onMouseLeave={() => setConfettiActive(false)}
                className="relative bg-gradient-to-br from-[#1e40af] to-blue-500 rounded-2xl p-6 shadow-2xl overflow-hidden flex-1 min-h-[180px] flex items-center justify-center cursor-pointer"
              >
                <AnimatePresence>
                  {confettiActive && <BoxConfetti isActive={confettiActive} />}
                </AnimatePresence>

                <div className="relative z-10 w-full">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="h-8 w-8 text-white" />
                    </motion.div>

                    <div className="text-right">
                      <h3 className="text-xl font-bold text-white mb-1">
                        Customer Satisfaction
                      </h3>
                      <div className="text-4xl font-bold text-white">
                        <AnimatedCounter from={0} to={98} />%
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "98%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-white/90 text-sm font-semibold">
                        Happy Clients
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full">
                        <Star className="h-3 w-3 text-yellow-400 mr-1" />
                        <span className="text-white text-xs font-semibold">Rated Excellent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Section - Image and Customer Projects Stats */}
              <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Small Picture */}
                <motion.div
                  variants={slideInLeft}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl overflow-hidden shadow-lg w-full lg:w-[40%] min-h-[150px]"
                >
                  <img
                    src="/images/smallimg.jpg"
                    alt="Project Showcase"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Customer Projects Stats */}
                <motion.div
                  variants={slideInRight}
                  whileHover={{ scale: 1.02 }}
                  className="w-full lg:w-[60%] bg-gradient-to-r from-[#dd5428] to-orange-500 rounded-2xl p-6 text-white shadow-xl flex flex-col justify-center min-h-[150px]"
                >
                  <motion.div
                    variants={scaleUp}
                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4"
                  >
                    <CircleUser className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    className="font-bold"
                  >
                    <div className="text-5xl font-bold mb-1">2000+</div>
                    <h3 className="text-lg font-bold mb-1">Customer Projects Accomplished</h3>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Middle Column - Image */}
            <motion.div
              variants={scaleUp}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="/images/printing.jpg"
                alt="Customer Showcase"
                className="w-full h-full object-cover min-h-[250px] sm:min-h-[350px] lg:min-h-[500px]"
              />
            </motion.div>

            {/* Right Column - Slides Container */}
            <motion.div
              variants={slideInRight}
              className="flex flex-col h-full noselect space-y-8"
            >
              {/* TOP CAROUSEL */}
              <motion.div
                variants={fadeInUp}
                className="flex-1 min-h-[250px]"
              >
                <TopCarousel />
              </motion.div>

              {/* BOTTOM SLIDER */}
              <motion.div
                variants={fadeInUp}
                className="flex-1 min-h-[250px]"
              >
                <BottomSlider />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* WHY US */}
      <Section className="py-24" bg="bg-gradient-to-b from-white to-blue-50/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow icon={CheckCircle} tone="blue">Why choose us</Eyebrow>
            <Heading sub="FutureSign?">Why Choose</Heading>
            <p className="mt-4 text-lg text-gray-600">We combine cutting-edge technology with expert craftsmanship to deliver print solutions that make your brand impossible to ignore.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }} className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}><f.icon className="h-6 w-6" /></div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{f.desc}</p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#1e40af] to-[#dd5428] rounded-full group-hover:w-24 transition-all" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROCESS */}
      <Section className="py-24" bg="bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow icon={TrendingUp} tone="orange">Our process</Eyebrow>
            <Heading sub="Excellence">How We Deliver</Heading>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} text-white items-center justify-center font-black text-lg shadow-lg`}>{s.n}</div>
                <s.icon className="h-5 w-5 text-gray-400 mt-6" />
                <h3 className="mt-3 text-xl font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="py-24" bg="bg-gradient-to-b from-orange-50/50 to-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow icon={Star} tone="orange">Client stories</Eyebrow>
            <Heading sub="Say About Us">What Our Clients</Heading>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={tIdx} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[220px] leading-none font-black text-gray-100 select-none">”</div>
                <div className="relative flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 rounded-2xl brand-gradient flex items-center justify-center text-white text-3xl font-black shadow-lg flex-shrink-0">
                    {TESTIMONIALS[tIdx].name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />)}</div>
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">“{TESTIMONIALS[tIdx].content}”</p>
                    <div className="mt-6">
                      <div className="font-bold text-gray-900">{TESTIMONIALS[tIdx].name}</div>
                      <div className="text-sm text-[#1e40af] font-semibold">{TESTIMONIALS[tIdx].role} · {TESTIMONIALS[tIdx].company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-4 mt-8">
              <button onClick={() => setTIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-11 h-11 rounded-full bg-white border border-gray-200 hover:border-[#1e40af] hover:text-[#1e40af] shadow-sm flex items-center justify-center transition-all"><ChevronLeft className="h-5 w-5" /></button>
              <div className="flex items-center gap-2">{TESTIMONIALS.map((_, i) => <button key={i} onClick={() => setTIdx(i)} className={`h-2 rounded-full transition-all ${i === tIdx ? 'w-8 brand-gradient' : 'w-2 bg-gray-300'}`} />)}</div>
              <button onClick={() => setTIdx(i => (i + 1) % TESTIMONIALS.length)} className="w-11 h-11 rounded-full bg-white border border-gray-200 hover:border-[#1e40af] hover:text-[#1e40af] shadow-sm flex items-center justify-center transition-all"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="py-24" bg="bg-white">
        <Container className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow icon={Target} tone="blue">FAQ</Eyebrow>
            <Heading sub="Questions">Frequently Asked</Heading>
            <p className="mt-4 text-lg text-gray-600">Everything you need to know before starting your project with us.</p>
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-100">
              <div className="flex items-center gap-3 mb-2"><Shield className="h-5 w-5 text-[#1e40af]" /><span className="font-bold text-gray-900">Still have questions?</span></div>
              <p className="text-sm text-gray-600 mb-4">Our specialists are ready to walk you through any detail.</p>
              <Link to="/contact"><PrimaryBtn>Talk to an expert <ArrowRight className="h-4 w-4" /></PrimaryBtn></Link>
            </div>
          </div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#1e40af]/30 transition-colors">
                <button onClick={() => setFaqIdx(faqIdx === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                  <div className="w-8 h-8 rounded-lg brand-gradient text-white flex items-center justify-center flex-shrink-0">
                    {faqIdx === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {faqIdx === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl brand-gradient p-12 md:p-16 text-white shadow-2xl">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Ready to make your brand unmissable?</h2>
                <p className="mt-4 text-white/90 text-lg">Join hundreds of brands that trust FutureSign for premium large-format printing.</p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Link to="/contact"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-[#1e40af] font-bold px-8 py-4 rounded-xl shadow-lg inline-flex items-center gap-2 mt-0.5">Get Free Quote <ArrowRight className="h-5 w-5" /></motion.button></Link>
                <Link to="/gallery"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white/10 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl backdrop-blur inline-flex items-center gap-2 hover:bg-white/20">View Portfolio</motion.button></Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}



