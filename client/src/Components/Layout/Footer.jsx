// src/Components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '../../../public/images/logo.png'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1e40af]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#dd5428]/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg">
                <img src={logo} alt="Logo" />
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-lg text-white">FutureSign</div>
                <div className="text-[10px] font-semibold text-[#dd5428] uppercase tracking-widest">The Complete Branding Solution</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">Turning business vision into bold, unmissable reality with premium large-format printing solutions.</p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Ic, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:brand-gradient hover:border-transparent transition-all">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm">
              {[['Home','/'],['About Us','/about'],['Services','/services'],['Gallery','/gallery'],['Contact','/contact']].map(([l,to]) => (
                <li key={to}><Link to={to} className="hover:text-white transition-colors flex items-center gap-1 group"><ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all"/>{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3 text-sm">
              {['Backlit Flex','Non-Lit Flex','Standees','Vinyl Wraps','Vehicle Branding','Wall Graphics'].map(s => (
                <li key={s}><Link to="/services" className="hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="h-4 w-4 text-[#dd5428] mt-0.5 flex-shrink-0"/><a href="https://maps.app.goo.gl/r9R4GvprKmQ3BuTm9" target="_blank" rel="noopener noreferrer" className="hover:text-white">Plot no 26, Mallikarjun Nagar,<br/>Peerzadiguda, Hyderabad, TG</a></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 text-[#dd5428] flex-shrink-0"/><a href="tel:+919281409991" className="hover:text-white">+91 92814-09991</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 text-[#dd5428] flex-shrink-0"/><a href="mailto:info@zasfuturesign.com" className="hover:text-white">info@zasfuturesign.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} FutureSign. Crafted with precision.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-gray-600">|</span>
            {/* <span className="flex items-center gap-1">
              Made with <span className="text-red-500">❤️</span> by 
              <a 
                href="https://www.instagram.com/abbas.athar11/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#dd5428] hover:text-white transition-colors font-medium"
              >
                @abbas.athar11
              </a>
            </span> */}
            <span className="flex items-center gap-1">
              Built with <span>🚀</span> by{" "}
              <a
                href="https://www.instagram.com/abbas.athar11/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dd5428] hover:text-white transition-colors font-medium"
              >
                @abbas.athar11
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
