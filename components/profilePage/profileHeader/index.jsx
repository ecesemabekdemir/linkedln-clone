"use server";

import { createClient } from "@/utils/supabase/server";
import ProfileAvatar from "../profile-avatar";
import Link from "next/link";

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
          <ProfileAvatar />
          <div className="edit-profile">
            <button className="editleme-action-button">✏️</button>
          </div>
        </div>
        <div className="content">
          <h1>
            {user?.user_metadata?.firstName} {user?.user_metadata?.lastName}
          </h1>
          <p className="title">{user?.user_metadata?.headline}</p>
          <p className="location">
            {user?.user_metadata?.location}·{" "}
            <Link href="#">İletişim bilgileri</Link>
          </p>
          <p className="website">
            <Link href="https://ecesemabekdemir.com.tr/" target="blank">
              https://ecesemabekdemir.com.tr/
            </Link>
          </p>
          <p className="connections">500+ bağlantı</p>
          <div className="buttons">
            <Link href="/" className="btn btn-primary">
              Açık
            </Link>
            <Link href="/" className="btn btn-secondary">
              Profil bölümü ekle
            </Link>
            <Link href="/" className="btn btn-secondary">
              Profili geliştir
            </Link>
            <Link href="/" className="btn btn-secondary">
              Kaynaklar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
