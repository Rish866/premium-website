/**
 * FAQ Variant B: Two-Column Layout
 * Questions on the left, answers on the right.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type FAQBConfig = {
  eyebrow?: string;
  title: string;
  items: { question: string; answer: string }[];
};

export default function FAQB({ config }: BlockProps<FAQBConfig>) {
  const {
    eyebrow,
    title = 'Frequently Asked Questions',
    items = [],
  } = config;

  return (
    <section
      style={{
        background: 'var(--color-background)',
        padding: 'var(--section-y) var(--section-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {eyebrow && (
            <span
              className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-body)' }}
            >
              {eyebrow}
            </span>
          )}
          <h2
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
        </motion.div>

        {/* Two-Column FAQ */}
        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12"
              style={{
                paddingBottom: '2rem',
                borderBottom: index < items.length - 1 ? '1px solid var(--color-border)' : undefined,
              }}
            >
              {/* Question */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--color-text)',
                }}
              >
                {item.question}
              </h3>

              {/* Answer */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-body-size)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--line-height)',
                }}
              >
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
