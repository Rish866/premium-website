import { motion } from "framer-motion";
import { Activity, BarChart3, Globe2, Layers3, Palette, Zap } from "lucide-react";

const stats = [
  ["18", "Industries"],
  ["42", "Sections"],
  ["100", "Lighthouse-ready"],
  ["1-click", "Publish"],
];

const rows = [
  ["Industry", "Restaurant", "Live preview active"],
  ["Theme", "Cyan / Purple", "Synced globally"],
  ["Layout", "Premium SaaS", "Reusable"],
  ["SEO", "Enabled", "Auto generated"],
];

export default function BuilderDashboardPreview() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,.18),transparent_32%),radial-gradient(circle_at_80%_50%,rgba(34,211,238,.16),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <Zap size={16} />
            Builder Control Center
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            One dashboard to generate every business website.
          </h2>

          <p className="mt-5 text-lg text-white/60">
            This becomes the future SaaS admin where users change industry, colors, content, pricing, SEO and publish instantly.
          </p>
        </div>

        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl"
        >
          <div className="grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/70 lg:grid-cols-[280px_1fr]">
            <aside className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
                  <Layers3 size={22} />
                </div>
                <div>
                  <p className="font-semibold">AgencyOS</p>
                  <p className="text-xs text-white/45">Website Builder</p>
                </div>
              </div>

              {[
                ["Overview", Activity],
                ["Brand", Palette],
                ["Pages", Layers3],
                ["Analytics", BarChart3],
                ["Publish", Globe2],
              ].map(([label, Icon]: any) => (
                <div
                  key={label}
                  className="mb-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70"
                >
                  <Icon size={16} />
                  {label}
                </div>
              ))}
            </aside>

            <main className="p-5">
              <div className="mb-5 grid gap-4 md:grid-cols-4">
                {stats.map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-3xl font-semibold">{value}</p>
                    <p className="mt-1 text-xs text-white/45">{label}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Live Website Configuration</h3>
                      <p className="text-sm text-white/45">JSON driven preview settings</p>
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      Synced
                    </span>
                  </div>

                  <div className="space-y-3">
                    {rows.map(([a, b, c]) => (
                      <div key={a} className="grid grid-cols-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm">
                        <span className="text-white/45">{a}</span>
                        <span>{b}</span>
                        <span className="text-cyan-200">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/15 via-purple-500/10 to-white/[0.04] p-5">
                  <p className="text-sm text-cyan-200">Preview Score</p>
                  <p className="mt-2 text-6xl font-semibold">98%</p>
                  <p className="mt-3 text-sm text-white/55">
                    Performance, mobile layout, SEO basics and conversion blocks are ready for launch.
                  </p>

                  <div className="mt-8 space-y-3">
                    {["Hero CTA", "WhatsApp Button", "Pricing Blocks", "SEO Metadata"].map((item) => (
                      <div key={item} className="rounded-2xl bg-black/25 px-4 py-3 text-sm text-white/70">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
