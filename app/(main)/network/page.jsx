"use server";

import { createClient } from "@/utils/supabase/server";
import "./network.css";

export default async function Network() {
  const supabase = createClient();

  let { data: users, error } = await supabase.from("users").select("*");
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  let user = shuffle(users); // random şekilde kayıtlı kullanıcılar gelcek
  // console.log("userlarrrr", user);

  return (
    <>
      <div className="network-container">
        <div className="network-header">
          <h1>
            Yazılım Geliştirme sektöründeki kişiler, bu kişileri de takip ediyor
          </h1>
          <a href="#" className="view-all">
            Tümünü gör
          </a>
        </div>

        <div className="network-grid">
          {user?.map((x, index) => (
            <div key={index} className="network-card">
              <div className="network-card-banner">
                <button className="network-close-btn">×</button>
              </div>
              <div className="network-card-content">
                <div className="network-card-flex">
                  <div className="network-img"></div>
                  <div>
                    <h2 className="network-name">
                      {x.firstName} {x.lastName}
                    </h2>
                    <p className="network-title">{x.headline}</p>
                  </div>
                </div>
                <div className="mutual-connections">
                  <div className="avatar-group"></div>
                  <span className="mutual-text">
                    x kullanıcılar da takip ediyor
                  </span>
                </div>
                <button className="follow-btn">Takip Et</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
