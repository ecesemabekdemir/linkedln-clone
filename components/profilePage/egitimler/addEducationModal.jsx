"use client";
import { useFormState } from "react-dom";
import "./education.css";
import { useEffect, useRef, useState } from "react";
import { SaveEducation } from "./action";

export default function AddEducation({ isModalOpen, closeModal }) {
  const [state, action] = useFormState(SaveEducation, {
    message: null,
    error: null,
  });
  const [skills, setSkills] = useState([]);
  const formRef = useRef();
  useEffect(() => {
    if (state?.message) {
      formRef.current.reset();
    }
  }, [state]);
  const handleAddSkill = () => {
    setSkills([...skills, ""]); // Yeni input ekle
  };
  const handleSkillChange = (index, event) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = event.target.value; // Belirli input'u güncelle
    setSkills(updatedSkills);
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Eğitimi Ekle</h2>
              <button onClick={closeModal} className="close-button">
                X
              </button>
            </div>
            <form ref={formRef} action={action} className="education-form">
              <div className="form-group">
                <label htmlFor="school">Okul Adı</label>
                <input
                  type="text"
                  id="school"
                  name="school_name"
                  placeholder="Örn. İstanbul Üniversitesi"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="department">Departman</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  placeholder="Örn. Bilgisayar Bilimi"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="section">Bölüm</label>
                <input
                  type="text"
                  id="section"
                  name="section"
                  placeholder="Örn. Yazılım Mühendisliği"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Başlangıç ​​Tarihi</label>
                  <div className="date-select">
                    <select
                      onChange={(e) => e.target.value}
                      name="start_month"
                      required
                    >
                      <option value="">Ay</option>
                      <option value="Ocak">Ocak</option>
                      <option value="Şubat">Şubat</option>
                      <option value="Mart">Mart</option>
                      <option value="Nisan">Nisan</option>
                      <option value="Mayıs">Mayıs</option>
                      <option value="Haziran">Haziran</option>
                      <option value="Temmuz">Temmuz</option>
                      <option value="Ağustos">Ağustos</option>
                      <option value="Eylül">Eylül</option>
                      <option value="Ekim">Ekim</option>
                      <option value="Kasım">Kasım</option>
                      <option value="Aralık">Aralık</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Bitiş ​​Tarihi</label>
                  <div className="date-select">
                    <select
                      onChange={(e) => e.target.value}
                      name="end_month"
                      required
                    >
                      <option value="">Ay</option>
                      <option value="Ocak">Ocak</option>
                      <option value="Şubat">Şubat</option>
                      <option value="Mart">Mart</option>
                      <option value="Nisan">Nisan</option>
                      <option value="Mayıs">Mayıs</option>
                      <option value="Haziran">Haziran</option>
                      <option value="Temmuz">Temmuz</option>
                      <option value="Ağustos">Ağustos</option>
                      <option value="Eylül">Eylül</option>
                      <option value="Ekim">Ekim</option>
                      <option value="Kasım">Kasım</option>
                      <option value="Aralık">Aralık</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="activities">Aktiviteler ve Kulüpler</label>
                <textarea
                  id="activities"
                  name="activites"
                  placeholder="Örn. Voleybol, Satranç Kulübü"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="description">Tanım</label>
                <textarea id="description" name="description"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="skills">Yetenekler</label>
                {skills.map((skill, index) => (
                  <div key={index} className="skill-input">
                    <input
                      type="text"
                      id={`skills-${index}`}
                      name={`skills-${index}`}
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e)}
                      placeholder="Yetenek ekle"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  className="add-button"
                  onClick={handleAddSkill}
                >
                  + Yetenek Ekle
                </button>
              </div>
              <button type="submit" className="submit-button">
                Kaydet
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
