import { useState } from "react";
import { templateOptions, templateRegistry } from "../templates/templateRegistry";
import WebsiteRenderer from "./WebsiteRenderer";

export default function TemplateRegistryDemo() {
  const [activeTemplate, setActiveTemplate] = useState("restaurant");
  const config = templateRegistry[activeTemplate];

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            Template Registry
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Central template system for future SaaS projects.
          </h2>

          <p className="mt-5 max-w-2xl text-white/55">
            Every industry template is now registered from one place. Later admin, dashboard and publish system will use this registry.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl">
            <p className="mb-5 text-sm text-cyan-200">Available Templates</p>

            <div className="space-y-3">
              {templateOptions.map((template) => (
                <button
                  key={template.key}
                  onClick={() => setActiveTemplate(template.key)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    activeTemplate === template.key
                      ? "border-cyan-300/40 bg-cyan-400/15"
                      : "border-white/10 bg-black/30 hover:bg-white/10"
                  }`}
                >
                  <p className="font-medium">{template.label}</p>
                  <p className="mt-1 text-xs text-white/45">{template.description}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="mb-3 text-xs text-cyan-200">Registry Key</p>
              <p className="font-mono text-sm text-white/60">{activeTemplate}</p>
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
