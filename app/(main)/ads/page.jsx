"use server";
import Link from "next/link";
import "./ads.css";
import { createClient } from "@/utils/supabase/server";
import DeleteJobsBtn from "@/components/deleteJobsBtn";

export default async function Ads() {
  const supabase = createClient();

  const { data, error } = await supabase.from("jobs").select("*");
  let { data: users } = await supabase.from("users").select("*");
  return (
    <div className="ads-container">
      <div className="menu-card">
        <div className="menu-card-nav">
          <ul className="menu-list">
            <li>
              <Link href="/" className="menu-item">
                <i>☰</i>
                Tercihler
              </Link>
            </li>
            <li>
              <Link href="/ads" className="menu-item">
                <i>🔖</i>
                İş ilanlarım
              </Link>
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
              <Link href="/" className="job-title">
                {job.title}
              </Link>
              <div className="company-name">{job.company_name}</div>
              <div className="job-location">{job.location}</div>
              <div className="connections">
                İşe alım takımı ile {users.length} ortak bağlantı
              </div>
              <button className="job-apply-button">Kolay Başvuru</button>
            </div>
          </div>
        ))}
        <Link href="/ads" className="job-view-all">
          Tümünü gör →
        </Link>
      </div>
    </div>
  );
}
