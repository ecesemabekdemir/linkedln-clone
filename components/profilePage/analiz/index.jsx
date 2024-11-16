export default function AnalystComponent() {
  return (
    <>
      <div className="analytics-card">
        <div className="analytics-header">
          <h2>Analizler</h2>
          <span className="private-badge">Size özel</span>
        </div>

        <div className="metrics">
          <div className="metric">
            <div className="metric-value">191 profil görüntülemesi</div>
            <div className="metric-description">
              Profilinize kimlerin baktığını keşfedin.
            </div>
          </div>

          <div className="metric">
            <div className="metric-value">292 gönderi gösterimi</div>
            <div className="metric-description">
              Gönderileriniz ile etkileşim kuran kişileri görün.
            </div>
            <div className="time-period">Son 7 gün</div>
          </div>

          <div className="metric">
            <div className="metric-value">31 arama görünümü</div>
            <div className="metric-description">
              Arama sonuçlarında ne kadar sık göründüğünüzü görün.
            </div>
          </div>
        </div>

        <a href="#" className="show-all">
          Tüm analizleri göster →
        </a>
      </div>
    </>
  );
}
