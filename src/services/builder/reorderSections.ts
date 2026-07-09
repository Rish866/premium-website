import { supabase } from "../../lib/supabase/client";

export async function updateSectionOrder(sections: any[]) {
  const updates = sections.map((section, index) =>
    supabase
      .from("sections")
      .update({ sort_order: index + 1 })
      .eq("id", section.id)
  );

  const results = await Promise.all(updates);
  const failed = results.find((result) => result.error);
  if (failed?.error) throw failed.error;
}
