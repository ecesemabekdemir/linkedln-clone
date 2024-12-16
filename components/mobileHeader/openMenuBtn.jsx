"use client";
import { useState } from "react";
import MobileSidebar from "./mobileSidebar";
import "./ms.css";
import UserAvatar from "../userAvatar";

export default function OpenMenuBtn({ users, user }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function openMenu() {
    setIsOpenMenu(true);
  }

  function closeMenu() {
    setIsOpenMenu(false);
  }

  return (
    <>
      <button className="open-menu-btn" onClick={openMenu}>
        <div className="profile-avatar">
          <UserAvatar />
        </div>
      </button>
      <MobileSidebar closeMenu={closeMenu} isOpenMenu={isOpenMenu} />
    </>
  );
}
