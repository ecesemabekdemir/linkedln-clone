"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Engagement({ id, likespost, PostId }) {
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState([]);
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
  }, [likespost, supabase]);

  // commentleri getir

  useEffect(() => {
    async function getComments() {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", PostId);

      if (data) {
        setComment(data);
      } else {
      }
    }
    getComments();
  }, [comment, supabase]);

  return (
    <>
      <div className="engagement">
        <span> {likeCount} diğer kişi</span>
        <div className="seeAllComments">{comment.length} yorum</div>
      </div>
    </>
  );
}
