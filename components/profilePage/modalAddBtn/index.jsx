"use client";
import { useState } from "react";
import ModalAddPost from "../modalAddPost";

export default function ModalAddButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button className="create-post" onClick={openModal}>
        Gönderi oluşturun
      </button>
      <ModalAddPost closeModal={closeModal} isModalOpen={isModalOpen} />
    </>
  );
}
