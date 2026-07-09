type Props = {
  config: any;
};

export default function FeaturesBlock({ config }: Props) {
  const items = config.items ?? [];

  return (
    <section className="border-b border-white/10 px-6 py-12">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        {config.eyebrow && (
          <p className="mb-2 text-xs font-medium text-cyan-200">{config.eyebrow}</p>
        )}
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {config.title ?? "Our Services"}
        </h2>
        {config.subtitle && (
          <p className="mt-3 text-sm text-white/50">{config.subtitle}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item: string, index: number) => (
          <div
            key={`${item}-${index}`}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center text-sm text-white/70"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
