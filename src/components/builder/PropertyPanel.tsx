import { useEffect, useState } from "react";
import { Code2, ImageIcon, Palette, SlidersHorizontal, Type } from "lucide-react";
import { updateSectionConfig } from "../../services/builder/updateSection";
import { useDebounce } from "../../hooks/useDebounce";
import type { BuilderSection, SaveStatus } from "../../types/builder";

type Props = {
  section: BuilderSection | undefined;
  onLocalChange: (config: any) => void;
  onStatusChange?: (status: SaveStatus) => void;
};

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="mb-4 block">
      <span className="mb-1.5 block text-xs text-white/45">{label}</span>
      <input value={value ?? ""} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-300/40" />
    </label>
  );
}

function TextArea({ label, value, onChange, rows = 3 }: { label: string; value: string; onChange: (value: string) => void; rows?: number }) {
  return (
    <label className="mb-4 block">
      <span className="mb-1.5 block text-xs text-white/45">{label}</span>
      <textarea rows={rows} value={value ?? ""} onChange={(e) => onChange(e.target.value)} className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-300/40" />
    </label>
  );
}

function PanelGroup({ title, icon: Icon, children, defaultOpen = true }: any) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-4 rounded-2xl border border-white/10 bg-white/[0.035]">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between p-4 text-sm font-semibold text-white">
        <div className="flex items-center gap-2">
          <Icon size={14} className="text-cyan-200" />
          {title}
        </div>
        <span className="text-white/40">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

export default function PropertyPanel({ section, onLocalChange, onStatusChange }: Props) {
  const [config, setConfig] = useState<any>(section?.config ?? {});
  const [rawJson, setRawJson] = useState("");

  useEffect(() => {
    const next = section?.config ?? {};
    setConfig(next);
    setRawJson(JSON.stringify(next, null, 2));
  }, [section]);

  useDebounce(
    () => {
      if (!section) return;
      onStatusChange?.("saving");
      updateSectionConfig(section.id, config)
        .then(() => onStatusChange?.("saved"))
        .catch(() => onStatusChange?.("error"));
    },
    800,
    [config]
  );

  if (!section) {
    return (
      <aside className="w-80 border-l border-white/10 bg-white/[0.03] p-5 lg:w-96">
        <h2 className="text-lg font-semibold text-white">Properties</h2>
        <p className="mt-4 text-sm text-white/45">Select a block to edit.</p>
      </aside>
    );
  }

  const update = (key: string, value: any) => {
    const next = { ...config, [key]: value };
    setConfig(next);
    setRawJson(JSON.stringify(next, null, 2));
    onLocalChange(next);
  };

  const updateArrayText = (key: string, value: string) => {
    const next = value.split("\n").map((x) => x.trim()).filter(Boolean);
    update(key, next);
  };

  const applyRawJson = () => {
    try {
      const parsed = JSON.parse(rawJson);
      setConfig(parsed);
      onLocalChange(parsed);
    } catch {
      alert("Invalid JSON");
    }
  };

  return (
    <aside className="w-80 overflow-y-auto border-l border-white/10 bg-white/[0.03] p-4 lg:w-96 lg:p-5">
      <div className="mb-5">
        <p className="text-[10px] font-medium uppercase tracking-wider text-cyan-200">Inspector</p>
        <h2 className="mt-1 text-lg font-semibold capitalize text-white">{section.type}</h2>
      </div>

      {/* Content Group */}
      <PanelGroup title="Content" icon={Type}>
        {"eyebrow" in config && <TextField label="Eyebrow" value={config.eyebrow} onChange={(v) => update("eyebrow", v)} />}
        {"title" in config && <TextField label="Heading" value={config.title} onChange={(v) => update("title", v)} />}
        {"subtitle" in config && <TextArea label="Subtitle" value={config.subtitle} onChange={(v) => update("subtitle", v)} />}
        {"description" in config && <TextArea label="Description" value={config.description} onChange={(v) => update("description", v)} />}
        {"buttonText" in config && <TextField label="Button Text" value={config.buttonText} onChange={(v) => update("buttonText", v)} />}
        {"phone" in config && <TextField label="Phone" value={config.phone} onChange={(v) => update("phone", v)} />}
        {"email" in config && <TextField label="Email" value={config.email} onChange={(v) => update("email", v)} />}
        {"whatsapp" in config && <TextField label="WhatsApp" value={config.whatsapp} onChange={(v) => update("whatsapp", v)} />}
        {"address" in config && <TextField label="Address" value={config.address} onChange={(v) => update("address", v)} />}
        {"openingHours" in config && <TextField label="Opening Hours" value={config.openingHours} onChange={(v) => update("openingHours", v)} />}
        {Array.isArray(config.items) && typeof config.items[0] === "string" && (
          <TextArea label="Items (one per line)" value={config.items.join("\n")} onChange={(v) => updateArrayText("items", v)} rows={5} />
        )}
      </PanelGroup>

      {/* Images Group - for gallery blocks */}
      {Array.isArray(config.images) && (
        <PanelGroup title="Images" icon={ImageIcon}>
          <p className="mb-3 text-xs text-white/40">
            Add image URLs (one per line). Supports https:// links. Text entries show as placeholders.
          </p>
          <TextArea
            label="Image URLs / Labels"
            value={config.images.join("\n")}
            onChange={(v) => updateArrayText("images", v)}
            rows={6}
          />
          <div className="mt-2 rounded-xl border border-white/10 bg-black/30 p-3">
            <p className="mb-2 text-[10px] font-medium text-white/50">Quick Add:</p>
            <div className="space-y-1.5">
              <button
                onClick={() => {
                  const url = prompt("Paste image URL:");
                  if (url) update("images", [...(config.images ?? []), url]);
                }}
                className="w-full rounded-lg border border-dashed border-cyan-300/30 bg-cyan-400/5 py-2 text-xs text-cyan-200 hover:bg-cyan-400/10"
              >
                + Add Image URL
              </button>
            </div>
          </div>
        </PanelGroup>
      )}

      {/* Style Group */}
      <PanelGroup title="Style" icon={Palette} defaultOpen={false}>
        <TextField label="Background (CSS)" value={config.background ?? ""} onChange={(v) => update("background", v)} />
        <TextField label="Text Color" value={config.textColor ?? ""} onChange={(v) => update("textColor", v)} />
      </PanelGroup>

      {/* Layout Group */}
      <PanelGroup title="Layout" icon={SlidersHorizontal} defaultOpen={false}>
        <TextField label="Padding (compact/normal/large)" value={config.padding ?? ""} onChange={(v) => update("padding", v)} />
      </PanelGroup>

      {/* JSON Group */}
      <PanelGroup title="JSON Config" icon={Code2} defaultOpen={false}>
        <textarea rows={8} value={rawJson} onChange={(e) => setRawJson(e.target.value)} className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2 font-mono text-[10px] text-white outline-none focus:border-cyan-300/40" />
        <button onClick={applyRawJson} className="mt-2 w-full rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black">
          Apply JSON
        </button>
      </PanelGroup>
    </aside>
  );
}
