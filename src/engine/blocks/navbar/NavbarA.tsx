/**
 * Navbar Variant A: Classic
 * Logo left, navigation links center, CTA button right.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type NavbarAConfig = {
  brandName: string;
  links?: string[];
  ctaText?: string;
};

export default function NavbarA({ config }: BlockProps<NavbarAConfig>) {
  const {
    brandName = 'Brand',
    links = [],
    ctaText,
  } = config;

  return (
    <header
      style={{
        background: 'var(--color-background)',
        borderBottom: '1px solid var(--color-border)',
        padding: '1rem var(--section-x)',
      }}
    >
      <nav className="mx-auto flex items-center justify-between" style={{ maxWidth: 'var(--container-max)' }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 'var(--font-heading-weight)',
              color: 'var(--color-text)',
            }}
          >
            {brandName}
          </span>
        </motion.div>

        {/* Center Links */}
        {links.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden items-center gap-8 md:flex"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-sm transition-colors hover:opacity-80"
                style={{
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '500',
                }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {ctaText && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2 text-sm font-semibold transition-colors"
              style={{
                background: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-text)',
                borderRadius: 'var(--button-radius)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {ctaText}
            </motion.button>
          )}
        </motion.div>
      </nav>
    </header>
  );
}
