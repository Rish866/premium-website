import { supabase } from "../../lib/supabase/client";

export type ThemeConfig = {
  id?: string;
  project_id: string;
  primary_color: string;
  secondary_color: string;
  font: string;
  radius: string;
  mode: "dark" | "light";
};

export async function getTheme(projectId: string): Promise<ThemeConfig | null> {
  const { data, error } = await supabase
    .from("themes")
    .select("*")
    .eq("project_id", projectId)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function updateTheme(projectId: string, updates: Partial<ThemeConfig>) {
  const { error } = await supabase
    .from("themes")
    .update(updates)
    .eq("project_id", projectId);

  if (error) throw error;
}

export const fontOptions = [
  { value: "Inter", label: "Inter" },
  { value: "DM Sans", label: "DM Sans" },
  { value: "Plus Jakarta Sans", label: "Plus Jakarta Sans" },
  { value: "Satoshi", label: "Satoshi" },
  { value: "Poppins", label: "Poppins" },
  { value: "Manrope", label: "Manrope" },
];

export const radiusOptions = [
  { value: "none", label: "Sharp" },
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
  { value: "xl", label: "Extra Large" },
  { value: "full", label: "Rounded" },
];
