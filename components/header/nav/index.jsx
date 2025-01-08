import HomeIcon from "@/svgs/home";
import Profile from "../profile";
import NetworkIcon from "@/svgs/networkIcon";
import Ads from "@/svgs/ads";
import MessageIcon from "@/svgs/mesagge";
import NotificationIcon from "@/svgs/notificationIcon";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function Nav({ user }) {
  const supabase = createClient();
  let { data: users, error } = await supabase.from("users").select("*");

  return (
    <>
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            <span className="icon">
              <HomeIcon />
            </span>
            <span className="label">Ana Sayfa</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/network" className="nav-link">
            <span className="icon">
              <NetworkIcon />
            </span>
            <span className="label">Ağım</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/ads" className="nav-link">
            <span className="icon">
              <Ads />
            </span>
            <span className="label">İş İlanları</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/" className="nav-link">
            <span className="icon">
              <MessageIcon />
            </span>
            <span className="label">Mesajlaşma</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/notification" className="nav-link">
            <span className="icon notification">
              <NotificationIcon />
              <span className="notification-badge">3</span>
            </span>
            <span className="label">Bildirimler</span>
          </Link>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <span>
              <span className="icon profile"></span>
            </span>

            <Profile users={users} user={user} />
          </span>
        </li>
      </ul>
    </>
  );
}
