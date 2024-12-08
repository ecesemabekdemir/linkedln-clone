"use client";
import { useState, useEffect } from "react";
import "./profile-avatar.css";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

export default function ProfileAvatar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function GetUsers() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      let { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", user?.id);
      setUsers(users);
    }
    GetUsers();
  }, [selectedFile]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    setImageUrl(
      selectedFile ? URL.createObjectURL(selectedFile) : "/image/empty.jpg"
    );
  }, [selectedFile]);

  const supabase = createClient();

  async function handleImageUpload(file) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (file) {
      console.log(file, "filesdasd");

      const { data, error } = await supabase.storage
        .from("users")
        .upload(`${Date.now()}-${file.name}`, file);
      console.log(data, "asdasdadasdasd");

      if (error) {
        console.error("Dosya yükleme hatası:", error);
      } else {
        console.log("Dosya başarıyla yüklendi:", data);

        const { data: usersdata, error } = await supabase
          .from("users")
          .update({
            image: `https://zwofqgqwyersfacwwkgv.supabase.co/storage/v1/object/public/users/${data.path}`,
          })
          .eq("user_id", user?.id)
          .select();
      }
    }
  }

  console.log(selectedFile);

  useEffect(() => {
    if (selectedFile) {
      handleImageUpload(selectedFile);
    }
  }, [selectedFile]);

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <>
      <button onClick={openModal} className="profile-img">
        {users ? (
          <Image src={users[0]?.image} alt="Profil" width={50} height={50} />
        ) : (
          "Profil Yükle"
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
