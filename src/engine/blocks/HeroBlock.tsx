type Props = {
  config: any;
};

const paddingMap: Record<string, string> = {
  compact: "px-6 py-10",
  normal: "px-8 py-16",
  large: "px-8 py-24",
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
        <p className="mb-3 text-xs font-medium text-cyan-200">{config.eyebrow}</p>
      )}

      <h1 className="mx-auto max-w-full text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
        {config.title ?? "Hero Title"}
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55 md:text-base">
        {config.subtitle ?? "Subtitle"}
      </p>

      {config.buttonText && (
        <button className="mt-6 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black transition hover:scale-[1.02] sm:text-sm">
          {config.buttonText}
        </button>
      )}
    </section>
  );
}
