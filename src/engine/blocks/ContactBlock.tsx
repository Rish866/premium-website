type Props = {
  config: any;
};

export default function ContactBlock({ config }: Props) {
  return (
    <section className="px-10 py-20 text-center">
      <p className="text-sm text-cyan-200">{config.eyebrow ?? "Contact"}</p>

      <h2 className="mt-3 text-4xl font-semibold text-white">
        {config.title ?? "Ready to start?"}
      </h2>

      {config.subtitle && <p className="mx-auto mt-4 max-w-xl text-white/50">{config.subtitle}</p>}

      <div className="mx-auto mt-8 grid max-w-2xl gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white/60">
          {config.phone || "Phone not configured"}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white/60">
          {config.email || "Email not configured"}
        </div>
      </div>
    </section>
  );
}
