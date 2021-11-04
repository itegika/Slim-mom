import DiaryProductsList from "./DiaryProductsList";
import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryDateСalendar from "./DiaryDateСalendar";
import styles from "./DiaryPage.module.scss";
import AuthorizedPageContainer from "../../shared/containerPage/AuthorizedPage/AuthorizedPage";
import SideBar from "../../client/SideBar/SideBar";

const DiaryPage = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsOpen(true);
  // };

  // {isOpen ? () : ()}

  return (
    <AuthorizedPageContainer>
      <div className={styles.DiaryConteiner}>
        <div className={styles.DiaryCalendar}>
          <DiaryDateСalendar />
        </div>
        <DiaryAddProductForm
          className={`${styles.DiaryForm} ${styles.visuallyHidden}`}
        />
        <DiaryProductsList className={styles.DiaryList} />
        <button  className={styles.OpenFormButton}>
          +
        </button>
      </div>
      <SideBar />
    </AuthorizedPageContainer>
  );
};

export default DiaryPage;
