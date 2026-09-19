export default function CornerBracket() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#3DD6FF] shadow-[0_0_10px_rgba(61,214,255,0.5)]"></div>
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#3DD6FF] shadow-[0_0_10px_rgba(61,214,255,0.5)]"></div>
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#3DD6FF] shadow-[0_0_10px_rgba(61,214,255,0.5)]"></div>
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#3DD6FF] shadow-[0_0_10px_rgba(61,214,255,0.5)]"></div>
    </div>
  );
}
