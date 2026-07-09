import { useCallback, useEffect, useState } from "react";
import { Copy, ImageIcon, Loader2, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";
import {
  deleteFile,
  listFiles,
  uploadFile,
  type StorageFile,
} from "../../services/storage/storageService";

export default function MediaLibraryPage() {
  const [files, setFiles] = useState<StorageFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const loadFiles = async () => {
    try {
      setLoading(true);
      const data = await listFiles();
      setFiles(data);
    } catch (err: any) {
      toast.error(err.message || "Failed to load files");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const handleUpload = useCallback(async (fileList: FileList | File[]) => {
    const imageFiles = Array.from(fileList).filter((f) =>
      f.type.startsWith("image/")
    );
    if (imageFiles.length === 0) return;

    setUploading(true);
    try {
      for (const file of imageFiles) {
        await uploadFile(file);
      }
      toast.success(`${imageFiles.length} image(s) uploaded!`);
      await loadFiles();
    } catch (err: any) {
      toast.error(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      handleUpload(e.dataTransfer.files);
    }
  }, [handleUpload]);

  const handleDelete = async (file: StorageFile) => {
    if (!confirm(`Delete ${file.name}?`)) return;
    try {
      await deleteFile(file.path);
      setFiles(files.filter((f) => f.path !== file.path));
      toast.success("File deleted");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard!");
  };

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-semibold">Media Library</h1>
          <p className="mt-2 text-white/50">
            Upload and manage images for your websites.
          </p>
        </div>
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black">
          <Upload size={16} />
          Upload Images
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && handleUpload(e.target.files)}
          />
        </label>
      </div>

      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        className={`mb-8 flex flex-col items-center justify-center rounded-[2rem] border-2 border-dashed p-12 text-center transition-all ${
          dragOver
            ? "border-cyan-400 bg-cyan-400/5"
            : "border-white/10 bg-white/[0.02]"
        }`}
      >
        {uploading ? (
          <div className="flex items-center gap-3">
            <Loader2 size={24} className="animate-spin text-cyan-300" />
            <p className="text-sm text-white/50">Uploading...</p>
          </div>
        ) : (
          <>
            <Upload size={32} className="mb-3 text-white/20" />
            <p className="text-sm font-medium text-white/50">
              Drag & drop images here to upload
            </p>
            <p className="mt-1 text-xs text-white/30">
              Supports JPG, PNG, WebP, GIF &middot; Max 5MB each
            </p>
          </>
        )}
      </div>

      {/* Files Grid */}
      {loading ? (
        <div className="flex items-center justify-center p-12">
          <Loader2 className="animate-spin text-cyan-200" size={24} />
        </div>
      ) : files.length === 0 ? (
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-12 text-center">
          <ImageIcon className="mx-auto mb-4 text-white/20" size={40} />
          <p className="text-lg font-medium text-white/60">No images yet</p>
          <p className="mt-2 text-sm text-white/30">
            Upload images to use them in your websites.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {files.map((file) => (
            <div
              key={file.path}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-all hover:border-cyan-300/20"
            >
              {/* Image Preview */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={file.url}
                  alt={file.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    onClick={() => copyUrl(file.url)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30"
                    title="Copy URL"
                  >
                    <Copy size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(file)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/30 text-red-200 backdrop-blur-sm transition hover:bg-red-500/50"
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              {/* File Info */}
              <div className="p-3">
                <p className="truncate text-xs font-medium text-white/70">
                  {file.name}
                </p>
                <p className="mt-1 text-[10px] text-white/30">
                  {file.size ? `${(file.size / 1024).toFixed(0)} KB` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
