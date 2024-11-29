"use server";

import { createClient } from "@/utils/supabase/server";

export default async function ProfileHeader() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  return (
    <>
      <div className="card">
        <div className="background">
          <div className="profile-img"></div>
        </div>
        <div className="content">
          <h1>
            {user?.user_metadata?.firstName} {user?.user_metadata?.lastName}
          </h1>
          <p className="title">{user?.user_metadata?.headline}</p>
          <p className="location">
            {user?.user_metadata?.location}· <a href="#">İletişim bilgileri</a>
          </p>
          <p className="website">
            <a href="https://ecesemabekdemir.com.tr/" target="blank">
              https://ecesemabekdemir.com.tr/
            </a>
          </p>
          <p className="connections">500+ bağlantı</p>
          <div className="buttons">
            <a href="#" class="btn btn-primary">
              Açık
            </a>
            <a href="#" class="btn btn-secondary">
              Profil bölümü ekle
            </a>
            <a href="#" class="btn btn-secondary">
              Profili geliştir
            </a>
            <a href="#" class="btn btn-secondary">
              Kaynaklar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
