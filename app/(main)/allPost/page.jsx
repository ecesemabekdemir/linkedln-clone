"use Server";

import { createClient } from "@/utils/supabase/server";
import "./allPost.css";
import ProfileSidebar from "@/components/profileSidebar";
import SaveUser from "@/components/save-users";
export default async function AllPost() {
  const supabase = createClient();

  // login olan kullanıcı bilgilerini alıp ona göre işlem yapıyoruz
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return <div>Lütfen giriş yapınız.</div>;
  }

  // Kullanıcının gönderilerini al
  const { data: posts, error: postsError } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", user.id);
  return (
    <>
      <div className="allPostMain">
        <ProfileSidebar />
        <div className="allPostContainer">
          <nav className="nav-tabs-allPost">
            <div className="tab active-allPost">Gönderiler</div>
            <div className="tab-allPost">Yorumlar</div>
            <div className="tab-allPost">Daha Fazla</div>
          </nav>
          <div className="posts">
            {(!posts || posts.length === 0) && <p>Henüz bir gönderiniz yok.</p>}
            {posts?.map((post, i) => (
              <div key={i} className="post">
                <div className="post-header">
                  <div key={i}>
                    <span>
                      <span>
                        {user.user_metadata?.firstName}{" "}
                        {user.user_metadata?.lastName}
                      </span>{" "}
                      bunu yayınladı
                    </span>{" "}
                    <span>•</span>{" "}
                    <span>
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="post-content">{post.content}</div>
                <div className="post-stats">
                  <div className="reactions">👍 {post.likes || 0}</div>
                  <div>{post.shares || 1} paylaşım</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SaveUser />
      </div>
    </>
  );
}
