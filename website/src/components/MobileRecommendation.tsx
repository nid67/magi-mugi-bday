import { Monitor, Smartphone } from 'lucide-react';

export default function MobileRecommendation({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6 text-center">
      <div className="system-panel max-w-sm w-full p-8 rounded-xl border border-red-500/30 flex flex-col items-center">
        <h2 className="text-3xl font-bold font-mono text-red-500 mb-2">WAIT, MUGI. 👀</h2>
        <p className="text-gray-300 font-sans mb-6 text-sm">
          Are you really going to experience this entire thing on that tiny screen?
        </p>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent mb-6"></div>
        
        <p className="text-red-400 font-mono text-xs mb-8 uppercase tracking-widest">
          Sung Jin-Woo detected a higher-level experience. ⚔️
        </p>
        
        <div className="bg-red-950/30 border border-red-500/20 p-4 rounded-lg w-full mb-8">
          <p className="text-white font-bold mb-1 flex items-center justify-center gap-2">
            <Monitor size={16} className="text-red-500" /> RECOMMENDED
          </p>
          <p className="text-red-200 text-xs">Laptop / Desktop</p>
          <p className="text-gray-400 text-xs mt-2 italic">"More space. More depth. More chaos."</p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <button 
            onClick={onDismiss}
            className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-4 rounded transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2"
          >
            <Smartphone size={16} /> Experience on Mobile
          </button>
          <button 
            onClick={onDismiss}
            className="w-full bg-transparent hover:bg-red-950/40 text-gray-400 hover:text-red-400 border border-gray-800 hover:border-red-900 font-bold py-3 px-4 rounded transition-colors uppercase tracking-wider text-xs"
          >
            I'll use a Laptop 💻
          </button>
        </div>
      </div>
    </div>
  );
}
