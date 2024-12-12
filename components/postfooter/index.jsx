"use client";

import Engagement from "../engagement";
import NewComment from "../newComment";

import { useState } from "react";

export default function PostFooter({ id, users, postsLike }) {
  const [likespost, setLikePost] = useState(false);
  return (
    <>
      <Engagement
        PostId={id}
        postsLike={postsLike}
        likespost={likespost}
        id={id}
      />

      <div className="action-buttons">
        <NewComment
          users={users}
          PostId={id}
          setLikePost={setLikePost}
          likespost={likespost}
        />
      </div>
    </>
  );
}
