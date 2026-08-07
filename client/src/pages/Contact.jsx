// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle, X, Plane, AlertCircle } from 'lucide-react';
import { Section, Container, Eyebrow, Heading, PageTransition, GradientOrb } from '../Components/Layout/ui-kit';

const CONTACTS = [
  { icon: Phone, title: 'Call Us', details: '+91 92814-09991', desc: 'Mon–Sat, 9am–6pm', action: 'tel:+919281409991', color: 'from-[#1e40af] to-blue-400' },
  { icon: MessageCircle, title: 'WhatsApp', details: '+91 92814-09991', desc: '24/7 chat support', action: 'https://wa.me/919281409991', color: 'from-[#dd5428] to-orange-400' },
  { icon: Mail, title: 'Email Us', details: 'info@zasfuturesign.com', desc: 'We reply within a day', action: 'mailto:info@zasfuturesign.com', color: 'from-[#1e40af] to-blue-400' },
  { icon: MapPin, title: 'Visit Us', details: 'Peerzadiguda, Hyderabad', desc: 'Plot 26, Mallikarjun Nagar', action: 'https://maps.app.goo.gl/r9R4GvprKmQ3BuTm9', color: 'from-[#dd5428] to-orange-400' },
];

// Get API URL from environment variables
const API_URL = import.meta.env.VITE_SERVER_API_URL;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to submit form');
      }

      const data = await response.json();

      setSuccess(true);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <Section className="pt-32 pb-24 noise" bg="bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <GradientOrb className="top-10 left-1/4 w-96 h-96" color="blue" />
        <Container className="text-center max-w-3xl mx-auto">
          <Eyebrow icon={MessageCircle} tone="blue">Contact us</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">Get In<br/><span className="brand-gradient-text">Touch</span></h1>
          <p className="mt-6 text-lg text-gray-600">Let's create something amazing together. Reach out and start your printing journey today.</p>
        </Container>
      </Section>

      {/* Contact Cards */}
      <Section className="py-16" bg="bg-white">
        <Container className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTACTS.map((c,i) => (
            <motion.a key={i} href={c.action} target={c.action.startsWith('http')?'_blank':'_self'} rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }}
              whileHover={{ y: -6 }} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center">
              <div className={`mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}><c.icon className="h-6 w-6"/></div>
              <h3 className="mt-4 font-bold text-gray-900">{c.title}</h3>
              <p className="mt-1 font-semibold text-gray-800">{c.details}</p>
              <p className="text-xs text-gray-500 mt-1">{c.desc}</p>
            </motion.a>
          ))}
        </Container>
      </Section>

      {/* Contact Form */}
      <Section id="contact-form" className="py-20" bg="bg-gradient-to-b from-white to-blue-50/40">
        <Container className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
          >
            <Eyebrow icon={Send} tone="blue">Start your project</Eyebrow>
            <Heading sub="Message">Send Us A</Heading>
            <p className="mt-3 text-gray-600">Share your vision. We'll bring it to life with precision printing.</p>
            
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  required 
                  name="name" 
                  value={form.name} 
                  onChange={onChange} 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1e40af] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
                <input 
                  required 
                  name="phone" 
                  value={form.phone} 
                  onChange={onChange} 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1e40af] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>
              <input 
                required 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={onChange} 
                placeholder="Email Address" 
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1e40af] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
              <select 
                required 
                name="service" 
                value={form.service} 
                onChange={onChange} 
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1e40af] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              >
                <option value="">Select a service</option>
                <option>Backlit Flex</option>
                <option>Non-Lit Flex</option>
                <option>Standees</option>
                <option>Vinyl / Wraps</option>
                <option>Consultation</option>
              </select>
              <textarea 
                required 
                rows="5" 
                name="message" 
                value={form.message} 
                onChange={onChange} 
                placeholder="Tell us about your project…" 
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1e40af] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
              />
              <motion.button 
                whileHover={{ scale: 1.01 }} 
                whileTap={{ scale: 0.98 }} 
                disabled={sending} 
                type="submit"
                className="w-full brand-gradient text-white font-bold py-4 rounded-xl inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-60"
              >
                {sending ? (
                  <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/> Sending…</>
                ) : (
                  <><Send className="h-5 w-5"/> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#1e40af]"/> Our Location
              </h3>
              <div className="mt-5 h-64 rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.4442834952856!2d78.6084995!3d17.391621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f54365753d5%3A0x77b86455db213e06!2sFuture%20sign!5e0!3m2!1sen!2sin!4v1786044350502!5m2!1sen!2sin&maptype=roadmap"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="FutureSign Location"
                />
              </div>
              <a 
                href="https://maps.app.goo.gl/r9R4GvprKmQ3BuTm9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-flex items-center gap-2 brand-gradient text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:shadow-lg transition-all"
              >
                <MapPin className="h-4 w-4"/> Open in Maps
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#1e40af] to-blue-500 rounded-3xl p-8 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"><Clock className="h-6 w-6"/></div>
                <div><h3 className="text-xl font-bold">Business Hours</h3><p className="text-blue-100 text-sm">Here when you need us</p></div>
              </div>
              <div className="space-y-3">
                {[['Mon – Fri','9:00 AM – 6:00 PM'],['Saturday','10:00 AM – 4:00 PM'],['Sunday','Closed'],['Emergency','24/7 Available']].map(([d,h]) => (
                  <div key={d} className="flex justify-between py-2 border-b border-white/15"><span className="text-blue-100">{d}</span><span className="font-semibold">{h}</span></div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#dd5428] to-orange-500 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold">Response Guarantee</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {['Initial response within 2 hours','Detailed quote within 24 hours','Same-day consultation available','Dedicated account manager'].map(x => (
                  <li key={x} className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"/> {x}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Container>
      </Section>

      <AnimatePresence>
        {success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.85, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }} className="relative bg-white rounded-3xl p-10 max-w-md text-center shadow-2xl">
              <button onClick={()=>setSuccess(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"><X className="h-5 w-5"/></button>
              <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} className="mx-auto w-20 h-20 rounded-2xl brand-gradient flex items-center justify-center shadow-lg"><Plane className="h-9 w-9 text-white"/></motion.div>
              <h3 className="mt-6 text-2xl font-extrabold text-gray-900">Message Sent!</h3>
              <p className="mt-2 text-gray-600">Thanks for reaching out. We'll be in touch within 24 hours.</p>
              <button onClick={()=>setSuccess(false)} className="mt-6 brand-gradient text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2"><CheckCircle className="h-5 w-5"/> Got it</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}