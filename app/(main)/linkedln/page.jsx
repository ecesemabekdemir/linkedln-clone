import ProfilePage from "@/components/profilePage";
import SaveUser from "@/components/save-users";
import "./linked.css";
import Footer from "@/components/footer";

export default async function UserProfile() {
  return (
    <div className="profilepage-container">
      <div className="profilepage-content">
        <ProfilePage />
        <SaveUser />
      </div>
    </div>
  );
}
