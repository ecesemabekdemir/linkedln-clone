import Logo from "@/svgs/logo";
import "./header.css";
import Search from "./search";
import Nav from "./nav";
import Icon from "@/svgs/icon";
import OkIcon from "@/svgs/okIcon";
import { createClient } from "@/utils/supabase/server";

export default async function Header() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("header user", user);
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="nav-left">
          <a href="/" className="logo">
            <Logo />
          </a>
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
  );
}
