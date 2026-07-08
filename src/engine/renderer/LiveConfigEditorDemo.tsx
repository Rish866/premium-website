import { useState } from "react";
import { clinicConfig } from "../data/clinicConfig";
import WebsiteRenderer from "./WebsiteRenderer";
import type { WebsiteConfig } from "../types";

export default function LiveConfigEditorDemo() {
  const [config, setConfig] = useState<WebsiteConfig>(clinicConfig);

  const updateBrand = (key: keyof WebsiteConfig["brand"], value: string) => {
    setConfig({
      ...config,
      brand: {
        ...config.brand,
        [key]: value,
      },
    });
  };

  const updateHero = (key: keyof WebsiteConfig["hero"], value: string) => {
    setConfig({
      ...config,
      hero: {
        ...config.hero,
        [key]: value,
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            Live JSON Editor
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Edit business data. Website updates live.
          </h2>

          <p className="mt-5 max-w-2xl text-white/55">
            This is the first admin-style editor for AgencyOS. Later this will connect to Supabase.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[390px_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
            <p className="mb-5 text-sm text-cyan-200">Business Details</p>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Brand Name</span>
                <input
                  value={config.brand.name}
                  onChange={(e) => updateBrand("name", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Tagline</span>
                <input
                  value={config.brand.tagline}
                  onChange={(e) => updateBrand("tagline", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Phone</span>
                <input
                  value={config.brand.phone}
                  onChange={(e) => updateBrand("phone", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>
            </div>

            <div className="my-6 h-px bg-white/10" />

            <p className="mb-5 text-sm text-cyan-200">Hero Section</p>

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
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-white/45">CTA</span>
                <input
                  value={config.hero.cta}
                  onChange={(e) => updateHero("cta", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 backdrop-blur-2xl">
            <WebsiteRenderer config={config} compact />
          </div>
        </div>
      </div>
    </section>
  );
}
