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
    <section className="border-b border-white/10 px-6 py-12">
      {config.eyebrow && (
        <p className="mb-2 text-center text-xs font-medium text-cyan-200">{config.eyebrow}</p>
      )}
      <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">
        {config.title ?? "About Us"}
      </h2>
      <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-white/55">
        {config.description ?? "We are a passionate team dedicated to delivering excellence."}
      </p>

      {config.mission && (
        <div className="mx-auto mb-8 max-w-3xl rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="mb-1 text-xs font-medium text-cyan-200">Our Mission</p>
          <p className="text-sm text-white/70">{config.mission}</p>
        </div>
      )}

      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
        {stats.map((stat: any, i: number) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <p className="text-2xl font-bold text-cyan-300">{stat.value}</p>
            <p className="mt-1 text-xs text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
