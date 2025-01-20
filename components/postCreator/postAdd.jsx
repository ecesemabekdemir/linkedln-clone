"use client";
import { useState } from "react";
import "./postCreator.css";
import ModalAddPost from "../profilePage/modalAddPost";

export default function PostAdd() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="post-input">
        <div className="avatar"></div>
        <button onClick={() => setIsModalOpen(true)} className="btn-field">
          Gönderi başlatın
        </button>
        <ModalAddPost
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
}
