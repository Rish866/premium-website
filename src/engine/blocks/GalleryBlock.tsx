import { motion } from "framer-motion";
import { ImageIcon, ZoomIn } from "lucide-react";

type Props = {
  config: any;
};

export default function GalleryBlock({ config }: Props) {
  const images: string[] = config.images ?? [];

  const isUrl = (str: string) =>
    str.startsWith("http://") || str.startsWith("https://") || str.startsWith("data:");

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#030306]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {config.eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {config.title ?? "Gallery"}
          </h2>
        </motion.div>

        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 p-20 text-center">
            <ImageIcon size={40} className="mb-4 text-white/15" />
            <p className="text-sm text-white/30">No images added yet</p>
          </div>
        ) : (
          <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[250px] sm:grid-cols-3 lg:auto-rows-[280px]">
            {images.map((image: string, index: number) => {
              // Make first and every 5th item span 2 rows
              const isLarge = index === 0 || index % 5 === 0;
              return (
                <motion.div
                  key={`${image}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] ${isLarge ? "row-span-2" : ""}`}
                >
                  {isUrl(image) ? (
                    <>
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                          <ZoomIn size={20} className="text-white" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-cyan-500/8 via-purple-500/5 to-transparent p-6 text-center">
                      <ImageIcon size={28} className="mb-3 text-white/15" />
                      <span className="text-xs font-medium text-white/40">{image}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
