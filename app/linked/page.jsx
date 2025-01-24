import Link from "next/link";
import Image from "next/image";
import "./linked.css";

export default function LinkedPage() {
  return (
    <>
      <div className="container-linked">
        <div className="nav-linked">
          <Image
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt="LinkedIn"
            className="logo"
            width={135}
            height={34}
          ></Image>

          <div className="nav-links-linked">
            <Link href="#" className="nav-item-linked">
              <svg
                className="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              <span>Makaleler</span>
            </Link>
            <Link href="#" className="nav-item-linked">
              <svg
                className="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>Kişiler</span>
            </Link>
            <Link href="#" className="nav-item-linked">
              <svg
                className="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
              </svg>
              <span>Learning</span>
            </Link>
            <Link href="#" className="nav-item-linked">
              <svg
                className="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10 2h4c.55 0 1 .45 1 1v1h-6V3c0-.55.45-1 1-1zm8 13v5c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-5h12zM16 7H8c-1.1 0-2 .9-2 2v5h12V9c0-1.1-.9-2-2-2z" />
              </svg>
              <span>İlanlar</span>
            </Link>
            <Link href="#" className="nav-item-linked">
              <svg
                className="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" />
              </svg>
              <span>Oyun</span>
            </Link>
            <Link href="#" className="nav-item-linked">
              <svg
                className="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              <span>indir</span>
            </Link>

            <div className="nav-buttons-linked">
              <Link href="/signup" className="btn btn-outline">
                Hemen katılın
              </Link>
              <Link href="/login" className="btn btn-primary-linked">
                Oturum aç
              </Link>
            </div>
          </div>
        </div>

        <div className="main-linked">
          <div className="content-linked">
            <h1>Profesyonel topluluğunuza hoş geldiniz!</h1>
            <div className="login-options-linked">
              <button className="btn btn-google">Google ile devam et</button>
              <button className="btn btn-microsoft">
                Microsoft ile devam et
              </button>
              <button className="btn btn-email">E-posta ile oturum açın</button>
              <p className="terms">
                Devam Et seçeneğini tıklayarak veya oturum açarak LinkedIn in
                <Link href="#">Kullanıcı Anlaşması</Link>nı,
                <Link href="#">Gizlilik Politikası</Link>nı ve
                <Link href="#">Çerez Politikası</Link>nı kabul etmiş olursunuz.
              </p>
              <div className="signup-linked">
                LinkedIn de yeni misiniz?{" "}
                <Link href="/signup">Hemen katılın</Link>
              </div>
            </div>
          </div>
          <div className="footerClone">Clone Projedir</div>
        </div>
      </div>
    </>
  );
}
