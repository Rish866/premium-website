/**
 * Hero Variant A: Split Layout
 * Text left, image right. Classic agency-style hero.
 * Adapts to theme tokens for colors, fonts, spacing.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type HeroAConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  heroImage?: string;
  trustLogos?: string[];
};

export default function HeroA({ config }: BlockProps<HeroAConfig>) {
  const {
    eyebrow,
    title = 'Your Business, Elevated',
    subtitle,
    buttonText,
    secondaryButtonText = 'Learn More',
    heroImage,
    trustLogos = [],
  } = config;

  const hasImage = heroImage && (heroImage.startsWith('http') || heroImage.startsWith('data:'));

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--color-background)', padding: 'var(--section-y) var(--section-x)' }}
    >
      {/* Background effects */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at 20% 50%, var(--color-primary) 0%, transparent 50%),
                       radial-gradient(ellipse at 80% 50%, var(--color-secondary) 0%, transparent 50%)`,
          opacity: 'var(--glow-opacity)',
        }}
      />

      <div className="relative mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <div className={`grid items-center ${hasImage ? 'gap-12 lg:grid-cols-2' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={!hasImage ? 'mx-auto max-w-3xl text-center' : ''}
          >
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 px-4 py-1.5"
                style={{
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                }}
              >
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full"
                  style={{ background: 'var(--color-primary)' }}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: 'var(--color-primary-light)', fontFamily: 'var(--font-body)' }}
                >
                  {eyebrow}
                </span>
              </motion.div>
            )}

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--font-h1)',
                fontWeight: 'var(--font-heading-weight)',
                lineHeight: 'var(--heading-line-height)',
                letterSpacing: 'var(--heading-letter-spacing)',
                color: 'var(--color-text)',
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="mt-5"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-body-size)',
                  lineHeight: 'var(--line-height)',
                  color: 'var(--color-text-muted)',
                  maxWidth: hasImage ? '32rem' : '40rem',
                  marginInline: hasImage ? undefined : 'auto',
                }}
              >
                {subtitle}
              </p>
            )}

            {/* Buttons */}
            <div className={`mt-8 flex flex-wrap gap-3 ${!hasImage ? 'justify-center' : ''}`}>
              {buttonText && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'var(--btn-primary-bg)',
                    color: 'var(--btn-primary-text)',
                    padding: 'var(--btn-primary-padding)',
                    borderRadius: 'var(--button-radius)',
                    fontSize: 'var(--btn-primary-font-size)',
                    fontWeight: 'var(--btn-primary-font-weight)',
                    boxShadow: 'var(--btn-primary-shadow)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {buttonText}
                </motion.button>
              )}
              {secondaryButtonText && (
                <button
                  style={{
                    background: 'var(--btn-secondary-bg)',
                    color: 'var(--btn-secondary-text)',
                    border: 'var(--btn-secondary-border)',
                    padding: 'var(--btn-secondary-padding)',
                    borderRadius: 'var(--button-radius)',
                    fontSize: 'var(--btn-secondary-font-size)',
                    fontWeight: 'var(--btn-secondary-font-weight)',
                    fontFamily: 'var(--font-body)',
                  }}
                  className="transition-colors"
                >
                  {secondaryButtonText}
                </button>
              )}
            </div>

            {/* Trust logos */}
            {trustLogos.length > 0 && (
              <div className="mt-10 border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
                <p
                  className="mb-3 text-[10px] font-medium uppercase tracking-widest"
                  style={{ color: 'var(--color-text-subtle)' }}
                >
                  Trusted by
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  {trustLogos.map((logo, i) => (
                    <span key={i} className="text-xs font-medium" style={{ color: 'var(--color-text-subtle)' }}>
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Hero Image */}
          {hasImage && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div
                className="overflow-hidden"
                style={{
                  borderRadius: 'var(--image-radius)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <img src={heroImage} alt="Hero" className="h-full w-full object-cover" />
              </div>
              <div
                className="absolute -inset-4 -z-10 blur-2xl opacity-30"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  background: `linear-gradient(var(--color-gradient-angle), var(--color-gradient-from), var(--color-gradient-to))`,
                }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
