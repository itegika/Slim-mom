import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const modalBurger = document.querySelector("#modal-burger");

const Modal = ({ children }) => {
  return createPortal(
    <div className={styles.Modal}>{children}</div>,
    modalBurger
  );
};

export default Modal;
