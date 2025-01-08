import PostCreator from "@/components/postCreator";
import ProfileSidebar from "@/components/profileSidebar";
import PostDetailPage from "./posts/[id]/page";
import NewAdsSidebar from "@/components/newAdsSidebar";
import { UserControl } from "@/helpers/usercontrol";

export default async function Home() {
  return (
    <>
      <div className="container">
        <UserControl />
        <ProfileSidebar />
        <div className="content-container">
          <PostCreator />
          <PostDetailPage />
        </div>
        <div className="sidebar">
          <NewAdsSidebar />
        </div>
      </div>
    </>
  );
}
