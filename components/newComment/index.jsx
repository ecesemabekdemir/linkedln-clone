"use client";

import "./newComment.css";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { SaveComment } from "./action";
import { createClient } from "@/utils/supabase/client";
import DeleteCommentBtn from "../commentDeleteBtn";
import LikeBtn from "../likeBtn";
import Link from "next/link";
import UserAvatar from "../userAvatar";

export default function NewComment({ PostId, setLikePost, likespost }) {
  const [comment, setComment] = useState([]);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [selectedindex, setSelectedIndex] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [show, setShow] = useState(false);
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
        setComment(data);
      } else {
        console.error("get comments error", error);
      }
    }
    getComments();
  }, [PostId, submit]);

  async function handleSubmit(e) {
    e.preventDefault();

    await action(new FormData(e.target));

    setSubmit(!submit);
  }

  return (
    <>
      <div className="comments-container">
        <div className="comment-section">
          <div className="interaction-buttons">
            <LikeBtn
              PostId={PostId}
              setLikePost={setLikePost}
              likespost={likespost}
            />
            <button
              className="NewCommentBtn"
              onClick={() => setIsCommentOpen(!isCommentOpen)}
            >
              <p className="NewCommentIcon comment"></p>
              <span>Yorum Yap</span>
            </button>
            <button className="NewCommentBtn">
              <p className="NewCommentIcon share"></p>
              <span>Paylaş</span>
            </button>
            <button className="NewCommentBtn">
              <p className="NewCommentIcon send"></p>
              <span>Gönder</span>
            </button>
          </div>

          {isCommentOpen && (
            <>
              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className={`comment-input ${isCommentOpen ? "open" : ""}`}
              >
                <div className="avatar"></div>
                <div className="input-wrapper">
                  <input
                    name="content"
                    type="text"
                    placeholder="Yorum ekle..."
                  />
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
                <button
                  className="commentSend"
                  type="Submit"
                  onClick={() => setSubmit(!submit)}
                >
                  Gönder
                </button>
              </form>
              <div className="getCommentsContainer">
                {comment?.map((x) => (
                  <div className="getsComments" key={x.id}>
                    <div className="get-comments-header">
                      <UserAvatar />
                      <div className="comment-info">
                        <Link href="/" className="author-name">
                          {x?.firstName} {x?.lastName}
                        </Link>
                        <div className="post-meta">
                          <span>{x?.headline}</span>
                        </div>
                      </div>
                      <div className="more-option-dropdown">
                        <button
                          onClick={() => {
                            setShow(!show);
                            setSelectedIndex(x.id);
                          }}
                          className="dropdown-trigger"
                        >
                          <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </button>
                        {show && selectedindex === x.id && (
                          <div className="dropdown-content">
                            <Link href="#" className="dropdown-item">
                              Bildir
                            </Link>
                            <Link href="/" className="dropdown-item">
                              <DeleteCommentBtn id={x.id} />
                            </Link>
                          </div>
                        )}
                      </div>
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
    </>
  );
}
