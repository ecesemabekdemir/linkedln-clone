import Logo from "@/svgs/logo";
import "./header.css";
import Search from "./search";
import Nav from "./nav";

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
        <button class="menu-button">≡</button>
        <a href="#" class="premium-link">
          0 TRY ile Premium'u deneyin
        </a>
      </div>
    </div>
  );
}
