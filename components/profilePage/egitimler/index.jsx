export default function Education() {
  return (
    <>
      <div className="education-card">
        <div className="education-header">
          <h2 className="education-title">Eğitim</h2>
          <div className="education-actions">
            <button className="education-action-button">+</button>
            <button className="education-action-button">✏️</button>
          </div>
        </div>

        <div className="education-item">
          <div className="education-details">
            <div className="school-name">Acunmedya Akademi</div>
            <div claclassNamess="date">Mar 2024</div>
            <div className="education-skills">
              HTML, Postman API ve +4 yetenek
            </div>
          </div>
        </div>

        <div className="education-item">
          <div className="education-details">
            <div className="school-name">İstanbul Gelişim Üniversitesi</div>
            <div className="program">
              İnşaat Mühendisliği Teknolojileri/Teknisyen
            </div>
            <div className="date">2016 - 2018</div>
            <div className="skills">AutoCAD</div>
          </div>
        </div>

        <a href="#" className="education-show-more">
          3 eğitimin tümünü göster →
        </a>
      </div>
    </>
  );
}
