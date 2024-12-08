"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Engagement({ id, likespost }) {
  const [likeCount, setLikeCount] = useState(0);
  const supabase = createClient();

  useEffect(() => {
    async function GetLike() {
      let { data: postsLike, error } = await supabase
        .from("postsLike")
        .select("*")
        .eq("post_id", id);
      setLikeCount(postsLike.length);
    }
    GetLike();
  }, [likespost]);
  return (
    <div className="engagement">
      <span> {likeCount} diğer kişi</span>
    </div>
  );
}
