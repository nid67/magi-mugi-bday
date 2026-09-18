import { Power } from 'lucide-react';

export default function QuestAccept({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="flex items-center justify-center h-screen p-6">
      <div className="system-panel p-8 md:p-12 border-2 border-red-500 rounded-lg max-w-2xl w-full text-center relative overflow-hidden group">
        
        {/* Subtle animated background glow */}
        <div className="absolute inset-0 bg-red-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-red-500 flex items-center justify-center mb-6 text-red-500 animate-pulse">
            <Power size={24} />
          </div>
          
          <h1 className="font-mono text-red-500 text-sm md:text-lg tracking-[0.3em] mb-4 uppercase">
            [ System Alert ]
          </h1>
          
          <p className="font-sans font-bold text-2xl md:text-4xl text-white mb-12">
            Player <span className="text-red-500">MUGI</span> has reached Level 10.
          </p>
          
          <button 
            onClick={onAccept}
            className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 transition-colors font-mono font-bold tracking-widest text-white uppercase text-sm md:text-base overflow-hidden cursor-pointer"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
            <span className="relative z-10">Accept Quest</span>
          </button>
        </div>
      </div>
    </div>
  );
}
