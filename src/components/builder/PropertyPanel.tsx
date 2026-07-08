import { useEffect, useState } from "react";
import { updateSectionConfig } from "../../services/builder/updateSection";
import { useDebounce } from "../../hooks/useDebounce";

type Props = {
  section: any;
  onLocalChange: (config: any) => void;
};

export default function PropertyPanel({
  section,
  onLocalChange,
}: Props) {
  const [config, setConfig] = useState<any>(section?.config ?? {});

  useEffect(() => {
    setConfig(section?.config ?? {});
  }, [section]);

  useDebounce(
    () => {
      if (!section) return;

      updateSectionConfig(section.id, config).catch(console.error);
    },
    800,
    [config]
  );

  if (!section) {
    return (
      <aside className="w-80 border-l border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-lg font-semibold text-white">Properties</h2>
        <p className="mt-4 text-sm text-white/45">
          Select a block to edit.
        </p>
      </aside>
    );
  }

  const update = (key: string, value: any) => {
    const next = {
      ...config,
      [key]: value,
    };

    setConfig(next);
    onLocalChange(next);
  };

  return (
    <aside className="w-80 overflow-y-auto border-l border-white/10 bg-white/[0.03] p-6">
      <h2 className="mb-6 text-lg font-semibold text-white">
        {section.type.toUpperCase()}
      </h2>

      {"title" in config && (
        <div className="mb-5">
          <label className="mb-2 block text-xs text-white/45">
            Heading
          </label>

          <input
            value={config.title}
            onChange={(e) => update("title", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
          />
        </div>
      )}

      {"subtitle" in config && (
        <div className="mb-5">
          <label className="mb-2 block text-xs text-white/45">
            Subtitle
          </label>

          <textarea
            rows={5}
            value={config.subtitle}
            onChange={(e) => update("subtitle", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
          />
        </div>
      )}

      {"phone" in config && (
        <div className="mb-5">
          <label className="mb-2 block text-xs text-white/45">
            Phone
          </label>

          <input
            value={config.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
          />
        </div>
      )}

      {"email" in config && (
        <div>
          <label className="mb-2 block text-xs text-white/45">
            Email
          </label>

          <input
            value={config.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
          />
        </div>
      )}

      <div className="mt-8 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-xs text-emerald-300">
        ✓ Auto-saving...
      </div>
    </aside>
  );
}
