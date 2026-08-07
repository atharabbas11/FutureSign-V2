// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Image as ImageIcon, Zap, ArrowRight, CheckCircle, Award, Clock, Shield, Star, Users, Sparkles, Printer, Truck } from 'lucide-react';
import { IMAGES } from '../data/mock';
import { Section, Container, Eyebrow, Heading, PageTransition, PrimaryBtn, GhostBtn, GradientOrb } from '../Components/Layout/ui-kit';

const SERVICES = [
  { icon: Sun, key: 'backlit', title: 'Backlit Flex', desc: 'High-brightness backlit prints for illuminated storefronts and displays that glow with vibrant, true-to-brand colors after sunset.', features: ['Vibrant colors', 'Even light diffusion', 'Weather-durable', 'Perfect for signage boxes'], image: IMAGES.services.backlit, gradient: 'from-[#1e40af] to-blue-400' },
  { icon: Moon, key: 'nonlit', title: 'Non-Lit Flex', desc: 'Robust standard flex printing for outdoor billboards and indoor signage with UV-locked colors and long life.', features: ['Weather resistant', 'UV protected', 'Cost-effective', 'Matte / gloss finish'], image: IMAGES.services.nonlit, gradient: 'from-[#dd5428] to-orange-400' },
  { icon: ImageIcon, key: 'standees', title: 'Standees & Displays', desc: 'Portable roll-ups, rigid standees, and event displays that command attention in retail spaces and exhibitions.', features: ['Easy setup', 'Multiple sizes', 'Lightweight', 'Reusable frames'], image: IMAGES.services.standees, gradient: 'from-[#1e40af] to-blue-400' },
  { icon: Zap, key: 'vinyl', title: 'Vinyl & Wraps', desc: 'Premium vinyl for vehicle wraps, wall graphics, floor decals, and custom applications with pro-grade adhesive.', features: ['Superior adhesion', 'Removable options', 'Gloss / matte / satin', 'Weather-proof'], image: IMAGES.services.vinyl, gradient: 'from-[#dd5428] to-orange-400' },
];

const STATS = [
  { value: '2000+', label: 'Projects Completed', icon: Award, color: 'from-[#1e40af] to-blue-400' },
  { value: '24/7', label: 'Customer Support', icon: Clock, color: 'from-[#dd5428] to-orange-400' },
  { value: '100%', label: 'Quality Guarantee', icon: Shield, color: 'from-[#1e40af] to-blue-400' },
  { value: '98%', label: 'Client Satisfaction', icon: Star, color: 'from-[#dd5428] to-orange-400' },
];

const STEPS = [
  { n: '01', title: 'Design Consultation', desc: 'Share your vision with our expert team', icon: Sparkles, color: 'from-[#1e40af] to-blue-400' },
  { n: '02', title: 'Material Selection', desc: 'Choose premium materials for your needs', icon: ImageIcon, color: 'from-[#dd5428] to-orange-400' },
  { n: '03', title: 'Precision Printing', desc: 'Advanced tech and craft techniques', icon: Printer, color: 'from-[#1e40af] to-blue-400' },
  { n: '04', title: 'Quality Delivery', desc: 'Careful packaging and on-time delivery', icon: Truck, color: 'from-[#dd5428] to-orange-400' },
];

export default function Services() {
  return (
    <PageTransition>
      {/* HERO */}
      <Section className="pt-32 pb-24 noise" bg="bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <GradientOrb className="top-10 right-1/4 w-96 h-96" color="orange" />
        <Container className="text-center max-w-3xl mx-auto">
          <Eyebrow icon={Zap} tone="blue">Our Services</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">Our Printing<br/><span className="brand-gradient-text">Solutions</span></h1>
          <p className="mt-6 text-lg text-gray-600">Premium flex printing services that transform your brand vision into stunning, unmissable reality.</p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <Link to="/contact"><PrimaryBtn>Get Free Quote <ArrowRight className="h-4 w-4 m-1.5"/></PrimaryBtn></Link>
            <Link to="/gallery"><GhostBtn>View Portfolio</GhostBtn></Link>
          </div>
        </Container>
      </Section>

      {/* STATS */}
      <Section className="py-14 border-y border-gray-100" bg="bg-white">
        <Container className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s,i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }} className="text-center">
              <div className={`w-14 h-14 rounded-2xl mx-auto bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-lg`}><s.icon className="h-6 w-6"/></div>
              <div className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-600 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </Container>
      </Section>

      {/* SERVICES GRID */}
      <Section className="py-24" bg="bg-gradient-to-b from-white to-blue-50/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow icon={ImageIcon} tone="blue">Our services</Eyebrow>
            <Heading sub="Services">Premium Printing</Heading>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {SERVICES.map((s,i) => (
              <motion.div key={s.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                whileHover={{ y: -6 }} className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute top-5 right-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} text-white flex items-center justify-center shadow-xl`}><s.icon className="h-6 w-6"/></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-3">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/> {f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`mt-6 inline-flex items-center gap-2 bg-gradient-to-r ${s.gradient} text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all`}>Get quote <ArrowRight className="h-4 w-4"/></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROCESS */}
      <Section className="py-24" bg="bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow tone="orange">Our process</Eyebrow>
            <Heading sub="Excellence">How We Deliver</Heading>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {STEPS.map((s,i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                className="text-center bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all">
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center font-black text-lg shadow-lg`}>{s.n}</div>
                <s.icon className="h-5 w-5 mx-auto mt-5 text-gray-400" />
                <h3 className="mt-3 font-bold text-gray-900">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl brand-gradient p-12 md:p-16 text-white text-center shadow-2xl">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <h2 className="relative text-4xl md:text-5xl font-extrabold">Ready to Transform Your Vision?</h2>
            <p className="relative mt-4 text-white/90 max-w-2xl mx-auto">Let's collaborate to create stunning prints that elevate your brand presence.</p>
            <div className="relative mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/contact"><motion.button whileHover={{scale:1.05}} className="bg-white text-[#1e40af] font-bold px-8 py-4 rounded-xl shadow-lg mt-0.5">Get Free Quote</motion.button></Link>
              <Link to="/gallery"><motion.button whileHover={{scale:1.05}} className="bg-white/10 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl backdrop-blur">View Portfolio</motion.button></Link>
            </div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};
