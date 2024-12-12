import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import Profile from "../header/profile";

export default async function MobileHeader({ user }) {
  const supabase = createClient();
  let { data: users, error } = await supabase.from("users").select("*");

  return (
    <div className="mobile-header">
      <div className="profile-avatar">
        <Link href="/" className="nav-link">
          <span>
            <span className="icon profile"></span>
          </span>
          <Profile users={users} user={user} />
        </Link>
      </div>
      <div className="search-mobile">
        {/* <svg
          className="search-icon-mobile"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg> */}
        <input
          type="search"
          className="search-input-mobile"
          placeholder="Arama yap"
        />
      </div>
    </div>
  );
}
