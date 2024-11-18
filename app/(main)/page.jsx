import Header from "@/components/header";
import PostCreator from "@/components/postCreator";
import Posts from "@/components/posts";
import ProfileSidebar from "@/components/profileSidebar";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <ProfileSidebar />
      <div>
        <PostCreator />
        <Posts />
      </div>
    </div>
  );
}
