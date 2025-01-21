"use server";
import { createClient } from "@/utils/supabase/server";
import ModalAddButton from "../modalAddBtn";
import Link from "next/link";

export default async function Activities({ isModalOpen }) {
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

  const lastTwoPosts = posts?.slice(-2);

  return (
    <>
      <div className="activity-card">
        <div className="activity-header">
          <div className="title-section">
            <h2 className="title">Faaliyet</h2>
            <span className="followers">1.057 takipçi</span>
          </div>
          <ModalAddButton isModalOpen={isModalOpen} />
        </div>
        <div className="tabs">
          <button className="tab active">Gönderiler</button>
          <button className="tab">Yorumlar</button>
          <button className="tab">Resimler</button>
          <button className="tab">Belgeler</button>
        </div>
        <div className="posts">
          {(!lastTwoPosts || lastTwoPosts.length === 0) && (
            <p>Henüz bir gönderiniz yok.</p>
          )}
          {lastTwoPosts?.map((post, i) => (
            <div key={i} className="post">
              <div className="post-header">
                <div>
                  <span>
                    <span>
                      {user.user_metadata?.firstName}{" "}
                      {user.user_metadata?.lastName}
                    </span>{" "}
                    bunu yayınladı
                  </span>{" "}
                  <span>•</span>{" "}
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
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

        <Link href="/allPost" className="show-more">
          Tüm gönderileri göster →
        </Link>
      </div>
    </>
  );
}
