/**
 * Contact Variant A: Split Layout
 * Form on the left, contact information on the right.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type ContactAConfig = {
  title: string;
  subtitle?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  address?: string;
  openingHours?: string;
};

export default function ContactA({ config }: BlockProps<ContactAConfig>) {
  const {
    title = 'Get In Touch',
    subtitle,
    phone,
    email,
    whatsapp,
    address,
    openingHours,
  } = config;

  return (
    <section
      style={{
        background: 'var(--color-background)',
        padding: 'var(--section-y) var(--section-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-2"
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
                className="mb-8"
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

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              </div>
              <input
                type="text"
                placeholder="Subject"
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
            </form>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div
              className="p-8"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--card-radius)',
              }}
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 'var(--font-heading-weight)',
                  color: 'var(--color-text)',
                }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                {phone && (
                  <div className="flex items-start gap-3">
                    <span style={{ color: 'var(--color-primary)' }}>📞</span>
                    <div>
                      <p
                        className="text-xs font-medium uppercase"
                        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                      >
                        Phone
                      </p>
                      <p
                        style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                      >
                        {phone}
                      </p>
                    </div>
                  </div>
                )}
                {email && (
                  <div className="flex items-start gap-3">
                    <span style={{ color: 'var(--color-primary)' }}>✉️</span>
                    <div>
                      <p
                        className="text-xs font-medium uppercase"
                        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                      >
                        Email
                      </p>
                      <p
                        style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                      >
                        {email}
                      </p>
                    </div>
                  </div>
                )}
                {whatsapp && (
                  <div className="flex items-start gap-3">
                    <span style={{ color: 'var(--color-primary)' }}>💬</span>
                    <div>
                      <p
                        className="text-xs font-medium uppercase"
                        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                      >
                        WhatsApp
                      </p>
                      <p
                        style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                      >
                        {whatsapp}
                      </p>
                    </div>
                  </div>
                )}
                {address && (
                  <div className="flex items-start gap-3">
                    <span style={{ color: 'var(--color-primary)' }}>📍</span>
                    <div>
                      <p
                        className="text-xs font-medium uppercase"
                        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                      >
                        Address
                      </p>
                      <p
                        style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                      >
                        {address}
                      </p>
                    </div>
                  </div>
                )}
                {openingHours && (
                  <div className="flex items-start gap-3">
                    <span style={{ color: 'var(--color-primary)' }}>🕐</span>
                    <div>
                      <p
                        className="text-xs font-medium uppercase"
                        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                      >
                        Opening Hours
                      </p>
                      <p
                        style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                      >
                        {openingHours}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
