"use client";
import ModalAddPost from "@/components/profilePage/modalAddPost";
import { useState } from "react";
import "./postMobileAdd.css";

export default function PostMobileAdd() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="post-input-mobile">
        <div className="avatar"></div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-field-mobile"
        >
          <span className="icon">+</span>
          <span className="label">Gönder</span>
        </button>
        <ModalAddPost
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
}
