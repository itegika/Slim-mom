import { useSelector } from "react-redux";
import { getCurrentUserInfootAllowedProducts } from "../../../redux/calendar/summaries/summaries-selectors";
import styles from "./SideBarRation.module.scss";

// const user = {
//   email: "user@example.com",
//   username: "Emma",
//   userData: {
//     weight: 100,
//     height: 170,
//     age: 30,
//     bloodType: 1,
//     desiredWeight: 60,
//     dailyRate: 2000,
//     notAllowedProducts: ["Омлет"],
//   },
// };

const SideBarRation = () => {
  const summary = "Wellkom to hell"
  // const summary = useSelector(getCurrentUserInfootAllowedProducts).slice(0, 8).join(",");
  // console.log(summary);

  return (
    <div className={styles.rationWrapper}>
      <h2 className={styles.rationTitle}>Нерекомендуемые продукты</h2>
      <p className={styles.ration}>{
       summary
      }</p>
    </div>
  );
};
export default SideBarRation;
