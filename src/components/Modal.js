import "./Modal.css";
import React, { useEffect } from "react";

function Modal({ children, isOpen, onClose }) {
  useEffect(() => {
    const className = "-is-modal-opened";

    document.body.classList.toggle(className, isOpen);

    return () => document.body.classList.remove(className);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="Modal">
      <div className="backdrop" onClick={onClose} />
      <div className="content">{children}</div>
    </div>
  );
}

export default Modal;
