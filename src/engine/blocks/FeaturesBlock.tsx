type Props = {
  config: any;
};

export default function FeaturesBlock({ config }: Props) {
  const items = config.items ?? [];

  return (
    <section className="grid gap-6 border-b border-white/10 p-10 md:grid-cols-3">
      {items.map((item: string) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
        >
          {item}
        </div>
      ))}
    </section>
  );
}
