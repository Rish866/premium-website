import { Monitor, Smartphone, Tablet } from "lucide-react";

type PreviewMode = "desktop" | "tablet" | "mobile";

type Props = {
  mode: PreviewMode;
  onModeChange: (mode: PreviewMode) => void;
};

export default function PreviewToolbar({ mode, onModeChange }: Props) {
  const items = [
    { id: "desktop" as const, label: "Desktop", icon: Monitor },
    { id: "tablet" as const, label: "Tablet", icon: Tablet },
    { id: "mobile" as const, label: "Mobile", icon: Smartphone },
  ];

  return (
    <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <div>
        <p className="text-sm font-medium text-white">Live Preview</p>
        <p className="text-xs text-white/40">Responsive website preview</p>
      </div>

      <div className="flex rounded-xl border border-white/10 bg-black/40 p-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onModeChange(item.id)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition ${
                mode === item.id
                  ? "bg-white text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Icon size={14} />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
