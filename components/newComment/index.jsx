"use client";

import "./newComment.css";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { SaveComment } from "./action";
import { createClient } from "@/utils/supabase/client";

export default function NewComment({ PostId, users }) {
  const [comment, setComment] = useState([]);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [state, action] = useFormState(SaveComment, {
    message: null,
    error: null,
  });

  const formRef = useRef(null);
  const supabase = createClient();

  useEffect(() => {
    if (state?.message) {
      formRef.current.reset();
    }
  }, [state]);

  // commentleri getir

  useEffect(() => {
    async function getComments() {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", PostId);

      if (data) {
        console.log("Yorumlar:", data);
        setComment(data);
      } else {
        console.error("error", error);
      }
    }
    getComments();
  }, [PostId]);

  return (
    <div className="comments-container">
      <div className="comment-section">
        <div className="interaction-buttons">
          <button className="NewCommentBtn">
            <span className="NewCommentIcon heart"></span>
            <span>Beğen</span>
          </button>
          <button
            className="NewCommentBtn"
            onClick={() => setIsCommentOpen(!isCommentOpen)}
          >
            <span className="NewCommentIcon comment"></span>
            <span>Yorum Yap</span>
          </button>
          <button className="NewCommentBtn">
            <span className="NewCommentIcon share"></span>
            <span>Paylaş</span>
          </button>
          <button className="NewCommentBtn">
            <span className="NewCommentIcon send"></span>
            <span>Gönder</span>
          </button>
        </div>

        {isCommentOpen && (
          <>
            <form
              action={action}
              ref={formRef}
              className={`comment-input ${isCommentOpen ? "open" : ""}`}
            >
              <div className="avatar"></div>
              <div className="input-wrapper">
                <input name="content" type="text" placeholder="Yorum ekle..." />
                <input name="postId" type="hidden" value={PostId} />
                <div className="input-actions">
                  <button className="icon-btn">
                    <span className="icon smile"></span>
                  </button>
                  <button className="icon-btn">
                    <span className="icon image"></span>
                  </button>
                </div>
              </div>
              <button type="Submit">Gönder</button>
            </form>
            <div className="getCommentsContainer">
              {comment?.map((x) => (
                <div key={x.id}>
                  <div className="get-comments-header">
                    <div className="profile-image"> </div>
                    <div className="comment-info">
                      <a href="#" class="author-name">
                        {x?.firstName} {x?.lastName}
                      </a>
                      <div className="post-meta">
                        <span>{x?.headline}</span>
                      </div>
                    </div>
                    <div className="more-options">•••</div>
                  </div>
                  <div className="comment-content">
                    <p> {x.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
