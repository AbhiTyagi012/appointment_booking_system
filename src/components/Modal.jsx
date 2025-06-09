import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css'; // Ensure you have appropriate styling

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body // Render inside <body> instead of in the page hierarchy
  );
};

export default Modal;