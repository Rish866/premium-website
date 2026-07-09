import { supabase } from "../../lib/supabase/client";

export async function deleteSection(sectionId: string) {
  const { error } = await supabase.from("sections").delete().eq("id", sectionId);
  if (error) throw error;
}
