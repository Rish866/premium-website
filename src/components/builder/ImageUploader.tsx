import { useCallback, useState } from "react";
import { Loader2, Upload, X } from "lucide-react";
import { uploadFile } from "../../services/storage/storageService";

type Props = {
  images: string[];
  onChange: (images: string[]) => void;
  maxImages?: number;
  label?: string;
};

export default function ImageUploader({ images, onChange, maxImages = 10, label = "Images" }: Props) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = useCallback(async (files: FileList | File[]) => {
    const fileArray = Array.from(files).filter((f) =>
      f.type.startsWith("image/")
    );

    if (fileArray.length === 0) return;

    setUploading(true);
    try {
      const urls: string[] = [];
      for (const file of fileArray) {
        const url = await uploadFile(file);
        urls.push(url);
      }
      onChange([...images, ...urls].slice(0, maxImages));
    } catch (err: any) {
      alert("Upload failed: " + (err.message || "Unknown error"));
    } finally {
      setUploading(false);
    }
  }, [images, onChange, maxImages]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div>
      <p className="mb-3 text-xs font-medium text-white/50">{label}</p>

      {/* Image Grid */}
      {images.length > 0 && (
        <div className="mb-3 grid grid-cols-3 gap-2">
          {images.map((url, index) => {
            const isUrl = url.startsWith("http") || url.startsWith("data:");
            return (
              <div key={`${url}-${index}`} className="group relative aspect-square overflow-hidden rounded-xl border border-white/10">
                {isUrl ? (
                  <img src={url} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center bg-white/5 p-2 text-center">
                    <span className="text-[9px] text-white/40">{url}</span>
                  </div>
                )}
                <button
                  onClick={() => removeImage(index)}
                  className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-red-300 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <X size={10} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Drop Zone */}
      {images.length < maxImages && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition-all ${
            dragOver
              ? "border-cyan-400 bg-cyan-400/10"
              : "border-white/10 bg-white/[0.02] hover:border-white/20"
          }`}
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 size={24} className="animate-spin text-cyan-300" />
              <p className="text-xs text-white/50">Uploading...</p>
            </div>
          ) : (
            <>
              <Upload size={20} className="mb-2 text-white/30" />
              <p className="text-xs font-medium text-white/50">
                Drag & drop images here
              </p>
              <p className="mt-1 text-[10px] text-white/30">
                or click to browse
              </p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileInput}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
            </>
          )}
        </div>
      )}

      <p className="mt-2 text-[10px] text-white/25">
        {images.length}/{maxImages} images &middot; JPG, PNG, WebP supported
      </p>
    </div>
  );
}
