import React from 'react';
import './ModalMessage.css';
import {useIntl} from "react-intl";

const ModalMessage = ({ isOpen, message, onClose }) => {
    const intl = useIntl();
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-body" onClick={e => e.stopPropagation()}>
                <h1>{message}</h1>
                <button onClick={onClose}>
                    {intl.formatMessage({id: 'closeModal'})}
                </button>
            </div>
        </div>
    );
};

export default ModalMessage;
