import { createClient } from "@/utils/supabase/server";
import "./posts.css";
import DeletePostBtn from "../delete-post-btn";
import NewComment from "../newComment";

export default async function Posts({ content, user_email, id }) {
  const supabase = createClient();
  let { data: users, error } = await supabase
    .from("users")
    .select("*")
    // Filters
    .eq("email", user_email);
  console.log("userssssssssssss", users);

  return (
    <div className="post-card">
      <div className="post-card-header">
        <div className="user-info">
          <div className="avatar"></div>
          <div className="user-details">
            <h2>
              {users?.map((x, i) => (
                <div key={i}>
                  {x.firstName}
                  {x.lastName}
                  <p>{x.headline}</p>
                </div>
              ))}
            </h2>
          </div>
        </div>
        <DeletePostBtn id={id} />
      </div>
      <div className="post-content">
        <p>{content}</p>
        {/* <div className="blog-preview">
          <a href="#" className="blog-preview-content" target="blank">
            Entity Framework: .NET 9 ile Data Seeding
          </a>
        </div> */}
      </div>

      <div className="engagement">
        <span>👍</span>
        <span>Kemal Özalp ve 39 diğer kişi</span>
      </div>

      <div className="action-buttons">
        <button className="action-button">
          👍
          <span>Beğen</span>
        </button>
        <NewComment />
        <button className="action-button">
          🔄
          <span> Paylaş</span>
        </button>
        <button className="action-button">
          📤
          <span>Gönder</span>
        </button>
      </div>
    </div>
  );
}
