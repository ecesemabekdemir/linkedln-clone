"use server";

import { createClient } from "@/utils/supabase/server";

// Upload file using standard upload
export async function uploadFile(file) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("users")
    .update({ image: "otherValue" })
    .eq("some_column", "someValue")
    .select();
}
