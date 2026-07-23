/**
 * CTA Variant A: Full-width Gradient Banner
 * Centered text with gradient background and prominent CTA button.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type CTAAConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  secondaryButtonText?: string;
};

export default function CTAA({ config }: BlockProps<CTAAConfig>) {
  const {
    eyebrow,
    title = 'Ready to Get Started?',
    subtitle,
    buttonText = 'Get Started',
    secondaryButtonText,
  } = config;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: 'var(--section-y) var(--section-x)',
        background: `linear-gradient(var(--color-gradient-angle, 135deg), var(--color-gradient-from, var(--color-primary)), var(--color-gradient-to, var(--color-secondary)))`,
      }}
    >
      {/* Decorative overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 30% 50%, white 0%, transparent 50%)',
        }}
      />

      <div className="relative mx-auto text-center" style={{ maxWidth: 'var(--container-max)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <span
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest opacity-80"
              style={{ color: 'var(--btn-primary-text)', fontFamily: 'var(--font-body)' }}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--font-h2)',
              fontWeight: 'var(--font-heading-weight)',
              color: 'var(--btn-primary-text)',
              lineHeight: 'var(--heading-line-height)',
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mx-auto mb-8 max-w-2xl opacity-90"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-body-size)',
                color: 'var(--btn-primary-text)',
                lineHeight: 'var(--line-height)',
              }}
            >
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 font-semibold transition-colors"
              style={{
                background: 'var(--color-background)',
                color: 'var(--color-text)',
                borderRadius: 'var(--button-radius)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
              }}
            >
              {buttonText}
            </motion.button>
            {secondaryButtonText && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 font-semibold transition-colors"
                style={{
                  background: 'transparent',
                  color: 'var(--btn-primary-text)',
                  border: '2px solid var(--btn-primary-text)',
                  borderRadius: 'var(--button-radius)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                }}
              >
                {secondaryButtonText}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
