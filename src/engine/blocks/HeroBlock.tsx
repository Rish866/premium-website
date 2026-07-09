type Props = {
  config: any;
};

const paddingMap: Record<string, string> = {
  compact: "px-10 py-14",
  normal: "px-12 py-24",
  large: "px-12 py-32",
};

export default function HeroBlock({ config }: Props) {
  const padding = paddingMap[config.padding ?? "normal"] ?? paddingMap.normal;

  return (
    <section
      className={`${padding} border-b border-white/10 text-center`}
      style={{
        background:
          config.background ??
          "linear-gradient(135deg, rgba(34,211,238,.14), rgba(168,85,247,.08), rgba(255,255,255,.03))",
      }}
    >
      {config.eyebrow && (
        <p className="mb-4 text-sm font-medium text-cyan-200">{config.eyebrow}</p>
      )}

      <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white">
        {config.title ?? "Hero Title"}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/55">
        {config.subtitle ?? "Subtitle"}
      </p>

      {config.buttonText && (
        <button className="mt-9 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
          {config.buttonText}
        </button>
      )}
    </section>
  );
}
