import { ArrowRight } from "lucide-react";

type Props = {
  config: any;
};

export default function CTABlock({ config }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#030308]" />

      <div className="relative">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/[0.08]">
          {/* Gradient background */}
          <div className="relative bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-blue-500/20 p-10 text-center sm:p-14">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

            <div className="relative">
              {config.eyebrow && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-200">{config.eyebrow}</p>
              )}
              <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                {config.title ?? "Ready to get started?"}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-white/60">
                {config.subtitle ?? "Take the first step towards your digital transformation."}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all hover:scale-105 hover:shadow-white/20">
                  {config.buttonText ?? "Get Started"}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                {config.secondaryButtonText && (
                  <button className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm text-white/80 backdrop-blur-sm transition-all hover:bg-white/10">
                    {config.secondaryButtonText}
                  </button>
                )}
              </div>
            </div>

            {/* Glow effects */}
            <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
