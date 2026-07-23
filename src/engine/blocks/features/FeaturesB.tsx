/**
 * Features Variant B: Alternating Rows
 * Left/right alternating layout with large images.
 * Editorial feel. Great for luxury, corporate, minimal.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type FeaturesBConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { title: string; description?: string; image?: string }[] | string[];
};

export default function FeaturesB({ config }: BlockProps<FeaturesBConfig>) {
  const { eyebrow, title = 'Our Services', subtitle, items = [] } = config;

  const normalizedItems = items.map((item) =>
    typeof item === 'string' ? { title: item, description: '', image: '' } : item
  );

  return (
    <section style={{ background: 'var(--color-background)', padding: 'var(--section-y) var(--section-x)' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        {/* Header */}
        <div className="mb-20 max-w-xl">
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

        {/* Alternating rows */}
        <div className="space-y-24">
          {normalizedItems.slice(0, 4).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              {/* Image */}
              <div className="lg:[direction:ltr]">
                <div
                  className="aspect-[4/3] overflow-hidden"
                  style={{
                    borderRadius: 'var(--image-radius)',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span
                        className="text-4xl font-bold opacity-20"
                        style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="lg:[direction:ltr]">
                <span
                  className="mb-2 inline-block text-sm font-bold"
                  style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-h3)',
                    fontWeight: 'var(--font-heading-weight)',
                    color: 'var(--color-text)',
                    lineHeight: 'var(--heading-line-height)',
                  }}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--font-body-size)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 'var(--line-height)',
                      maxWidth: '480px',
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
