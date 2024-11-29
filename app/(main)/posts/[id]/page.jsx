"use server";

import { createClient } from "@/utils/supabase/server";
import GetPost from "../page";

export default async function PostDetailPage() {
  const supabase = createClient();

  const { data, error } = await supabase.from("posts").select("*");
  console.log("postssss", data);

  // const { data: postsLike } = await supabase
  //   .from("postsLike")
  //   .select()
  //   .eq("post_id", data.id)
  //   .eq("user_id", user.id)
  //   .single();

  // if (!data) return notFound();

  return <GetPost data={data} />;
}
