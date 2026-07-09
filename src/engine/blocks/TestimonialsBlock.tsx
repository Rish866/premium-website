import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type Props = {
  config: any;
};

export default function TestimonialsBlock({ config }: Props) {
  const testimonials = config.items ?? [];

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

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
            {config.title ?? "What Our Clients Say"}
          </h2>
          {config.subtitle && (
            <p className="mt-4 text-base text-white/50">{config.subtitle}</p>
          )}
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-7 transition-all duration-300 hover:border-purple-400/15"
            >
              <Quote size={24} className="mb-4 text-cyan-400/30" />

              <div className="mb-4 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-white/55">"{t.text}"</p>

              <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/25 to-purple-400/20 text-sm font-bold text-white">
                  {t.name?.charAt(0) ?? "?"}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  {t.role && <p className="text-xs text-white/40">{t.role}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
