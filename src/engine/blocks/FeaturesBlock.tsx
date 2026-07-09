type Props = {
  config: any;
};

export default function FeaturesBlock({ config }: Props) {
  const items = config.items ?? [];

  return (
    <section className="border-b border-white/10 px-10 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm text-cyan-200">{config.eyebrow ?? "Features"}</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">
          {config.title ?? "Powerful features"}
        </h2>
        {config.subtitle && <p className="mt-4 text-white/50">{config.subtitle}</p>}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item: string) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center text-white/70"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
