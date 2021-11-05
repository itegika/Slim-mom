import DiaryProductsList from "./DiaryProductsList";
import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryDateСalendar from "./DiaryDateСalendar";
import Modal from "./Modal";

import { useState } from "react";

import styles from "./DiaryPage.module.scss";
import AuthorizedPageContainer from "../../shared/containerPage/AuthorizedPage/AuthorizedPage";
import SideBar from "../../client/SideBar/SideBar";

const DiaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <AuthorizedPageContainer>
      <div className={styles.DiaryConteiner}>
        {isOpen ? (
          <Modal
            onClose={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <>
            <div className={styles.DiaryCalendar}>
              <DiaryDateСalendar />
            </div>
            <div className={styles.visuallyHidden}>
              <DiaryAddProductForm />
            </div>
            <DiaryProductsList className={styles.DiaryList} />
            <button onClick={handleOpenModal} className={styles.OpenFormButton}>
              +
            </button>
          </>
        )}
      </div>
    </AuthorizedPageContainer>
  );
};

export default DiaryPage;
