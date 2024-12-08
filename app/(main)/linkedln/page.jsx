import Header from "@/components/header";
import ProfilePage from "@/components/profilePage";
import SaveUser from "@/components/save-users";
import "./linked.css";

export default async function UserProfile() {
  return (
    <div className="profilepage-container">
      <Header />
      <div className="profilepage-content">
        <ProfilePage />
        <SaveUser />
      </div>
    </div>
  );
}
