import { createClient } from "@/utils/supabase/server";
import "./posts.css";
import DeletePostBtn from "../delete-post-btn";
import NewComment from "../newComment";

export default async function Posts({ dataId, content, user_id, id }) {
  const supabase = createClient();
  let { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", user_id);

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
        <NewComment users={users} PostId={id} />
      </div>
    </div>
  );
}
