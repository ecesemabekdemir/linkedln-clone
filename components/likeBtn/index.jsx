"use client";

import "./like.css";
import { useState } from "react";
import { AddLike } from "./action";

export default function LikeBtn({ post_id, initialLikeCount, userLiked }) {
  const [likeCount, setLikeCount] = useState(Number(initialLikeCount) || 0);
  const [hasLiked, setHasLiked] = useState(userLiked); // kullanıcının begenem durumu

  async function handleLike(e) {
    e.preventDefault();

    try {
      // Addlike actiondan çağırıp beğenme durumubu kontrol ediyoruz
      const updatedLikeState = await AddLike(post_id);

      // burada eğer liked a eşit se beğeni sayısı arttır ve beğendiğini kaydet else durumuda kontrol ediliyor.
      if (updatedLikeState === "liked") {
        setLikeCount((prev) => prev + 1);
        setHasLiked(true);
      } else if (updatedLikeState === "unliked") {
        setLikeCount((prev) => prev - 1);
        setHasLiked(false);
      }
    } catch (error) {
      console.error("Beğeni işlemi sırasında hata:", error.message);
    }
  }

  console.log("beğenme sayısı", likeCount);

  return (
    <div className="like-btn">
      <button
        className={`NewCommentBtn like-icon ${hasLiked ? "liked" : ""}`}
        onClick={handleLike}
      >
        <span className="NewCommentIcon heart"></span>
        <span>{hasLiked ? "Beğenildi" : "Beğen"}</span>
      </button>
    </div>
  );
}
