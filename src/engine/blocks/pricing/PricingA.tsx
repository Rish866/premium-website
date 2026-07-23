/**
 * Pricing Variant A: Side-by-side Cards
 * Pricing cards displayed side by side with a popular badge highlight.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type PricingAConfig = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  plans: {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
};

export default function PricingA({ config }: BlockProps<PricingAConfig>) {
  const {
    eyebrow,
    title = 'Pricing Plans',
    subtitle,
    plans = [],
  } = config;

  return (
    <section
      style={{
        background: 'var(--color-background)',
        padding: 'var(--section-y) var(--section-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <span
              className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-body)' }}
            >
              {eyebrow}
            </span>
          )}
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
              className="mx-auto mt-4 max-w-2xl"
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

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col p-8"
              style={{
                background: 'var(--color-surface)',
                border: plan.popular
                  ? '2px solid var(--color-primary)'
                  : '1px solid var(--color-border)',
                borderRadius: 'var(--card-radius)',
                boxShadow: plan.popular ? '0 8px 32px rgba(0,0,0,0.12)' : undefined,
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold"
                  style={{
                    background: 'var(--btn-primary-bg)',
                    color: 'var(--btn-primary-text)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 'var(--font-heading-weight)',
                  color: 'var(--color-text)',
                }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-h2)',
                    fontWeight: 'var(--font-heading-weight)',
                    color: 'var(--color-text)',
                  }}
                >
                  {plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    <span style={{ color: 'var(--color-primary)' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 text-center transition-colors"
                style={{
                  background: plan.popular ? 'var(--btn-primary-bg)' : 'var(--btn-secondary-bg)',
                  color: plan.popular ? 'var(--btn-primary-text)' : 'var(--btn-secondary-text)',
                  border: plan.popular ? 'none' : 'var(--btn-secondary-border)',
                  borderRadius: 'var(--button-radius)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
