"use client";
import ModalAddButton from "../modalAddBtn";

export default function Activities({ isModalOpen }) {
  return (
    <>
      <div className="activity-card">
        <div className="activity-header">
          <div className="title-section">
            <h2 className="title">Faaliyet</h2>
            <span className="followers">1.057 takipçi</span>
          </div>
          <ModalAddButton isModalOpen={isModalOpen} />
        </div>

        <div className="tabs">
          <button className="tab active">Gönderiler</button>
          <button className="tab">Yorumlar</button>
          <button className="tab">Resimler</button>
          <button className="tab">Belgeler</button>
        </div>

        <div className="posts">
          <div className="post">
            <div className="post-header">
              <span>Ece Sema Bekdemir bunu yayınladı</span>
              <span>•</span>
              <span>1 ay</span>
            </div>
            <div className="post-content">
              X Akademi Projesi Tamamlandı! Muhammed Baki Çağlayan ile birlikte
              X Akademi adında bir platform oluşturduk. Bu projede login ve
              signup özelliklerini entegre ettik. Rolü admin olan kullanıcı,
              öğrenci ekleme, silme ve düzenleme gi...
            </div>
            <div className="post-stats">
              <div className="reactions">👍 24</div>
              <div>1 paylaşım</div>
            </div>
          </div>

          <div className="post">
            <div className="post-header">
              <span>Ece Sema Bekdemir bunu yayınladı</span>
              <span>•</span>
              <span>1 ay</span>
            </div>
            <div className="post-content">
              Bu hafta, Doğa Savaş ile birlikte Next.js kullanarak
              geliştirdiğimiz öğrenci kayıt formu projesini başarıyla
              tamamladık! Projemizde...
            </div>
            <div claclassNamess="post-stats">
              <div className="reactions">👍 23</div>
              <div>1 paylaşım</div>
            </div>
          </div>

          <div className="post">
            <div className="post-header">
              <span>Ece Sema Bekdemir bunu yayınladı</span>
              <span>•</span>
              <span>1 ay</span>
            </div>
            <div className="post-content">
              Yeni Proje Güncellemesi: React'ten Next.js'e Geçiş! Son dönemde
              üzerinde çalıştığım quiz uygulamasında büyük bir adım attık...
              Daha önce React ile geliştirdiğimiz ve 4 farklı kategoriden oluşan
              quiz projemizi, Next.js'e taşıdık...
            </div>
            <div className="post-stats">
              <div className="reactions">👍 26</div>
              <div>1 paylaşım</div>
            </div>
          </div>
        </div>

        <a href="#" className="show-more">
          Tüm gönderileri göster →
        </a>
      </div>
    </>
  );
}
