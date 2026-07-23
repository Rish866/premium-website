/**
 * Pricing Variant B: Comparison Table
 * Table-style pricing layout with feature comparison across plans.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type PricingBConfig = {
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

export default function PricingB({ config }: BlockProps<PricingBConfig>) {
  const {
    eyebrow,
    title = 'Compare Plans',
    subtitle,
    plans = [],
  } = config;

  // Collect all unique features
  const allFeatures = Array.from(
    new Set(plans.flatMap((plan) => plan.features))
  );

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

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--card-radius)',
          }}
        >
          <table className="w-full">
            {/* Plan Headers */}
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th
                  className="p-6 text-left"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    fontWeight: '500',
                  }}
                >
                  Features
                </th>
                {plans.map((plan, index) => (
                  <th key={index} className="p-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                      {plan.popular && (
                        <span
                          className="mb-1 inline-block px-3 py-0.5 text-[10px] font-semibold uppercase"
                          style={{
                            background: 'var(--btn-primary-bg)',
                            color: 'var(--btn-primary-text)',
                            borderRadius: 'var(--radius-full)',
                          }}
                        >
                          Popular
                        </span>
                      )}
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.125rem',
                          fontWeight: 'var(--font-heading-weight)',
                          color: 'var(--color-text)',
                        }}
                      >
                        {plan.name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.5rem',
                          fontWeight: 'var(--font-heading-weight)',
                          color: 'var(--color-primary)',
                        }}
                      >
                        {plan.price}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Features Rows */}
            <tbody>
              {allFeatures.map((feature, fIndex) => (
                <tr
                  key={fIndex}
                  style={{
                    borderBottom:
                      fIndex < allFeatures.length - 1
                        ? '1px solid var(--color-border)'
                        : undefined,
                  }}
                >
                  <td
                    className="p-4 pl-6"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    {feature}
                  </td>
                  {plans.map((plan, pIndex) => (
                    <td key={pIndex} className="p-4 text-center">
                      {plan.features.includes(feature) ? (
                        <span
                          className="inline-flex h-5 w-5 items-center justify-center rounded-full text-xs"
                          style={{
                            background: 'var(--color-primary)',
                            color: 'var(--btn-primary-text)',
                          }}
                        >
                          ✓
                        </span>
                      ) : (
                        <span style={{ color: 'var(--color-text-muted)' }}>—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            {/* CTA Row */}
            <tfoot>
              <tr style={{ borderTop: '1px solid var(--color-border)' }}>
                <td className="p-6" />
                {plans.map((plan, index) => (
                  <td key={index} className="p-6 text-center">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-2.5 text-sm font-semibold transition-colors"
                      style={{
                        background: plan.popular
                          ? 'var(--btn-primary-bg)'
                          : 'var(--btn-secondary-bg)',
                        color: plan.popular
                          ? 'var(--btn-primary-text)'
                          : 'var(--btn-secondary-text)',
                        border: plan.popular ? 'none' : 'var(--btn-secondary-border)',
                        borderRadius: 'var(--button-radius)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      Choose Plan
                    </motion.button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
