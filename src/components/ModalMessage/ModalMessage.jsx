// SimpleModal.js
import React from 'react';
import './ModalMessage.css'; // Import the CSS

const ModalMessage = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-body" onClick={e => e.stopPropagation()}>
                <h1>{message}</h1>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ModalMessage;
