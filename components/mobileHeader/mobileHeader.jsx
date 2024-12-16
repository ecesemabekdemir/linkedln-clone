import { createClient } from "@/utils/supabase/server";
import OpenMenuBtn from "./openMenuBtn";
import Link from "next/link";
import MessageIcon from "@/svgs/mesagge";

export default async function MobileHeader({ user }) {
  const supabase = createClient();
  let { data: users, error } = await supabase.from("users").select("*");

  return (
    <div className="mobile-header">
      <OpenMenuBtn user={user} users={users} />
      <div className="search-mobile">
        <svg
          className="search-icon-mobile"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={15}
          height={15}
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="search"
          className="search-input-mobile"
          placeholder="Arama yap"
        />
      </div>
      <div className="mesagge">
        <Link href="/" className="nav-link">
          <span className="icon">
            <MessageIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}
