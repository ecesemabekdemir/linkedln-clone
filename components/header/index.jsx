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
  console.log(user);
  return (
    <div className="headerContainer">
      <div className="header">
        <div class="nav-left">
          <a href="/" class="logo">
            <Logo />
          </a>
          <Search />
        </div>

        <div class="main-nav">
          <Nav user={user} />
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
          <p className="premium-link">CLONE PROJE</p>
        </div>
      </div>
    </div>
  );
}
