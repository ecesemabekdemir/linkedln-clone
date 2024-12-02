"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const supabase = createClient();

export async function SavePost(formData) {
  const content = formData.get("content");
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  const { data, error } = await supabase
    .from("posts")
    .insert({
      content,
      user_id: user.id,
    })
    .select();

  // data dizi döndüğü için single ile tekil dönmesini sağlıyoruz.

  if (error) {
    console.log(error);
  }
}
