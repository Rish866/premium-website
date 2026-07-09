type Props = {
  config: any;
};

export default function TestimonialsBlock({ config }: Props) {
  const testimonials = config.items ?? [
    { name: "Customer 1", text: "Amazing service!", role: "Business Owner" },
    { name: "Customer 2", text: "Highly recommended.", role: "CEO" },
  ];

  return (
    <section className="border-b border-white/10 px-6 py-12">
      {config.eyebrow && (
        <p className="mb-2 text-center text-xs font-medium text-cyan-200">{config.eyebrow}</p>
      )}
      <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">
        {config.title ?? "What Our Clients Say"}
      </h2>
      {config.subtitle && (
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-white/50">{config.subtitle}</p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t: any, i: number) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="mb-3 flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mb-3 text-xs leading-relaxed text-white/60">"{t.text}"</p>
            <div>
              <p className="text-sm font-medium text-white">{t.name}</p>
              {t.role && <p className="text-[10px] text-white/40">{t.role}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
