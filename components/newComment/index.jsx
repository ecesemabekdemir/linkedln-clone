"use client";

import { useState } from "react";
import "./newComment.css";
export default function NewComment() {
  const [open, setOpen] = useState(false);

  function toggleSidebar() {
    setOpen(!open);
  }
  return (
    <>
      <div className="div">
        <button onClick={toggleSidebar} className="action-button">
          💬
          <span> Yorum Yap</span>
        </button>
      </div>
      {open && (
        <div className={`new-comment-container ${open ? "open" : ""}`}>
          <form className="comment-form">
            <div className="avatar"></div>
            <div className="input-wrapper">
              <input
                className="comment-input"
                type="text"
                placeholder="Yorum ekle..."
              />
              <button className="send-btn">Gönder</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
