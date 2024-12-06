"use server";

import { createClient } from "@/utils/supabase/server";

// Upload file using standard upload
export async function uploadFile(file) {
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from("users")
    .upload("uploadedPath", uploadedPath);
  if (error) {
    // Handle error
  } else {
    // Handle success
  }
}
