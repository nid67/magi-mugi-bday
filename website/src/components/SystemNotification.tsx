import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SystemNotificationProps {
  message: string;
  delay?: number;
}

export default function SystemNotification({ message, delay = 0 }: SystemNotificationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true
      },
      delay
    });

    tl.fromTo(
      containerRef.current,
      { y: -50, opacity: 0 },
      { y: 20, opacity: 1, duration: 0.6, ease: 'power3.out' }
    )
    .to(
      containerRef.current,
      { y: -50, opacity: 0, duration: 0.6, ease: 'power3.in' },
      "+=3" // hold for 3 seconds
    );

    return () => {
      tl.kill();
    };
  }, [message, delay]);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 opacity-0 pointer-events-none"
    >
      <div className="relative bg-[#08090D]/90 backdrop-blur-sm border border-[#3DD6FF] px-6 py-3 font-mono text-[#3DD6FF] text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(61,214,255,0.2)]">
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#3DD6FF]/5 to-transparent pointer-events-none"></div>
        
        {message}
      </div>
    </div>
  );
}
