import { supabase } from "../../lib/supabase/client";

export async function updateSectionOrder(sections: any[]) {
  for (const section of sections) {
    const { error } = await supabase
      .from("sections")
      .update({ sort_order: section.sort_order })
      .eq("id", section.id);

    if (error) throw error;
  }
}
