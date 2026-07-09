import { Quote } from "lucide-react";

type Props = {
  config: any;
};

export default function TestimonialsBlock({ config }: Props) {
  const testimonials = config.items ?? [
    { name: "Customer", text: "Amazing service!", role: "Owner" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030308] to-black" />

      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

      <div className="relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {config.eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {config.title ?? "What Our Clients Say"}
          </h2>
          {config.subtitle && (
            <p className="mt-3 text-sm text-white/50">{config.subtitle}</p>
          )}
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t: any, i: number) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6 transition-all duration-300 hover:border-purple-400/20 hover:shadow-lg hover:shadow-purple-500/5"
            >

              {/* Quote icon */}
              <Quote size={20} className="mb-3 text-cyan-400/40" />

              {/* Stars */}
              <div className="mb-3 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-4 text-xs leading-relaxed text-white/60">"{t.text}"</p>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-400/20 text-xs font-bold text-white">
                  {t.name?.charAt(0) ?? "?"}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{t.name}</p>
                  {t.role && <p className="text-[10px] text-white/40">{t.role}</p>}
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-purple-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
