import Header from "@/components/header";
import PostCreator from "@/components/postCreator";
import Posts from "@/components/posts";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <PostCreator />
      <Posts />
    </div>
  );
}
