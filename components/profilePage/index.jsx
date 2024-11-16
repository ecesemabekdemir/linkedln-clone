import AnalystComponent from "./analiz";
import Education from "./egitimler";
import Activities from "./faaliyetler";
import ProfileHeader from "./profileHeader";
import "./profilePage.css";
export default function ProfilePage() {
  return (
    <div className="profile-container">
      <ProfileHeader />
      <AnalystComponent />
      <Activities />
      <Education />
    </div>
  );
}
