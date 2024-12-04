"use client";
import { useState } from "react";
import "./profile.css";
import Link from "next/link";
import { signOut } from "@/action/auth";

export default function Profile({ user }) {
  const [show, setShow] = useState(false);
  console.log(user);

  return (
    <div className="profile-dropdown">
      <button onClick={() => setShow(!show)} className="dropbtn"></button>
      {show && (
        <div className="profile-dropdown-content">
          <div className="container-profile-drop">
            <div className="profile-drop">
              <div className="profile">
                <div className="avatar"></div>
                <div>
                  <h1 className="profile-name">
                    {user?.user_metadata?.firstName}
                    {user?.user_metadata?.lastName}
                  </h1>
                  <h1 className="profile-status">
                    {user?.user_metadata?.headline}
                  </h1>
                </div>
              </div>
              <Link href="/linkedln" className="nav-link">
                <button className="view-profile-btn">
                  Profili Görüntüleyin
                </button>
              </Link>
            </div>

            <div className="dropdown-section">
              <h2 className="dropdown-section-title">Hesap</h2>
              <div>
                <a href="#" className="dropdown-section-nav">
                  Ayarlar ve Gizlilik
                </a>
                <a href="#" className="dropdown-section-nav">
                  Yardım
                </a>
                <a href="#" className="dropdown-section-nav">
                  Dil
                </a>
              </div>
            </div>
            <div className="dropdown-section">
              <h2 className="dropdown-section-title">Yönet</h2>
              <div>
                <a href="#" className="dropdown-section-nav">
                  Gönderiler ve Faaliyetler
                </a>
                <a href="#" className="dropdown-section-nav">
                  İş İlanı Yayınlama Hesabı
                </a>
              </div>
            </div>
            <button onClick={() => signOut()} className="logout-btn">
              Oturumu Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
