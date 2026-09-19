import { useEffect, useState } from 'react';
import CornerBracket from './CornerBracket';

export default function PhotoArchive() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch('/assets/images/all/imageList.json')
      .then(res => res.json())
      .then(data => {
        // Shuffle and use all images
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setImages(shuffled);
      });
  }, []);

  if (images.length === 0) return null;

  const isPaused = isHovered || selectedImage !== null;
  const trackStyle = { animationPlayState: isPaused ? 'paused' : 'running' };

  return (
    <div className="w-full py-24 bg-system-dark overflow-hidden relative">
      
      <div className="px-4 md:px-12 mb-16 max-w-7xl mx-auto">
        <h2 className="font-mono text-[#3DD6FF] text-sm md:text-base tracking-[0.3em] uppercase mb-2">
          Level 06
        </h2>
        <h3 className="font-sans font-bold text-3xl md:text-5xl text-white uppercase tracking-wider">
          The Archives
        </h3>
        <p className="text-[#3DD6FF]/70 font-mono text-xs uppercase tracking-widest mt-4">
          // Continuous Memory Stream...
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div 
        className="relative w-full flex overflow-x-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Track 1 */}
        <div className="flex w-max animate-marquee gap-4 md:gap-8 px-2 md:px-4" style={trackStyle}>
          {images.map((filename, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImage(filename)}
              className="relative overflow-hidden cursor-pointer h-[40vh] md:h-[50vh] w-[70vw] md:w-[30vw] flex-shrink-0 border border-[#3DD6FF]/20 bg-system-dark shadow-[0_0_20px_rgba(61,214,255,0.05)] flex items-center justify-center transition-colors hover:border-[#3DD6FF]/80"
            >
              <img 
                src={`/assets/images/all/${filename}`} 
                alt={`Archive Memory ${idx}`}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#3DD6FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless looping) */}
        <div className="flex w-max animate-marquee gap-4 md:gap-8 px-2 md:px-4" aria-hidden="true" style={trackStyle}>
          {images.map((filename, idx) => (
            <div 
              key={`dup-${idx}`} 
              onClick={() => setSelectedImage(filename)}
              className="relative overflow-hidden cursor-pointer h-[40vh] md:h-[50vh] w-[70vw] md:w-[30vw] flex-shrink-0 border border-[#3DD6FF]/20 bg-system-dark shadow-[0_0_20px_rgba(61,214,255,0.05)] flex items-center justify-center transition-colors hover:border-[#3DD6FF]/80"
            >
              <img 
                src={`/assets/images/all/${filename}`} 
                alt={`Archive Memory Dup ${idx}`}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#3DD6FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center pointer-events-none">
            <CornerBracket />
            <img 
              src={`/assets/images/all/${selectedImage}`} 
              alt="Selected Memory" 
              className="max-w-full max-h-full object-contain shadow-[0_0_30px_rgba(61,214,255,0.2)] pointer-events-auto border border-[#3DD6FF]/30"
              onClick={(e) => e.stopPropagation()} 
            />
            
            <button 
              className="absolute top-4 right-4 text-[#3DD6FF] font-mono border border-[#3DD6FF]/50 px-4 py-2 bg-[#08090D]/80 hover:bg-[#3DD6FF]/20 pointer-events-auto transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              [X] CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
