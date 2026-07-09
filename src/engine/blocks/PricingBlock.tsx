import { Check, Star } from "lucide-react";

type Props = {
  config: any;
};

export default function PricingBlock({ config }: Props) {
  const plans = config.plans ?? [];

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050510] to-black" />
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

      <div className="relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {config.eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {config.title ?? "Choose Your Plan"}
          </h2>
          {config.subtitle && (
            <p className="mt-3 text-sm text-white/50">{config.subtitle}</p>
          )}
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan: any, index: number) => {
            const isPopular = index === 1;
            return (
              <div
                key={`${plan.name}-${index}`}
                className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] ${
                  isPopular
                    ? "border-cyan-400/40 bg-gradient-to-b from-cyan-400/10 via-transparent to-transparent shadow-lg shadow-cyan-500/10"
                    : "border-white/[0.08] bg-white/[0.03] hover:border-white/20"
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 text-[10px] font-bold text-black">
                    <Star size={10} fill="currentColor" />
                    POPULAR
                  </div>
                )}

                <p className="text-sm font-medium text-white/60">{plan.name}</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${isPopular ? "text-cyan-300" : "text-white"}`}>
                    {plan.price}
                  </span>
                </div>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="space-y-3">
                  {(plan.features ?? []).map((feature: string, fi: number) => (
                    <div key={fi} className="flex items-start gap-2.5">
                      <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                        isPopular ? "bg-cyan-400/20 text-cyan-300" : "bg-white/10 text-white/50"
                      }`}>
                        <Check size={10} />
                      </div>
                      <span className="text-xs text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`mt-6 w-full rounded-xl py-2.5 text-xs font-semibold transition-all ${
                  isPopular
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                }`}>
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
