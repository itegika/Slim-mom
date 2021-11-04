import styles from "./Modal.module.scss";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

// const modalWindow = document.querySelector("#modal");

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseButtonClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      onClose();
    }
  };

  return createPortal(
    <div
      className={styles.modalMainContainerOverlay}
      onClick={handleBackdropClick}
    >
      <div className={styles.modalMainContainer}>
        <button className={styles.closeModalBtn} onClick={onClose} />
        <div className={styles.mobileBackground}>
          <button
            className={styles.closeModalBtnMobile}
            onClick={handleCloseButtonClick}
          />
        </div>
        <div className={styles.container}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
Modal.defaultProps = {
  onClose: () => {},
};
Modal.propTypes = {
  onCLose: PropTypes.func,
};

export default Modal;
