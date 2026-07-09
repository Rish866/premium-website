type Props = {
  config: any;
};

export default function FAQBlock({ config }: Props) {
  const items = config.items ?? [];

  return (
    <section className="border-b border-white/10 px-6 py-12">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        {config.eyebrow && (
          <p className="mb-2 text-xs font-medium text-cyan-200">{config.eyebrow}</p>
        )}
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {config.title ?? "FAQ"}
        </h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {items.map((item: any, index: number) => (
          <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-semibold text-white">{item.question}</p>
            <p className="mt-2 text-xs leading-5 text-white/55">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
