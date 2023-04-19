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
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div ref={modalContentRef} className="modal-content">
        {children}
        <button className="modal-close" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
