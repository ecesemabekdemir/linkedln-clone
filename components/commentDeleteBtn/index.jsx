"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export default function DeleteCommentBtn({ id }) {
  const supabase = createClient();
  const [error, setError] = useState(null);

  console.log(id);

  const handleDeleteComment = async (e) => {
    e.preventDefault();

    if (!id) {
      setError("comment ID is required!");
      return;
    }

    const { error } = await supabase.from("comments").delete().eq("id", id);

    if (error) {
      setError(error.message);
      // console.error("error", error.message);
    } else {
      setError(null);
      console.log("silindi comment");
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
