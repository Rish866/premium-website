/**
 * Footer Variant B: Minimal Single-Row
 * Clean, minimal footer with brand, links, and contact in one row.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type FooterBConfig = {
  brandName: string;
  links?: string[];
  phone?: string;
  email?: string;
};

export default function FooterB({ config }: BlockProps<FooterBConfig>) {
  const {
    brandName = 'Brand',
    links = [],
    phone,
    email,
  } = config;

  return (
    <footer
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: '2rem var(--section-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          {/* Brand */}
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.125rem',
              fontWeight: 'var(--font-heading-weight)',
              color: 'var(--color-text)',
            }}
          >
            {brandName}
          </span>

          {/* Links */}
          {links.length > 0 && (
            <nav className="flex flex-wrap items-center gap-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {link}
                </a>
              ))}
            </nav>
          )}

          {/* Contact */}
          <div className="flex items-center gap-4">
            {phone && (
              <span
                className="text-sm"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                {phone}
              </span>
            )}
            {email && (
              <span
                className="text-sm"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                {email}
              </span>
            )}
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-4 text-center md:mt-6">
          <p
            className="text-xs"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
          >
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
