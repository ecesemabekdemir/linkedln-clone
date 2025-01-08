"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const supabase = createClient();

export function UserControl() {
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (!user?.id) {
        router.push("/login");
      }
      console.log(user);
    }
    getUser();
  }, [supabase]);

  return <></>;
}
