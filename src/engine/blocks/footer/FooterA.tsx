/**
 * Footer Variant A: Multi-column
 * Logo + tagline, links columns, contact info, and social.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type FooterAConfig = {
  brandName: string;
  tagline?: string;
  links?: string[];
  services?: string[];
  phone?: string;
  email?: string;
  address?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
};

export default function FooterA({ config }: BlockProps<FooterAConfig>) {
  const {
    brandName = 'Brand',
    tagline,
    links = [],
    services = [],
    phone,
    email,
    address,
    instagram,
    facebook,
    linkedin,
  } = config;

  const hasSocial = instagram || facebook || linkedin;

  return (
    <footer
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--section-y) var(--section-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand Column */}
          <div>
            <h3
              className="mb-3"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 'var(--font-heading-weight)',
                color: 'var(--color-text)',
              }}
            >
              {brandName}
            </h3>
            {tagline && (
              <p
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--line-height)',
                }}
              >
                {tagline}
              </p>
            )}
            {hasSocial && (
              <div className="flex gap-3">
                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center text-xs transition-colors"
                    style={{
                      background: 'var(--color-background)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    IG
                  </a>
                )}
                {facebook && (
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center text-xs transition-colors"
                    style={{
                      background: 'var(--color-background)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    FB
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center text-xs transition-colors"
                    style={{
                      background: 'var(--color-background)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    LI
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Links Column */}
          {links.length > 0 && (
            <div>
              <h4
                className="mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Services Column */}
          {services.length > 0 && (
            <div>
              <h4
                className="mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                Services
              </h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Column */}
          {(phone || email || address) && (
            <div>
              <h4
                className="mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                Contact
              </h4>
              <div className="space-y-2">
                {phone && (
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                  >
                    {phone}
                  </p>
                )}
                {email && (
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                  >
                    {email}
                  </p>
                )}
                {address && (
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {address}
                  </p>
                )}
              </div>
            </div>
          )}
        </motion.div>

        {/* Bottom Bar */}
        <div
          className="mt-10 pt-6 text-center"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
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
