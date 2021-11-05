import { format } from "date-fns";
import { useSelector } from "react-redux";
import {
  getData,
  getSummariesInfo,
} from "../../../redux/calendar/summaries/summaries-selectors";
import styles from "./SideBarSummary.module.scss";

const SideBarSummary = () => {
  // const summary = useSelector(getnotAllowedProducts);
  const summaries = useSelector(getSummariesInfo);
  const currentDate = useSelector(getData);

  return (
    <>
      {summaries && (
        <div className={styles.summaryDiv}>
          <h2 className={styles.summaryTitle}>Сводка за {currentDate}</h2>
          <ul className={styles.summaryList}>
            <li className={styles.summaryItem}>
              Осталось{" "}
              <span className={styles.summary_kcal}>
                {Math.round(summaries.kcalLeft)} ккал
              </span>
            </li>
            <li className={styles.summaryItem}>
              Употреблено{" "}
              <span className={styles.summary_kcal}>
                {Math.round(summaries.kcalConsumed)} ккал
              </span>
            </li>
            <li className={styles.summaryItem}>
              Дневная норма{" "}
              <span className={styles.summary_kcal}>
                {Math.round(summaries.dailyRate)} ккал
              </span>
            </li>
            <li className={styles.summaryItem}>
              n% от нормы{" "}
              <span className={styles.summary_kcal}>
                {Math.round(summaries.percentsOfDailyRate)} ккал
              </span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default SideBarSummary;
