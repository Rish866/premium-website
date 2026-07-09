import { Target } from "lucide-react";

type Props = {
  config: any;
};

export default function AboutBlock({ config }: Props) {
  const stats = config.stats ?? [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "50+", label: "Team Members" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030308] to-black" />

      <div className="relative">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {config.eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {config.title ?? "About Us"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
            {config.description ?? "We are passionate about delivering excellence."}
          </p>
        </div>

        {config.mission && (
          <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-white/[0.08] bg-gradient-to-r from-cyan-400/5 to-purple-400/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Target size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">Our Mission</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{config.mission}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          {stats.map((stat: any, i: number) => (
            <div key={i} className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center transition-all hover:border-cyan-400/20 hover:bg-cyan-400/5">
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
