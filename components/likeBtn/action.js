"use server";

import { createClient } from "@/utils/supabase/server";

export async function AddLike(postId) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Kullanıcı bulunamadı");
  }

  const { data: postLike } = await supabase
    .from("postLike")
    .select()
    .eq("post_id", postId)
    .eq("user_id", user.id);

  if (postLike && postLike.length > 0) {
    await supabase
      .from("postLike")
      .delete()
      .eq("post_id", postId)
      .eq("user_id", user.id);
    return "unliked";
  } else {
    await supabase
      .from("postLike")
      .insert({ user_id: user.id, post_id: postId });
    return "liked";
  }
}
