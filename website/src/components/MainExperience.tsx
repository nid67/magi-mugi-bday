import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from './SectionTitle';
import PhotoReveal from './PhotoReveal';
import GamerUI from './GamerUI';
import PhotoArchive from './PhotoArchive';
import TreasureNote from './TreasureNote';
import SystemNotification from './SystemNotification';
import LevelUpFlash from './LevelUpFlash';
import CornerBracket from './CornerBracket';

gsap.registerPlugin(ScrollTrigger);

export default function MainExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const finalRevealRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger after component mounts and images load
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, []);

  return (
    <div ref={containerRef} className="w-full relative z-10 pb-48">
      {/* Spacer for initial scroll */}
      <div className="h-[10vh]"></div>

      {/* LEVEL 01: The Beginning (Family/Support) */}
      <section className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto relative">
        <SystemNotification message="[SYSTEM] New Quest Available" delay={0.5} />
        <SectionTitle level="01" title="The Beginning" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mt-16">
          <PhotoReveal src="/assets/images/all/1000024778.jpg" alt="Mugi and Brother" />
          <div className="text-xl md:text-3xl font-serif text-gray-300 italic px-4 md:px-0">
            "Even the strongest players rely on their party."
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          <PhotoReveal src="/assets/images/all/1000049381.jpg" alt="Family on Hill" delay={0.2} parallax />
          <PhotoReveal src="/assets/images/all/1000085852.jpg" alt="Brother Turban" delay={0.4} />
        </div>
      </section>

      {/* LEVEL 02: The Chaos (Funny) */}
      <section className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <SectionTitle level="02" title="The Chaos" />
        <div className="text-center my-12">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-red-500 mb-4">
            Every main character needs some chaos 😂
          </h2>
          <p className="text-gray-400 font-mono text-sm md:text-base">Power level: questionable.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <PhotoReveal src="/assets/images/all/1000019961.jpg" alt="Box on Head" className="md:mt-12" />
          <PhotoReveal src="/assets/images/all/1000054404.jpg" alt="Sunglasses Tag" className="md:-mt-12" />
          <PhotoReveal src="/assets/images/all/1000085851.jpg" alt="Pink Turban" className="md:mt-24" />
        </div>
      </section>

      {/* LEVEL 03: The Artist */}
      <section className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <SectionTitle level="03" title="The Artist" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-24">
          <div className="md:w-1/2 text-left">
            <h3 className="text-3xl font-bold mb-6 text-white uppercase tracking-wider">Vision to Reality</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Sketch → Drawing → Masterpiece. 
            </p>
            <p className="text-gray-500 italic">
              "Shaping the world with focus and imagination."
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <PhotoReveal src="/assets/images/all/1000051297.jpg" alt="Artist Candid" />
            <div className="absolute -bottom-10 -left-10 w-2/3">
              <PhotoReveal src="/assets/images/all/1000075432.jpg" alt="Artist Focus" delay={0.3} parallax />
            </div>
          </div>
        </div>
      </section>

      {/* LEVEL 04: The Gamer */}
      <section className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <SectionTitle level="04" title="The Gamer" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
          <GamerUI />
          <div className="grid grid-cols-2 gap-4">
            <PhotoReveal src="/assets/images/all/1000017800.jpg" alt="Cap Mask" />
            <PhotoReveal src="/assets/images/all/1000085872.jpg" alt="Blindfold" className="mt-8" />
          </div>
        </div>
      </section>

      {/* LEVEL 05: The Main Characters */}
      <section className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <SectionTitle level="05" title="The Main Characters" />
        
        {/* Cinematic Anime Influenced Section */}
        <div className="mt-24 relative w-full h-[60vh] md:h-[80vh] overflow-hidden group">
          <div className="absolute inset-0 bg-red-900/20 mix-blend-color-burn z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
          <PhotoReveal 
            src="/assets/images/all/1000047965.jpg" 
            alt="Naruto Mountains" 
            className="w-full h-full object-cover" 
            fullWidth 
          />
          <div className="absolute bottom-10 left-10 z-20">
            <p className="text-white font-mono text-sm tracking-[0.3em] uppercase bg-black/50 p-2 border-l-2 border-red-500">
              Aura Detected
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          <PhotoReveal src="/assets/images/all/1000029645.jpg" alt="Yoriichi Stick" />
          <PhotoReveal src="/assets/images/all/1000045257.jpg" alt="Boxing Gloves" className="md:mt-32" />
        </div>
      </section>

      {/* LEVEL 06: The Memory Archives (Horizontal Gallery) */}
      <section className="w-full">
        <PhotoArchive />
      </section>

      {/* FINAL REVEAL */}
      <section ref={finalRevealRef} className="min-h-screen flex flex-col items-center justify-center py-32 px-4 relative overflow-hidden">
        <LevelUpFlash triggerRef={finalRevealRef as React.RefObject<HTMLElement>} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-950/20 pointer-events-none"></div>
        
        <div className="text-center relative z-10 w-full max-w-5xl mx-auto">
          {/* Main Hero Shot */}
          <div className="w-full max-w-3xl mx-auto mb-16 px-4 relative">
             <CornerBracket />
             <PhotoReveal 
              src="/assets/images/all/1000047998.jpg" 
              alt="Final Reveal Car Top" 
              className="w-full h-auto rounded-none shadow-[0_0_50px_rgba(255,0,0,0.15)] relative z-10"
            />
          </div>

          <h1 className="font-mono font-bold text-4xl md:text-6xl text-white tracking-[0.2em] uppercase mb-4 opacity-90 reveal-text">
            LEVEL 10 & 13
          </h1>
          <h2 className="font-sans font-black text-5xl md:text-9xl text-red-600 tracking-tighter uppercase mb-24 reveal-text shadow-red-900 drop-shadow-2xl">
            UNLOCKED
          </h2>

          <TreasureNote />
        </div>
      </section>

    </div>
  );
}
