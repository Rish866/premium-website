/**
 * Testimonials Variant B: Featured Quote
 * One large highlighted testimonial with smaller ones around it.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type TestimonialsBConfig = {
  eyebrow?: string;
  title: string;
  items: { name: string; role?: string; quote: string; rating?: number }[];
};

export default function TestimonialsB({ config }: BlockProps<TestimonialsBConfig>) {
  const { eyebrow, title = 'What Our Clients Say', items = [] } = config;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ background: 'var(--color-background)', padding: 'var(--section-y) var(--section-x)' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <div className="mb-12">
          {eyebrow && (
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-primary)' }}>
              {eyebrow}
            </span>
          )}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-h2)', fontWeight: 'var(--font-heading-weight)', lineHeight: 'var(--heading-line-height)', color: 'var(--color-text)' }}>
            {title}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Featured testimonial */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden"
              style={{ borderRadius: 'var(--card-radius)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: 'var(--card-padding-lg)' }}
            >
              <div className="absolute right-4 top-4 text-6xl leading-none opacity-10" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                "
              </div>
              {featured.rating && (
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: featured.rating }).map((_, s) => (
                    <span key={s} style={{ color: 'var(--color-primary)' }}>★</span>
                  ))}
                </div>
              )}
              <p className="mb-8 text-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)', fontStyle: 'italic' }}>
                "{featured.quote}"
              </p>
              <div>
                <p className="font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>{featured.name}</p>
                {featured.role && <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{featured.role}</p>}
              </div>
            </motion.div>
          )}

          {/* Other testimonials */}
          <div className="space-y-4" style={{ gap: 'var(--gap)' }}>
            {rest.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ borderRadius: 'var(--card-radius)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: 'var(--card-padding)' }}
              >
                <p className="mb-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-muted)', fontStyle: 'italic', lineHeight: 'var(--line-height)' }}>
                  "{item.quote}"
                </p>
                <p className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>— {item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
