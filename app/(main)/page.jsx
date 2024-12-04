import Header from "@/components/header";
import PostCreator from "@/components/postCreator";
import ProfileSidebar from "@/components/profileSidebar";
import SaveUser from "@/components/save-users";
import PostDetailPage from "./posts/[id]/page";
import NewAdsSidebar from "@/components/newAdsSidebar";

export default async function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <ProfileSidebar />
        <div className="content-container">
          <PostCreator />
          <PostDetailPage />
        </div>
        <div className="sidebar">
          <SaveUser />
          <NewAdsSidebar />
        </div>
      </div>
    </>
  );
}
