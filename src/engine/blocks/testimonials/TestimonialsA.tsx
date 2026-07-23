/**
 * Testimonials Variant A: Carousel/Grid
 * Cards with quotes, names, stars. Classic social proof layout.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type TestimonialsAConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { name: string; role?: string; quote: string; rating?: number; avatar?: string }[];
};

export default function TestimonialsA({ config }: BlockProps<TestimonialsAConfig>) {
  const { eyebrow, title = 'What Our Clients Say', subtitle, items = [] } = config;

  return (
    <section style={{ background: 'var(--color-background)', padding: 'var(--section-y) var(--section-x)' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-primary)' }}>
              {eyebrow}
            </span>
          )}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-h2)', fontWeight: 'var(--font-heading-weight)', lineHeight: 'var(--heading-line-height)', letterSpacing: 'var(--heading-letter-spacing)', color: 'var(--color-text)' }}>
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--font-body-size)', color: 'var(--color-text-muted)', lineHeight: 'var(--line-height)' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--gap-lg)' }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ borderRadius: 'var(--card-radius)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: 'var(--card-padding-lg)' }}
            >
              {/* Stars */}
              {item.rating && (
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, s) => (
                    <span key={s} style={{ color: 'var(--color-primary)' }}>★</span>
                  ))}
                </div>
              )}

              {/* Quote */}
              <p className="mb-6" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--font-body-size)', color: 'var(--color-text-muted)', lineHeight: 'var(--line-height)', fontStyle: 'italic' }}>
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold" style={{ background: 'var(--color-surface-hover)', color: 'var(--color-primary)' }}>
                  {item.avatar ? (
                    <img src={item.avatar} alt={item.name} className="h-full w-full rounded-full object-cover" />
                  ) : (
                    item.name.charAt(0)
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>{item.name}</p>
                  {item.role && <p className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>{item.role}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
