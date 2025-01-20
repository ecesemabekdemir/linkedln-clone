import Logo from "@/svgs/logo";
import "./header.css";
import Search from "./search";
import Nav from "./nav";
import Icon from "@/svgs/icon";
import OkIcon from "@/svgs/okIcon";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import HomeIcon from "@/svgs/home";
import NetworkIcon from "@/svgs/networkIcon";
import Ads from "@/svgs/ads";
import MessageIcon from "@/svgs/mesagge";
import NotificationIcon from "@/svgs/notificationIcon";
import Profile from "./profile";
import MobileHeader from "../mobileHeader/mobileHeader";
import PostMobileAdd from "../postCreator/postMobileAdd";

export default async function Header() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="headerContainer">
      <div className="desktop-header-container">
        <div className="desktop-header">
          <div className="nav-left">
            <Link href="/" className="logo">
              <Logo />
            </Link>
            <Search />
          </div>
          <div className="main-nav">
            <Nav user={user} />
          </div>
          <div className="nav-right">
            <button className="menu-button">
              <span>
                <Icon />
              </span>
              <span className="label">
                İş için <OkIcon />
              </span>
            </button>
            <p className="premium-link">CLONE PROJE</p>
          </div>
        </div>
      </div>
      <div className="tablet-header-container">
        <div className="tablet-header">
          <div className="nav-left">
            <Link href="/" className="logo">
              <Logo />
            </Link>
          </div>
          <div className="main-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  <span className="icon">
                    <HomeIcon />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/network" className="nav-link">
                  <span className="icon">
                    <NetworkIcon />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/ads" className="nav-link">
                  <span className="icon">
                    <Ads />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  <span className="icon">
                    <MessageIcon />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/notification" className="nav-link">
                  <span className="icon notification">
                    <NotificationIcon />
                    <span className="notification-badge">3</span>
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  <span>
                    <span className="icon profile"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile-container">
        <p className="premium-link">LinkedIn CLONE PROJE</p>
        <MobileHeader />
        <ul className="bottom-nav">
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
            <Link href="/" className="nav-link">
              <PostMobileAdd />
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
            <Link href="/ads" className="nav-link">
              <span className="icon">
                <Ads />
              </span>
              <span className="label">İş İlanları</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
