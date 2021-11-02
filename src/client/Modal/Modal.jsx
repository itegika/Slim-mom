import styles from "./Modal.module.scss";
import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ModalWindow = document.querySelector('#modal');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }; 
  }, []);
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseButtonClick = e => {
    if (e.target.tagName === 'BUTTON') {
      console.log(e.target.tagName);
      onClose();
    }
  };

  return createPortal(
    <div
      className={styles}
      onClick={handleBackdropClick}
    >
      <div className={styles}>
        <button
          className={styles}
          onClick={handleCloseButtonClick}
        />
        <div className={styles}>
          <button
            className={styles}
            onClick={handleCloseButtonClick}
          />
        </div>
        <div className={styles}>{children}</div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default Modal;
