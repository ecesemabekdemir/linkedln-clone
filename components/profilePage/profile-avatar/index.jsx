"use client";
import { useState, useEffect } from "react";
import "./profile-avatar.css";
import uploadImage from "./action";
import Image from "next/image";

export default function ProfileAvatar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  // chatten aldığım kod
  async function handleImageUpload(file) {
    if (file) {
      try {
        const uploadedPath = await uploadImage(file);
        if (uploadedPath) {
          const publicUrl = `https://your-supabase-url.supabase.co/storage/v1/object/public/avatars/${uploadedPath}`;
          setAvatar(publicUrl);
          console.log("set avatar", setAvatar);
        }
      } catch (error) {
        console.error("Yükleme hatası:", error.message);
      }
    }
  }

  console.log(selectedFile);

  useEffect(() => {
    if (selectedFile) {
      handleImageUpload(selectedFile);
    }
  }, [selectedFile]);

  return (
    <>
      <button onClick={openModal} className="profile-img">
        {avatar ? <Image src={avatar} alt="Profil" /> : "Profil Yükle"}
      </button>
      {isModalOpen && (
        <div className="modal-avatar">
          <div className="modal-avatar-header">
            <h2 className="modal-avatar-title">Profil fotoğrafı</h2>
            <button onClick={closeModal} className="close-button">
              ×
            </button>
          </div>
          <div className="modal-avatar-content">
            <input
              className="addAvatar"
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <div className="action-avatar-buttons">
              <button className="action-avatar-button">
                <i>✎</i>
                <span>Düzenle</span>
              </button>
              <button className="action-avatar-button">
                <i>📷</i>
                <span>Fotoğraf ekle</span>
              </button>
              <button className="action-avatar-button">
                <i>⊡</i>
                <span>Kare</span>
              </button>
              <button className="action-avatar-button">
                <i>🗑</i>
                <span>Sil</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
