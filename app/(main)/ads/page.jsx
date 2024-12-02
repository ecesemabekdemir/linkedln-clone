"use server";
import Link from "next/link";
import "./ads.css";
import { createClient } from "@/utils/supabase/server";
import DeleteJobsBtn from "@/components/deleteJobsBtn";

export default async function Ads() {
  const supabase = createClient();

  const { data, error } = await supabase.from("jobs").select("*");

  console.log("jobsDataaa", data);

  return (
    <div className="ads-container">
      <div className="menu-card">
        <div className="menu-card-nav">
          <ul className="menu-list">
            <li>
              <a href="#" className="menu-item">
                <i>☰</i>
                Tercihler
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                <i>🔖</i>
                İş ilanlarım
              </a>
            </li>
            <div className="divider"></div>
            <li>
              <Link href="/newAds" className="menu-item post-job">
                <i>✎</i>
                Ücretsiz iş ilanı ver
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ads">
        <div className="ads-header">
          <h1>Ağınızda işe alım yapıyor</h1>
          <p>Ağınızdaki kişilerin işe alım yaptığı işler</p>
        </div>
        {data?.map((job, i) => (
          <div key={i} className="job-card">
            <DeleteJobsBtn id={job.id} />
            <div className="company-logo"></div>
            <div className="job-content">
              <a href="#" className="job-title">
                {job.title}
              </a>
              <div className="company-name">{job.company_name}</div>
              <div className="job-location">{job.location}</div>
              <div className="connections">
                İşe alım takımı ile 20 ortak bağlantı
              </div>
              <button className="job-apply-button">Kolay Başvuru</button>
            </div>
          </div>
        ))}
        <a href="#" className="job-view-all">
          Tümünü gör →
        </a>
      </div>
    </div>
  );
}
