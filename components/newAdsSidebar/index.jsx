import { createClient } from "@/utils/supabase/server";
import "./adsSidebar.css";
import Link from "next/link";
export default async function NewAdsSidebar() {
  const supabase = createClient();

  const { data } = await supabase.from("jobs").select("*");
  let { data: users } = await supabase.from("users").select("*");

  return (
    <>
      <div className="save-ads-container">
        <div className="card-header">
          <h2 className="card-title">LinkedIn Haberler</h2>
          <span className="info-icon">ℹ️</span>
        </div>
        <p className="subtitle">Öne çıkan hikayeler</p>

        {data?.map((x, i) => (
          <div key={i} className="news-item">
            <h3 className="news-title">{x?.title}</h3>
            <p className="news-meta">
              {new Date(x.created_at).toLocaleDateString()}• {users.length}
              okuyucu
            </p>
          </div>
        ))}

        <Link href="/ads" className="show-more">
          Daha fazla göster{" "}
        </Link>
        <div></div>

        <div className="divider"></div>

        <div className="games-section">
          <h2 className="card-title">Bugünün oyunları</h2>

          <div className="game-item">
            <div className="game-icon"></div>
            <div className="game-info">
              <div className="game-title">Tango</div>
              <div className="game-description">
                Tabloyu uyumlu hâle getirin
              </div>
            </div>
            <span>›</span>
          </div>

          <div class="game-item">
            <div class="game-icon"></div>
            <div class="game-info">
              <div class="game-title">Queens</div>
              <div class="game-description">Her bölgeyi taçlandırın</div>
            </div>
            <span>›</span>
          </div>
        </div>
      </div>
    </>
  );
}
