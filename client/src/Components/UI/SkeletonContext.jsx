// src/context/SkeletonContext.jsx
import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

const SkeletonContext = createContext();

export const useSkeleton = () => {
  const context = useContext(SkeletonContext);
  if (!context) {
    throw new Error('useSkeleton must be used within SkeletonProvider');
  }
  return context;
};

export const SkeletonProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Start with true for initial load
  const [currentPath, setCurrentPath] = useState('/');
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const loadingTimerRef = useRef(null);
  const minLoadingTimeRef = useRef(null);

  // Show skeleton immediately
  const showSkeleton = useCallback((path) => {
    setCurrentPath(path);
    setIsLoading(true);
    
    // Clear any existing timers
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    if (minLoadingTimeRef.current) {
      clearTimeout(minLoadingTimeRef.current);
    }
  }, []);

  // Hide skeleton with minimum display time to prevent flashing
  const hideSkeleton = useCallback(() => {
    // Ensure skeleton is shown for at least 300ms to prevent flashing
    minLoadingTimeRef.current = setTimeout(() => {
      setIsLoading(false);
      setIsInitialLoad(false);
    }, 300);
  }, []);

  // Force hide skeleton (for errors or immediate transitions)
  const forceHideSkeleton = useCallback(() => {
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    if (minLoadingTimeRef.current) {
      clearTimeout(minLoadingTimeRef.current);
    }
    setIsLoading(false);
    setIsInitialLoad(false);
  }, []);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
      if (minLoadingTimeRef.current) {
        clearTimeout(minLoadingTimeRef.current);
      }
    };
  }, []);

  // Handle initial load - hide skeleton after content loads
  useEffect(() => {
    if (isInitialLoad) {
      // Wait for content to load, then hide skeleton
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 500); // Adjust based on your loading needs
      
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  return (
    <SkeletonContext.Provider 
      value={{ 
        isLoading, 
        setIsLoading, 
        currentPath, 
        setCurrentPath,
        showSkeleton,
        hideSkeleton,
        forceHideSkeleton,
        isInitialLoad
      }}
    >
      {children}
    </SkeletonContext.Provider>
  );
};
