/**
 * Team Variant A: Grid of Cards
 * Team member cards with photo, name, role, and optional bio.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type TeamAConfig = {
  eyebrow?: string;
  title: string;
  members: {
    name: string;
    role: string;
    image?: string;
    bio?: string;
  }[];
};

export default function TeamA({ config }: BlockProps<TeamAConfig>) {
  const {
    eyebrow,
    title = 'Our Team',
    members = [],
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
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member, index) => {
            const hasImage =
              member.image &&
              (member.image.startsWith('http') || member.image.startsWith('data:'));

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--card-radius)',
                  padding: '2rem 1.5rem',
                }}
              >
                {/* Photo */}
                <div
                  className="mx-auto mb-4 flex items-center justify-center overflow-hidden"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-background)',
                    border: '2px solid var(--color-border)',
                  }}
                >
                  {hasImage ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span
                      className="text-2xl font-bold"
                      style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
                    >
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                  }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p
                  className="mb-3 text-sm"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-primary)',
                  }}
                >
                  {member.role}
                </p>

                {/* Bio */}
                {member.bio && (
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 'var(--line-height)',
                    }}
                  >
                    {member.bio}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
