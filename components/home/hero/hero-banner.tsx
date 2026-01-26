const HeroBanner = () => (
  <div className="h-48 md:h-64 w-full relative bg-zinc-900 overflow-hidden group border-b border-dashed border-zinc-800">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale mix-blend-luminosity" />
    <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

    <div className="absolute top-4 right-4">
      <div className="px-3 py-1 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-full text-xs font-mono text-zinc-400 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Open to work
      </div>
    </div>
  </div>
);

export default HeroBanner;
