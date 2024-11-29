import "./newAds.css";
export default function NewAds() {
  return (
    <div className="bg">
      <div className="newads-card">
        <h1>Hemen bir iş ilanı yayınlayın</h1>
        <form>
          <label for="job-title">İş unvanı</label>
          <input
            type="text"
            id="job-title"
            placeholder="İşe alım yaptığınız unvanı ekleyin"
          />
          <label for="company">Şirket</label>
          <input type="text" id="company" />
          <label for="workplace">İşyeri politikası</label>
          <select id="workplace">
            <option value="">İş yerinde</option>
            <option value="hybrid">Hibrit</option>
            <option value="remote">Uzaktan</option>
          </select>
          <label for="location">İşin konumu</label>
          <input
            type="text"
            id="location"
            value="Istanbul, Istanbul, Türkiye"
          />
          <label for="job-type">İş türü</label>
          <select id="job-type">
            <option value="full-time">Tam Zamanlı</option>
            <option value="part-time">Yarı Zamanlı</option>
            <option value="contract">Sözleşmeli</option>
          </select>
          <button type="submit">Ücretsiz olarak başlayın</button>
        </form>
        <p className="footer">
          Ücretsiz iş ilanları için bazı limitler olabilir.
          <p>Politikamızı görüntüleyin</p>
        </p>
      </div>
    </div>
  );
}
