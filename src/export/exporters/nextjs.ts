/**
 * Next.js Exporter
 *
 * Generates a Next.js (App Router) project structure.
 * Includes metadata, server components, and optimized images.
 */

import type { SectionConfig } from '../../engine/types';
import type { DesignTokens } from '../../themes/tokens';
import type { ExportResult } from '../types';
import { generateCSS } from '../utils/cssGenerator';

export function exportAsNextJS(
  sections: SectionConfig[],
  tokens: DesignTokens,
  projectName: string,
): ExportResult {
  const files = [
    { path: 'package.json', content: generatePackageJson(projectName), language: 'json' },
    { path: 'tsconfig.json', content: generateTsConfig(), language: 'json' },
    { path: 'next.config.ts', content: generateNextConfig(), language: 'typescript' },
    { path: 'tailwind.config.ts', content: generateTailwindConfig(tokens), language: 'typescript' },
    { path: 'postcss.config.js', content: generatePostCSSConfig(), language: 'javascript' },
    { path: 'app/layout.tsx', content: generateLayout(projectName, tokens), language: 'typescriptreact' },
    { path: 'app/page.tsx', content: generatePage(sections), language: 'typescriptreact' },
    { path: 'app/globals.css', content: generateGlobalsCSS(tokens), language: 'css' },
    { path: 'data/sections.json', content: JSON.stringify(sections, null, 2), language: 'json' },
    { path: 'README.md', content: generateReadme(projectName), language: 'markdown' },
  ];

  const totalSize = files.reduce((sum, f) => sum + f.content.length, 0);
  return { format: 'nextjs', files, totalSize };
}

function generatePackageJson(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return JSON.stringify({
    name: slug,
    version: '1.0.0',
    private: true,
    scripts: {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
      lint: 'next lint',
    },
    dependencies: {
      next: '^14.2.0',
      react: '^18.3.1',
      'react-dom': '^18.3.1',
    },
    devDependencies: {
      '@types/node': '^20.14.0',
      '@types/react': '^18.3.0',
      '@types/react-dom': '^18.3.0',
      autoprefixer: '^10.4.19',
      postcss: '^8.4.38',
      tailwindcss: '^3.4.4',
      typescript: '^5.5.0',
    },
  }, null, 2);
}

function generateTsConfig(): string {
  return JSON.stringify({
    compilerOptions: {
      target: 'ES2017',
      lib: ['dom', 'dom.iterable', 'esnext'],
      allowJs: true,
      skipLibCheck: true,
      strict: true,
      noEmit: true,
      esModuleInterop: true,
      module: 'esnext',
      moduleResolution: 'bundler',
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: 'preserve',
      incremental: true,
      plugins: [{ name: 'next' }],
      paths: { '@/*': ['./*'] },
    },
    include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
    exclude: ['node_modules'],
  }, null, 2);
}

function generateNextConfig(): string {
  return `import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
`;
}

function generateTailwindConfig(tokens: DesignTokens): string {
  return `import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '${tokens.colors.primary}',
        secondary: '${tokens.colors.secondary}',
        accent: '${tokens.colors.accent}',
      },
      fontFamily: {
        heading: [${tokens.typography.headingFont.split(',').map(f => `'${f.trim().replace(/'/g, '')}'`).join(', ')}],
        body: [${tokens.typography.bodyFont.split(',').map(f => `'${f.trim().replace(/'/g, '')}'`).join(', ')}],
      },
    },
  },
  plugins: [],
};

export default config;
`;
}

function generatePostCSSConfig(): string {
  return `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`;
}

function generateLayout(name: string, tokens: DesignTokens): string {
  return `import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '${name}',
  description: '${name} - Professional website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
`;
}

function generatePage(sections: SectionConfig[]): string {
  return `/**
 * Generated by AgencyOS AI Website Builder
 * This is a Next.js Server Component.
 */

import sectionsData from '@/data/sections.json';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
      {/* Your website sections */}
      {/* Content is defined in data/sections.json */}
      {/* Styles come from CSS custom properties in globals.css */}
      <p className="p-8 text-center opacity-50">
        Your AI-generated website. Edit data/sections.json for content.
      </p>
    </main>
  );
}
`;
}

function generateGlobalsCSS(tokens: DesignTokens): string {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

${generateCSS(tokens)}`;
}

function generateReadme(name: string): string {
  return `# ${name}

A Next.js website generated by AgencyOS AI Website Builder.

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- \`app/\` - Next.js App Router pages
- \`app/globals.css\` - Design tokens and global styles
- \`data/sections.json\` - Website content configuration
- \`components/\` - Reusable React components (add your own)

## Deploy

Deploy on [Vercel](https://vercel.com):

\`\`\`bash
npx vercel
\`\`\`

Or build for production:

\`\`\`bash
npm run build
npm run start
\`\`\`
`;
}
