// src/Components/Layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Phone } from 'lucide-react';
import logo from '../../../public/images/logo.png'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 transition-transform duration-500 group-hover:rotate-12">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="flex space-x-1">
              <span className="text-2xl font-extrabold text-[#1e40af] group-hover:text-blue-700 transition-colors">
                Future
              </span>
              <span className="text-2xl font-extrabold text-[#dd5428] group-hover:text-orange-600 transition-colors">
                Sign
              </span>
            </div>
            <span className={`text-[8px] font-semibold tracking-wider uppercase transition-all ${
              scrolled ? 'text-gray-700' : 'text-gray-900'
            }`}>
              The Complete Branding Solution
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(n => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'}
              className={({ isActive }) => `relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${isActive ? 'text-[#1e40af]' : 'text-gray-700 hover:text-[#1e40af]'}`}>
              {({ isActive }) => (
                <>
                  <span>{n.label}</span>
                  {isActive && (
                    <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full brand-gradient" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919281409991" className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#1e40af]">
            <Phone className="h-4 w-4" /> +91 92814-09991
          </a>
          {/* <Link to="/contact" className="brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Get Quote</Link> */}
          <HashLink to="/contact#contact-form" smooth className="brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Get Quote
          </HashLink>
        </div>

        <button onClick={() => setOpen(v => !v)} className="lg:hidden p-2 rounded-lg text-gray-900" aria-label="menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-5 py-4 space-y-1">
              {NAV.map(n => (
                <NavLink key={n.to} to={n.to} end={n.to === '/'}
                  className={({ isActive }) => `block px-4 py-3 rounded-lg text-sm font-semibold ${isActive ? 'brand-gradient text-white' : 'text-gray-700 hover:bg-gray-50'}`}>
                  {n.label}
                </NavLink>
              ))}
              <Link to="/contact" className="block mt-2 text-center brand-gradient text-white font-semibold px-4 py-3 rounded-lg">Get Free Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
