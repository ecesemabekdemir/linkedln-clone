"use server";

import { createClient } from "@/utils/supabase/server";
import AnalystComponent from "./analiz";
import Education from "./egitimler";
import Activities from "./faaliyetler";
import ProfileHeader from "./profileHeader";
import "./profilePage.css";
export default async function ProfilePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: userPosts } = await supabase
    .from("posts")
    .select("*")
    .eq("user_email", user.email);

  return (
    <div className="profile-container">
      <ProfileHeader />
      <AnalystComponent />
      {userPosts?.length > 0 ? (
        <Activities {...userPosts} />
      ) : (
        <p>Henüz bir gönderiniz yok.</p>
      )}
      <Education />
    </div>
  );
}
