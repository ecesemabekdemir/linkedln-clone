"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export default function DeletePostBtn({ id }) {
  const supabase = createClient();
  const [error, setError] = useState(null);

  const handleDeletePost = async () => {
    if (!id) {
      setError("Post ID is required!");
      return;
    }

    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) {
      setError(error.message);
      // console.error("error", error.message);
    } else {
      setError(null);
      console.log("silindi post");
    }
  };

  return (
    <>
      <button onClick={handleDeletePost} className="delete-button">
        ×
      </button>
      {error && <p className="error-message">Error: {error}</p>}
    </>
  );
}
