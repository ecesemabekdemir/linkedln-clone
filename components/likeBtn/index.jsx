"use client";

import "./like.css";
import { useState, useEffect } from "react";
import { AddLike } from "./action";
import { createClient } from "@/utils/supabase/client";

export default function LikeBtn({
  PostId,
  initialLikeCount,
  userLiked,
  setLikePost,
  likespost,
}) {
  const [likeCount, setLikeCount] = useState(Number(initialLikeCount) || 0);
  const [hasLiked, setHasLiked] = useState(userLiked);
  const [user, setUser] = useState(null);

  const supabase = createClient();
  useEffect(() => {
    async function getUser() {
      let {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    }
    getUser();
  }, []);

  async function dislike() {
    console.log(typeof PostId);
    const { error } = await supabase
      .from("postsLike")
      .delete()
      .eq("user_id", user?.id)
      .eq("post_id", PostId);

    if (!error) {
      setLikeCount((prev) => prev - 1);
      setHasLiked(false);
      setLikePost(false);
    }
  }

  async function like() {
    console.log(typeof PostId);
    const { error } = await supabase
      .from("postsLike")
      .insert([{ user_id: user?.id, post_id: PostId }]);

    if (!error) {
      setLikeCount((prev) => prev + 1);
      setHasLiked(true);
      setLikePost(true);
    }
  }

  console.log("beğenme sayısı", likeCount);

  return (
    <div className="like-btn">
      <button
        className={`NewCommentBtn like-icon ${hasLiked ? "liked" : ""}`}
        onClick={() => (likespost ? dislike() : like())}
      >
        <span className="NewCommentIcon heart"></span>
        <span>{hasLiked ? "Beğenildi" : "Beğen"}</span>
      </button>
    </div>
  );
}
