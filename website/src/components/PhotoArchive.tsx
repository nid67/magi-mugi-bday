import { useEffect, useState } from 'react';

export default function PhotoArchive() {
  const [images, setImages] = useState<string[]>([]);

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

  return (
    <div className="w-full py-24 bg-black overflow-hidden relative">
      
      <div className="px-4 md:px-12 mb-16 max-w-7xl mx-auto">
        <h2 className="font-mono text-red-500 text-sm md:text-base tracking-[0.3em] uppercase mb-2">
          Level 06
        </h2>
        <h3 className="font-sans font-bold text-3xl md:text-5xl text-white uppercase tracking-wider">
          The Archives
        </h3>
        <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mt-4">
          // Continuous Memory Stream...
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group">
        
        {/* Track 1 */}
        <div className="flex w-max animate-marquee gap-4 md:gap-8 px-2 md:px-4">
          {images.map((filename, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-lg h-[40vh] md:h-[50vh] w-[70vw] md:w-[30vw] flex-shrink-0 border border-gray-800 bg-black shadow-[0_0_20px_rgba(255,0,0,0.05)] flex items-center justify-center"
            >
              <img 
                src={`/assets/images/all/${filename}`} 
                alt={`Archive Memory ${idx}`}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-red-900/20 mix-blend-color-burn opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless looping) */}
        <div className="flex w-max animate-marquee gap-4 md:gap-8 px-2 md:px-4" aria-hidden="true">
          {images.map((filename, idx) => (
            <div 
              key={`dup-${idx}`} 
              className="relative overflow-hidden rounded-lg h-[40vh] md:h-[50vh] w-[70vw] md:w-[30vw] flex-shrink-0 border border-gray-800 bg-black shadow-[0_0_20px_rgba(255,0,0,0.05)] flex items-center justify-center"
            >
              <img 
                src={`/assets/images/all/${filename}`} 
                alt={`Archive Memory Dup ${idx}`}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-red-900/20 mix-blend-color-burn opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
