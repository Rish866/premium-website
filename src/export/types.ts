/**
 * Export System Types
 */

export type ExportFormat = 'html' | 'react' | 'nextjs';

export type ExportFile = {
  path: string;
  content: string;
  language?: string;
};

export type ExportResult = {
  format: ExportFormat;
  files: ExportFile[];
  /** Total character count for estimation */
  totalSize: number;
};

export type ExportOptions = {
  format: ExportFormat;
  includeImages: boolean;
  minify: boolean;
  projectName?: string;
};
