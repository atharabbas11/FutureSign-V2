// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Target, Sparkles, Users, Shield, Heart, CheckCircle, Zap, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { TEAM } from '../data/mock';
import { Section, Container, Eyebrow, Heading, PageTransition, PrimaryBtn, GhostBtn, GradientOrb } from '../Components/Layout/ui-kit';

const VALUES = [
  { title: 'Excellence', desc: 'We never compromise on quality — only the very best result reaches our clients.', icon: Award, color: 'from-[#1e40af] to-blue-400' },
  { title: 'Innovation', desc: 'Continuously adopting new tech and techniques to stay ahead of the curve.', icon: Zap, color: 'from-[#dd5428] to-orange-400' },
  { title: 'Integrity', desc: 'Transparent processes and honest communication build lasting relationships.', icon: Shield, color: 'from-[#1e40af] to-blue-400' },
  { title: 'Collaboration', desc: 'We work as an extension of your team — aligned, involved, and invested.', icon: Users, color: 'from-[#dd5428] to-orange-400' },
  { title: 'Sustainability', desc: 'Eco-friendly practices and responsibly sourced materials for a better future.', icon: Sparkles, color: 'from-[#1e40af] to-blue-400' },
  { title: 'Reliability', desc: 'Consistent quality and timely delivery you can count on — every time.', icon: CheckCircle, color: 'from-[#dd5428] to-orange-400' },
];

const TIMELINE = [
  { year: '2016', event: 'Company Founded', desc: 'Started with a vision for premium flex printing.', icon: Award, color: 'from-[#1e40af] to-blue-400' },
  { year: '2018', event: 'First Major Client', desc: 'Secured our first enterprise-level project.', icon: Users, color: 'from-[#dd5428] to-orange-400' },
  { year: '2020', event: 'Team Expansion', desc: 'Grew a team of skilled designers and technicians.', icon: TrendingUp, color: 'from-[#1e40af] to-blue-400' },
  { year: '2022', event: 'Advanced Technology', desc: 'Invested in eco-solvent & UV printing tech.', icon: Zap, color: 'from-[#dd5428] to-orange-400' },
  { year: '2025', event: '2000+ Projects', desc: 'Achieved a milestone of 2000+ successful projects.', icon: Target, color: 'from-[#1e40af] to-blue-400' },
];

export default function About() {
  return (
    <PageTransition>
      <Section className="pt-32 pb-24 noise" bg="bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <GradientOrb className="top-10 right-1/3 w-96 h-96" color="orange" />
        <Container className="text-center max-w-3xl mx-auto">
          <Eyebrow icon={Heart} tone="blue">About us</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">About<br/><span className="brand-gradient-text">FutureSign</span></h1>
          <p className="mt-6 text-lg text-gray-600">We're pioneers in premium flex printing, transforming visions into vibrant realities with cutting-edge technology and unparalleled craftsmanship.</p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <Link to="/contact"><PrimaryBtn>Start Your Project <ArrowRight className="h-4 w-4 m-1.5"/></PrimaryBtn></Link>
            <Link to="/services"><GhostBtn>View Services</GhostBtn></Link>
          </div>
        </Container>
      </Section>

      {/* MISSION VISION */}
      <Section className="py-24" bg="bg-white">
        <Container className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-10 border border-blue-100">
            <Target className="absolute -top-6 -right-6 h-40 w-40 text-[#1e40af]/10" />
            <Eyebrow icon={Target} tone="blue">Our Mission</Eyebrow>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">To deliver exceptional printing solutions that elevate brands and inspire connections.</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">We combine innovative technology with artistic vision to create solutions that not only meet, but exceed expectations — helping businesses stand out in today's noisy market.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-10 border border-orange-100">
            <Sparkles className="absolute -bottom-6 -left-6 h-40 w-40 text-[#dd5428]/10" />
            <Eyebrow icon={Sparkles} tone="orange">Our Vision</Eyebrow>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">To be the most trusted partner for premium flex printing worldwide.</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">We envision a future where every brand can access high-quality, sustainable printing solutions that make a lasting impact and drive real business growth.</p>
          </motion.div>
        </Container>
      </Section>

      {/* TIMELINE */}
      <Section className="py-24" bg="bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow icon={Clock} tone="blue">Our journey</Eyebrow>
            <Heading sub="Shape Our Story">Milestones That</Heading>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e40af] via-blue-400 to-[#dd5428]" />
            <div className="space-y-10">
              {TIMELINE.map((t,i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                  className={`relative flex items-center md:justify-normal ${i%2===0?'md:flex-row':'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 pl-16 md:pl-0 ${i%2===0?'md:pr-12 md:text-right':'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="text-xs font-bold text-[#dd5428] uppercase tracking-widest">{t.year}</div>
                      <h4 className="mt-1 text-xl font-bold text-gray-900">{t.event}</h4>
                      <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
                    </div>
                  </div>
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${t.color} border-4 border-white shadow-xl flex items-center justify-center text-white`}><t.icon className="h-5 w-5"/></div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* VALUES */}
      <Section className="py-24" bg="bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow icon={Heart} tone="orange">Our values</Eyebrow>
            <Heading sub="Drive Us">The Principles That</Heading>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v,i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.06 }}
                whileHover={{ y: -6 }} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}><v.icon className="h-6 w-6"/></div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* TEAM */}
      <Section className="py-24" bg="bg-gradient-to-b from-white to-blue-50/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow icon={Users} tone="blue">Meet our team</Eyebrow>
            <Heading sub="Your Success">The Experts Behind</Heading>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m,i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }}
                whileHover={{ y: -8 }} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900">{m.name}</h4>
                  <div className="text-sm text-[#1e40af] font-semibold">{m.role}</div>
                  <div className="mt-2 text-xs text-gray-500 flex items-center gap-1"><Zap className="h-3 w-3 text-amber-500"/> {m.expertise}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl brand-gradient p-12 md:p-16 text-white text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold">Ready to work with us?</h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">Let's create something remarkable for your brand.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/contact"><motion.button whileHover={{scale:1.05}} className="bg-white text-[#1e40af] font-bold px-8 py-4 rounded-xl shadow-lg mt-0.5">Start Your Project</motion.button></Link>
              <Link to="/gallery"><motion.button whileHover={{scale:1.05}} className="bg-white/10 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl backdrop-blur">View Our Work</motion.button></Link>
            </div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};
