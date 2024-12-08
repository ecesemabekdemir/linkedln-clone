import { createClient } from "@/utils/supabase/server";
import "./save-users.css";
import Image from "next/image";

export default async function SaveUser() {
  const supabase = createClient();

  let { data: users, error } = await supabase.from("users").select("*");
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  let user = shuffle(users);

  return (
    <div className="save-users-container">
      <div className="save-users-header">
        <div>Görüntüleyenler ayrıca şunları da görüntüledi:</div>
        <div className="save-users-private">
          <svg viewBox="0 0 16 16">
            <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
          </svg>
          Size özel
        </div>
      </div>
      {user?.slice(0, 3).map((x, i) => (
        <div key={i} className="save-users-profile-card">
          <div className="save-users-profile-info">
            <div className="avatar">
              {x.image ? (
                <Image
                  src={x?.image}
                  width={24}
                  height={24}
                  alt="Picture of the author"
                />
              ) : (
                ""
              )}
            </div>
            <div>
              <span className="save-users-profile-name">
                {x.firstName} {x.lastName}
              </span>
              <span className="save-users-profile-number"></span>
              <p className="save-users-profile-description">{x.headline}</p>
            </div>
          </div>
          <button className="save-users-action-button">Bağlantı kur</button>
        </div>
      ))}
    </div>
  );
}
