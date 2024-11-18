import Link from "next/link";
import "./login.css";
export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h1>Oturum açın</h1>
          <p className="login-subtitle">
            Profesyonel dünyanızla ilgili güncel haberlere sahip olun.
          </p>

          <form>
            <div className="login-form-group">
              <input
                type="text"
                className="login-form-control"
                placeholder="E-posta veya telefon"
                required
              />
            </div>

            <div className="login-form-group">
              <div className="login-password-container">
                <input
                  type="password"
                  className="login-form-control"
                  placeholder="Şifre"
                  required
                />
                <button type="button" className="login-show-password">
                  Göster
                </button>
              </div>
            </div>

            <a href="#" className="login-forgot-password">
              Şifrenizi mi unuttunuz?
            </a>

            <div className="login-checkbox-container">
              <input type="checkbox" id="keep-signed" />
              <label for="keep-signed">Oturumum açık kalsın</label>
            </div>

            <button type="submit" className="login-btn btn-primary">
              Oturum aç
            </button>

            <h2 className="login-terms">bu bir clone projedir</h2>
          </form>
        </div>

        <p className="signup-link">
          LinkedIn'de yeni misiniz?
          <Link href="/signup">Hemen katılın </Link>
        </p>
      </div>
    </>
  );
}
