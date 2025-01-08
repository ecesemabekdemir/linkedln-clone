"use client";

import Link from "next/link";
import "./signup.css";
import { useState } from "react";
import { SaveUsers, signUp } from "@/action/auth";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    location: "",
    headline: "",
  });

  // Adım geçişi için
  const handleNext = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  // Son adımda formu gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData); // Kayıt fonksiyonunu çağır
      await SaveUsers(formData); // kullanıcıları tutuyor.
      alert("Kayıt işlemi başarılı!");
    } catch (err) {
      alert(`Kayıt işlemi başarısız: ${err.message}`);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={step === 3 ? handleSubmit : handleNext}>
        {step === 1 && (
          <div className="signup-step1">
            <div className="signup-logo">Logo Gelecek</div>
            <h1>Profesyonel hayatınızdan en iyi şekilde yararlanın</h1>
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              name="email"
              placeholder="e-posta veya telefon"
              required
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <label htmlFor="password">Şifre (6+ karakter)</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              required
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <div className="terms">
              <h3>Bu bir clone projedir</h3>
            </div>
            <button type="submit" className="btn-primary">
              Kabul Et ve Devam Et
            </button>
            <div className="login-link">
              Zaten LinkedIn üyesi misiniz?
              <Link href="/login">Oturum açın</Link>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="signup-step2">
            <div className="signup-logo">Logo Gelecek</div>
            <h1>LinkedIn e Katılın</h1>
            <input
              className="nameForm"
              type="text"
              name="firstName"
              placeholder="Ad"
              required
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
            <input
              className="nameForm"
              type="text"
              name="lastName"
              placeholder="Soyadı"
              required
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
            <button className="nameFormBtn" type="submit">
              Devam Et
            </button>
            <div className="login-link">
              Zaten LinkedIn'e üye misiniz?
              <Link href="/login">Oturum açın</Link>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="signup-step3">
            <div className="logo"></div>
            <h1>
              Profiliniz, yeni kişileri ve fırsatları keşfetmenize yardımcı olur
            </h1>
            <div className="form-group">
              <label>
                Konum<span className="required">*</span>
              </label>
              <input
                name="location"
                type="text"
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, location: e.target.value }))
                }
              />
            </div>
            <div className="form-group">
              <label>
                En son iş unvanı<span className="required">*</span>
              </label>
              <input
                name="headline"
                type="text"
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, headline: e.target.value }))
                }
              />
            </div>
            <button className="continueBtn" type="submit">
              Devam Et
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
