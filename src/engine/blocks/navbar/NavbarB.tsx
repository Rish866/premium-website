/**
 * Navbar Variant B: Minimal with Hamburger
 * Logo left, hamburger-style menu icon right.
 */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { BlockProps } from '../../types';

type NavbarBConfig = {
  brandName: string;
  links?: string[];
  ctaText?: string;
};

export default function NavbarB({ config }: BlockProps<NavbarBConfig>) {
  const {
    brandName = 'Brand',
    links = [],
    ctaText,
  } = config;

  const [isOpen, setIsOpen] = useState(false);

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

        {/* Hamburger Button */}
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--card-radius)',
          }}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5"
            style={{ background: 'var(--color-text)' }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-5"
            style={{ background: 'var(--color-text)' }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5"
            style={{ background: 'var(--color-text)' }}
          />
        </motion.button>
      </nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="mx-auto mt-4 flex flex-col gap-2 py-4"
              style={{
                maxWidth: 'var(--container-max)',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="py-2 text-sm transition-colors hover:opacity-80"
                  style={{
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: '500',
                  }}
                >
                  {link}
                </a>
              ))}
              {ctaText && (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 w-full py-2.5 text-sm font-semibold transition-colors"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
