"use client";

import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";

export default function DeletePostBtn({ id, userId }) {
  const supabase = createClient();
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

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

  const handleDeletePost = async () => {
    if (!id) {
      setError("Post ID is required!");
      return;
    }

    // Gönderiyi oluşturan kullanıcıyla oturum açmış kullanıcıyı karşılaştır
    if (currentUser?.id !== userId) {
      setError("Bu gönderiyi silme yetkiniz yok.");
      return;
    }

    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      console.log("Post başarıyla silindi.");
    }
  };

  return (
    <>
      <button onClick={handleDeletePost} className="delete-button">
        ×
      </button>
    </>
  );
}
