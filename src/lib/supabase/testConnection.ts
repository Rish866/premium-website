import { supabase } from "./client";

export async function testSupabaseConnection() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Supabase connection failed:", error.message);
    return false;
  }

  console.log("Supabase connected:", data);
  return true;
}
