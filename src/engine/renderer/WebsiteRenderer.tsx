import type { WebsiteConfig } from "../types";

function Hero({ config }: { config: WebsiteConfig }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 via-purple-500/10 to-white/[0.04] p-8">
      <p className="mb-4 text-sm text-cyan-200">{config.hero.eyebrow}</p>
      <h3 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{config.hero.headline}</h3>
      <p className="mt-5 max-w-2xl text-white/60">{config.hero.subheadline}</p>
      <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-black">{config.hero.cta}</button>
    </div>
  );
}

function Services({ config }: { config: WebsiteConfig }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      <h3 className="text-3xl font-semibold">{config.services.title}</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {config.services.items.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-5 text-white/70">{item}</div>
        ))}
      </div>
    </div>
  );
}

function Gallery({ config }: { config: WebsiteConfig }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {config.gallery.map((item) => (
        <div key={item} className="min-h-[160px] rounded-3xl border border-white/10 bg-white/[0.05] p-5">
          <p className="text-sm text-white/50">{item}</p>
        </div>
      ))}
    </div>
  );
}

function Pricing({ config }: { config: WebsiteConfig }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      <h3 className="text-3xl font-semibold">{config.pricing.title}</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {config.pricing.plans.map((plan) => (
          <div key={plan.name} className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <p className="text-xl font-semibold">{plan.name}</p>
            <p className="mt-3 text-4xl font-semibold text-cyan-200">{plan.price}</p>
            <div className="mt-5 space-y-2">
              {plan.features.map((feature) => (
                <p key={feature} className="text-sm text-white/55">• {feature}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials({ config }: { config: WebsiteConfig }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {config.testimonials.map((item) => (
        <div key={item.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-white/65">"{item.text}"</p>
          <p className="mt-5 text-sm text-cyan-200">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

function Contact({ config }: { config: WebsiteConfig }) {
  return (
    <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-400/10 p-8 text-center">
      <h3 className="text-3xl font-semibold">Ready to launch {config.brand.name}?</h3>
      <p className="mt-3 text-white/60">{config.brand.phone}</p>
      <a href={`https://wa.me/${config.brand.whatsapp.replace("+", "")}`} className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
        WhatsApp Now
      </a>
    </div>
  );
}

export default function WebsiteRenderer({ config, compact = false }: { config: WebsiteConfig; compact?: boolean }) {
  const renderSection = (section: string) => {
    if (section === "hero") return <Hero config={config} />;
    if (section === "services") return <Services config={config} />;
    if (section === "gallery") return <Gallery config={config} />;
    if (section === "pricing") return <Pricing config={config} />;
    if (section === "testimonials") return <Testimonials config={config} />;
    if (section === "contact") return <Contact config={config} />;
    return null;
  };

  return (
    <section className={`relative overflow-hidden bg-black text-white ${compact ? "rounded-[1.5rem] px-4 py-6" : "px-6 py-28"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {!compact && (
          <div className="mb-12 max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
              JSON Website Renderer
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              First real website generated from config.
            </h2>
            <p className="mt-5 text-white/55">
              This is the beginning of the actual AgencyOS engine.
            </p>
          </div>
        )}

        <div className="space-y-6">
          {config.sections.map((section) => (
            <div key={section}>{renderSection(section)}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
