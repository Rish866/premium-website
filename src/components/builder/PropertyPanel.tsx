import { useEffect, useState } from "react";
import { Code2, Palette, SlidersHorizontal, Type } from "lucide-react";
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
    <label className="mb-5 block">
      <span className="mb-2 block text-xs text-white/45">{label}</span>
      <input value={value ?? ""} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40" />
    </label>
  );
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="mb-5 block">
      <span className="mb-2 block text-xs text-white/45">{label}</span>
      <textarea rows={4} value={value ?? ""} onChange={(e) => onChange(e.target.value)} className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40" />
    </label>
  );
}

function PanelGroup({ title, icon: Icon, children }: any) {
  return (
    <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
        <Icon size={15} className="text-cyan-200" />
        {title}
      </div>
      {children}
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
      <aside className="w-96 border-l border-white/10 bg-white/[0.03] p-6">
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
    <aside className="w-96 overflow-y-auto border-l border-white/10 bg-white/[0.03] p-6">
      <div className="mb-6">
        <p className="text-xs text-cyan-200">INSPECTOR</p>
        <h2 className="mt-1 text-xl font-semibold text-white capitalize">{section.type}</h2>
      </div>

      <PanelGroup title="Content" icon={Type}>
        {"eyebrow" in config && <TextField label="Eyebrow" value={config.eyebrow} onChange={(value) => update("eyebrow", value)} />}
        {"title" in config && <TextField label="Heading" value={config.title} onChange={(value) => update("title", value)} />}
        {"subtitle" in config && <TextArea label="Subtitle" value={config.subtitle} onChange={(value) => update("subtitle", value)} />}
        {"buttonText" in config && <TextField label="Button Text" value={config.buttonText} onChange={(value) => update("buttonText", value)} />}
        {"phone" in config && <TextField label="Phone" value={config.phone} onChange={(value) => update("phone", value)} />}
        {"email" in config && <TextField label="Email" value={config.email} onChange={(value) => update("email", value)} />}
        {Array.isArray(config.items) && typeof config.items[0] === "string" && (
          <TextArea label="Items - one per line" value={config.items.join("\n")} onChange={(value) => updateArrayText("items", value)} />
        )}
        {Array.isArray(config.images) && (
          <TextArea label="Gallery Images - one per line" value={config.images.join("\n")} onChange={(value) => updateArrayText("images", value)} />
        )}
      </PanelGroup>

      <PanelGroup title="Style" icon={Palette}>
        <TextField label="Background" value={config.background ?? ""} onChange={(value) => update("background", value)} />
        <TextField label="Text Color" value={config.textColor ?? ""} onChange={(value) => update("textColor", value)} />
      </PanelGroup>

      <PanelGroup title="Layout" icon={SlidersHorizontal}>
        <TextField label="Padding" value={config.padding ?? ""} onChange={(value) => update("padding", value)} />
        <TextField label="Radius" value={config.radius ?? ""} onChange={(value) => update("radius", value)} />
      </PanelGroup>

      <PanelGroup title="JSON Config" icon={Code2}>
        <textarea rows={10} value={rawJson} onChange={(e) => setRawJson(e.target.value)} className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-xs text-white outline-none focus:border-cyan-300/40" />
        <button onClick={applyRawJson} className="mt-3 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black">Apply JSON</button>
      </PanelGroup>
    </aside>
  );
}
