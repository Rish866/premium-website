import { useState } from "react";
import { ArrowRight, Monitor, Smartphone } from "lucide-react";
import { templates } from "./data";

export default function InteractiveTemplateShowcase() {
  const [active, setActive] = useState(templates[0]);

  return (
    <section id="templates" className="px-6 py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Live Template Switcher
          </p>

          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
            Show clients their website before you build it.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Switch between industries and instantly preview how AgencyOS can
            generate premium websites for local businesses.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <div className="grid gap-4">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setActive(template)}
                className={`rounded-[2rem] border p-6 text-left transition ${
                  active.id === template.id
                    ? "border-cyan-300/50 bg-white/[0.1]"
                    : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                }`}
              >
                <p className="text-sm font-black text-white/35">
                  0{template.id}
                </p>
                <h3 className="mt-3 text-2xl font-black">{template.name}</h3>
                <p className="mt-2 text-sm text-white/50">{template.subtitle}</p>
              </button>
            ))}
          </div>

          <div className="relative min-h-[650px] rounded-[3rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
            <div className="absolute right-10 top-10 z-20 rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm font-black backdrop-blur-xl">
              Live Preview
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#090d1a] shadow-2xl">
              <div className="flex h-14 items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 rounded-full bg-white/10 px-4 py-1 text-xs text-white/50">
                  {active.name.toLowerCase()}website.in
                </div>
              </div>

              <div className={`min-h-[520px] bg-gradient-to-br ${active.color} p-10`}>
                <div className="max-w-xl pt-28">
                  <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-white/70">
                    {active.name} Website
                  </p>

                  <h3 className="text-6xl font-black leading-[0.9] tracking-[-0.07em]">
                    {active.title}
                  </h3>

                  <p className="mt-6 max-w-md text-lg text-white/75">
                    {active.subtitle}. Fully responsive, SEO ready, WhatsApp
                    connected and built for conversion.
                  </p>

                  <button
                    onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                    className="mt-8 rounded-full bg-white px-7 py-4 font-black text-black"
                  >
                    Enquire Now
                    <ArrowRight className="ml-2 inline h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 hidden w-64 rounded-[2rem] border border-white/10 bg-black/60 p-4 backdrop-blur-2xl md:block">
              <div className="mb-4 flex items-center gap-2 text-sm font-black">
                <Smartphone className="h-4 w-4 text-cyan-300" />
                Mobile Preview
              </div>

              <div className={`rounded-[1.5rem] bg-gradient-to-br ${active.color} p-5`}>
                <p className="text-xs font-black text-white/70">{active.name}</p>
                <h4 className="mt-10 text-2xl font-black leading-none">
                  {active.title}
                </h4>
                <div className="mt-8 h-3 w-20 rounded-full bg-white/40" />
                <div className="mt-3 h-3 w-32 rounded-full bg-white/25" />
              </div>
            </div>

            <div className="absolute bottom-10 left-10 rounded-[2rem] border border-white/10 bg-black/50 p-5 backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <Monitor className="text-cyan-300" />
                <div>
                  <strong>Desktop + Mobile Ready</strong>
                  <p className="text-xs text-white/45">
                    Same content. Different industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
