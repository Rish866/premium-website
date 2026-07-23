/**
 * Hero Variant B: Centered
 * Full-width centered text with optional background image/gradient.
 * Minimal, impactful, great for luxury and minimal presets.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type HeroBConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  heroImage?: string;
  trustLogos?: string[];
};

export default function HeroB({ config }: BlockProps<HeroBConfig>) {
  const {
    eyebrow,
    title = 'Your Business, Elevated',
    subtitle,
    buttonText,
    secondaryButtonText,
    heroImage,
    trustLogos = [],
  } = config;

  const hasBackgroundImage = heroImage && (heroImage.startsWith('http') || heroImage.startsWith('data:'));

  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-background)' }}
    >
      {/* Background image with overlay */}
      {hasBackgroundImage && (
        <>
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      {/* Gradient background when no image */}
      {!hasBackgroundImage && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 30%, var(--color-primary), transparent 60%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at 30% 70%, var(--color-secondary), transparent 50%)`,
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center" style={{ padding: 'var(--section-y) var(--section-x)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {eyebrow && (
            <span
              className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--color-primary-light)' }}
            >
              {eyebrow}
            </span>
          )}

          <h1
            className="mx-auto"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, var(--font-h1))',
              fontWeight: 'var(--font-heading-weight)',
              lineHeight: 'var(--heading-line-height)',
              letterSpacing: 'var(--heading-letter-spacing)',
              color: hasBackgroundImage ? '#ffffff' : 'var(--color-text)',
              maxWidth: '900px',
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="mx-auto mt-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 'var(--line-height)',
                color: hasBackgroundImage ? 'rgba(255,255,255,0.75)' : 'var(--color-text-muted)',
                maxWidth: '600px',
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
                  color: hasBackgroundImage ? '#ffffff' : 'var(--btn-secondary-text)',
                  border: hasBackgroundImage ? '1px solid rgba(255,255,255,0.3)' : 'var(--btn-secondary-border)',
                  padding: 'var(--btn-secondary-padding)',
                  borderRadius: 'var(--button-radius)',
                  fontSize: 'var(--btn-secondary-font-size)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </motion.div>

        {/* Trust logos */}
        {trustLogos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 border-t pt-6"
            style={{ borderColor: hasBackgroundImage ? 'rgba(255,255,255,0.15)' : 'var(--color-border)' }}
          >
            <p
              className="mb-4 text-[10px] font-medium uppercase tracking-widest"
              style={{ color: hasBackgroundImage ? 'rgba(255,255,255,0.4)' : 'var(--color-text-subtle)' }}
            >
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {trustLogos.map((logo, i) => (
                <span
                  key={i}
                  className="text-sm font-medium"
                  style={{ color: hasBackgroundImage ? 'rgba(255,255,255,0.5)' : 'var(--color-text-subtle)' }}
                >
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
