import { Volume2, VolumeX } from 'lucide-react';

export default function AudioController({ isMuted, onToggle }: { isMuted: boolean, onToggle: () => void }) {
  return (
    <button 
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/50 border border-gray-800 hover:border-red-500/50 hover:bg-black/80 transition-all text-gray-400 hover:text-white backdrop-blur-sm group"
      aria-label="Toggle Audio"
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="group-hover:text-red-400" />}
    </button>
  );
}
