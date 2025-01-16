"use client";
import { useFormState } from "react-dom";
import { SaveJobs } from "./action";
import "./newAds.css";
import { useEffect, useRef, useState } from "react";

export default function NewAds() {
  const [state, action] = useFormState(SaveJobs, {
    message: null,
    error: null,
  });
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (state?.message) {
      formRef.current.reset();
      setErrors({});
      setLoading(false);
    }
  }, [state?.message]);

  const validateForm = () => {
    const currentErrors = {};

    const formData = new FormData(formRef.current);

    if (!formData.get("title"))
      currentErrors.title = "İş unvanı boş bırakılamaz.";
    if (!formData.get("company_name"))
      currentErrors.company_name = "Şirket adı boş bırakılamaz.";
    if (
      !formData.get("description") ||
      formData.get("description") === "default"
    ) {
      currentErrors.description = "Lütfen işyeri politikasını seçiniz.";
    }
    if (!formData.get("type") || formData.get("type") === "default") {
      currentErrors.type = "Lütfen iş türünü seçiniz.";
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validateForm()) {
      try {
        await action(new FormData(formRef.current));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("İş ilanı gönderimi sırasında bir hata oluştu.");
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="bg">
      <div className="newads-card">
        <h1>Hemen bir iş ilanı yayınlayın</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="job-title">İş unvanı</label>
          <input
            name="title"
            type="text"
            id="job-title"
            placeholder="İşe alım yaptığınız unvanı ekleyin"
          />
          {errors.title && <p className="error">{errors.title}</p>}

          <label htmlFor="company">Şirket</label>
          <input name="company_name" type="text" id="company" />
          {errors.company_name && (
            <p className="error">{errors.company_name}</p>
          )}

          <label htmlFor="workplace">İşyeri politikası</label>
          <select defaultValue="default" name="description" id="workplace">
            <option value="default" disabled>
              Seçiniz
            </option>
            <option value="onsite">İş yerinde</option>
            <option value="hybrid">Hibrit</option>
            <option value="remote">Uzaktan</option>
          </select>
          {errors.description && <p className="error">{errors.description}</p>}

          <label htmlFor="location">İşin konumu</label>
          <input
            name="location"
            type="text"
            id="location"
            value="Istanbul, Istanbul, Türkiye"
            readOnly
          />

          <label htmlFor="job-type">İş türü</label>
          <select defaultValue="default" name="type" id="job-type">
            <option value="default" disabled>
              Seçiniz
            </option>
            <option value="full-time">Tam Zamanlı</option>
            <option value="part-time">Yarı Zamanlı</option>
            <option value="contract">Sözleşmeli</option>
          </select>
          {errors.type && <p className="error">{errors.type}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Gönderiliyor..." : "Ücretsiz olarak başlayın"}
          </button>
        </form>
        <div className="footer">
          <p>Ücretsiz iş ilanları için bazı limitler olabilir.</p>
          <p>Politikamızı görüntüleyin</p>
        </div>
      </div>
    </div>
  );
}
