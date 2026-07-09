type Props = {
  config: any;
};

export default function CTABlock({ config }: Props) {
  return (
    <section className="border-b border-white/10 px-10 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-cyan-400/15 to-purple-500/15 p-12 text-center backdrop-blur-sm">
        {config.eyebrow && (
          <p className="mb-3 text-sm font-medium text-cyan-200">{config.eyebrow}</p>
        )}
        <h2 className="text-4xl font-bold text-white">
          {config.title ?? "Ready to get started?"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
          {config.subtitle ?? "Take the first step towards growing your business online."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
            {config.buttonText ?? "Get Started"}
          </button>
          {config.secondaryButtonText && (
            <button className="rounded-full border border-white/20 px-8 py-3 text-sm text-white/70 transition hover:bg-white/5">
              {config.secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
