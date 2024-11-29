"use client";

import { useState } from "react";
import NewComment from "../newComment";

export default function CommentBtn() {
  const [open, setOpen] = useState(false);

  function toggleSidebar() {
    setOpen(!open);
  }

  return (
    <div className="div">
      <button onClick={toggleSidebar} className="action-button">
        💬
        <span> Yorum Yap</span>
      </button>
      {open && <NewComment toggleSidebar={toggleSidebar} />}
    </div>
  );
}
