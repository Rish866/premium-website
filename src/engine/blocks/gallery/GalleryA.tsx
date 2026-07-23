/**
 * Gallery Variant A: Masonry Grid
 * Masonry-style image grid with hover zoom effect.
 */
import { motion } from 'framer-motion';
import type { BlockProps } from '../../types';

type GalleryAConfig = {
  eyebrow?: string;
  title: string;
  images: string[];
};

export default function GalleryA({ config }: BlockProps<GalleryAConfig>) {
  const { eyebrow, title = 'Our Gallery', images = [] } = config;

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

        {/* Masonry Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 break-inside-avoid overflow-hidden"
              style={{ borderRadius: 'var(--card-radius)' }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                style={{ borderRadius: 'var(--card-radius)' }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="h-auto w-full object-cover"
                  style={{
                    minHeight: index % 3 === 0 ? '300px' : '200px',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {images.length === 0 && (
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--card-radius)',
                  height: i % 3 === 0 ? '300px' : '200px',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                }}
              >
                Image {i}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
