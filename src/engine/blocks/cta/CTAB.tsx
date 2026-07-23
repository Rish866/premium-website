/**
 * CTA Variant B: Floating Card with Glow
 * A floating card CTA with a glow effect around it.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type CTABConfig = {
  title: string;
  subtitle?: string;
  buttonText: string;
};

export default function CTAB({ config }: BlockProps<CTABConfig>) {
  const {
    title = 'Ready to Get Started?',
    subtitle,
    buttonText = 'Get Started',
  } = config;

  return (
    <section
      style={{
        background: 'var(--color-background)',
        padding: 'var(--section-y) var(--section-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl"
        >
          {/* Glow effect */}
          <div
            className="absolute -inset-4 -z-10 blur-3xl"
            style={{
              background: `linear-gradient(var(--color-gradient-angle, 135deg), var(--color-gradient-from, var(--color-primary)), var(--color-gradient-to, var(--color-secondary)))`,
              opacity: 'var(--glow-opacity, 0.2)',
              borderRadius: 'var(--card-radius)',
            }}
          />

          {/* Card */}
          <div
            className="relative p-12 text-center lg:p-16"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--card-radius)',
            }}
          >
            <h2
              className="mb-4"
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
                className="mx-auto mb-8 max-w-lg"
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 font-semibold transition-colors"
              style={{
                background: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-text)',
                borderRadius: 'var(--button-radius)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                boxShadow: 'var(--btn-primary-shadow)',
              }}
            >
              {buttonText}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
