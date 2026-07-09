import { motion } from "framer-motion";
import { Target } from "lucide-react";

type Props = {
  config: any;
};

export default function AboutBlock({ config }: Props) {
  const stats = config.stats ?? [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "50+", label: "Team Members" },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#030306]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          {config.eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {config.title ?? "About Us"}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/50">
            {config.description ?? "We are passionate about delivering excellence."}
          </p>
        </motion.div>

        {config.mission && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-16 max-w-3xl rounded-2xl border border-white/[0.06] bg-gradient-to-r from-cyan-400/[0.04] to-purple-400/[0.04] p-8"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <Target size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Our Mission</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{config.mission}</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          {stats.map((stat: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center transition-all hover:border-cyan-400/15 hover:bg-cyan-400/[0.03]"
            >
              <p className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-4xl font-bold text-transparent">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium text-white/45">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
