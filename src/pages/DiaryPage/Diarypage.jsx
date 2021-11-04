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

  // {isOpen ? () : ()}

  return (
    <div className={styles.DiaryConteiner}>
      <div className={styles.DiaryCalendar}>
        <DiaryDateСalendar />
      </div>

      <DiaryAddProductForm
        className={`${styles.DiaryForm} ${styles.visuallyHidden}`}
      />
      <DiaryProductsList className={styles.DiaryList} />
      <button onClick={handleOpenModal} className={styles.OpenFormButton}>
        +
      </button>
    </div>
  );
};

export default DiaryPage;
