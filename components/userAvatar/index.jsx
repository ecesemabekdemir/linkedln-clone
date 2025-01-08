"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserAvatar() {
  const [userAvatar, setUserAvatar] = useState("/default-avatar.png");
  const supabase = createClient();

  useEffect(() => {
    async function getUserAvatar() {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) return;

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (!error && data && data.image) {
        setUserAvatar(data.image);
      }
    }

    getUserAvatar();
  }, []);

  if (!userAvatar) {
    return <p>Loading...</p>;
  }

  return (
    <div className="avatar">
      <Image
        src={userAvatar}
        width={48}
        height={48}
        alt="User avatar"
        className="rounded-full"
      />
    </div>
  );
}
