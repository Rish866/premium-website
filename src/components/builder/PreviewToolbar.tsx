import { useState } from "react";
import { Copy, ExternalLink, Globe2, Monitor, Smartphone, Tablet, ZoomIn, ZoomOut } from "lucide-react";
import { toast } from "sonner";
import { publishProject, unpublishProject } from "../../services/publish/publishService";
import type { PreviewMode, SaveStatus } from "../../types/builder";

type Props = {
  mode: PreviewMode;
  zoom: number;
  status: SaveStatus;
  projectId?: string;
  projectSlug?: string | null;
  published?: boolean;
  onModeChange: (mode: PreviewMode) => void;
  onZoomChange: (zoom: number) => void;
  onPublishChange?: (published: boolean) => void;
};

export default function PreviewToolbar({ mode, zoom, status, projectId, projectSlug, published, onModeChange, onZoomChange, onPublishChange }: Props) {
  const [publishing, setPublishing] = useState(false);

  const devices = [
    { id: "desktop" as const, label: "Desktop", icon: Monitor },
    { id: "tablet" as const, label: "Tablet", icon: Tablet },
    { id: "mobile" as const, label: "Mobile", icon: Smartphone },
  ];

  const statusText =
    status === "saving" ? "Saving..." : status === "saved" ? "Saved" : status === "error" ? "Save failed" : "Ready";

  const publicUrl = projectSlug ? `${window.location.origin}/site/${projectSlug}` : "";

  const handlePublish = async () => {
    if (!projectId) return;
    setPublishing(true);
    try {
      if (published) {
        await unpublishProject(projectId);
        onPublishChange?.(false);
        toast.success("Website unpublished");
      } else {
        await publishProject(projectId);
        onPublishChange?.(true);
        toast.success("Website published!");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setPublishing(false);
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(publicUrl);
    toast.success("URL copied!");
  };

  return (
    <div className="sticky top-0 z-30 mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#101010]/90 px-4 py-3 backdrop-blur-2xl">
      <div>
        <p className="text-sm font-medium text-white">Live Preview</p>
        <p className="text-xs text-white/40">Responsive canvas &middot; {statusText}</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Device Switcher */}
        <div className="flex rounded-xl border border-white/10 bg-black/40 p-1">
          {devices.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onModeChange(item.id)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition ${
                  mode === item.id ? "bg-white text-black" : "text-white/50 hover:text-white"
                }`}
              >
                <Icon size={14} />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Zoom */}
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 p-1">
          <button onClick={() => onZoomChange(Math.max(50, zoom - 10))} className="rounded-lg p-2 text-white/50 hover:text-white">
            <ZoomOut size={14} />
          </button>
          <span className="w-12 text-center text-xs text-white/55">{zoom}%</span>
          <button onClick={() => onZoomChange(Math.min(120, zoom + 10))} className="rounded-lg p-2 text-white/50 hover:text-white">
            <ZoomIn size={14} />
          </button>
        </div>

        {/* Publish Button */}
        {projectId && (
          <div className="flex items-center gap-2">
            {published && publicUrl && (
              <>
                <button onClick={copyUrl} className="rounded-lg p-2 text-white/40 hover:text-cyan-300" title="Copy URL">
                  <Copy size={14} />
                </button>
                <a href={publicUrl} target="_blank" rel="noopener" className="rounded-lg p-2 text-white/40 hover:text-cyan-300" title="Open live site">
                  <ExternalLink size={14} />
                </a>
              </>
            )}
            <button
              onClick={handlePublish}
              disabled={publishing}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition ${
                published
                  ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  : "bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
              }`}
            >
              <Globe2 size={14} />
              {publishing ? "..." : published ? "Live" : "Publish"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
