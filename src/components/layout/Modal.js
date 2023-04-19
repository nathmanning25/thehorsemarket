import React, { useRef } from "react";

const Modal = ({ showModal, closeModal, children }) => {
  const modalContentRef = useRef();

  if (!showModal) {
    return null;
  }

  const handleClickOutside = (event) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      closeModal();
    }
  };
  return (
    <div
      className={`modal-overlay ${showModal ? "visible" : ""}`}
      onClick={handleClickOutside}
    >
      <div ref={modalContentRef} className="modal-content">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
