import { useState } from "react";
import { CheckCircle2, Copy, Globe2, Rocket, ShieldCheck, Sparkles, Zap } from "lucide-react";

const checks = [
  "Website content complete",
  "Mobile layout ready",
  "SEO basics generated",
  "WhatsApp CTA connected",
  "Performance optimized",
];

export default function PublishCenterDemo() {
  const [published, setPublished] = useState(false);

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <Rocket size={16} />
            Publish Center
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            One-click publishing flow for generated websites.
          </h2>

          <p className="mt-5 max-w-2xl text-white/55">
            This is the future launch screen where users publish to subdomain, connect domain and track website readiness.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Urban Spice Website</h3>
                <p className="mt-1 text-sm text-white/45">restaurant project / production build</p>
              </div>

              <span className={`rounded-full px-4 py-2 text-xs ${
                published ? "bg-emerald-400/10 text-emerald-300" : "bg-yellow-400/10 text-yellow-300"
              }`}>
                {published ? "Published" : "Draft"}
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Build Score", "98%", Zap],
                ["Security", "SSL Ready", ShieldCheck],
                ["Domain", published ? "Live" : "Pending", Globe2],
              ].map(([label, value, Icon]: any) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-black/30 p-5">
                  <Icon className="mb-6 text-cyan-200" size={24} />
                  <p className="text-sm text-white/45">{label}</p>
                  <p className="mt-2 text-2xl font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="mb-4 text-sm text-cyan-200">Launch Checklist</p>

              <div className="space-y-3">
                {checks.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
                    <CheckCircle2 size={18} className="text-emerald-300" />
                    <span className="text-sm text-white/65">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setPublished(true)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              <Rocket size={17} />
              Publish Website
            </button>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 via-purple-500/10 to-white/[0.045] p-6 backdrop-blur-2xl">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/35 text-cyan-200">
              <Sparkles size={25} />
            </div>

            <h3 className="text-3xl font-semibold">
              {published ? "Website is live." : "Ready to publish."}
            </h3>

            <p className="mt-4 text-white/60">
              {published
                ? "Your generated website is now available on the AgencyOS subdomain."
                : "Click publish to simulate the future one-click deployment flow."}
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/35 p-4">
              <p className="mb-2 text-xs text-cyan-200">Subdomain</p>

              <div className="flex items-center justify-between gap-3 rounded-xl bg-black/40 px-4 py-3">
                <p className="truncate text-sm text-white/65">
                  urbanspice.agencyos.site
                </p>
                <Copy size={15} className="text-white/45" />
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-4">
              <p className="mb-2 text-xs text-cyan-200">Custom Domain</p>

              <div className="rounded-xl bg-black/40 px-4 py-3 text-sm text-white/45">
                Connect your own domain later
              </div>
            </div>

            <div className="mt-8 space-y-3 text-sm text-white/55">
              <p>Next: connect this with Supabase projects.</p>
              <p>Then: store publish status, domain and project config.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
