import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Play, ArrowDown } from 'lucide-react';

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
          <img 
            src="/assets/images/all/1000048426.jpg" 
            alt="Mugi Hero" 
            className="w-full h-full object-cover object-center grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div className="w-1/2 h-full relative">
          <img 
            src="/assets/images/sri_hero.jpg" 
            alt="Sri Magizhan Hero" 
            className="w-full h-full object-cover object-center grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black"></div>
        {/* Center line blend */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-r from-transparent via-black to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-32 w-full max-w-6xl mx-auto">
        <h2 
          ref={subtitleRef}
          className="font-mono text-red-500 tracking-[0.4em] uppercase text-sm md:text-lg mb-4 font-bold drop-shadow-md"
        >
          {isActive ? "Dual Players Recognized" : "System Active"}
        </h2>
        
        <h1 
          ref={titleRef}
          className="font-sans font-black text-4xl md:text-6xl lg:text-8xl text-white tracking-tighter uppercase mb-2 drop-shadow-[0_0_20px_rgba(255,0,0,0.4)] glitch-text leading-tight flex flex-col md:flex-row items-center gap-2 md:gap-6"
        >
          <span>MUGI <span className="text-red-600 text-3xl md:text-5xl">LVL 10</span></span>
          <span className="text-gray-500 text-3xl md:text-6xl">&</span>
          <span>MAGI <span className="text-red-600 text-3xl md:text-5xl">LVL 13</span></span>
        </h1>
        
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-red-500 to-transparent my-8"></div>

        {isActive ? (
          <button 
            ref={btnRef}
            onClick={onStart}
            className="group relative flex items-center gap-3 px-8 py-4 bg-red-600/90 hover:bg-red-500 transition-all font-mono font-bold tracking-widest text-white uppercase text-sm md:text-base border border-red-400/50 hover:border-red-400 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] cursor-pointer backdrop-blur-sm rounded-sm"
          >
            <Play size={18} className="group-hover:scale-110 transition-transform" />
            <span>Enter Domain</span>
          </button>
        ) : (
          <div className="flex flex-col items-center text-gray-400 animate-pulse mt-4">
            <p className="font-mono text-sm tracking-widest uppercase mb-2">Scroll to explore</p>
            <ArrowDown size={24} className="text-red-500" />
          </div>
        )}
      </div>

      {/* Scroll indicator for active hero */}
      {isActive && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-red-500/50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-red-500 to-transparent"></div>
        </div>
      )}
    </div>
  );
}
