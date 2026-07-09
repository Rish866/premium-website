import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Layout,
  Palette,
  Plus,
  Save,
  Sparkles,
  Trash2,
  Type,
} from "lucide-react";
import { updateSectionConfig } from "../../services/builder/updateSection";
import { useDebounce } from "../../hooks/useDebounce";

type Props = {
  section: any;
  onLocalChange: (config: any) => void;
};

function PanelGroup({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 rounded-2xl border border-white/10 bg-black/25 p-4">
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
        {icon}
        {title}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-white/45">{label}</span>
      <input
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-white/45">{label}</span>
      <textarea
        rows={4}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
      />
    </label>
  );
}

export default function PropertyPanel({ section, onLocalChange }: Props) {
  const [config, setConfig] = useState<any>(section?.config ?? {});
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");

  useEffect(() => {
    setConfig(section?.config ?? {});
    setSaveStatus("idle");
  }, [section?.id]);

  useDebounce(
    () => {
      if (!section || saveStatus !== "saving") return;

      updateSectionConfig(section.id, config)
        .then(() => setSaveStatus("saved"))
        .catch((error) => {
          console.error(error);
          setSaveStatus("idle");
        });
    },
    800,
    [config]
  );

  if (!section) {
    return (
      <aside className="w-96 border-l border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-lg font-semibold text-white">Inspector</h2>
        <p className="mt-4 text-sm text-white/45">Select a block to edit its content and style.</p>
      </aside>
    );
  }

  const update = (key: string, value: any) => {
    const next = { ...config, [key]: value };
    setConfig(next);
    setSaveStatus("saving");
    onLocalChange(next);
  };

  const updateArrayItem = (key: string, index: number, value: string) => {
    const nextArray = [...(config[key] ?? [])];
    nextArray[index] = value;
    update(key, nextArray);
  };

  const addArrayItem = (key: string, value: string) => {
    update(key, [...(config[key] ?? []), value]);
  };

  const removeArrayItem = (key: string, index: number) => {
    update(
      key,
      (config[key] ?? []).filter((_: any, itemIndex: number) => itemIndex !== index)
    );
  };

  return (
    <aside className="w-96 overflow-y-auto border-l border-white/10 bg-white/[0.03] p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">Inspector</p>
          <h2 className="mt-1 text-xl font-semibold capitalize text-white">{section.type}</h2>
        </div>

        <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-white/50">
          {saveStatus === "saving" && (
            <span className="inline-flex items-center gap-1 text-yellow-300">
              <Clock size={12} /> Saving
            </span>
          )}
          {saveStatus === "saved" && (
            <span className="inline-flex items-center gap-1 text-emerald-300">
              <CheckCircle2 size={12} /> Saved
            </span>
          )}
          {saveStatus === "idle" && (
            <span className="inline-flex items-center gap-1 text-white/45">
              <Save size={12} /> Ready
            </span>
          )}
        </div>
      </div>

      <PanelGroup title="Content" icon={<Type size={14} />}>
        {"eyebrow" in config && <TextInput label="Eyebrow" value={config.eyebrow} onChange={(value) => update("eyebrow", value)} />}
        {"title" in config && <TextInput label="Heading" value={config.title} onChange={(value) => update("title", value)} />}
        {"subtitle" in config && <TextArea label="Subtitle" value={config.subtitle} onChange={(value) => update("subtitle", value)} />}
        {"buttonText" in config && <TextInput label="Button Text" value={config.buttonText} onChange={(value) => update("buttonText", value)} />}
        {"phone" in config && <TextInput label="Phone" value={config.phone} onChange={(value) => update("phone", value)} />}
        {"email" in config && <TextInput label="Email" value={config.email} onChange={(value) => update("email", value)} />}
      </PanelGroup>

      {Array.isArray(config.items) && typeof config.items[0] === "string" && (
        <PanelGroup title="List Items" icon={<Sparkles size={14} />}>
          {config.items.map((item: string, index: number) => (
            <div key={`${item}-${index}`} className="flex gap-2">
              <input
                value={item}
                onChange={(e) => updateArrayItem("items", index, e.target.value)}
                className="flex-1 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/50"
              />
              <button
                onClick={() => removeArrayItem("items", index)}
                className="rounded-xl border border-red-300/20 bg-red-400/10 p-3 text-red-200"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
          <button
            onClick={() => addArrayItem("items", "New item")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/65 hover:bg-white/10"
          >
            <Plus size={15} /> Add Item
          </button>
        </PanelGroup>
      )}

      {Array.isArray(config.images) && (
        <PanelGroup title="Gallery Images" icon={<Sparkles size={14} />}>
          {config.images.map((item: string, index: number) => (
            <div key={`${item}-${index}`} className="flex gap-2">
              <input
                value={item}
                onChange={(e) => updateArrayItem("images", index, e.target.value)}
                className="flex-1 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/50"
              />
              <button
                onClick={() => removeArrayItem("images", index)}
                className="rounded-xl border border-red-300/20 bg-red-400/10 p-3 text-red-200"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
          <button
            onClick={() => addArrayItem("images", "New image")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/65 hover:bg-white/10"
          >
            <Plus size={15} /> Add Image
          </button>
        </PanelGroup>
      )}

      <PanelGroup title="Style" icon={<Palette size={14} />}>
        <TextInput
          label="Background CSS"
          value={config.background ?? ""}
          onChange={(value) => update("background", value)}
        />

        <label className="block">
          <span className="mb-2 block text-xs text-white/45">Padding</span>
          <select
            value={config.padding ?? "normal"}
            onChange={(e) => update("padding", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/50"
          >
            <option value="compact" className="bg-black">Compact</option>
            <option value="normal" className="bg-black">Normal</option>
            <option value="large" className="bg-black">Large</option>
          </select>
        </label>
      </PanelGroup>

      <PanelGroup title="Layout" icon={<Layout size={14} />}>
        <div className="rounded-xl border border-white/10 bg-black/35 p-4 text-sm text-white/45">
          More layout controls like width, margin, gap, radius and shadow will plug in here.
        </div>
      </PanelGroup>
    </aside>
  );
}
