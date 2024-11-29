import { createClient } from "@/utils/supabase/server";
import "./profileSidebar.css";

export default async function ProfileSidebar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  return (
    <>
      <div className="sidebar-profile-card">
        <div className="sidebar-profile-background">
          <div className="sidebar-profile-photo"></div>
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
            <span className="sidebar-stat-value">191</span>
          </div>
          <div className="sidebar-stat-item">
            <span className="sidebar-stat-label">Gönderi gösterimi sayısı</span>
            <span className="sidebar-stat-value">275</span>
          </div>
        </div>
        <div className="sidebar-saved-items">Kaydedilen öğeler</div>
      </div>
    </>
  );
}
