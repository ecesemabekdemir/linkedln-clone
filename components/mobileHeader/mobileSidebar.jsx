"use client";
import { useEffect, useState } from "react";
import "./ms.css";
import { createClient } from "@/utils/supabase/client";
import UserAvatar from "../userAvatar";
import Link from "next/link";
import { signOut } from "@/action/auth";

export default function MobileSidebar({ isOpenMenu, closeMenu }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    getUser();
  }, []);

  return (
    <>
      {isOpenMenu && (
        <div className="mobile-sidebar-container">
          <button onClick={closeMenu} className="close-button">
            ✕
          </button>
          <div className="ms-profile-header">
            <Link href="/linkedln">
              <UserAvatar />
            </Link>
            <h1 className="ms-name">
              {user?.user_metadata?.firstName}
              {user?.user_metadata?.lastName}
            </h1>
            <div className="ms-title">{user?.user_metadata?.headline}</div>
            <div className="ms-location">{user?.user_metadata?.location}</div>
            <button className="ms-button">Deneyim</button>
          </div>

          <div className="ms-stats">
            <div className="ms-stat-item">
              <span className="ms-stat-number">141</span>
              <span>profil görüntülemesi</span>
            </div>
            <div className="ms-stat-item">
              <span className="ms-stat-number">134</span>
              <span>gönderi gösterimi</span>
            </div>
          </div>

          <h2 className="ms-section-title">Kaydedilen gönderiler</h2>
          <h2 className="ms-section-title">Gruplar</h2>

          <div className="ms-games-section">
            <h2 className="ms-section-title">Oyunlar</h2>
            <span className="ms-new-badge">YENİ</span>
          </div>

          <div className="ms-settings">Ayarlar</div>
          <div>
            <button onClick={() => signOut()} className="ms-out">
              Oturumu Kapat
            </button>
          </div>
        </div>
      )}
    </>
  );
}
