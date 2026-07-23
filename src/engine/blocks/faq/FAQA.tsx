/**
 * FAQ Variant A: Accordion
 * Accordion-style FAQ with expand/collapse animation.
 */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { BlockProps } from '../../types';

type FAQAConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { question: string; answer: string }[];
};

export default function FAQA({ config }: BlockProps<FAQAConfig>) {
  const {
    eyebrow,
    title = 'Frequently Asked Questions',
    subtitle,
    items = [],
  } = config;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          className="mb-12 text-center"
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
          {subtitle && (
            <p
              className="mx-auto mt-4 max-w-2xl"
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
        </motion.div>

        {/* Accordion Items */}
        <div className="mx-auto max-w-3xl space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--card-radius)',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                  }}
                >
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 flex-shrink-0 text-xl"
                  style={{ color: 'var(--color-primary)' }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div
                      className="px-5 pb-5"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'var(--font-body-size)',
                        color: 'var(--color-text-muted)',
                        lineHeight: 'var(--line-height)',
                      }}
                    >
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
