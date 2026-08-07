// src/components/UI/ScrollToTop.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ offset = 80, behavior = "smooth" }) => {
  const { pathname, hash } = useLocation();
  const hasScrolled = useRef(false);

  useEffect(() => {
    // Reset scroll flag when pathname changes
    hasScrolled.current = false;

    const scrollToElement = () => {
      if (hash) {
        const elementId = hash.replace('#', '');
        const element = document.getElementById(elementId);
        
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior });
          hasScrolled.current = true;
          return true;
        }
      }
      return false;
    };

    // Try immediately
    if (scrollToElement()) return;

    // If element not found, try after a delay
    const timer1 = setTimeout(() => {
      if (scrollToElement()) return;
    }, 200);

    // Try again after DOM is fully loaded
    const timer2 = setTimeout(() => {
      if (scrollToElement()) return;
    }, 500);

    // Fallback: scroll to top if nothing else worked
    const timer3 = setTimeout(() => {
      if (!hasScrolled.current) {
        window.scrollTo({
          top: 0 - offset,
          behavior,
        });
      }
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };

  }, [pathname, hash, offset, behavior]);

  return null;
};

export default ScrollToTop;
