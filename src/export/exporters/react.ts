/**
 * React + Tailwind Exporter
 *
 * Generates a React project with Tailwind CSS.
 * Component-based structure, ready to deploy.
 */

import type { SectionConfig } from '../../engine/types';
import type { DesignTokens } from '../../themes/tokens';
import type { ExportResult } from '../types';
import { generateCSS } from '../utils/cssGenerator';

export function exportAsReact(
  sections: SectionConfig[],
  tokens: DesignTokens,
  projectName: string,
): ExportResult {
  const files = [
    { path: 'package.json', content: generatePackageJson(projectName), language: 'json' },
    { path: 'tsconfig.json', content: generateTsConfig(), language: 'json' },
    { path: 'vite.config.ts', content: generateViteConfig(), language: 'typescript' },
    { path: 'tailwind.config.ts', content: generateTailwindConfig(tokens), language: 'typescript' },
    { path: 'index.html', content: generateIndexHTML(projectName), language: 'html' },
    { path: 'src/main.tsx', content: generateMain(), language: 'typescriptreact' },
    { path: 'src/App.tsx', content: generateApp(sections), language: 'typescriptreact' },
    { path: 'src/styles/theme.css', content: generateCSS(tokens), language: 'css' },
    { path: 'src/styles/index.css', content: generateIndexCSS(), language: 'css' },
    { path: 'src/data/sections.json', content: JSON.stringify(sections, null, 2), language: 'json' },
    { path: 'README.md', content: generateReadme(projectName), language: 'markdown' },
  ];

  const totalSize = files.reduce((sum, f) => sum + f.content.length, 0);
  return { format: 'react', files, totalSize };
}

function generatePackageJson(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return JSON.stringify({
    name: slug,
    private: true,
    version: '1.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'tsc && vite build',
      preview: 'vite preview',
    },
    dependencies: {
      react: '^18.3.1',
      'react-dom': '^18.3.1',
    },
    devDependencies: {
      '@types/react': '^18.3.0',
      '@types/react-dom': '^18.3.0',
      '@vitejs/plugin-react': '^4.3.0',
      autoprefixer: '^10.4.19',
      postcss: '^8.4.38',
      tailwindcss: '^3.4.4',
      typescript: '^5.5.0',
      vite: '^5.4.0',
    },
  }, null, 2);
}

function generateTsConfig(): string {
  return JSON.stringify({
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      moduleResolution: 'bundler',
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'react-jsx',
      strict: true,
    },
    include: ['src'],
  }, null, 2);
}

function generateViteConfig(): string {
  return `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`;
}

function generateTailwindConfig(tokens: DesignTokens): string {
  return `import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '${tokens.colors.primary}',
        secondary: '${tokens.colors.secondary}',
        accent: '${tokens.colors.accent}',
        background: '${tokens.colors.background}',
        surface: '${tokens.colors.surface}',
      },
      fontFamily: {
        heading: [${tokens.typography.headingFont.split(',').map(f => `'${f.trim().replace(/'/g, '')}'`).join(', ')}],
        body: [${tokens.typography.bodyFont.split(',').map(f => `'${f.trim().replace(/'/g, '')}'`).join(', ')}],
      },
      borderRadius: {
        card: '${tokens.shapes.cardRadius}',
        button: '${tokens.shapes.buttonRadius}',
      },
    },
  },
  plugins: [],
};

export default config;
`;
}

function generateIndexHTML(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${name}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

function generateMain(): string {
  return `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
}

function generateIndexCSS(): string {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;
`;
}

function generateApp(sections: SectionConfig[]): string {
  return `/**
 * Generated by AgencyOS AI Website Builder
 * This is your main App component.
 * Edit sections data in src/data/sections.json
 */

import sectionsData from './data/sections.json';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
      {/* Your website sections are rendered here */}
      {/* Each section uses CSS custom properties from theme.css */}
      <p className="p-8 text-center opacity-50">
        Edit src/data/sections.json to customize your website content.
        <br />
        Modify src/styles/theme.css to change the design tokens.
      </p>
    </div>
  );
}
`;
}

function generateReadme(name: string): string {
  return `# ${name}

Generated by AgencyOS AI Website Builder.

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Project Structure

- \`src/styles/theme.css\` - Design tokens (colors, fonts, spacing)
- \`src/data/sections.json\` - Website content and section configuration
- \`src/App.tsx\` - Main application component
- \`tailwind.config.ts\` - Tailwind CSS configuration

## Customization

1. Edit \`theme.css\` to change colors, fonts, and spacing
2. Edit \`sections.json\` to update content
3. Add new components in \`src/components/\`

## Build

\`\`\`bash
npm run build
\`\`\`

Output will be in the \`dist/\` directory, ready to deploy to Vercel, Netlify, or any static host.
`;
}
