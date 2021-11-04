import styles from "./SideBarSummary.module.scss";

const summary = {
  date: "02.06.2021",
  kcalLeft: 1000,
  kcalConsumed: 1000,
  dailyRate: 2000,
  percentsOfDailyRate: 50,
  userId: "507f1f77bcf86cd799439011",
  id: "507f1f77bcf86cd799439012",
};

const SideBarSummary = () => {
  // const summary = useSelector(getAummary)
  return (
    <>
      <div className={styles.summaryDiv}>
        <h2 className={styles.summaryTitle}>Сводка за {summary.date}</h2>
        <ul className={styles.summaryList}>
          <li className={styles.summaryItem}>
            Осталось{" "}
            <span className={styles.summary_kcal}>{summary.kcalLeft} ккал</span>
          </li>
          <li className={styles.summaryItem}>
            Употреблено{" "}
            <span className={styles.summary_kcal}>
              {summary.kcalConsumed} ккал
            </span>
          </li>
          <li className={styles.summaryItem}>
            Дневная норма{" "}
            <span className={styles.summary_kcal}>
              {summary.dailyRate} ккал
            </span>
          </li>
          <li className={styles.summaryItem}>
            n% от нормы{" "}
            <span className={styles.summary_kcal}>
              {summary.percentsOfDailyRate} ккал
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideBarSummary;
