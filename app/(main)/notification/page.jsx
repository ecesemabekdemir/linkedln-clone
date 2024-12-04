import Link from "next/link";
import "./notification.css";

export default function Notifications() {
  return (
    <>
      <div className="notification-container">
        <nav className="nav-tabs">
          <div className="tab active">Tümü</div>
          <Link href="/ads" className="tab">
            İş İlanları
          </Link>
          <div className="tab">Gönderilerim</div>
          <div className="tab">Bahsetmeler</div>
        </nav>

        <div className="feed-item">
          <div className="feed-header">
            <div className="user-info">
              <div className="avatar"></div>
              <div>
                <div>Öznur Yılmaz</div>
                <div className="timestamp">40 dakika</div>
              </div>
            </div>
            <div className="more-actions">•••</div>
          </div>
          <div className="feed-content">bir fotoğrafı yeniden yayınladı.</div>
        </div>

        <div className="feed-item">
          <div claclassNamess="feed-header">
            <div className="user-info">
              <div className="avatar"></div>
              <div>
                <div>Muhammed Baki Çağlayan</div>
                <div className="timestamp">4 saat</div>
              </div>
            </div>
            <div className="more-actions">•••</div>
          </div>
          <div className="feed-content">
            Acunmedya Akademi şirketinde Asistan Eğitmen olarak çalışmaya
            başladığımı paylaşmaktan mutluluk duyuyorum!
          </div>
          <div className="engagement">26 etkileşim • 8 yorum</div>
        </div>

        <div className="premium-banner">
          <div>
            Emre Çelik ve 2 kişi daha profilinizi görüntüledi. Premium ile
            listenin tamamını görüntüleyin.
          </div>
          <a href="#" class="premium-button">
            Premium'u 0 TRY karşılığında deneyin
          </a>
          <div className="premium-note">
            1 aylık ücretsiz deneme. Dilediğiniz zaman iptal edebilirsiniz.
          </div>
        </div>
      </div>
    </>
  );
}
