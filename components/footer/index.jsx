import Link from "next/link";
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
                <Link href="/">Profesyonel Topluluk Politikaları</Link>
              </li>
              <li>
                <Link href="/">Gizlilik ve Koşullar</Link>
              </li>
              <li>
                <Link href="/">Satış Çözümleri</Link>
              </li>
              <li>
                <Link href="/">Güvenlik Merkezi</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Erişilebilirlik</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">Kariyer</Link>
              </li>
              <li>
                <Link href="/">Reklam Tercihleri</Link>
              </li>
              <li>
                <Link href="/">Mobil</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Yetenek Çözümleri</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">Pazarlama Çözümleri</Link>
              </li>
              <li>
                <Link href="/">Reklam</Link>
              </li>
              <li>
                <Link href="/">Küçük İşletmeler</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Sorunuz mu var?</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">Yardım Merkezimizi ziyaret edin.</Link>
              </li>
            </ul>

            <h3>Hesabınızı ve gizliliğinizi yönetin</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">Ayarlarınıza gidin.</Link>
              </li>
            </ul>

            <h3>Öneri şeffaflığı</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">
                  Önerilen İçerikler hakkında daha fazla bilgi edinin.
                </Link>
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
