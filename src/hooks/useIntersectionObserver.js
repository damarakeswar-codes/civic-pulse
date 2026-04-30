import { useState, useEffect, useRef } from "react";

/**
 * Hook for Intersection Observer (Lazy Loading)
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        // Once it intersects, we can stop observing if we only want to load once
        if (targetRef.current) observer.unobserve(targetRef.current);
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
}
