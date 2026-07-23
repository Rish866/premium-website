/**
 * Features Variant C: Bento Grid
 * Mixed-size cards in a bento layout. Modern and dynamic.
 * Great for modern, colorful, bold presets.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type FeaturesCConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { title: string; description?: string; icon?: string }[] | string[];
};

export default function FeaturesC({ config }: BlockProps<FeaturesCConfig>) {
  const { eyebrow, title = 'Our Services', subtitle, items = [] } = config;

  const normalizedItems = items.map((item) =>
    typeof item === 'string' ? { title: item, description: '', icon: '' } : item
  );

  // Determine bento grid classes based on item count
  const getGridClass = (idx: number, total: number) => {
    if (total <= 3) return '';
    if (idx === 0) return 'sm:col-span-2 sm:row-span-2';
    if (idx === 3 && total >= 5) return 'sm:col-span-2';
    return '';
  };

  return (
    <section style={{ background: 'var(--color-background)', padding: 'var(--section-y) var(--section-x)' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (
            <span
              className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-primary)' }}
            >
              {eyebrow}
            </span>
          )}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--font-h2)',
              fontWeight: 'var(--font-heading-weight)',
              lineHeight: 'var(--heading-line-height)',
              letterSpacing: 'var(--heading-letter-spacing)',
              color: 'var(--color-text)',
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-body-size)',
                color: 'var(--color-text-muted)',
                lineHeight: 'var(--line-height)',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--gap)' }}>
          {normalizedItems.slice(0, 6).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group relative overflow-hidden ${getGridClass(i, normalizedItems.length)}`}
              style={{
                borderRadius: 'var(--card-radius)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                padding: 'var(--card-padding-lg)',
                minHeight: i === 0 && normalizedItems.length > 3 ? '320px' : '180px',
              }}
            >
              {/* Gradient accent for first card */}
              {i === 0 && (
                <div
                  className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full blur-[60px] opacity-30"
                  style={{ background: 'var(--color-primary)' }}
                />
              )}

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  {/* Number/icon */}
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center text-sm font-bold"
                    style={{
                      borderRadius: 'var(--radius)',
                      background: i === 0
                        ? `linear-gradient(135deg, var(--color-gradient-from), var(--color-gradient-to))`
                        : 'var(--color-surface-hover)',
                      color: i === 0 ? 'var(--btn-primary-text)' : 'var(--color-primary)',
                    }}
                  >
                    {item.icon || String(i + 1).padStart(2, '0')}
                  </div>

                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: i === 0 ? 'var(--font-h3)' : 'var(--font-h4)',
                      fontWeight: 'var(--font-heading-weight)',
                      color: 'var(--color-text)',
                    }}
                  >
                    {item.title}
                  </h3>

                  {item.description && (
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'var(--font-small)',
                        color: 'var(--color-text-muted)',
                        lineHeight: 'var(--line-height)',
                      }}
                    >
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Decorative arrow */}
                <div className="mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span style={{ color: 'var(--color-primary)' }}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
