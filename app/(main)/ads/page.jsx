import Link from "next/link";
import "./ads.css";
export default function Ads() {
  return (
    <div className="ads-container">
      <div className="menu-card">
        <div className="menu-card-nav">
          <ul className="menu-list">
            <li>
              <a href="#" className="menu-item">
                <i>☰</i>
                Tercihler
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                <i>🔖</i>
                İş ilanlarım
              </a>
            </li>
            <div className="divider"></div>
            <li>
              <Link href="/newAds" className="menu-item post-job">
                <i>✎</i>
                Ücretsiz iş ilanı ver
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ads">
        <div className="ads-header">
          <h1>Ağınızda işe alım yapıyor</h1>
          <p>Ağınızdaki kişilerin işe alım yaptığı işler</p>
        </div>
        <div className="job-card">
          <button className="job-close-button">✕</button>
          <div className="company-logo "></div>
          <div className="job-content">
            <a href="#" class="job-title">
              VoIP/DevOps Engineer
            </a>
            <div className="company-name">
              Turkcell Global Bilgi · İstanbul, Türkiye (Hybrid)
            </div>
            <div className="job-location">İstanbul, Türkiye (Hybrid)</div>
            <div className="connections">
              İşe alım takimi ile 20 ortak bağlantı
            </div>
            <button className="job-apply-button">Kolay Başvuru</button>
          </div>
        </div>
        <a href="#" className="job-view-all">
          Tümünü gör →
        </a>
      </div>
    </div>
  );
}
