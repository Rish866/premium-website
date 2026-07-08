import { supabase } from "../../lib/supabase/client";

export async function updateSectionConfig(
  sectionId: string,
  config: any
) {
  const { error } = await supabase
    .from("sections")
    .update({
      config,
    })
    .eq("id", sectionId);

  if (error) throw error;
}
