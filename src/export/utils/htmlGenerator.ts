/**
 * HTML Section Generator
 *
 * Converts SectionConfigs into semantic HTML strings.
 * Each section type maps to clean, accessible HTML.
 */

import type { SectionConfig } from '../../engine/types';

/**
 * Generate HTML for a single section.
 */
export function generateSectionHTML(section: SectionConfig): string {
  const config = section.config as Record<string, any>;

  switch (section.type) {
    case 'navbar':
      return generateNavbarHTML(config);
    case 'hero':
      return generateHeroHTML(config, section.variant);
    case 'features':
      return generateFeaturesHTML(config);
    case 'about':
      return generateAboutHTML(config);
    case 'gallery':
      return generateGalleryHTML(config);
    case 'testimonials':
      return generateTestimonialsHTML(config);
    case 'pricing':
      return generatePricingHTML(config);
    case 'faq':
      return generateFaqHTML(config);
    case 'contact':
      return generateContactHTML(config);
    case 'cta':
      return generateCtaHTML(config);
    case 'stats':
      return generateStatsHTML(config);
    case 'footer':
      return generateFooterHTML(config);
    default:
      return `<!-- Section: ${section.type} -->\n<section class="section"><div class="container"><p>Section: ${section.type}</p></div></section>`;
  }
}

function generateNavbarHTML(config: Record<string, any>): string {
  const links = (config.links || []).map((link: string) =>
    `      <a href="#${link.toLowerCase()}" class="nav-link">${link}</a>`
  ).join('\n');

  return `  <header class="navbar">
    <nav class="container navbar-inner">
      <a href="/" class="navbar-brand">${config.brandName || 'Brand'}</a>
      <div class="navbar-links">
${links}
      </div>
${config.ctaText ? `      <a href="#contact" class="btn-primary">${config.ctaText}</a>` : ''}
    </nav>
  </header>`;
}

function generateHeroHTML(config: Record<string, any>, variant: string): string {
  const centered = variant === 'B' || variant === 'C';
  return `  <section class="hero${centered ? ' hero--centered' : ''}">
    <div class="container hero-inner">
      <div class="hero-content${centered ? ' hero-content--centered' : ''}">
${config.eyebrow ? `        <span class="eyebrow">${config.eyebrow}</span>` : ''}
        <h1>${config.title || 'Welcome'}</h1>
${config.subtitle ? `        <p class="hero-subtitle">${config.subtitle}</p>` : ''}
        <div class="hero-actions">
${config.buttonText ? `          <a href="#contact" class="btn-primary">${config.buttonText}</a>` : ''}
${config.secondaryButtonText ? `          <a href="#about" class="btn-secondary">${config.secondaryButtonText}</a>` : ''}
        </div>
      </div>
${config.heroImage ? `      <div class="hero-image">
        <img src="${config.heroImage}" alt="${config.title || 'Hero'}" loading="eager" />
      </div>` : ''}
    </div>
  </section>`;
}

function generateFeaturesHTML(config: Record<string, any>): string {
  const items = (config.items || []).map((item: any) => {
    const title = typeof item === 'string' ? item : item.title;
    const desc = typeof item === 'string' ? '' : item.description || '';
    return `        <div class="card feature-card">
          <h3>${title}</h3>
${desc ? `          <p>${desc}</p>` : ''}
        </div>`;
  }).join('\n');

  return `  <section id="services" class="section">
    <div class="container">
      <div class="section-header">
${config.eyebrow ? `        <span class="eyebrow">${config.eyebrow}</span>` : ''}
        <h2>${config.title || 'Our Services'}</h2>
${config.subtitle ? `        <p>${config.subtitle}</p>` : ''}
      </div>
      <div class="features-grid">
${items}
      </div>
    </div>
  </section>`;
}

function generateAboutHTML(config: Record<string, any>): string {
  return `  <section id="about" class="section">
    <div class="container about-inner">
      <div class="about-content">
${config.eyebrow ? `        <span class="eyebrow">${config.eyebrow}</span>` : ''}
        <h2>${config.title || 'About Us'}</h2>
        <p>${config.description || ''}</p>
${config.mission ? `        <blockquote class="mission">${config.mission}</blockquote>` : ''}
      </div>
${config.image ? `      <div class="about-image">
        <img src="${config.image}" alt="About us" loading="lazy" />
      </div>` : ''}
    </div>
  </section>`;
}

function generateGalleryHTML(config: Record<string, any>): string {
  const images = (config.images || []).map((img: string, i: number) =>
    `        <div class="gallery-item">
          <img src="${img}" alt="Gallery image ${i + 1}" loading="lazy" />
        </div>`
  ).join('\n');

  return `  <section id="gallery" class="section">
    <div class="container">
      <div class="section-header">
        <h2>${config.title || 'Gallery'}</h2>
      </div>
      <div class="gallery-grid">
${images}
      </div>
    </div>
  </section>`;
}

function generateTestimonialsHTML(config: Record<string, any>): string {
  const items = (config.items || []).map((item: any) =>
    `        <div class="card testimonial-card">
          <div class="stars">${'★'.repeat(item.rating || 5)}</div>
          <blockquote>"${item.quote}"</blockquote>
          <cite>
            <strong>${item.name}</strong>
${item.role ? `            <span>${item.role}</span>` : ''}
          </cite>
        </div>`
  ).join('\n');

  return `  <section id="testimonials" class="section">
    <div class="container">
      <div class="section-header">
${config.eyebrow ? `        <span class="eyebrow">${config.eyebrow}</span>` : ''}
        <h2>${config.title || 'Testimonials'}</h2>
      </div>
      <div class="testimonials-grid">
${items}
      </div>
    </div>
  </section>`;
}

function generatePricingHTML(config: Record<string, any>): string {
  const plans = (config.plans || []).map((plan: any) => {
    const features = (plan.features || []).map((f: string) =>
      `            <li><span class="check">✓</span> ${f}</li>`
    ).join('\n');

    return `        <div class="card pricing-card${plan.popular ? ' pricing-card--popular' : ''}">
${plan.popular ? '          <span class="badge">Most Popular</span>' : ''}
          <h3>${plan.name}</h3>
          <div class="price">${plan.price}</div>
          <ul class="features-list">
${features}
          </ul>
          <a href="#contact" class="btn-primary">Get Started</a>
        </div>`;
  }).join('\n');

  return `  <section id="pricing" class="section">
    <div class="container">
      <div class="section-header">
${config.eyebrow ? `        <span class="eyebrow">${config.eyebrow}</span>` : ''}
        <h2>${config.title || 'Pricing'}</h2>
${config.subtitle ? `        <p>${config.subtitle}</p>` : ''}
      </div>
      <div class="pricing-grid">
${plans}
      </div>
    </div>
  </section>`;
}

function generateFaqHTML(config: Record<string, any>): string {
  const items = (config.items || []).map((item: any, i: number) =>
    `        <details class="faq-item"${i === 0 ? ' open' : ''}>
          <summary>${item.question}</summary>
          <p>${item.answer}</p>
        </details>`
  ).join('\n');

  return `  <section id="faq" class="section">
    <div class="container">
      <div class="section-header">
        <h2>${config.title || 'FAQ'}</h2>
${config.subtitle ? `        <p>${config.subtitle}</p>` : ''}
      </div>
      <div class="faq-list">
${items}
      </div>
    </div>
  </section>`;
}

function generateContactHTML(config: Record<string, any>): string {
  return `  <section id="contact" class="section">
    <div class="container contact-inner">
      <div class="contact-form">
        <h2>${config.title || 'Contact Us'}</h2>
${config.subtitle ? `        <p>${config.subtitle}</p>` : ''}
        <form action="#" method="POST">
          <div class="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" class="btn-primary">Send Message</button>
        </form>
      </div>
      <div class="contact-info">
${config.phone ? `        <p><strong>Phone:</strong> ${config.phone}</p>` : ''}
${config.email ? `        <p><strong>Email:</strong> ${config.email}</p>` : ''}
${config.address ? `        <p><strong>Address:</strong> ${config.address}</p>` : ''}
${config.openingHours ? `        <p><strong>Hours:</strong> ${config.openingHours}</p>` : ''}
      </div>
    </div>
  </section>`;
}

function generateCtaHTML(config: Record<string, any>): string {
  return `  <section class="cta-section">
    <div class="container cta-inner">
${config.eyebrow ? `      <span class="eyebrow">${config.eyebrow}</span>` : ''}
      <h2>${config.title || 'Ready to Get Started?'}</h2>
${config.subtitle ? `      <p>${config.subtitle}</p>` : ''}
      <div class="cta-actions">
${config.buttonText ? `        <a href="#contact" class="btn-primary">${config.buttonText}</a>` : ''}
${config.secondaryButtonText ? `        <a href="#about" class="btn-secondary">${config.secondaryButtonText}</a>` : ''}
      </div>
    </div>
  </section>`;
}

function generateStatsHTML(config: Record<string, any>): string {
  const items = (config.items || []).map((item: any) =>
    `        <div class="stat-item">
          <div class="stat-value">${item.value}</div>
          <div class="stat-label">${item.label}</div>
        </div>`
  ).join('\n');

  return `  <section class="stats-section">
    <div class="container stats-grid">
${items}
    </div>
  </section>`;
}

function generateFooterHTML(config: Record<string, any>): string {
  const links = (config.links || []).map((link: string) =>
    `          <li><a href="#${link.toLowerCase()}">${link}</a></li>`
  ).join('\n');

  return `  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <h3>${config.brandName || 'Brand'}</h3>
${config.tagline ? `        <p>${config.tagline}</p>` : ''}
      </div>
${links ? `      <nav class="footer-links">
        <ul>
${links}
        </ul>
      </nav>` : ''}
      <div class="footer-contact">
${config.phone ? `        <p>${config.phone}</p>` : ''}
${config.email ? `        <p>${config.email}</p>` : ''}
${config.address ? `        <p>${config.address}</p>` : ''}
      </div>
    </div>
    <div class="container footer-bottom">
      <p>&copy; ${new Date().getFullYear()} ${config.brandName || 'Brand'}. All rights reserved.</p>
    </div>
  </footer>`;
}
