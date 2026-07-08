import { useState } from "react";
import type { WebsiteConfig } from "../types";
import { restaurantConfig } from "../data/restaurantConfig";
import { clinicConfig } from "../data/clinicConfig";
import { gymConfig } from "../data/gymConfig";
import { transportConfig } from "../data/transportConfig";
import WebsiteRenderer from "./WebsiteRenderer";

const configs: WebsiteConfig[] = [
  restaurantConfig,
  clinicConfig,
  gymConfig,
  transportConfig,
];

export default function WebsiteEngineDemo() {
  const [activeId, setActiveId] = useState(configs[0].id);
  const activeConfig = configs.find((item) => item.id === activeId) ?? configs[0];

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_85%_50%,rgba(168,85,247,.18),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            Multi Industry JSON Engine
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Same renderer. Different businesses. Complete website output.
          </h2>

          <p className="mt-5 max-w-2xl text-white/55">
            This is the first real AgencyOS engine structure. We are no longer hardcoding one landing page.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {configs.map((config) => (
            <button
              key={config.id}
              onClick={() => setActiveId(config.id)}
              className={`rounded-full border px-5 py-3 text-sm transition ${
                activeId === config.id
                  ? "border-cyan-300/40 bg-cyan-400/15 text-cyan-100"
                  : "border-white/10 bg-white/[0.04] text-white/60 hover:bg-white/10"
              }`}
            >
              {config.industry}
            </button>
          ))}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 backdrop-blur-2xl">
          <WebsiteRenderer config={activeConfig} compact />
        </div>
      </div>
    </section>
  );
}
