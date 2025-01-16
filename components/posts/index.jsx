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
        {users?.map((x, i) => (
          <div key={i} className="user-info">
            <div className="avatar">
              <Image
                src={
                  x.image && x.image.trim() !== ""
                    ? x.image
                    : "/image/userphoto.png"
                }
                width={48}
                height={48}
                alt="Picture of the author"
              />
            </div>
            <div className="user-details">
              <h2>
                <div>
                  <Link href={`/linkedln`}>
                    {x.firstName}
                    {x.lastName}
                    <p>{x.headline}</p>
                  </Link>
                </div>
              </h2>
            </div>
          </div>
        ))}
        <DeletePostBtn id={id} />
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <PostFooter id={id} users={users} />
    </div>
  );
}
