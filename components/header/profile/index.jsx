"use client";
import { useState } from "react";
import "./profile.css";
import Link from "next/link";
import { signOut } from "@/action/auth";
import UserAvatar from "@/components/userAvatar";
import OkIcon from "@/svgs/okIcon";

export default function Profile({ user }) {
  const [show, setShow] = useState(false);

  return (
    <div className="profile-dropdown">
      <button onClick={() => setShow(!show)} className="dropbtn">
        <UserAvatar />
        <span className="label flex">
          Ben
          <OkIcon />
        </span>
      </button>
      {show && (
        <div className="profile-dropdown-content">
          <div className="container-profile-drop">
            <div className="profile-drop">
              <div className="profile">
                <UserAvatar />
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
                <Link href="/" className="dropdown-section-nav">
                  Ayarlar ve Gizlilik
                </Link>
                <Link href="/" className="dropdown-section-nav">
                  Yardım
                </Link>
                <Link href="/" className="dropdown-section-nav">
                  Dil
                </Link>
              </div>
            </div>
            <div className="dropdown-section">
              <h2 className="dropdown-section-title">Yönet</h2>
              <div>
                <Link href="/" className="dropdown-section-nav">
                  Gönderiler ve Faaliyetler
                </Link>
                <Link href="/newAds" className="dropdown-section-nav">
                  İş İlanı Yayınlama Hesabı
                </Link>
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
