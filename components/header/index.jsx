import Logo from "@/svgs/logo";
import "./header.css";
import Search from "./search";
import Nav from "./nav";
import Icon from "@/svgs/icon";
import OkIcon from "@/svgs/okIcon";

export default function Header() {
  return (
    <div className="header">
      <div class="nav-left">
        <a href="/" class="logo">
          <Logo />
        </a>
        <Search />
      </div>

      <div class="main-nav">
        <Nav />
      </div>
      <div class="nav-right">
        <button class="menu-button">
          <span>
            <Icon />
          </span>
          <span class="label">
            İş için <OkIcon />
          </span>
        </button>
        <p className="premium-link">CLONE PROJEDİR</p>
      </div>
    </div>
  );
}
