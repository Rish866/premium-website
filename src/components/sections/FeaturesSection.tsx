import {
  Bot,
  Globe,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "SEO Optimized",
    desc: "Fast loading, structured data and Google-ready pages.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Looks premium on every mobile device.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Quality",
    desc: "Built with reusable components and modern architecture.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Vite + React + Tailwind delivers incredible speed.",
  },
  {
    icon: Bot,
    title: "AI Ready",
    desc: "Prepared for chatbots, automation and AI assistants.",
  },
  {
    icon: Sparkles,
    title: "Premium Animations",
    desc: "Glassmorphism, gradients and motion built in.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            WHY AGENCYOS
          </p>

          <h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">
            Everything your client expects.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/55">
            Every website comes with premium UI, reusable sections,
            WhatsApp integration, SEO optimization and enterprise quality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/30"
              >
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-[80px] transition group-hover:scale-150" />

                <div className="relative">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10">
                    <Icon className="h-8 w-8 text-cyan-300" />
                  </div>

                  <h3 className="text-2xl font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/55">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
