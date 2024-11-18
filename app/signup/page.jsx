import Link from "next/link";
import "./signup.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-logo"></div>
      <h1>Profesyonel hayatınızdan en iyi şekilde yararlanın</h1>
      <form action="">
        <label for="email">E-posta</label>
        <input type="email" placeholder="e-posta veya telefon " />
        <label for="password">Şifre (6+ karakter)</label>
        <input type="password" placeholder="şifre" />
        <div className="checkbox-container">
          <input type="checkbox" id="remember" />
          <label for="remember">Beni hatırla</label>
        </div>
        <p className="terms">
          <h3>bu bir clone projedir</h3>
        </p>
        <button type="submit" className="btn-primary">
          Kabul Et ve Katıl
        </button>
        <div className="divider">
          <span>veya</span>
        </div>
        <button type="button" className="btn-google">
          Continue with Google
        </button>
        <p className="login-link">
          Zaten LinkedIn üyesi misiniz?
          <Link href="/login">Oturum açın</Link>
        </p>
      </form>
    </div>
  );
}
