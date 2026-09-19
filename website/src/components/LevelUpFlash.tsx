import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LevelUpFlashProps {
  onComplete?: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export default function LevelUpFlash({ onComplete, triggerRef }: LevelUpFlashProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !triggerRef?.current) return;

    // Use Intersection Observer or GSAP ScrollTrigger to fire this once
    const triggerElement = triggerRef.current;
    
    let fired = false;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !fired) {
        fired = true;
        
        const tl = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });

        tl.set(containerRef.current, { display: 'flex' })
          // 1. Brief white-blue flash
          .fromTo(containerRef.current, 
            { backgroundColor: 'rgba(255, 255, 255, 1)' }, 
            { backgroundColor: 'rgba(61, 214, 255, 0.8)', duration: 0.1 }
          )
          // 2. Bold system font "LEVEL UP" burst
          .fromTo(textRef.current,
            { scale: 0.5, opacity: 0 },
            { scale: 1.5, opacity: 1, duration: 0.3, ease: 'back.out(2)' }
          )
          // Hold
          .to(textRef.current, { scale: 1, duration: 0.2 })
          // 3. Screen-edge glow pulse and fade out
          .to(containerRef.current, { backgroundColor: 'rgba(0, 0, 0, 0)', duration: 0.8, ease: 'power2.out' }, "+=0.5")
          .to(textRef.current, { opacity: 0, duration: 0.4 }, "-=0.8")
          .set(containerRef.current, { display: 'none' });
      }
    }, { threshold: 0.5 });

    observer.observe(triggerElement);

    return () => {
      observer.disconnect();
    };
  }, [triggerRef, onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50 hidden flex-col items-center justify-center pointer-events-none"
      style={{ boxShadow: 'inset 0 0 100px rgba(61,214,255,0)' }}
    >
      <div 
        ref={textRef}
        className="font-mono font-black text-6xl md:text-9xl text-white tracking-[0.2em] uppercase text-center drop-shadow-[0_0_30px_rgba(61,214,255,1)]"
      >
        LEVEL UP
      </div>
    </div>
  );
}
