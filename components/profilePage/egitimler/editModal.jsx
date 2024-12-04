"use client";
import { useState, useEffect, useRef } from "react";
import "./education.css";
import { useFormState } from "react-dom";
import { EditEducation } from "./action";

export default function EditEducationModal({
  isEditOpen,
  closeModalEdit,
  education,
}) {
  const [formData, setFormData] = useState({
    school_name: education?.school_name || "",
    department: education?.department || "",
    section: education?.section || "",
    start_month: education?.start_month || "",
    end_month: education?.end_month || "",
    activites: education?.activites || "",
    description: education?.description || "",
    skills: education?.skills || "",
  });

  const [state, action] = useFormState(EditEducation, {
    message: null,
    error: null,
  });
  const formRef = useRef();

  useEffect(() => {
    if (state?.message) {
      formRef.current.reset();
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log("formData", formData);

  return (
    <>
      {isEditOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Eğitimi Düzenle</h2>
              <button onClick={closeModalEdit} className="close-button">
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
                  defaultValue={formData.school_name}
                  onChange={handleChange}
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
                  defaultValue={formData.department}
                  onChange={handleChange}
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
                  defaultValue={formData.section}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Başlangıç ​​Tarihi</label>
                  <div className="date-select">
                    <select
                      name="start_month"
                      defaultValue={formData.start_month}
                      onChange={handleChange}
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
                      name="end_month"
                      defaultValue={formData.end_month}
                      onChange={handleChange}
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
                  defaultValue={formData.activites}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="description">Tanım</label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="skills">Yetenekler</label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  defaultValue={formData.skills}
                  onChange={handleChange}
                />
                <button type="button" className="add-button">
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
