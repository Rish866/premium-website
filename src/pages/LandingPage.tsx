import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Layers,
  Palette,
  Sparkles,
  Zap,
  Star,
  Building2,
  Rocket,
} from "lucide-react";

const features = [
  { icon: Zap, title: "AI Generation", desc: "Complete website generated in under 5 minutes from your business info." },
  { icon: Layers, title: "18+ Industries", desc: "Restaurant, clinic, gym, hotel, real estate, transport, and more." },
  { icon: Palette, title: "Theme Engine", desc: "Global colors, fonts, dark mode, and premium design tokens." },
  { icon: Globe2, title: "One-Click Publish", desc: "Go live with a subdomain instantly. Custom domains supported." },
  { icon: Building2, title: "Multi-Page", desc: "Home, About, Services, Gallery, Pricing, Contact, Blog, and more." },
  { icon: Rocket, title: "SEO Optimized", desc: "Meta tags, Open Graph, sitemap, and schema markup built-in." },
];

const industries = [
  "Restaurant", "Clinic", "Salon", "Gym", "Hotel", "Real Estate",
  "Transport", "Manufacturer", "School", "E-Commerce", "Law Firm",
  "Construction", "Travel", "Interior Design", "NGO", "Photography",
  "Consulting", "Local Shop",
];

const pricing = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "Perfect for trying AgencyOS",
    features: ["3 projects", "Basic templates", "Subdomain publishing", "Community support"],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For growing businesses",
    features: ["Unlimited projects", "All templates", "Custom domains", "Priority support", "AI generations", "Remove branding"],
    cta: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Agency",
    price: "$99",
    period: "/month",
    desc: "For agencies & teams",
    features: ["Everything in Pro", "White label", "Team collaboration", "Client workspaces", "API access", "Dedicated support"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const testimonials = [
  { name: "Rahul Sharma", role: "Restaurant Owner", text: "Launched my restaurant website in 10 minutes. Customers now order directly on WhatsApp.", rating: 5 },
  { name: "Dr. Priya Patel", role: "Clinic Director", text: "AgencyOS generated a professional medical website that our patients love. Appointments increased 40%.", rating: 5 },
  { name: "Vikram Singh", role: "Gym Owner", text: "The AI understood exactly what a fitness brand needs. Our membership signups doubled.", rating: 5 },
];

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.12),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.12),transparent_40%)]" />

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <Sparkles className="text-cyan-200" size={22} />
          <span className="text-lg font-semibold">AgencyOS</span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#industries" className="hover:text-white">Industries</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#testimonials" className="hover:text-white">Reviews</a>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm text-white/60 hover:text-white">Login</Link>
          <Link to="/signup" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 text-center md:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
          <Sparkles size={14} />
          AI Business Operating System
        </div>

        <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
          Get your business online{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
            in 5 minutes
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
          AgencyOS uses AI to generate complete, premium websites for any business.
          No coding. No design skills. Just answer a few questions and launch.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Generate Your Website
            <ArrowRight size={16} />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm text-white/70 backdrop-blur-xl transition hover:bg-white/10"
          >
            See How It Works
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2">4.9/5 rating</span>
          </div>
          <span className="hidden text-white/20 md:inline">|</span>
          <span>500+ businesses launched</span>
          <span className="hidden text-white/20 md:inline">|</span>
          <span>18 industries supported</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium text-cyan-200">FEATURES</p>
          <h2 className="text-4xl font-bold md:text-5xl">Everything you need to go online</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            From AI generation to one-click publishing. AgencyOS handles it all.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-2xl transition hover:border-cyan-300/20"
            >
              <feature.icon className="mb-5 text-cyan-200" size={28} />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium text-cyan-200">HOW IT WORKS</p>
          <h2 className="text-4xl font-bold md:text-5xl">3 steps to launch</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { step: "01", title: "Choose Industry", desc: "Select your business type from 18+ industries. AI adapts to your niche." },
            { step: "02", title: "Answer Questions", desc: "Business name, services, contact info, brand colors. Takes 2 minutes." },
            { step: "03", title: "Launch Website", desc: "AI generates a full website. Review, customize if needed, and publish." },
          ].map((item) => (
            <div key={item.step} className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl">
              <span className="mb-4 inline-block text-4xl font-bold text-cyan-300/30">{item.step}</span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium text-cyan-200">INDUSTRIES</p>
          <h2 className="text-4xl font-bold md:text-5xl">Built for every business</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Each industry gets tailored content, sections, and design that matches its audience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/70 backdrop-blur-xl"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium text-cyan-200">PRICING</p>
          <h2 className="text-4xl font-bold md:text-5xl">Simple, transparent pricing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Start free, upgrade when you're ready.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 backdrop-blur-2xl ${
                plan.highlight
                  ? "border-cyan-400/40 bg-cyan-400/5 ring-1 ring-cyan-400/20"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              {plan.highlight && (
                <p className="mb-4 text-xs font-medium text-cyan-200">MOST POPULAR</p>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-white/40">{plan.period}</span>}
              </div>
              <p className="mt-2 text-sm text-white/50">{plan.desc}</p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 size={16} className="shrink-0 text-cyan-300" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-black hover:scale-[1.02]"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium text-cyan-200">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold md:text-5xl">Loved by business owners</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-2xl"
            >
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-5 text-sm leading-relaxed text-white/70">"{t.text}"</p>
              <div>
                <p className="font-medium">{t.name}</p>
                <p className="text-xs text-white/40">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-12 text-center backdrop-blur-2xl md:p-16">
          <h2 className="text-4xl font-bold md:text-5xl">Ready to go online?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/55">
            Join 500+ businesses already using AgencyOS. Generate your premium website today.
          </p>
          <Link
            to="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Start Free — No Credit Card
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="text-cyan-200" size={18} />
                <span className="font-semibold">AgencyOS</span>
              </div>
              <p className="mt-3 text-sm text-white/40">
                AI Business Operating System. Get your business online in 5 minutes.
              </p>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-white/70">Product</p>
              <div className="space-y-2 text-sm text-white/40">
                <p>AI Generation</p>
                <p>Website Builder</p>
                <p>Theme Engine</p>
                <p>Publishing</p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-white/70">Industries</p>
              <div className="space-y-2 text-sm text-white/40">
                <p>Restaurant</p>
                <p>Healthcare</p>
                <p>Real Estate</p>
                <p>E-Commerce</p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-white/70">Company</p>
              <div className="space-y-2 text-sm text-white/40">
                <p>About</p>
                <p>Blog</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/30">
            &copy; 2026 AgencyOS. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
