'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

export function Counter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  
  // Extract number and suffix from string like "18+", "120M+", "2008"
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/g, '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2, // 2 seconds for smooth professional feel
        ease: 'easeOut', // Natural slow down at the end
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toString() + suffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView, numericValue, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}
