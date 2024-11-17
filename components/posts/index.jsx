import "./posts.css";

export default function Posts() {
  return (
    <>
      <div className="post-card">
        <div className="post-card-header">
          <div className="user-info">
            <div className="avatar"></div>
            <div className="user-details">
              <h2>Doğa Savaş </h2>
              <p>Frontend Dev </p>
            </div>
          </div>
          <button className="close-button">×</button>
        </div>

        <div className="post-content">
          <p>
            Projelerinizde başlangıç verilerini nasıl daha güvenli, düzenli ve
            performanslı bir şekilde yönetebilirsiniz? Bu yazımda, EF Core 9 ile
            gelen UseSeeding ve UseAsyncSeeding yöntemlerini ele aldım. Yeni
            seeding yöntemleri sayesinde veritabanınızı daha temiz bir şekilde
            nasıl başlangıç verileriyle doldurabileceğinizi ve concurrency
            sorunlarından nasıl kaçınabileceğinizi anlattım.
          </p>

          <div className="blog-preview">
            <a href="#" className="blog-preview-content" target="blank">
              Entity Framework: .NET 9 ile Data Seeding
            </a>
          </div>
        </div>

        <div className="engagement">
          <span>👍</span>
          <span>Kemal Özalp ve 39 diğer kişi</span>
        </div>

        <div className="action-buttons">
          <button className="action-button">
            <span>👍</span>
            Beğen
          </button>
          <button className="action-button">
            <span>💬</span>
            Yorum Yap
          </button>
          <button className="action-button">
            <span>🔄</span>
            Paylaş
          </button>
          <button className="action-button">
            <span>📤</span>
            Gönder
          </button>
        </div>
      </div>
    </>
  );
}
