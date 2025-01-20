"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserAvatar() {
  const DEFAULT_AVATAR = "/image/userphoto.png";
  const [userAvatar, setUserAvatar] = useState(DEFAULT_AVATAR);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function getUserAvatar() {
      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
          setUserAvatar(DEFAULT_AVATAR);
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from("users")
          .select("image")
          .eq("user_id", user.id)
          .single();

        if (!error && data?.image) {
          setUserAvatar(data.image);
        } else {
          setUserAvatar(DEFAULT_AVATAR);
        }
      } catch (error) {
        console.error("Kullanıcı avatarı yüklenirken bir hata oluştu:", error);
        setUserAvatar(DEFAULT_AVATAR);
      } finally {
        setLoading(false);
      }
    }

    getUserAvatar();
  }, []);

  return (
    <div className="avatar">
      <Image
        src={userAvatar || DEFAULT_AVATAR}
        width={48}
        height={48}
        alt="User avatar"
        className="rounded-full"
      />
    </div>
  );
}
