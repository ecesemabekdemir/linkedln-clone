"use client";
import { useFormState } from "react-dom";
import { SaveJobs } from "./action";
import "./newAds.css";
import { useEffect, useRef } from "react";
export default function NewAds() {
  const [state, action] = useFormState(SaveJobs, {
    message: null,
    error: null,
  });
  const formRef = useRef();
  useEffect(() => {
    if (state?.message) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <div className="bg">
      <div className="newads-card">
        <h1>Hemen bir iş ilanı yayınlayın</h1>
        <form ref={formRef} action={action}>
          <label htmlfor="job-title">İş unvanı</label>
          <input
            name="title"
            type="text"
            id="job-title"
            placeholder="İşe alım yaptığınız unvanı ekleyin"
          />
          <label htmlFor="company">Şirket</label>
          <input name="company_name" type="text" id="company" />
          <label htmlfor="workplace">İşyeri politikası</label>
          <select
            onChange={(e) => e.target.value}
            defaultValue="default"
            name="description"
            id="workplace"
          >
            <option value="default" disabled>
              Seçiniz
            </option>
            <option value="onsite">İş yerinde</option>
            <option value="hybrid">Hibrit</option>
            <option value="remote">Uzaktan</option>
          </select>
          <label htmlfor="location">İşin konumu</label>
          <input
            name="location"
            type="text"
            id="location"
            value="Istanbul, Istanbul, Türkiye"
          />
          <label htmlfor="job-type">İş türü</label>
          <select
            onChange={(e) => e.target.value}
            defaultValue="default"
            name="type"
            id="job-type"
          >
            <option value="default" disabled>
              Seçiniz
            </option>
            <option value="full-time">Tam Zamanlı</option>
            <option value="part-time">Yarı Zamanlı</option>
            <option value="contract">Sözleşmeli</option>
          </select>
          <button type="submit">Ücretsiz olarak başlayın</button>
        </form>
        <div className="footer">
          <p> Ücretsiz iş ilanları için bazı limitler olabilir.</p>
          <p>Politikamızı görüntüleyin</p>
        </div>
      </div>
    </div>
  );
}
