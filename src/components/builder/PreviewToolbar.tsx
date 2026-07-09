import { Monitor, Smartphone, Tablet, ZoomIn, ZoomOut } from "lucide-react";
import type { PreviewMode, SaveStatus } from "../../types/builder";

type Props = {
  mode: PreviewMode;
  zoom: number;
  status: SaveStatus;
  onModeChange: (mode: PreviewMode) => void;
  onZoomChange: (zoom: number) => void;
};

export default function PreviewToolbar({ mode, zoom, status, onModeChange, onZoomChange }: Props) {
  const devices = [
    { id: "desktop" as const, label: "Desktop", icon: Monitor },
    { id: "tablet" as const, label: "Tablet", icon: Tablet },
    { id: "mobile" as const, label: "Mobile", icon: Smartphone },
  ];

  const statusText =
    status === "saving" ? "Saving..." : status === "saved" ? "Saved" : status === "error" ? "Save failed" : "Ready";

  return (
    <div className="sticky top-0 z-30 mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#101010]/90 px-4 py-3 backdrop-blur-2xl">
      <div>
        <p className="text-sm font-medium text-white">Live Preview</p>
        <p className="text-xs text-white/40">Responsive canvas - {statusText}</p>
      </div>

      <div className="flex items-center gap-3">
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

        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 p-1">
          <button onClick={() => onZoomChange(Math.max(50, zoom - 10))} className="rounded-lg p-2 text-white/50 hover:text-white">
            <ZoomOut size={14} />
          </button>
          <span className="w-12 text-center text-xs text-white/55">{zoom}%</span>
          <button onClick={() => onZoomChange(Math.min(120, zoom + 10))} className="rounded-lg p-2 text-white/50 hover:text-white">
            <ZoomIn size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
