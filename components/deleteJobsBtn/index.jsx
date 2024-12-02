"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export default function DeleteJobsBtn({ id }) {
  const supabase = createClient();
  const [error, setError] = useState(null);

  const handleDeleteJobs = async () => {
    if (!id) {
      setError("jobs ID is required!");
      return;
    }

    const { error } = await supabase.from("jobs").delete().eq("id", id);

    if (error) {
      setError(error.message);
      // console.error("error", error.message);
    } else {
      setError(null);
      console.log("silindi jobs");
    }
  };

  return (
    <>
      <button onClick={handleDeleteJobs} className="job-close-button">
        ×
      </button>
      {error && <p className="error-message">Error: {error}</p>}
    </>
  );
}
