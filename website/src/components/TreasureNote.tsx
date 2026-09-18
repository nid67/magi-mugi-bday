import { useState } from 'react';
import { Mail, X, Gift } from 'lucide-react';

export default function TreasureNote() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={() => setIsOpen(false)}
          ></div>
          
          <div className="relative z-10 w-full max-w-2xl bg-black border border-red-500 rounded-lg shadow-[0_0_100px_rgba(255,0,0,0.3)] overflow-hidden">
            {/* Top Bar */}
            <div className="flex justify-between items-center bg-red-950/50 p-4 border-b border-red-500/30">
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
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-4xl font-sans font-black text-white mb-8 uppercase tracking-wider glitch-text leading-tight">
                Belated Happy Birthday Mugi ❤️<br/>
                & Happy Birthday Magi ❤️
              </h3>
              
              <div className="text-gray-300 space-y-6 font-sans text-lg md:text-2xl leading-relaxed">
                <p>Your next chapters start now.</p>
                <p>Keep leveling up. Keep dreaming. Keep playing.</p>
                <p className="text-red-400 font-bold">
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 blur-[100px] pointer-events-none"></div>
          </div>
        </div>
      )}
    </>
  );
}
