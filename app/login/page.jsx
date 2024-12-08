"use client";

import Link from "next/link";
import "./login.css";
import { useFormState } from "react-dom";
import { login } from "@/action/auth";

export default function Login() {
  const [state, action] = useFormState(login, { errors: null });

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Oturum açın</h1>
        <p className="login-subtitle">
          Profesyonel dünyanızla ilgili güncel haberlere sahip olun.
        </p>
        <form action={action}>
          <div className="login-form-group">
            <input
              className="login-form-control"
              type="email"
              name="email"
              placeholder="E-posta adresini giriniz"
              required
            />
          </div>
          <div className="login-form-group">
            <div className="login-password-container">
              <input
                className="login-form-control"
                type="password"
                name="password"
                placeholder="******"
                required
              />
            </div>
          </div>
          <Link href="/" className="login-forgot-password">
            Şifrenizi mi unuttunuz?
          </Link>
          <div className="login-checkbox-container">
            <input type="checkbox" id="keep-signed" />
            <label htmlFor="keep-signed">Oturumum açık kalsın</label>
          </div>
          <button type="submit" className="login-btn btn-primary">
            Oturum aç
          </button>
          <h2 className="login-terms">bu bir clone projedir</h2>
        </form>
      </div>
      <div className="signup-link">
        LinkedIn'de yeni misiniz?
        <Link href="/signup">Hemen katılın </Link>
      </div>
    </div>
  );
}
