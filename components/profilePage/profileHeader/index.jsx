export default function ProfileHeader() {
  return (
    <>
      <div className="card">
        <div className="background">
          <div className="profile-img"></div>
        </div>
        <div className="content">
          <h1>Ece Sema Bekdemir</h1>
          <p className="title">Frontend Developer</p>
          <p className="location">
            İstanbul, İstanbul, Türkiye · <a href="#">İletişim bilgileri</a>
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
