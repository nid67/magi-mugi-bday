import { useEffect, useState } from 'react';

const BOOT_SEQUENCE = [
  "INITIALIZING SYSTEM...",
  "CONNECTING TO SERVERS...",
  "VERIFYING PLAYER ID: MUGI",
  "SCANNING MEMORY LOGS... [ 70 FILES FOUND ]",
  "ESTABLISHING SPATIAL DOMAIN...",
  "CALIBRATING POWER LEVELS...",
  "WARNING: AURA OVERFLOW DETECTED",
  "SYSTEM READY."
];

export default function SystemBoot({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    let currentLine = 0;
    
    const interval = setInterval(() => {
      if (currentLine < BOOT_SEQUENCE.length) {
        setLines(prev => [...prev, BOOT_SEQUENCE[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800); // Wait a beat before transitioning
      }
    }, 400); // 400ms per line

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col justify-center h-screen p-8 md:p-24 font-mono text-red-500 text-sm md:text-base">
      {lines.map((line, i) => (
        <div key={i} className="mb-2 opacity-80">
          <span className="text-gray-500 mr-2">&gt;</span> 
          {line}
        </div>
      ))}
      <div className="animate-pulse mt-2">
        <span className="text-gray-500 mr-2">&gt;</span>_
      </div>
    </div>
  );
}
