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
    <section className="border-b border-white/10 px-10 py-20">
      {config.eyebrow && (
        <p className="mb-3 text-center text-sm font-medium text-cyan-200">{config.eyebrow}</p>
      )}
      <h2 className="mb-4 text-center text-4xl font-bold text-white">
        {config.title ?? "About Us"}
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-white/55">
        {config.description ?? "We are a passionate team dedicated to delivering excellence."}
      </p>

      {config.mission && (
        <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="mb-2 text-sm font-medium text-cyan-200">Our Mission</p>
          <p className="text-white/70">{config.mission}</p>
        </div>
      )}

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        {stats.map((stat: any, i: number) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
            <p className="text-3xl font-bold text-cyan-300">{stat.value}</p>
            <p className="mt-2 text-sm text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
