import css from "./Modal.module.scss";
import DiaryAddProductForm from "../DiaryAddProductForm";
import styles from "../DiaryAddProductForm/DiaryAddProductForm.module.scss";

const Modal = ({ onClose }) => {
  return (
    <>
      <button className={css.closeBtn} onClick={onClose}>
        ⮨
      </button>
      <DiaryAddProductForm onClose={onClose} />
    </>
  );
};

export default Modal;