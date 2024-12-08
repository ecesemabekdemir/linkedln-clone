import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Hakkında</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Profesyonel Topluluk Politikaları</a>
              </li>
              <li>
                <a href="#">Gizlilik ve Koşullar</a>
              </li>
              <li>
                <a href="#">Satış Çözümleri</a>
              </li>
              <li>
                <a href="#">Güvenlik Merkezi</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Erişilebilirlik</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Kariyer</a>
              </li>
              <li>
                <a href="#">Reklam Tercihleri</a>
              </li>
              <li>
                <a href="#">Mobil</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Yetenek Çözümleri</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Pazarlama Çözümleri</a>
              </li>
              <li>
                <a href="#">Reklam</a>
              </li>
              <li>
                <a href="#">Küçük İşletmeler</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="help-section">
              <ul className="footer-links">
                <li>
                  <h3>Sorunuz mu var?</h3>
                  <a href="#">Yardım Merkezimizi ziyaret edin.</a>
                </li>
              </ul>
            </div>

            <ul className="footer-links">
              <li>
                <h3>Hesabınızı ve gizliliğinizi yönetin</h3>
                <a href="#">Ayarlarınıza gidin.</a>
              </li>
            </ul>

            <ul className="footer-links">
              <li>
                <h3>Öneri şeffaflığı</h3>
                <a href="#">
                  Önerilen İçerikler hakkında daha fazla bilgi edinin.
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="language-selector">
              <label htmlfor="language">Dil Seç</label>
              <select id="language">
                <option value="tr">Türkçe</option>
                <option value="en">İngilizce</option>
              </select>
            </div>
          </div>
        </div>

        <div className="copyright">
          LinkedIn clone proje © 2024 semabekdemir
        </div>
      </div>
    </>
  );
}
