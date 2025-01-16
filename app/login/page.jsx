"use client";

import Link from "next/link";
import "./login.css";
import { useFormState } from "react-dom";
import { login } from "@/action/auth";
import { useState } from "react";

export default function Login() {
  const [state, action] = useFormState(login, { errors: null });
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Doğrulama fonksiyonu
  const validate = (formData) => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.get("email")) {
      newErrors.email = "E-posta adresi gereklidir.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz.";
      isValid = false;
    }

    if (!formData.get("password")) {
      newErrors.password = "Şifre gereklidir.";
      isValid = false;
    } else if (formData.get("password").length < 6) {
      newErrors.password = "Şifre en az 6 karakter olmalıdır.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (validate(formData)) {
      // Doğruysa giriş işlemini başlat
      action(formData);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Oturum açın</h1>
        <p className="login-subtitle">
          Profesyonel dünyanızla ilgili güncel haberlere sahip olun.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <input
              className="login-form-control"
              type="email"
              name="email"
              placeholder="E-posta adresini giriniz"
              required
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
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
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
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
        LinkedIn de yeni misiniz?
        <Link href="/signup">Hemen katılın </Link>
      </div>
    </div>
  );
}
