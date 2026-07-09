type Props = {
  config: any;
};

export default function CTABlock({ config }: Props) {
  return (
    <section className="border-b border-white/10 px-6 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-8 text-center">
        {config.eyebrow && (
          <p className="mb-2 text-xs font-medium text-cyan-200">{config.eyebrow}</p>
        )}
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {config.title ?? "Ready to get started?"}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/55">
          {config.subtitle ?? "Take the first step towards growing your business online."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black transition hover:scale-[1.02]">
            {config.buttonText ?? "Get Started"}
          </button>
          {config.secondaryButtonText && (
            <button className="rounded-full border border-white/20 px-6 py-2.5 text-xs text-white/70 transition hover:bg-white/5">
              {config.secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
