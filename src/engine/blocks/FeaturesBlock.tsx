import { motion } from "framer-motion";
import { Zap, Shield, Globe2, Palette, Rocket, Star, Heart, Users, Clock, Award } from "lucide-react";

type Props = {
  config: any;
};

const iconMap = [Zap, Shield, Globe2, Palette, Rocket, Star, Heart, Users, Clock, Award];

export default function FeaturesBlock({ config }: Props) {
  const items: string[] = config.items ?? [];

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#050508]" />
      {/* Accent line */}
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
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
            {config.title ?? "What We Offer"}
          </h2>
          {config.subtitle && (
            <p className="mt-4 text-base leading-relaxed text-white/50">{config.subtitle}</p>
          )}
        </motion.div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item: string, index: number) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={`${item}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-7 transition-all duration-300 hover:border-cyan-400/20 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                {/* Glow */}
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-400/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-purple-400/10 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-sm font-bold text-white">{item}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/40">
                    Professional service delivered with expertise and attention to detail.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
