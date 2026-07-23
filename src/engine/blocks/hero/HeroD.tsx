/**
 * Hero Variant D: Asymmetric / Bento
 * Offset grid layout with floating cards/badges.
 * Creative and unique. Great for agencies, startups, colorful presets.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type HeroDConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  heroImage?: string;
  features?: string[];
  trustLogos?: string[];
};

export default function HeroD({ config }: BlockProps<HeroDConfig>) {
  const {
    eyebrow,
    title = 'Your Business, Elevated',
    subtitle,
    buttonText,
    heroImage,
    features = [],
    trustLogos = [],
  } = config;

  const hasImage = heroImage && (heroImage.startsWith('http') || heroImage.startsWith('data:'));

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--color-background)', padding: 'var(--section-y) var(--section-x)' }}
    >
      {/* Subtle background */}
      <div
        className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full blur-[120px] opacity-20"
        style={{ background: 'var(--color-primary)' }}
      />

      <div className="relative mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            {eyebrow && (
              <div
                className="mb-5 inline-flex w-fit items-center gap-2 px-3 py-1"
                style={{
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="h-2 w-2 rounded-full" style={{ background: 'var(--color-primary)' }} />
                <span className="text-xs font-medium" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-body)' }}>
                  {eyebrow}
                </span>
              </div>
            )}

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5vw, var(--font-h1))',
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
                className="mt-5 max-w-lg"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-body-size)',
                  lineHeight: 'var(--line-height)',
                  color: 'var(--color-text-muted)',
                }}
              >
                {subtitle}
              </p>
            )}

            {buttonText && (
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
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
              </div>
            )}

            {/* Trust row */}
            {trustLogos.length > 0 && (
              <div className="mt-12 flex flex-wrap items-center gap-5">
                {trustLogos.map((logo, i) => (
                  <span key={i} className="text-xs font-medium" style={{ color: 'var(--color-text-subtle)' }}>
                    {logo}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Bento grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Main image card */}
            {hasImage && (
              <div
                className="col-span-2 overflow-hidden"
                style={{
                  borderRadius: 'var(--card-radius)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <img src={heroImage} alt="Hero" className="h-64 w-full object-cover" />
              </div>
            )}

            {/* Feature cards */}
            {features.slice(0, 4).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                style={{
                  borderRadius: 'var(--card-radius)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  padding: 'var(--card-padding)',
                }}
              >
                <div
                  className="mb-3 h-8 w-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: 'var(--color-primary)', color: 'var(--btn-primary-text)', borderRadius: 'var(--radius-sm)' }}
                >
                  {i + 1}
                </div>
                <p
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                >
                  {feature}
                </p>
              </motion.div>
            ))}

            {/* Fallback cards if no features */}
            {features.length === 0 && !hasImage && (
              <>
                <div
                  className="col-span-2 flex items-center justify-center"
                  style={{
                    borderRadius: 'var(--card-radius)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface)',
                    height: '240px',
                  }}
                >
                  <span style={{ color: 'var(--color-text-subtle)' }}>Your Business Visual</span>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
