/**
 * Contact Variant B: Centered Form
 * Minimal centered contact form layout.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type ContactBConfig = {
  title: string;
  subtitle?: string;
  phone?: string;
  email?: string;
  address?: string;
};

export default function ContactB({ config }: BlockProps<ContactBConfig>) {
  const {
    title = 'Contact Us',
    subtitle,
    phone,
    email,
    address,
  } = config;

  return (
    <section
      style={{
        background: 'var(--color-background)',
        padding: 'var(--section-y) var(--section-x)',
      }}
    >
      <div className="mx-auto max-w-2xl" style={{ maxWidth: '42rem' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2
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
              className="mt-3"
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
        </motion.div>

        {/* Contact Snippets */}
        {(phone || email || address) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-6"
          >
            {phone && (
              <span
                className="text-sm"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                📞 {phone}
              </span>
            )}
            {email && (
              <span
                className="text-sm"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                ✉️ {email}
              </span>
            )}
            {address && (
              <span
                className="text-sm"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                📍 {address}
              </span>
            )}
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 outline-none transition-colors"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--card-radius)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--color-text)',
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 outline-none transition-colors"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--card-radius)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--color-text)',
            }}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full resize-none px-4 py-3 outline-none transition-colors"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--card-radius)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--color-text)',
            }}
          />
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-8 py-3 font-semibold transition-colors"
              style={{
                background: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-text)',
                borderRadius: 'var(--button-radius)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
              }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
