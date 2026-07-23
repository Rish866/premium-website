/**
 * Export Module - Public API
 *
 * Provides functions to export generated websites as production-ready code.
 */

import type { SectionConfig } from '../engine/types';
import type { DesignTokens } from '../themes/tokens';
import type { ExportFormat, ExportResult, ExportOptions } from './types';
import { exportAsHTML } from './exporters/html';
import { exportAsReact } from './exporters/react';
import { exportAsNextJS } from './exporters/nextjs';
import { downloadAsZip, downloadFile, getExportAsText } from './zipGenerator';

export type { ExportFormat, ExportResult, ExportOptions, ExportFile } from './types';

/**
 * Export a website in the specified format.
 */
export function exportWebsite(
  sections: SectionConfig[],
  tokens: DesignTokens,
  options: ExportOptions,
): ExportResult {
  const projectName = options.projectName || 'my-website';

  switch (options.format) {
    case 'html':
      return exportAsHTML(sections, tokens, projectName);
    case 'react':
      return exportAsReact(sections, tokens, projectName);
    case 'nextjs':
      return exportAsNextJS(sections, tokens, projectName);
    default:
      return exportAsHTML(sections, tokens, projectName);
  }
}

/**
 * Export and trigger download as ZIP.
 */
export async function exportAndDownload(
  sections: SectionConfig[],
  tokens: DesignTokens,
  options: ExportOptions,
): Promise<void> {
  const result = exportWebsite(sections, tokens, options);
  const projectName = options.projectName || 'my-website';

  if (result.files.length === 1) {
    // Single file (HTML) - download directly
    downloadFile(`${projectName}.html`, result.files[0].content, 'text/html');
  } else {
    // Multi-file - download as ZIP
    await downloadAsZip(result.files, projectName);
  }
}

/**
 * Get export as copyable text (for clipboard).
 */
export function exportAsText(
  sections: SectionConfig[],
  tokens: DesignTokens,
  options: ExportOptions,
): string {
  const result = exportWebsite(sections, tokens, options);
  return getExportAsText(result.files);
}

/**
 * Get file count and size estimate for an export format.
 */
export function getExportEstimate(
  sections: SectionConfig[],
  tokens: DesignTokens,
  format: ExportFormat,
): { fileCount: number; estimatedSize: string } {
  const result = exportWebsite(sections, tokens, { format, includeImages: false, minify: false });
  const sizeKB = Math.ceil(result.totalSize / 1024);
  return {
    fileCount: result.files.length,
    estimatedSize: sizeKB < 1024 ? `${sizeKB} KB` : `${(sizeKB / 1024).toFixed(1)} MB`,
  };
}
