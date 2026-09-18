import { Shield, Sword, Zap, Heart } from 'lucide-react';

export default function GamerUI() {
  return (
    <div className="system-panel p-6 md:p-10 rounded-xl relative overflow-hidden group">
      {/* Glitch overlay */}
      <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-1">Players Profile</p>
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider glitch-text">MUGI & MAGI</h3>
        </div>
        <div className="text-right">
          <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-1">Current Lvl</p>
          <p className="text-xl md:text-2xl font-bold text-red-500 font-mono">10 & 13</p>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <div>
          <div className="flex justify-between text-xs font-mono mb-2 uppercase text-gray-400">
            <span>EXP</span>
            <span className="text-red-400">MAX</span>
          </div>
          <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
            <div className="h-full bg-red-500 w-full shadow-[0_0_10px_red]"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/50 border border-gray-800 p-3 rounded flex items-center gap-3">
            <Sword size={16} className="text-red-500" />
            <div>
              <p className="text-[10px] text-gray-500 font-mono uppercase">Attack</p>
              <p className="font-bold text-sm">999</p>
            </div>
          </div>
          <div className="bg-black/50 border border-gray-800 p-3 rounded flex items-center gap-3">
            <Shield size={16} className="text-blue-500" />
            <div>
              <p className="text-[10px] text-gray-500 font-mono uppercase">Defense</p>
              <p className="font-bold text-sm">999</p>
            </div>
          </div>
          <div className="bg-black/50 border border-gray-800 p-3 rounded flex items-center gap-3">
            <Zap size={16} className="text-yellow-500" />
            <div>
              <p className="text-[10px] text-gray-500 font-mono uppercase">Agility</p>
              <p className="font-bold text-sm">MAX</p>
            </div>
          </div>
          <div className="bg-black/50 border border-gray-800 p-3 rounded flex items-center gap-3">
            <Heart size={16} className="text-green-500" />
            <div>
              <p className="text-[10px] text-gray-500 font-mono uppercase">Status</p>
              <p className="font-bold text-sm text-green-400 text-xs">BIRTHDAY MODE 🎂</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-3">Active Quest</p>
          <div className="bg-red-950/30 border border-red-500/30 p-4 rounded text-center">
            <p className="font-bold text-white uppercase tracking-wider">MAKE MORE MEMORIES</p>
            <p className="text-xs text-red-300 mt-1">Reward: Legendary Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}
