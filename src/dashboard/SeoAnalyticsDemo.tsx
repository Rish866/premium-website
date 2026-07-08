import { useState } from "react";
import { BarChart3, CheckCircle2, Code2, Globe2, Search, Share2 } from "lucide-react";

export default function SeoAnalyticsDemo() {
  const [seo, setSeo] = useState({
    title: "Urban Spice | Premium Restaurant in Navi Mumbai",
    description: "Book tables, explore menu, view offers and contact Urban Spice instantly on WhatsApp.",
    keywords: "restaurant, fine dining, navi mumbai, table booking",
    googleAnalytics: "G-AGENCYOS123",
  });

  const updateSeo = (key: keyof typeof seo, value: string) => {
    setSeo({
      ...seo,
      [key]: value,
    });
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <Search size={16} />
            SEO & Analytics Center
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Every generated website needs SEO, tracking and share previews.
          </h2>

          <p className="mt-5 max-w-2xl text-white/55">
            This becomes the settings layer for Google search, social sharing, analytics and performance readiness.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
            <p className="mb-5 text-sm text-cyan-200">SEO Settings</p>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Meta Title</span>
                <input
                  value={seo.title}
                  onChange={(e) => updateSeo("title", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Meta Description</span>
                <textarea
                  value={seo.description}
                  onChange={(e) => updateSeo("description", e.target.value)}
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Keywords</span>
                <input
                  value={seo.keywords}
                  onChange={(e) => updateSeo("keywords", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Google Analytics ID</span>
                <input
                  value={seo.googleAnalytics}
                  onChange={(e) => updateSeo("googleAnalytics", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
              <div className="mb-5 flex items-center gap-3">
                <Globe2 className="text-cyan-200" size={22} />
                <h3 className="text-2xl font-semibold">Google Preview</h3>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm text-emerald-300">https://urbanspice.agencyos.site</p>
                <p className="mt-2 text-xl text-blue-300">{seo.title}</p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/55">{seo.description}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <Share2 className="text-cyan-200" size={22} />
                  <h3 className="text-2xl font-semibold">Social Preview</h3>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
                  <div className="h-40 bg-gradient-to-br from-cyan-400/25 via-purple-500/15 to-white/5" />
                  <div className="p-5">
                    <p className="font-semibold">{seo.title}</p>
                    <p className="mt-2 text-sm text-white/50">{seo.description}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <BarChart3 className="text-cyan-200" size={22} />
                  <h3 className="text-2xl font-semibold">Readiness</h3>
                </div>

                <div className="space-y-3">
                  {[
                    "Meta title added",
                    "Description added",
                    "Keywords configured",
                    "Analytics ready",
                    "Open Graph preview ready",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                      <CheckCircle2 size={18} className="text-emerald-300" />
                      <span className="text-sm text-white/65">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 via-purple-500/10 to-white/[0.045] p-6 backdrop-blur-2xl">
              <div className="mb-5 flex items-center gap-3">
                <Code2 className="text-cyan-200" size={22} />
                <h3 className="text-2xl font-semibold">Future Output</h3>
              </div>

              <pre className="overflow-auto rounded-2xl border border-white/10 bg-black/45 p-5 text-xs leading-6 text-white/60">
{`{
  "seo": {
    "title": "${seo.title}",
    "description": "${seo.description}",
    "keywords": "${seo.keywords}",
    "analytics": "${seo.googleAnalytics}"
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

