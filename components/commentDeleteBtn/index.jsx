"use client";

import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";

export default function DeleteCommentBtn({ id, commentUserId }) {
  const supabase = createClient();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Oturum açmış kullanıcıyı al
    async function fetchCurrentUser() {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) {
        console.error("Authentication error:", authError.message);
        return;
      }
      setCurrentUser(user);
    }

    fetchCurrentUser();
  }, []);

  const handleDeleteComment = async (e) => {
    e.preventDefault();

    if (!id) {
      setError("Comment ID is required!");
      return;
    }

    const { error } = await supabase.from("comments").delete().eq("id", id);

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      console.log("Yorum başarıyla silindi.");
    }
  };

  return (
    <>
      <button onClick={handleDeleteComment} className="job-close-button">
        Sil
      </button>
      {error && <p className="error-message">Error: {error}</p>}
    </>
  );
}
