"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { SavePost } from "./action";
import Image from "next/image";

export default function ModalAddPost({ isModalOpen, closeModal }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    getUser();
  }, []);

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay ">
          <div className="modal-add-post">
            <div className="modal-header">
              <div className="user-info">
                <div className="avatar">
                  {user.image ? (
                    <Image src={x?.image} width={48} height={48} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="user-details">
                  <div className="user-name">
                    {user?.user_metadata?.firstName}
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

            <form action={SavePost}>
              <div className="modal-body">
                <textarea
                  name="content"
                  className="modal-content"
                  placeholder="Ne hakkında konuşmak istiyorsunuz?"
                ></textarea>
              </div>
              <div className="modal-footer">
                <div className="toolbar">
                  <button className="tool-button">😊</button>
                  <button className="tool-button">🖼️</button>
                  <button className="tool-button">📅</button>
                  <button className="tool-button">➕</button>
                </div>
                <button className="send-button">Gönder</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
