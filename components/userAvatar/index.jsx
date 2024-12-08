"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserAvatar() {
  const [userAvatar, setUserAvatar] = useState([]);
  const supabase = createClient();

  useEffect(() => {
    async function getUserAvatar() {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) {
        console.error("Auth error:", authError);
        return;
      }

      if (user) {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (error) {
          console.error("Error fetching user avatar:", error);
        } else {
          setUserAvatar(data || "/default-avatar.png");
        }
      }
    }

    getUserAvatar();
  }, []);

  if (!userAvatar) {
    return <p>Yükleniyoor...</p>;
  }
  console.log("userAvatars", userAvatar);

  return (
    <div className="avatar">
      <Image
        src={userAvatar?.image}
        width={48}
        height={48}
        alt="User avatar"
        className="rounded-full"
      />
    </div>
  );
}
