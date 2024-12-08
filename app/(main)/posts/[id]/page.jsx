"use server";

import { createClient } from "@/utils/supabase/server";
import GetPost from "../page";

export default async function PostDetailPage() {
  const supabase = createClient();

  const { data, error } = await supabase.from("posts").select("*");
  let { data: users } = await supabase.from("users").select("*");
  const { data: postsLike } = await supabase
    .from("postsLike")
    .select()
    .eq("post_id", data.id)
    .eq("user_id", users.id)
    .single();

  return <GetPost data={data} />;
}
