import { useState } from "react";
import { ImagePlus, Trash2, Upload, Sparkles, Grid3X3, Save } from "lucide-react";

const starterImages = [
  "Hero Banner",
  "Restaurant Interior",
  "Signature Dish",
  "Chef Special",
  "Dining Area",
  "Customer Moment",
];

export default function MediaGalleryDemo() {
  const [images, setImages] = useState(starterImages);
  const [newImage, setNewImage] = useState("");

  const addImage = () => {
    if (!newImage.trim()) return;
    setImages([newImage.trim(), ...images]);
    setNewImage("");
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <ImagePlus size={16} />
            Media & Gallery Manager
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Upload logo, gallery and website visuals from one place.
          </h2>

          <p className="mt-5 max-w-2xl text-white/55">
            This is the media layer for future admin panel. Later these files will be stored in Supabase Storage.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/15 text-cyan-200">
              <Upload size={28} />
            </div>

            <h3 className="text-2xl font-semibold">Add Media Item</h3>
            <p className="mt-2 text-sm text-white/50">
              Current version adds placeholder media names. Actual image upload comes later.
            </p>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Media Name</span>
                <input
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  placeholder="Example: Outdoor Seating"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
                />
              </label>

              <button
                onClick={addImage}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                <ImagePlus size={16} />
                Add to Gallery
              </button>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/35 p-5">
              <p className="mb-4 text-sm text-cyan-200">Coming Next</p>
              <div className="space-y-3 text-sm text-white/55">
                <p>• Logo upload</p>
                <p>• Gallery image upload</p>
                <p>• Image reorder</p>
                <p>• Supabase Storage</p>
                <p>• Auto image optimization</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <Grid3X3 className="text-cyan-200" size={22} />
                  <h3 className="text-2xl font-semibold">Project Gallery</h3>
                </div>
                <p className="mt-1 text-sm text-white/45">{images.length} media items</p>
              </div>

              <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/65">
                <Save size={16} />
                Save Media
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {images.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30"
                >
                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-cyan-400/20 via-purple-500/10 to-white/[0.04]">
                    <Sparkles className="text-cyan-200/70" size={32} />
                  </div>

                  <div className="flex items-center justify-between gap-3 p-4">
                    <div>
                      <p className="font-medium">{image}</p>
                      <p className="mt-1 text-xs text-white/40">Gallery asset</p>
                    </div>

                    <button
                      onClick={() => removeImage(index)}
                      className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/45 transition hover:border-red-300/30 hover:text-red-300"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-5">
              <p className="text-sm text-cyan-200">Future JSON Output</p>
              <pre className="mt-4 max-h-[220px] overflow-auto rounded-2xl bg-black/35 p-4 text-xs leading-6 text-white/55">
{JSON.stringify({ gallery: images }, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
