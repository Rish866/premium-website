type Props = {
  config: any;
};

export default function HeroBlock({ config }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-600/10 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      <div className="relative px-6 py-20 text-center sm:py-28 md:py-32">
        {/* Eyebrow badge */}
        {config.eyebrow && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-cyan-200 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            {config.eyebrow}
          </div>
        )}

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
          {config.title ?? "Your Business, Elevated"}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base md:text-lg">
          {config.subtitle ?? "Premium digital presence crafted for modern businesses."}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {config.buttonText && (
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40">
              <span className="relative z-10">{config.buttonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          )}
          <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm text-white/70 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10">
            Learn More
          </button>
        </div>

        {/* Decorative floating elements */}
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
    </section>
  );
}
