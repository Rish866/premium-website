export type PreviewMode = "desktop" | "tablet" | "mobile";

export type BuilderSection = {
  id: string;
  page_id: string;
  type: string;
  sort_order: number;
  config: Record<string, any>;
  created_at?: string;
};

export type BuilderPageRecord = {
  id: string;
  project_id: string;
  title: string;
  slug: string;
  sort_order: number;
  is_home?: boolean;
};

export type SaveStatus = "idle" | "saving" | "saved" | "error";
