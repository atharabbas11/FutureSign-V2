// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ZoomIn, X, ArrowRight, Star, Award, Users, Clock, Shield } from 'lucide-react';
import { IMAGES, CATEGORIES } from '../data/mock';
import { Section, Container, Eyebrow, Heading, PageTransition, PrimaryBtn, GhostBtn, GradientOrb } from '../Components/Layout/ui-kit';

export default function Gallery() {
  const [cat, setCat] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = cat === 'all' ? IMAGES.gallery : IMAGES.gallery.filter(p => p.category === cat);

  const stats = [
    { v: '2000+', l: 'Projects', icon: Award }, { v: '150+', l: 'Happy Clients', icon: Users },
    { v: '35+', l: 'Years Experience*', icon: Clock }, { v: '100%', l: 'Quality Guarantee', icon: Shield },
  ];

  return (
    <PageTransition>
      <Section className="pt-32 pb-24 noise" bg="bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <GradientOrb className="top-10 left-1/4 w-96 h-96" color="blue" />
        <Container className="text-center max-w-3xl mx-auto">
          <Eyebrow icon={Star} tone="blue">Project gallery</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">Our Project<br/><span className="brand-gradient-text">Gallery</span></h1>
          <p className="mt-6 text-lg text-gray-600">Showcasing our finest work in flex printing and large-format branding solutions.</p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <Link to="/contact"><PrimaryBtn>Start Your Project <ArrowRight className="h-4 w-4 m-1.5"/></PrimaryBtn></Link>
            <Link to="/services"><GhostBtn>View Services</GhostBtn></Link>
          </div>
        </Container>
      </Section>

      <Section className="py-14 border-y border-gray-100" bg="bg-white">
        <Container className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s,i) => (
            <div key={i} className="text-center">
              <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${i%2?'from-[#dd5428] to-orange-400':'from-[#1e40af] to-blue-400'} text-white flex items-center justify-center shadow-lg`}><s.icon className="h-6 w-6"/></div>
              <div className="mt-3 text-3xl font-extrabold text-gray-900">{s.v}</div>
              <div className="text-sm text-gray-600 font-medium">{s.l}</div>
            </div>
          ))}
        </Container>
      </Section>

      <Section className="py-24" bg="bg-gradient-to-b from-white to-blue-50/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow icon={Filter} tone="orange">Browse our work</Eyebrow>
            <Heading sub="Category">Filter by</Heading>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={()=>setCat(c.id)} className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${cat===c.id?'brand-gradient text-white border-transparent shadow-lg':'bg-white text-gray-700 border-gray-200 hover:border-[#1e40af] hover:text-[#1e40af]'}`}>{c.name}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={cat} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p,i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i*0.05 }}
                  whileHover={{ y: -6 }} onClick={()=>setSelected(p)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all">
                  <div className="relative h-60 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"><ZoomIn className="h-5 w-5 text-white"/></div>
                    </div>
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 rounded-full text-xs font-bold text-[#1e40af]">{CATEGORIES.find(c=>c.id===p.category)?.name}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#1e40af] transition-colors">{p.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.description}</p>
                    <div className="mt-4 flex justify-between text-xs text-gray-500"><span><span className="font-semibold text-gray-700">Size:</span> {p.size}</span><span><span className="font-semibold text-gray-700">Location:</span> {p.location}</span></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </Section>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4" onClick={()=>setSelected(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative max-w-5xl w-full" onClick={e=>e.stopPropagation()}>
              <button onClick={()=>setSelected(null)} className="absolute -top-12 right-0 text-white bg-white/10 backdrop-blur rounded-full p-2 hover:bg-white/20"><X className="h-6 w-6"/></button>
              <img src={selected.image} alt="" className="w-full max-h-[70vh] object-contain rounded-2xl"/>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 to-transparent rounded-b-2xl text-white">
                <h3 className="text-2xl font-bold">{selected.title}</h3>
                <p className="text-white/80 mt-1">{selected.description}</p>
                <div className="mt-4 flex gap-6 text-sm">
                  <span><span className="opacity-70">Category:</span> {CATEGORIES.find(c=>c.id===selected.category)?.name}</span>
                  <span><span className="opacity-70">Size:</span> {selected.size}</span>
                  <span><span className="opacity-70">Location:</span> {selected.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <Section className="py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl brand-gradient p-12 md:p-16 text-white text-center shadow-2xl">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <h2 className="relative text-4xl md:text-5xl font-extrabold">Ready to Start Your Project?</h2>
            <p className="relative mt-4 text-white/90 max-w-2xl mx-auto">Inspired by our work? Let's create something amazing for your brand.</p>
            <div className="relative mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/contact"><motion.button whileHover={{scale:1.05}} className="bg-white text-[#1e40af] font-bold px-8 py-4 rounded-xl shadow-lg">Get Free Quote</motion.button></Link>
            </div>
          </div>
        </Container>
      </Section>

    </PageTransition>
  );
};
