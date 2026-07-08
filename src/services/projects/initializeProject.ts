import { supabase } from "../../lib/supabase/client";

export async function initializeProject(projectId: string) {

  const { error: pageError } = await supabase
    .from("pages")
    .insert({
      project_id: projectId,
      title: "Home",
      slug: "/",
      is_home: true,
      sort_order: 0,
    })
    .select()
    .single();

  if (pageError) throw pageError;

  const { error: themeError } = await supabase
    .from("themes")
    .insert({
      project_id: projectId,
      primary_color: "#06b6d4",
      secondary_color: "#8b5cf6",
      font: "Inter",
      radius: "xl",
      mode: "dark",
    });

  if (themeError) throw themeError;
}
