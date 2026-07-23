/**
 * Gallery Variant B: Horizontal Carousel
 * Full-width horizontal carousel/slider with navigation.
 */
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { BlockProps } from '../../types';

type GalleryBConfig = {
  eyebrow?: string;
  title: string;
  images: string[];
};

export default function GalleryB({ config }: BlockProps<GalleryBConfig>) {
  const { eyebrow, title = 'Our Gallery', images = [] } = config;
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayImages = images.length > 0 ? images : [];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

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

        {/* Carousel */}
        {displayImages.length > 0 ? (
          <div className="relative overflow-hidden" style={{ borderRadius: 'var(--card-radius)' }}>
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {displayImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <img
                    src={image}
                    alt={`Gallery slide ${index + 1}`}
                    className="h-[400px] w-full object-cover lg:h-[500px]"
                    style={{ borderRadius: 'var(--card-radius)' }}
                  />
                </div>
              ))}
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-80"
              style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-80"
              style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              →
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {displayImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="h-2 w-2 rounded-full transition-all"
                  style={{
                    background: index === currentIndex
                      ? 'var(--color-primary)'
                      : 'var(--color-border)',
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            className="flex h-[400px] items-center justify-center"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--card-radius)',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-body)',
            }}
          >
            No images to display
          </div>
        )}
      </div>
    </section>
  );
}
