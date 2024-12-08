import { createClient } from "@/utils/supabase/server";
import "./profileSidebar.css";
import Image from "next/image";

export default async function ProfileSidebar() {
  const supabase = createClient();

  // logim olan kullanıcının bilgilerini al
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) {
    console.error("Auth error:", authError);
    return <p>Kimlik doğrulama hatası oluştu.</p>;
  }

  if (!user) {
    return <p>Kimliği doğrulanmadı. Lütfen giriş yapın.</p>;
  }

  // login kullanıcının avatarı alıncak
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", user.id)
    .single();
  if (userError) {
    console.error("Error fetching user data:", userError);
    return <p>Error fetching user data.</p>;
  }

  return (
    <>
      <div className="sidebar-profile-card">
        <div className="sidebar-profile-background">
          <div className="sidebar-profile-photo">
            {userData?.image ? (
              <Image
                src={userData.image}
                width={48}
                height={48}
                alt="profile-pic"
                className="rounded-full"
              />
            ) : (
              <p>No profile picture available</p>
            )}
          </div>
        </div>

        <div className="sidebar-profile-info">
          <h2 className="sidebar-profile-name">
            {user?.user_metadata?.firstName} {user?.user_metadata?.lastName}
          </h2>
          <p className="sidebar-profile-title">
            {user?.user_metadata?.headline}
          </p>
        </div>

        <div className="sidebar-profile-stats">
          <div className="sidebar-stat-item">
            <span className="sidebar-stat-label">Profil görüntüleyenler</span>
            <span className="sidebar-stat-value">{userData.length}</span>
          </div>
          <div className="sidebar-stat-item">
            <span className="sidebar-stat-label">Gönderi gösterimi sayısı</span>
            <span className="sidebar-stat-value">{userData.length}</span>
          </div>
        </div>
        <div className="sidebar-saved-items">Kaydedilen öğeler</div>
      </div>
    </>
  );
}
