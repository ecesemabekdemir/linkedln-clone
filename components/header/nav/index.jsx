import HomeIcon from "@/svgs/home";
import Profile from "../profile";
import NetworkIcon from "@/svgs/networkIcon";
import Ads from "@/svgs/ads";
import MessageIcon from "@/svgs/mesagge";
import NotificationIcon from "@/svgs/notificationIcon";
import Link from "next/link";

export default function Nav({ user }) {
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
          <a href="#" className="nav-link">
            <span className="icon">
              <MessageIcon />
            </span>
            <span className="label">Mesajlaşma</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="icon notification">
              <NotificationIcon />
              <span className="notification-badge">3</span>
            </span>
            <span className="label">Bildirimler</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="icon">
              <span className="icon profile"></span>
            </span>
            <Profile user={user} />
            <span className="label flex">
              Ben
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 11L3 6h10l-5 5z" />
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </>
  );
}
