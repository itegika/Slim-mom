import DiaryProductsList from "./DiaryProductsList";
import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryDateСalendar from "./DiaryDateСalendar";

import { useState } from "react";

import styles from "./DiaryPage.module.scss";

const DiaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.DiaryConteiner}>
      {isOpen ? (
        <DiaryAddProductForm className={styles.DiaryForm} />
      ) : (
        <>
          <div className={styles.DiaryCalendar}>
            <DiaryDateСalendar />
          </div>
          <DiaryProductsList className={styles.DiaryList} />
          <button onClick={handleOpenModal} className={styles.OpenFormButton}>
            +
          </button>
        </>
      )}
    </div>
  );
};

export default DiaryPage;
