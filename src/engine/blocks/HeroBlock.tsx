import { motion } from "framer-motion";

type Props = {
  config: any;
};

export default function HeroBlock({ config }: Props) {
  const hasImage = config.heroImage && (config.heroImage.startsWith("http") || config.heroImage.startsWith("data:"));
  const trustLogos = config.trustLogos ?? [];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#050510] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,.12),transparent_50%)]" />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='g' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E\")" }} />

      <div className={`relative mx-auto max-w-6xl px-6 ${hasImage ? "py-20 lg:py-28" : "py-24 lg:py-36"}`}>
        <div className={`${hasImage ? "grid items-center gap-12 lg:grid-cols-2" : "text-center"}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={hasImage ? "" : "mx-auto max-w-4xl"}
          >
            {/* Badge */}
            {config.eyebrow && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 backdrop-blur-xl"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                <span className="text-xs font-medium text-cyan-200">{config.eyebrow}</span>
              </motion.div>
            )}

            {/* Headline */}
            <h1 className={`text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl ${!hasImage ? "mx-auto max-w-4xl" : ""}`}>
              {config.title ?? "Your Business, Elevated"}
            </h1>

            {/* Subtitle */}
            <p className={`mt-5 text-base leading-relaxed text-white/55 sm:text-lg ${!hasImage ? "mx-auto max-w-2xl" : "max-w-lg"}`}>
              {config.subtitle ?? "Premium digital presence crafted for modern businesses."}
            </p>

            {/* CTA Buttons */}
            <div className={`mt-8 flex flex-wrap gap-3 ${!hasImage ? "justify-center" : ""}`}>
              {config.buttonText && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/25"
                >
                  {config.buttonText}
                </motion.button>
              )}
              <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10">
                Learn More
              </button>
            </div>

            {/* Trust logos/text */}
            {trustLogos.length > 0 && (
              <div className="mt-10 border-t border-white/[0.06] pt-6">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-widest text-white/30">Trusted by</p>
                <div className="flex flex-wrap items-center gap-6">
                  {trustLogos.map((logo: string, i: number) => (
                    <span key={i} className="text-xs font-medium text-white/30">{logo}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Hero Image */}
          {hasImage && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-white/[0.08] shadow-2xl shadow-cyan-500/10">
                <img
                  src={config.heroImage}
                  alt="Hero"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Glow behind image */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-50 blur-2xl" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
