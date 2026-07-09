import { supabase } from "../../lib/supabase/client";

const BUCKET = "media";

/**
 * Upload a file to Supabase Storage
 * Returns the public URL of the uploaded file
 */
export async function uploadFile(file: File, projectId?: string): Promise<string> {
  const userId = await getCurrentUserId();
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
  const path = projectId
    ? `${userId}/${projectId}/${timestamp}-${safeName}`
    : `${userId}/general/${timestamp}-${safeName}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

/**
 * Upload multiple files
 */
export async function uploadFiles(files: File[], projectId?: string): Promise<string[]> {
  const urls = await Promise.all(files.map((file) => uploadFile(file, projectId)));
  return urls;
}

/**
 * List all files for the current user
 */
export async function listFiles(projectId?: string): Promise<StorageFile[]> {
  const userId = await getCurrentUserId();
  const folder = projectId ? `${userId}/${projectId}` : `${userId}`;

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .list(folder, { limit: 100, sortBy: { column: "created_at", order: "desc" } });

  if (error) throw error;

  return (data ?? [])
    .filter((f) => f.name !== ".emptyFolderPlaceholder")
    .map((f) => {
      const fullPath = `${folder}/${f.name}`;
      const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(fullPath);
      return {
        name: f.name,
        path: fullPath,
        url: urlData.publicUrl,
        size: f.metadata?.size ?? 0,
        createdAt: f.created_at ?? "",
      };
    });
}

/**
 * Delete a file from storage
 */
export async function deleteFile(path: string): Promise<void> {
  const { error } = await supabase.storage.from(BUCKET).remove([path]);
  if (error) throw error;
}

export type StorageFile = {
  name: string;
  path: string;
  url: string;
  size: number;
  createdAt: string;
};

async function getCurrentUserId(): Promise<string> {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  if (!data.user) throw new Error("Not logged in");
  return data.user.id;
}
