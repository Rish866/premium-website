import { ImageIcon } from "lucide-react";

type Props = {
  config: any;
};

export default function GalleryBlock({ config }: Props) {
  const images: string[] = config.images ?? [];

  const isUrl = (str: string) =>
    str.startsWith("http://") || str.startsWith("https://") || str.startsWith("data:");

  return (
    <section className="border-b border-white/10 px-6 py-12">
      <div className="mb-8 text-center">
        {config.eyebrow && (
          <p className="mb-2 text-xs font-medium text-cyan-200">{config.eyebrow}</p>
        )}
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {config.title ?? "Gallery"}
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image: string, index: number) => (
          <div
            key={`${image}-${index}`}
            className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-purple-500/5 to-white/[0.02]"
          >
            {isUrl(image) ? (
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 px-4 text-center">
                <ImageIcon size={24} className="text-white/20" />
                <span className="text-xs text-white/50">{image}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 p-12 text-center">
          <ImageIcon size={32} className="mb-3 text-white/20" />
          <p className="text-sm text-white/40">No images added yet</p>
          <p className="mt-1 text-xs text-white/25">Add image URLs in the property panel</p>
        </div>
      )}
    </section>
  );
}
