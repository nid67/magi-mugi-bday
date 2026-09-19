import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PhotoRevealProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  parallax?: boolean;
  fullWidth?: boolean;
}

export default function PhotoReveal({ src, alt, className = "", delay = 0, parallax = false, fullWidth = false }: PhotoRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const img = imageRef.current;
    
    if (el && img) {
      // Reveal animation
      gsap.fromTo(el, 
        { autoAlpha: 0, y: 50, scale: 0.95, filter: 'blur(10px)' },
        { 
          autoAlpha: 1, 
          y: 0, 
          scale: 1, 
          filter: 'blur(0px)',
          duration: 1.5, 
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
          }
        }
      );

      // Parallax effect
      if (parallax) {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    }
  }, [delay, parallax]);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden group ${fullWidth ? 'w-full h-full' : 'rounded-lg border border-gray-800'} ${className}`}
    >
      <img 
        ref={imageRef}
        src={src} 
        alt={alt} 
        loading="lazy"
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${fullWidth ? '' : 'aspect-[4/5] md:aspect-auto'}`}
      />
      {/* Subtle scanline overlay for system vibe */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
    </div>
  );
}
