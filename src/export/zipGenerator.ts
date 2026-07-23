/**
 * ZIP Generator
 *
 * Creates a downloadable ZIP file from exported files.
 * Uses the browser's built-in Blob API for zero-dependency packaging.
 *
 * Note: For a production app, you'd use a library like JSZip.
 * This implementation creates a simple download of individual files
 * or uses JSZip if available.
 */

import type { ExportFile } from './types';

/**
 * Download a single file as a text blob.
 */
export function downloadFile(filename: string, content: string, mimeType: string = 'text/plain'): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Download all export files as individual downloads.
 * For a proper ZIP, install jszip: npm install jszip
 */
export function downloadAllFiles(files: ExportFile[], projectName: string): void {
  // If only one file (HTML export), download directly
  if (files.length === 1) {
    const file = files[0];
    const ext = file.path.split('.').pop() || 'txt';
    const mimeType = getMimeType(ext);
    downloadFile(`${projectName}.${ext}`, file.content, mimeType);
    return;
  }

  // For multi-file exports, create a simple manifest + main files
  // In production, you'd use JSZip here
  const manifest = files.map((f) => f.path).join('\n');

  // Download the most important files
  const mainFile = files.find((f) => f.path === 'index.html' || f.path === 'src/App.tsx' || f.path === 'app/page.tsx');
  const styleFile = files.find((f) => f.path.includes('theme.css') || f.path.includes('globals.css'));
  const configFile = files.find((f) => f.path === 'package.json');

  if (mainFile) downloadFile(mainFile.path.split('/').pop()!, mainFile.content, getMimeType('html'));
  if (styleFile) downloadFile('theme.css', styleFile.content, 'text/css');
  if (configFile) downloadFile('package.json', configFile.content, 'application/json');

  // Download file listing
  downloadFile('FILES.txt', manifest, 'text/plain');
}

/**
 * Generate a ZIP file using JSZip (if available).
 * Falls back to multi-file download if JSZip is not installed.
 */
export async function downloadAsZip(files: ExportFile[], projectName: string): Promise<void> {
  try {
    // Try dynamic import of JSZip
    // @ts-ignore - jszip is an optional peer dependency
    const JSZip = (await import('jszip')).default;
    const zip = new JSZip();

    for (const file of files) {
      zip.file(file.path, file.content);
    }

    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${projectName}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch {
    // JSZip not available, fall back to individual downloads
    console.warn('[Export] JSZip not available, downloading files individually');
    downloadAllFiles(files, projectName);
  }
}

/**
 * Get content as a single combined text for clipboard.
 */
export function getExportAsText(files: ExportFile[]): string {
  return files.map((f) =>
    `${'='.repeat(60)}\n// FILE: ${f.path}\n${'='.repeat(60)}\n\n${f.content}`
  ).join('\n\n');
}

function getMimeType(ext: string): string {
  const types: Record<string, string> = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ts: 'application/typescript',
    tsx: 'application/typescript',
    json: 'application/json',
    md: 'text/markdown',
  };
  return types[ext] || 'text/plain';
}
