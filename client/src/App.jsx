// src/App.jsx
import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/UI/ScrollToTop';

// Import Skeletons
import HomeSkeleton from './components/Skeleton/HomeSkeleton';
import AboutSkeleton from './components/Skeleton/AboutSkeleton';
import ServicesSkeleton from './components/Skeleton/ServicesSkeleton';
import GallerySkeleton from './components/Skeleton/GallerySkeleton';
import ContactSkeleton from './components/Skeleton/ContactSkeleton';

// Lazy load actual pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Error pages (optional)
const NotFound = lazy(() => import('./pages/errorpages/NotFound'));
const ServerError = lazy(() => import('./pages/errorpages/ServerError'));
const Forbidden = lazy(() => import('./pages/errorpages/Forbidden'));
const NetworkError = lazy(() => import('./pages/errorpages/NetworkError'));
const Maintenance = lazy(() => import('./pages/errorpages/Maintenance'));

// Skeleton mapping for each route
const SKELETONS = {
  '/': <HomeSkeleton />,
  '/about': <AboutSkeleton />,
  '/services': <ServicesSkeleton />,
  '/gallery': <GallerySkeleton />,
  '/contact': <ContactSkeleton />,
};

// Get skeleton based on current path
const getSkeleton = (path) => {
  return SKELETONS[path] || <HomeSkeleton />;
};

// App content component
function AppContent() {
  const [loading, setLoading] = useState(true);

  // Show skeleton on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Adjust based on your loading needs
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop offset={80} />
      <Navbar />
      <main>
        {loading ? (
          getSkeleton(window.location.pathname)
        ) : (
          <Suspense fallback={getSkeleton(window.location.pathname)}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Error Pages */}
              <Route path="/error/500" element={<ServerError />} />
              <Route path="/error/403" element={<Forbidden />} />
              <Route path="/error/network" element={<NetworkError />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        )}
      </main>
      <Footer />
    </>
  );
}

// Main App
function App() {
  return (
    <div className="App min-h-screen bg-white">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
