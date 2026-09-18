import { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import MobileRecommendation from './components/MobileRecommendation';
import HeroSection from './components/HeroSection';
import MainExperience from './components/MainExperience';
import AudioController from './components/AudioController';
import Background3D from './components/Background3D';

function App() {
  const [phase, setPhase] = useState<'hero' | 'main'>('hero');
  const [isMobileAlertDismissed, setIsMobileAlertDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const bgmRef = useRef<Howl | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Check mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Init Audio
    bgmRef.current = new Howl({
      src: ['/assets/audio/bgm.mp3'],
      loop: true,
      volume: 0.05,
      html5: true
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      bgmRef.current?.unload();
    };
  }, []);

  const handleStart = () => {
    setPhase('main');
    if (bgmRef.current) {
      bgmRef.current.volume(0.05); // Set explicitly very low (5%)
      bgmRef.current.play();
    }
    // Scroll a bit to indicate change
    window.scrollTo({ top: window.innerHeight * 0.1, behavior: 'smooth' });
  };

  const toggleMute = () => {
    if (bgmRef.current) {
      const newMuteState = !isMuted;
      bgmRef.current.mute(newMuteState);
      setIsMuted(newMuteState);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black font-sans selection:bg-red-500/30">
      <Background3D phase={phase} />
      
      {isMobile && !isMobileAlertDismissed && (
        <MobileRecommendation onDismiss={() => setIsMobileAlertDismissed(true)} />
      )}

      {/* Main flow */}
      <div className="relative z-10 w-full h-full">
        {phase === 'hero' ? (
          <HeroSection onStart={handleStart} isActive={true} />
        ) : (
          <div className="animate-in fade-in duration-1000">
            {/* Keeping hero visible at the top to scroll past it */}
            <HeroSection onStart={() => {}} isActive={false} />
            <MainExperience />
          </div>
        )}
      </div>

      <AudioController isMuted={isMuted} onToggle={toggleMute} />
    </div>
  );
}

export default App;
