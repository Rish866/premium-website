export type Project = {
  id: string;
  owner?: string;
  name: string;
  slug: string | null;
  industry: string | null;
  description: string | null;
  logo: string | null;
  primary_color: string | null;
  secondary_color: string | null;
  template: string | null;
  published: boolean | null;
  custom_domain: string | null;
  created_at: string | null;
  updated_at: string | null;
};
