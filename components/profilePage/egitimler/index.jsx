"use client";

import { useEffect, useState } from "react";
import AddEducation from "./addEducationModal";
import EditEducationModal from "./editModal";

export default function Education({ educations }) {
  const [educationData, setEducationData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  function openModalEdit() {
    setIsEditOpen(true);
  }
  function closeModalEdit() {
    setIsEditOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    setEducationData(educations);
  }, [educations]);

  console.log("educationData", educationData);

  return (
    <>
      <div className="education-card">
        <div className="education-header">
          <h2 className="education-title">Eğitim</h2>
          <div className="education-actions">
            <button onClick={openModal} className="education-action-button">
              +
            </button>
            <AddEducation closeModal={closeModal} isModalOpen={isModalOpen} />
            <button onClick={openModalEdit} className="education-action-button">
              ✏️
            </button>
            <EditEducationModal
              education={educationData}
              closeModalEdit={closeModalEdit}
              isEditOpen={isEditOpen}
            />
          </div>
        </div>
        {educationData?.map((x, i) => (
          <div key={i} className="education-item">
            <div className="education-details">
              <div className="school-name">{x.school_name}</div>
              <div className="program">{x.department}</div>
              <div className="date">
                {x.start_month}-{x.end_month}
              </div>
              <div className="activites">{x.activites}</div>
              <div className="skills">{x.skills}</div>
            </div>
          </div>
        ))}

        <a href="#" className="education-show-more">
          {educationData?.length} - eğitimin tümünü göster →
        </a>
      </div>
    </>
  );
}
