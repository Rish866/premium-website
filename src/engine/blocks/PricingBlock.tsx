import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

type Props = {
  config: any;
};

export default function PricingBlock({ config }: Props) {
  const plans = config.plans ?? [];

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          {config.eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {config.title ?? "Choose Your Plan"}
          </h2>
          {config.subtitle && (
            <p className="mt-4 text-base text-white/50">{config.subtitle}</p>
          )}
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan: any, index: number) => {
            const isPopular = index === 1 || plans.length === 1;
            return (
              <motion.div
                key={`${plan.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:scale-[1.02] ${
                  isPopular
                    ? "border-cyan-400/30 bg-gradient-to-b from-cyan-400/8 via-transparent to-transparent shadow-2xl shadow-cyan-500/10"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/15"
                }`}
              >
                {isPopular && (
                  <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 text-[10px] font-bold text-black">
                    <Star size={10} fill="currentColor" />
                    POPULAR
                  </div>
                )}

                <p className="text-sm font-medium text-white/50">{plan.name}</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${isPopular ? "text-cyan-300" : "text-white"}`}>
                    {plan.price}
                  </span>
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="space-y-4">
                  {(plan.features ?? []).map((feature: string, fi: number) => (
                    <div key={fi} className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        isPopular ? "bg-cyan-400/15 text-cyan-300" : "bg-white/10 text-white/50"
                      }`}>
                        <Check size={12} />
                      </div>
                      <span className="text-sm text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 w-full rounded-full py-3.5 text-sm font-semibold transition-all ${
                    isPopular
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/20"
                      : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
