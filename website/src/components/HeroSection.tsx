import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Play, ArrowDown } from 'lucide-react';
import CornerBracket from './CornerBracket';

export default function HeroSection({ onStart, isActive = true }: { onStart: () => void, isActive?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isActive) {
      const tl = gsap.timeline();
      tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 })
        .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        .fromTo(btnRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)" }, "-=0.5");
    }
  }, [isActive]);

  return (
    <div ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Split Screen Cinematic Image */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/2 h-full relative">
          <CornerBracket />
          <img 
            src="/assets/images/all/1000048426.jpg" 
            alt="Mugi Hero" 
            className="w-full h-full object-cover object-center grayscale-[30%] mix-blend-luminosity opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090D]/90 via-[#08090D]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[#3DD6FF]/5 mix-blend-overlay"></div>
        </div>
        <div className="w-1/2 h-full relative">
          <CornerBracket />
          <img 
            src="/assets/images/sri_hero.jpg" 
            alt="Sri Magizhan Hero" 
            className="w-full h-full object-cover object-center grayscale-[30%] mix-blend-luminosity opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#08090D]/90 via-[#08090D]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[#6B46F5]/5 mix-blend-overlay"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090D]/50 via-transparent to-[#08090D]"></div>
        {/* Center line blend */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#3DD6FF]/50 to-transparent shadow-[0_0_10px_rgba(61,214,255,0.5)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-32 w-full max-w-6xl mx-auto">
        <h2 
          ref={subtitleRef}
          className="font-mono text-[#3DD6FF] tracking-[0.4em] uppercase text-sm md:text-lg mb-4 font-bold drop-shadow-[0_0_8px_rgba(61,214,255,0.8)]"
        >
          {isActive ? "[SYSTEM] Dual Players Recognized" : "[SYSTEM] Active"}
        </h2>
        
        <h1 
          ref={titleRef}
          className="font-sans font-black text-4xl md:text-6xl lg:text-8xl text-white tracking-tighter uppercase mb-2 system-scanline leading-tight flex flex-col md:flex-row items-center gap-2 md:gap-6"
        >
          <span>MUGI <span className="text-[#3DD6FF] text-3xl md:text-5xl">LVL 10</span></span>
          <span className="text-gray-500 text-3xl md:text-6xl">&</span>
          <span>MAGI <span className="text-[#3DD6FF] text-3xl md:text-5xl">LVL 13</span></span>
        </h1>
        
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-[#6B46F5] to-transparent my-8"></div>

        {isActive ? (
          <button 
            ref={btnRef}
            onClick={onStart}
            className="group relative flex items-center gap-3 px-8 py-4 bg-[#08090D]/80 hover:bg-[#1a1c29] transition-all font-mono font-bold tracking-widest text-[#3DD6FF] uppercase text-sm md:text-base border border-[#3DD6FF]/50 hover:border-[#3DD6FF] hover:shadow-[0_0_20px_rgba(61,214,255,0.4)] cursor-pointer backdrop-blur-md rounded-none"
          >
            <Play size={18} className="group-hover:scale-110 transition-transform fill-[#3DD6FF]" />
            <span>Enter Domain</span>
            
            {/* UI Accents on button */}
            <div className="absolute top-0 left-0 w-1 h-1 bg-[#3DD6FF]"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#3DD6FF]"></div>
          </button>
        ) : (
          <div className="flex flex-col items-center text-[#3DD6FF]/70 animate-pulse mt-4">
            <p className="font-mono text-sm tracking-widest uppercase mb-2">Scroll to explore</p>
            <ArrowDown size={24} className="text-[#3DD6FF]" />
          </div>
        )}
      </div>

      {/* Scroll indicator for active hero */}
      {isActive && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-[#3DD6FF]/50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#3DD6FF] to-transparent"></div>
        </div>
      )}
    </div>
  );
}
