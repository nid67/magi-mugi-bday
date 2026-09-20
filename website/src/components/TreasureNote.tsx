import { useState, useRef, useEffect } from 'react';
import { Mail, X, Gift } from 'lucide-react';
import gsap from 'gsap';

export default function TreasureNote() {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20; // 20 is the tilt sensitivity
    const y = -(e.clientY - top - height / 2) / 20;
    
    gsap.to(cardRef.current, {
      rotateY: x,
      rotateX: y,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: "power2.out",
      duration: 0.7
    });
  };

  // Entrance Animation
  useEffect(() => {
    if (isOpen && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.5)", delay: 0.2 }
      );
    }
  }, [isOpen]);

  return (
    <>
      {/* Closed State (The Item Drop) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="group relative flex flex-col items-center justify-center p-6 bg-red-950/40 border border-red-500/50 rounded-xl hover:bg-red-900/60 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,0,0,0.2)] hover:shadow-[0_0_40px_rgba(255,0,0,0.6)] mx-auto w-full max-w-sm mt-12"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent pointer-events-none rounded-xl"></div>
        <Gift size={48} className="text-red-400 group-hover:text-white mb-4 animate-bounce" />
        <h3 className="text-red-500 font-mono text-sm tracking-widest uppercase mb-1">
          [ Legendary Item Found ]
        </h3>
        <p className="text-white font-bold tracking-wider">Click to Open</p>
      </button>

      {/* Opened State (The Modal) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer animate-in fade-in duration-500"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* 3D Container */}
          <div 
            className="relative z-10 w-full max-w-2xl [perspective:1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              ref={cardRef}
              className="bg-black/90 border border-red-500 rounded-xl shadow-[0_0_100px_rgba(255,0,0,0.4)] overflow-hidden backdrop-blur-xl relative transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center bg-red-950/50 p-4 border-b border-red-500/30 transform-gpu translate-z-10">
                <div className="flex items-center gap-2 text-red-500 font-mono text-sm uppercase tracking-widest">
                  <Mail size={16} />
                  <span>Classified Message</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div ref={contentRef} className="p-8 md:p-12 transform-gpu translate-z-20">
                <h3 className="text-2xl md:text-4xl font-sans font-black text-white mb-8 uppercase tracking-wider glitch-text leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Belated Happy Birthday Mugi ❤️<br/>
                  <span className="text-[#3DD6FF]">&</span> Happy Birthday Magi ❤️
                </h3>
                
                <div className="text-gray-300 space-y-6 font-sans text-lg md:text-2xl leading-relaxed">
                  <p>Your next chapters start now.</p>
                  <p>Keep leveling up. Keep dreaming. Keep playing.</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#3DD6FF] font-black text-xl md:text-3xl filter drop-shadow-md">
                    Keep being yourselves, because this entire world was created for YOU TWO.
                  </p>
                </div>
                
                <div className="mt-16 pt-6 border-t border-red-500/30 flex justify-between items-center">
                  <p className="font-mono text-red-500 text-xs tracking-widest uppercase">
                    // End of Log
                  </p>
                  <p className="font-mono text-gray-500 text-xs tracking-widest uppercase">
                    Status: Read
                  </p>
                </div>
              </div>
              
              {/* Ambient Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] pointer-events-none transform-gpu translate-z-0"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3DD6FF]/10 blur-[100px] pointer-events-none transform-gpu translate-z-0"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
