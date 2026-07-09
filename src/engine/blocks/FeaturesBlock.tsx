import { Zap, Shield, Globe2, Palette, Rocket, Star } from "lucide-react";

type Props = {
  config: any;
};

const iconMap = [Zap, Shield, Globe2, Palette, Rocket, Star];

export default function FeaturesBlock({ config }: Props) {
  const items: string[] = config.items ?? [];

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-16">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050510] to-black" />
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="relative">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {config.eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {config.title ?? "What We Offer"}
          </h2>
          {config.subtitle && (
            <p className="mt-3 text-sm text-white/50">{config.subtitle}</p>
          )}
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item: string, index: number) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={`${item}-${index}`}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-cyan-500/5"
              >
                {/* Glow on hover */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-400/10 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm font-semibold text-white">{item}</p>
                  <p className="mt-2 text-xs text-white/40">Premium quality service tailored to your needs.</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
