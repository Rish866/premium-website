/**
 * Stats Variant A: Horizontal Row
 * Horizontal row of key statistics with large numbers.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type StatsAConfig = {
  items: { value: string; label: string }[];
};

export default function StatsA({ config }: BlockProps<StatsAConfig>) {
  const { items = [] } = config;

  return (
    <section
      style={{
        background: 'var(--color-surface)',
        padding: 'var(--section-y) var(--section-x)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--font-h2)',
                  fontWeight: 'var(--font-heading-weight)',
                  color: 'var(--color-primary)',
                  lineHeight: '1.2',
                }}
              >
                {item.value}
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
