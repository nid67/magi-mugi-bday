export default function SectionTitle({ level, title }: { level: string, title: string }) {
  return (
    <div className="flex flex-col mb-12 border-l-4 border-[#3DD6FF] pl-6 py-2">
      <span className="font-mono text-[#3DD6FF] text-sm md:text-base tracking-[0.3em] uppercase mb-2">
        Level {level}
      </span>
      <h2 className="font-sans font-bold text-3xl md:text-5xl text-white uppercase tracking-wider">
        {title}
      </h2>
    </div>
  );
}
