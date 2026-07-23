/**
 * Features Variant A: Grid Cards
 * 3-column grid of service/feature cards with icons.
 * Clean and organized. Works with all style presets.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type FeaturesAConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { title: string; description?: string; icon?: string }[] | string[];
};

export default function FeaturesA({ config }: BlockProps<FeaturesAConfig>) {
  const { eyebrow, title = 'Our Services', subtitle, items = [] } = config;

  // Normalize items - support both string[] and object[]
  const normalizedItems = items.map((item) =>
    typeof item === 'string' ? { title: item, description: '', icon: '' } : item
  );

  return (
    <section style={{ background: 'var(--color-background)', padding: 'var(--section-y) var(--section-x)' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
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

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--gap-lg)' }}>
          {normalizedItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group transition-colors"
              style={{
                borderRadius: 'var(--card-radius)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                padding: 'var(--card-padding-lg)',
              }}
            >
              {/* Icon placeholder */}
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center text-lg"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  background: `linear-gradient(135deg, var(--color-gradient-from), var(--color-gradient-to))`,
                  color: 'var(--btn-primary-text)',
                  opacity: 0.9,
                }}
              >
                {item.icon || (i + 1)}
              </div>

              <h3
                className="mb-2"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--font-h4)',
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
