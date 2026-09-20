import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const mugiTitleRef = useRef<HTMLHeadingElement>(null);
  const levelTitleRef = useRef<HTMLHeadingElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const bdayRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out entire intro and trigger next phase
        gsap.to(containerRef.current, { opacity: 0, duration: 2, delay: 1, onComplete });
      }
    });

    tl.to(text1Ref.current, { opacity: 1, duration: 2 })
      .to(text1Ref.current, { opacity: 0, duration: 1 }, "+=1.5")
      
      .to(text2Ref.current, { opacity: 1, duration: 1.5 })
      .to(text2Ref.current, { opacity: 0, duration: 1 }, "+=1")
      
      .to(text3Ref.current, { opacity: 1, duration: 1.5 })
      .to(text3Ref.current, { opacity: 0, duration: 1 }, "+=1.5")
      
      // MUGI Reveal
      .to(mugiTitleRef.current, { opacity: 1, scale: 1, duration: 0.1, ease: "power4.out" })
      .to(levelTitleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }, "+=0.5")
      
      // Flash hero image
      .to(heroImageRef.current, { opacity: 0.3, duration: 2, scale: 1.05 }, "-=0.5")
      
      // Final BDAY text
      .to(bdayRef.current, { opacity: 1, duration: 2 }, "+=1");

  }, [onComplete]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-20 bg-black flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image that slowly fades in */}
      <img 
        ref={heroImageRef}
        src="/assets/images/1000048426.jpg" // Mountains cinematic
        alt="Cinematic Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-0 scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <div ref={text1Ref} className="absolute opacity-0 text-xl md:text-3xl font-serif tracking-wide text-gray-300">
          “Every story has a beginning.”
        </div>
        
        <div ref={text2Ref} className="absolute opacity-0 text-xl md:text-3xl font-serif tracking-wide text-gray-300">
          “But some stories…”
        </div>
        
        <div ref={text3Ref} className="absolute opacity-0 text-2xl md:text-4xl font-serif italic tracking-wide text-white">
          “…are only getting started.”
        </div>

        <div className="absolute flex flex-col items-center">
          <h1 
            ref={mugiTitleRef} 
            className="opacity-0 scale-150 font-sans font-black text-6xl md:text-8xl text-white tracking-[0.1em] uppercase glitch-text mb-2"
          >
            MAGI & MUGI
          </h1>
          <h2 
            ref={levelTitleRef}
            className="opacity-0 translate-y-10 font-mono font-bold text-2xl md:text-4xl text-red-500 tracking-[0.5em] uppercase mb-12"
          >
            Level 10
          </h2>
          
          <h3 
            ref={bdayRef}
            className="opacity-0 font-sans font-bold text-xl md:text-3xl text-gray-400 tracking-widest uppercase mt-24"
          >
            Happy Birthday Magi & Mugi 🎂🔥
          </h3>
        </div>
      </div>
    </div>
  );
}
