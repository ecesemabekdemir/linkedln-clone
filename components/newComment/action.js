"use server";

import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function SaveComment(prev, formData) {
  const formObj = Object.fromEntries(formData);
  const content = formObj.content;
  const postId = Number(formObj.postId);

  console.log(content, postId);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("comments")
    .insert([{ content, user_id: user.id, post_id: postId }])
    .select()
    .single();
  // data dizi döndüğü için single ile tekil dönmesini sağlıyoruz.

  if (error) {
    console.log(error);
  }
}
