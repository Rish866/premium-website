import { supabase } from "../../lib/supabase/client";

export async function getPages(projectId: string) {
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("project_id", projectId)
    .order("sort_order");

  if (error) throw error;

  return data ?? [];
}

export async function createPage(
  projectId: string,
  title: string
) {
  const slug =
    "/" +
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const { data, error } = await supabase
    .from("pages")
    .insert({
      project_id: projectId,
      title,
      slug,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}
