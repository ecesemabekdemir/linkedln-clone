import HomeIcon from "@/svgs/home";
import Profile from "../profile";
import NetworkIcon from "@/svgs/networkIcon";
import Ads from "@/svgs/ads";
import MessageIcon from "@/svgs/mesagge";
import NotificationIcon from "@/svgs/notificationIcon";

export default function Nav() {
  return (
    <>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="icon">
              <HomeIcon />
            </span>
            <span class="label">Ana Sayfa</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="icon">
              <NetworkIcon />
            </span>
            <span class="label">Ağım</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="icon">
              <Ads />
            </span>
            <span class="label">İş İlanları</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="icon">
              <MessageIcon />
            </span>
            <span class="label">Mesajlaşma</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="icon notification">
              <NotificationIcon />
            </span>
            <span class="badge"></span>
            <span class="label">Bildirimler</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="label">
              <Profile />
            </span>
            <span class="label">
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
