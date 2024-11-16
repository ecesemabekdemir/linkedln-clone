"use client";
import { useState } from "react";
import "./profile.css";

export default function Profile() {
  const [show, setShow] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setShow(!show)} className="dropbtn">
        <span class="icon profile"></span>
      </button>
      {show && (
        <div className="dropdown-content">
          <p>Merhaba name</p>
          <hr />
          <button>Sign out</button>
        </div>
      )}
    </div>
  );
}
