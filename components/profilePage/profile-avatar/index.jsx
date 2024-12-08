"use client";

import { useState, useEffect } from "react";
import "./profile-avatar.css";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export default function ProfileAvatar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("/image/empty.jpg");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          console.error("Kullanıcı bulunamadı:", userError);
          return;
        }

        const { data: usersData, error: fetchError } = await supabase
          .from("users")
          .select("*")
          .eq("user_id", user.id);

        if (fetchError) {
          console.error("Kullanıcı verileri alınamadı:", fetchError);
        } else {
          setUsers(usersData || []);
        }
      } catch (error) {
        console.error("Beklenmeyen hata oluştu:", error);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setImageUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setImageUrl("/image/empty.jpg");
    }
  }, [selectedFile]);

  async function handleImageUpload(file) {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("Kullanıcı bulunamadı:", userError);
        return;
      }

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("users")
        .upload(`${Date.now()}-${file.name}`, file);

      if (uploadError) {
        console.error("Dosya yükleme hatası:", uploadError);
        return;
      }

      const imageUrl = `https://zwofqgqwyersfacwwkgv.supabase.co/storage/v1/object/public/users/${uploadData.path}`;

      const { error: updateError } = await supabase
        .from("users")
        .update({ image: imageUrl })
        .eq("user_id", user.id);

      if (updateError) {
        console.error("Profil resmi güncelleme hatası:", updateError);
      } else {
        setUsers((prev) => [{ ...prev[0], image: imageUrl }]);
      }
    } catch (error) {
      console.error("Beklenmeyen hata oluştu:", error);
    }
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (selectedFile) {
      handleImageUpload(selectedFile);
    }
  }, [selectedFile]);

  return (
    <>
      <button onClick={openModal} className="profile-img">
        {users.length > 0 && users[0]?.image ? (
          <Image src={users[0].image} alt="Profil" width={120} height={120} />
        ) : (
          <Image
            src="/image/empty.jpg"
            alt="Profil Yükleniyor"
            width={150}
            height={150}
          />
        )}
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
            {selectedFile ? (
              <Image src={imageUrl} alt="Profil" width={100} height={100} />
            ) : (
              <input
                className="addAvatar"
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            )}

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
