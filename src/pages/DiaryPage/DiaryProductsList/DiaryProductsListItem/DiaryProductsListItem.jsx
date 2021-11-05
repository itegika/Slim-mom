import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteProduct } from "../../../../redux/calendar/summaries/summaries-operations";
import { getDayId } from "../../../../redux/calendar/summaries/summaries-selectors";
import styles from "./DiaryProductsListItem.module.scss";

const DiaryProductsListItem = ({ product }) => {
  const { id, title, weight, kcal } = product;
  const dayId = useSelector(getDayId);
  const dispatch = useDispatch();
  const eatenProductId = id;

  const onDelete = () => {
    dispatch(deleteProduct({ dayId, eatenProductId }));
  };

  return (
    <li className={styles.productsItem}>
      <span className={styles.productsName}>{title}</span>
      <span className={styles.productsWeight}>{weight} г</span>
      <span className={styles.productsKcal}>
        {Math.round(kcal)}
        <span className={styles.productsUnits}> ккал</span>
      </span>

      <button
        type="button"
        className={styles.productsButton}
        onClick={onDelete}
      >
        +
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
