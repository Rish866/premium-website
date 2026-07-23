/**
 * Hero Variant C: Fullscreen Video/Image
 * Full-viewport hero with overlay text and floating elements.
 * Bold and immersive. Great for bold, dark, and modern presets.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type HeroCConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  heroImage?: string;
  stats?: { value: string; label: string }[];
};

export default function HeroC({ config }: BlockProps<HeroCConfig>) {
  const {
    eyebrow,
    title = 'Your Business, Elevated',
    subtitle,
    buttonText,
    heroImage,
    stats = [],
  } = config;

  const hasImage = heroImage && (heroImage.startsWith('http') || heroImage.startsWith('data:'));

  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden pb-20"
      style={{ background: 'var(--color-background)' }}
    >
      {/* Background */}
      {hasImage ? (
        <>
          <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(160deg, var(--color-background) 0%, var(--color-primary-dark) 100%)`,
              opacity: 0.5,
            }}
          />
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
        </div>
      )}

      {/* Floating accent shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full blur-[100px] opacity-30"
        style={{ background: 'var(--color-primary)' }}
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[15%] top-[40%] h-48 w-48 rounded-full blur-[80px] opacity-20"
        style={{ background: 'var(--color-secondary)' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6" style={{ maxWidth: 'var(--container-max)', marginInline: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {eyebrow && (
            <span
              className="mb-4 inline-block text-sm font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-primary)' }}
            >
              {eyebrow}
            </span>
          )}

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 'var(--font-heading-weight)',
              lineHeight: '1.05',
              letterSpacing: 'var(--heading-letter-spacing)',
              color: hasImage ? '#ffffff' : 'var(--color-text)',
              maxWidth: '800px',
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="mt-6 max-w-lg"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: hasImage ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)',
              }}
            >
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex items-center gap-6">
            {buttonText && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                  padding: '1rem 2.5rem',
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
          </div>
        </motion.div>

        {/* Stats bar */}
        {stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 flex flex-wrap gap-12"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: hasImage ? '#ffffff' : 'var(--color-text)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1 text-sm"
                  style={{ color: hasImage ? 'rgba(255,255,255,0.5)' : 'var(--color-text-subtle)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
