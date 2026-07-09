type Props = {
  config: any;
};

export default function GalleryBlock({ config }: Props) {
  const images = config.images ?? [];

  return (
    <section className="border-b border-white/10 px-10 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm text-cyan-200">{config.eyebrow ?? "Gallery"}</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">
          {config.title ?? "Project gallery"}
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {images.map((image: string) => (
          <div key={image} className="flex h-44 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-purple-500/10 to-white/[0.04] text-sm text-white/60">
            {image}
          </div>
        ))}
      </div>
    </section>
  );
}
