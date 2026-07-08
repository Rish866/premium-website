type Props = {
  config: any;
};

export default function HeroBlock({ config }: Props) {
  return (
    <section className="px-12 py-24 text-center border-b border-white/10">
      <h1 className="text-5xl font-bold text-white">
        {config.title ?? "Hero Title"}
      </h1>

      <p className="mt-6 text-white/50">
        {config.subtitle ?? "Subtitle"}
      </p>
    </section>
  );
}
