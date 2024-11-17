"use client";
export default function ModalAddPost({ isModalOpen, closeModal }) {
  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay ">
          <div className="modal-add-post">
            <div className="modal-header">
              <div className="user-info">
                <div className="user-avatar"></div>
                <div className="user-details">
                  <div className="user-name">
                    Ece Sema Bekdemir
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 11L3 6h10l-5 5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <button onClick={closeModal} className="close-button">
                ✕
              </button>
            </div>

            <div className="modal-body">
              <textarea
                className="modal-content"
                placeholder="Ne hakkında konuşmak istiyorsunuz?"
              ></textarea>
            </div>

            <div className="modal-footer">
              <div className="toolbar">
                <button className="tool-button">😊</button>
                <button className="tool-button">🖼️</button>
                <button className="tool-button">📅</button>
                <button className="tool-button">➕</button>
              </div>
              <button className="send-button">Gönder</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
