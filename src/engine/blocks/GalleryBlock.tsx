import { ImageIcon, ZoomIn } from "lucide-react";

type Props = {
  config: any;
};

export default function GalleryBlock({ config }: Props) {
  const images: string[] = config.images ?? [];

  const isUrl = (str: string) =>
    str.startsWith("http://") || str.startsWith("https://") || str.startsWith("data:");

  // Bento grid sizes
  const getSpanClass = (index: number) => {
    const pattern = [
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
    ];
    return pattern[index % pattern.length];
  };

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030308] to-black" />

      <div className="relative">
        <div className="mb-10 text-center">
          {config.eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {config.title ?? "Gallery"}
          </h2>
        </div>

        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 p-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
              <ImageIcon size={28} className="text-white/20" />
            </div>
            <p className="text-sm text-white/40">No images added yet</p>
            <p className="mt-1 text-xs text-white/20">Add image URLs in the property panel</p>
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3">
            {images.map((image: string, index: number) => (
              <div
                key={`${image}-${index}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent ${getSpanClass(index)}`}
              >
                {isUrl(image) ? (
                  <>
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <ZoomIn size={18} className="text-white" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent p-4 text-center transition-all group-hover:from-cyan-500/15">
                    <ImageIcon size={20} className="text-white/20" />
                    <span className="text-xs font-medium text-white/50">{image}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
