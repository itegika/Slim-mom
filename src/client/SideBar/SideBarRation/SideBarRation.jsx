import { useSelector } from "react-redux";
import { getnotAllowedProducts } from "../../../redux/calendar/summaries/summaries-selectors";
import styles from "./SideBarRation.module.scss";

const SideBarRation = () => {
  const notAllowedProducts = useSelector(getnotAllowedProducts)
    .slice(0, 8)
    .join(",");

  return (
    <div className={styles.rationWrapper}>
      <h2 className={styles.rationTitle}>Нерекомендуемые продукты</h2>
      <p className={styles.ration}>{notAllowedProducts}</p>
    </div>
  );
};
export default SideBarRation;
