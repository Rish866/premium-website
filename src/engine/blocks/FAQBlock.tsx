type Props = {
  config: any;
};

export default function FAQBlock({ config }: Props) {
  const items = config.items ?? [];

  return (
    <section className="border-b border-white/10 px-10 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm text-cyan-200">{config.eyebrow ?? "FAQ"}</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">
          {config.title ?? "Frequently asked questions"}
        </h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        {items.map((item: any) => (
          <div key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="font-semibold text-white">{item.question}</p>
            <p className="mt-3 text-sm leading-6 text-white/55">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
