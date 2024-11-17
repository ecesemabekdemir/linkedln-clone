"use client";
import { useState } from "react";
import "./profile.css";

export default function Profile() {
  const [show, setShow] = useState(false);

  return (
    <div className="profile-dropdown">
      <button onClick={() => setShow(!show)} className="dropbtn">
        <span class="icon profile"></span>
      </button>
      {show && (
        <div className="profile-dropdown-content">
          <div className="container-profile-drop">
            <div className="profile-drop">
              <div className="profile">
                <div className="profile-image"></div>
                <div>
                  <h1 className="profile-name">Ece sema bekdemir</h1>
                  <h1 className="profile-status">Frontend Developer</h1>
                </div>
              </div>
              <button className="view-profile-btn">Profili Görüntüleyin</button>
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
            <button className="logout-btn">Oturumu Kapat</button>
          </div>
        </div>
      )}
    </div>
  );
}
