/**
 * About Variant A: Split Layout
 * Text/story on the left, image and stats on the right.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type AboutAConfig = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  stats?: { value: string; label: string }[];
};

export default function AboutA({ config }: BlockProps<AboutAConfig>) {
  const {
    eyebrow,
    title = 'About Us',
    description = '',
    image,
    stats = [],
  } = config;

  const hasImage = image && (image.startsWith('http') || image.startsWith('data:'));

  return (
    <section
      style={{
        background: 'var(--color-background)',
        padding: 'var(--section-y) var(--section-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {eyebrow && (
              <span
                className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-body)' }}
              >
                {eyebrow}
              </span>
            )}
            <h2
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--font-h2)',
                fontWeight: 'var(--font-heading-weight)',
                color: 'var(--color-text)',
                lineHeight: 'var(--heading-line-height)',
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-body-size)',
                color: 'var(--color-text-muted)',
                lineHeight: 'var(--line-height)',
              }}
            >
              {description}
            </p>

            {/* Stats */}
            {stats.length > 0 && (
              <div
                className="mt-8 grid grid-cols-2 gap-6 pt-8 sm:grid-cols-3"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'var(--font-h3)',
                        fontWeight: 'var(--font-heading-weight)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="mt-1 text-sm"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {hasImage ? (
              <div
                className="overflow-hidden"
                style={{
                  borderRadius: 'var(--card-radius)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <img
                  src={image}
                  alt="About"
                  className="h-full w-full object-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
            ) : (
              <div
                className="flex items-center justify-center"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--card-radius)',
                  height: '350px',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                }}
              >
                About Image
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
