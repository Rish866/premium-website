import type { OnboardingData } from "../../types/onboarding";

type Props = {
  data: OnboardingData;
  onChange: (partial: Partial<OnboardingData>) => void;
};

const presetColors = [
  { primary: "#06b6d4", secondary: "#8b5cf6", label: "Cyan & Purple" },
  { primary: "#f59e0b", secondary: "#ef4444", label: "Amber & Red" },
  { primary: "#10b981", secondary: "#3b82f6", label: "Emerald & Blue" },
  { primary: "#ec4899", secondary: "#f97316", label: "Pink & Orange" },
  { primary: "#6366f1", secondary: "#06b6d4", label: "Indigo & Cyan" },
  { primary: "#000000", secondary: "#ffffff", label: "Black & White" },
  { primary: "#1e3a5f", secondary: "#c9a961", label: "Navy & Gold" },
  { primary: "#dc2626", secondary: "#1e1e1e", label: "Red & Dark" },
];

export default function BrandStep({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-semibold">Brand Identity</h2>
      <p className="mb-8 text-white/50">
        Choose your brand colors. You can always change these later in the Theme Studio.
      </p>

      <div className="mb-8">
        <h3 className="mb-4 text-sm font-medium text-white/70">Color Presets</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {presetColors.map((preset) => (
            <button
              key={preset.label}
              onClick={() => onChange({ primaryColor: preset.primary, secondaryColor: preset.secondary })}
              className={`rounded-xl border p-3 text-left transition-all ${
                data.primaryColor === preset.primary && data.secondaryColor === preset.secondary
                  ? "border-cyan-400 bg-cyan-400/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              <div className="mb-2 flex gap-2">
                <div className="h-8 w-8 rounded-lg" style={{ backgroundColor: preset.primary }} />
                <div className="h-8 w-8 rounded-lg" style={{ backgroundColor: preset.secondary }} />
              </div>
              <p className="text-xs text-white/60">{preset.label}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">Primary Color</span>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={data.primaryColor}
              onChange={(e) => onChange({ primaryColor: e.target.value })}
              className="h-10 w-16 cursor-pointer rounded-lg border border-white/10 bg-transparent"
            />
            <input
              value={data.primaryColor}
              onChange={(e) => onChange({ primaryColor: e.target.value })}
              className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">Secondary Color</span>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={data.secondaryColor}
              onChange={(e) => onChange({ secondaryColor: e.target.value })}
              className="h-10 w-16 cursor-pointer rounded-lg border border-white/10 bg-transparent"
            />
            <input
              value={data.secondaryColor}
              onChange={(e) => onChange({ secondaryColor: e.target.value })}
              className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
            />
          </div>
        </label>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-sm font-medium text-white/70">Preview</h3>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="p-6" style={{ background: `linear-gradient(135deg, ${data.primaryColor}22, ${data.secondaryColor}22)` }}>
            <div className="mb-3 h-3 w-32 rounded-full" style={{ backgroundColor: data.primaryColor }} />
            <div className="mb-2 h-6 w-64 rounded-lg bg-white/90" />
            <div className="h-3 w-48 rounded-full bg-white/40" />
            <button className="mt-4 rounded-full px-6 py-2 text-sm font-medium text-white" style={{ backgroundColor: data.primaryColor }}>
              Call to Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
