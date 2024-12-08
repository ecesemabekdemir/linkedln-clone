import { createClient } from "@/utils/supabase/server";
import "./profileSidebar.css";
import Image from "next/image";

export default async function ProfileSidebar() {
  const supabase = createClient();
  let { data: users } = await supabase.from("users").select("*");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("sidebar user", user);

  return (
    <>
      <div className="sidebar-profile-card">
        <div className="sidebar-profile-background">
          <div className="sidebar-profile-photo">
            {users?.map((x, i) =>
              x.image ? (
                <Image src={x.image} width={48} height={48} key={i} />
              ) : (
                ""
              )
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
            <span className="sidebar-stat-value">{users.length}</span>
          </div>
          <div className="sidebar-stat-item">
            <span className="sidebar-stat-label">Gönderi gösterimi sayısı</span>
            <span className="sidebar-stat-value">{users.length}</span>
          </div>
        </div>
        <div className="sidebar-saved-items">Kaydedilen öğeler</div>
      </div>
    </>
  );
}
