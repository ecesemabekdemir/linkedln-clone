"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import UserAvatar from "@/components/userAvatar";

export default function ModalAddPost({ isModalOpen, closeModal }) {
  const [user, setUser] = useState([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    getUser();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const supabase = createClient();
    const { data, error } = await supabase
      .from("posts")
      .insert([{ content, user_id: user?.id }]);

    if (!error) {
      // Modal'ı kapatın ve alanı sıfırlayın
      setContent("");
      closeModal();
    } else {
      console.error("Post gönderilemedi:", error.message);
    }
    setLoading(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay ">
          <div className="modal-add-post">
            <div className="modal-header">
              <div className="user-info">
                <UserAvatar />
                <div className="user-details">
                  <div className="user-name">
                    {user?.user_metadata?.firstName}{" "}
                    {user?.user_metadata?.lastName}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 11L3 6h10l-5 5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <button onClick={closeModal} className="close-button">
                ✕
              </button>
            </div>

            <form onSubmit={handlePostSubmit}>
              <div className="modal-body">
                <textarea
                  name="content"
                  className="modal-content"
                  placeholder="Ne hakkında konuşmak istiyorsunuz?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="modal-footer">
                <div className="toolbar">
                  <button type="button" className="tool-button">
                    😊
                  </button>
                  <button type="button" className="tool-button">
                    🖼️
                  </button>
                  <button type="button" className="tool-button">
                    📅
                  </button>
                  <button type="button" className="tool-button">
                    ➕
                  </button>
                </div>
                <button
                  type="submit"
                  className="send-button"
                  disabled={loading}
                >
                  {loading ? "Gönderiliyor..." : "Gönder"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
