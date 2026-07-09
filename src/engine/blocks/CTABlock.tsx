import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  config: any;
};

export default function CTABlock({ config }: Props) {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#050508]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08]">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-blue-500/15" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.2),transparent_60%)]" />
          {/* Grid */}
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='g' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 0 40 L 40 0' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E\")" }} />

          <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
            {config.eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{config.eyebrow}</p>
            )}
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              {config.title ?? "Ready to get started?"}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/55">
              {config.subtitle ?? "Take the first step towards your digital transformation."}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black shadow-xl shadow-white/10"
              >
                {config.buttonText ?? "Get Started"}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              {config.secondaryButtonText && (
                <button className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium text-white/70 backdrop-blur-sm transition hover:bg-white/10">
                  {config.secondaryButtonText}
                </button>
              )}
            </div>
          </div>

          {/* Glow orbs */}
          <div className="absolute -left-20 top-1/4 h-52 w-52 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -right-20 bottom-1/4 h-52 w-52 rounded-full bg-purple-500/15 blur-3xl" />
        </div>
      </motion.div>
    </section>
  );
}
