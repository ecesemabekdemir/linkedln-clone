import { createClient } from "@/utils/supabase/server";
import "./posts.css";
import DeletePostBtn from "../delete-post-btn";
import Link from "next/link";
import PostFooter from "../postfooter";
import Image from "next/image";

export default async function Posts({ content, user_id, id, post_id }) {
  const supabase = createClient();
  let { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", user_id);

  return (
    <div className="post-card">
      <div className="post-card-header">
        <div className="user-info">
          <div className="avatar">
            {users?.map((x, i) =>
              x.image ? (
                <Image src={x.image} width={48} height={48} key={i} />
              ) : (
                ""
              )
            )}
          </div>
          <div className="user-details">
            <h2>
              {users?.map((x, i) => (
                <div key={i}>
                  <Link href={`/linkedln`}>
                    {x.firstName}
                    {x.lastName}
                    <p>{x.headline}</p>
                  </Link>
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
      <PostFooter id={id} users={users} />
    </div>
  );
}
