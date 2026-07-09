import { supabase } from "../../lib/supabase/client";

export type PublishStatus = {
  published: boolean;
  slug: string | null;
  custom_domain: string | null;
  published_at: string | null;
};

export async function publishProject(projectId: string): Promise<PublishStatus> {
  const { data, error } = await supabase
    .from("projects")
    .update({
      published: true,
      updated_at: new Date().toISOString(),
    })
    .eq("id", projectId)
    .select("published, slug, custom_domain, updated_at")
    .single();

  if (error) throw error;

  return {
    published: data.published,
    slug: data.slug,
    custom_domain: data.custom_domain,
    published_at: data.updated_at,
  };
}

export async function unpublishProject(projectId: string) {
  const { error } = await supabase
    .from("projects")
    .update({ published: false, updated_at: new Date().toISOString() })
    .eq("id", projectId);

  if (error) throw error;
}

export async function updateCustomDomain(projectId: string, domain: string) {
  const { error } = await supabase
    .from("projects")
    .update({ custom_domain: domain, updated_at: new Date().toISOString() })
    .eq("id", projectId);

  if (error) throw error;
}

export function getPublishedUrl(slug: string | null): string {
  if (!slug) return "";
  return `https://${slug}.agencyos.site`;
}
