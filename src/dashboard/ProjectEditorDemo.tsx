import { useState } from "react";
import { Eye, FileText, Globe2, ImagePlus, Save, Search, Settings, Sparkles } from "lucide-react";
import { restaurantConfig } from "../engine/data/restaurantConfig";
import WebsiteRenderer from "../engine/renderer/WebsiteRenderer";
import type { WebsiteConfig } from "../engine/types";

export default function ProjectEditorDemo() {
  const [config, setConfig] = useState<WebsiteConfig>(restaurantConfig);

  const updateHero = (key: keyof WebsiteConfig["hero"], value: string) => {
    setConfig({
      ...config,
      hero: {
        ...config.hero,
        [key]: value,
      },
    });
  };

  const updateService = (index: number, value: string) => {
    const nextItems = [...config.services.items];
    nextItems[index] = value;

    setConfig({
      ...config,
      services: {
        ...config.services,
        items: nextItems,
      },
    });
  };

  const addService = () => {
    setConfig({
      ...config,
      services: {
        ...config.services,
        items: [...config.services.items, "New Service"],
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_85%_55%,rgba(168,85,247,.18),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <Sparkles size={16} />
            Project Editor
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Edit website content like a real SaaS builder.
          </h2>

          <p className="mt-5 max-w-2xl text-white/55">
            This is the project editing screen where business owners will update content without touching code.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
                <FileText size={18} />
              </div>
              <div>
                <p className="font-semibold">{config.brand.name}</p>
                <p className="text-xs text-white/45">Restaurant project editor</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 md:flex">
                Preview
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black">
                <Save size={15} />
                Save Draft
              </button>
            </div>
          </div>

          <div className="grid min-h-[760px] lg:grid-cols-[260px_390px_1fr]">
            <aside className="border-b border-white/10 bg-black/25 p-4 lg:border-b-0 lg:border-r">
              {[
                ["Content", FileText],
                ["Media", ImagePlus],
                ["SEO", Search],
                ["Domain", Globe2],
                ["Settings", Settings],
              ].map(([label, Icon]: any) => (
                <button
                  key={label}
                  className="mb-2 flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-left text-sm text-white/65 hover:bg-white/10"
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </aside>

            <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
              <p className="mb-5 text-sm text-cyan-200">Hero Content</p>

              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-xs text-white/45">Eyebrow</span>
                  <input
                    value={config.hero.eyebrow}
                    onChange={(e) => updateHero("eyebrow", e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs text-white/45">Headline</span>
                  <textarea
                    value={config.hero.headline}
                    onChange={(e) => updateHero("headline", e.target.value)}
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs text-white/45">Subheadline</span>
                  <textarea
                    value={config.hero.subheadline}
                    onChange={(e) => updateHero("subheadline", e.target.value)}
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs text-white/45">CTA Button</span>
                  <input
                    value={config.hero.cta}
                    onChange={(e) => updateHero("cta", e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                  />
                </label>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-cyan-200">Services</p>
                <button onClick={addService} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/65">
                  Add
                </button>
              </div>

              <div className="space-y-3">
                {config.services.items.map((service, index) => (
                  <input
                    key={index}
                    value={service}
                    onChange={(e) => updateService(index, e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                  />
                ))}
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4 flex items-center gap-2 text-sm text-white/45">
                <Eye size={16} />
                Live Preview
              </div>

              <div className="max-h-[700px] overflow-auto rounded-[1.5rem] border border-white/10 bg-black">
                <WebsiteRenderer config={config} compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
