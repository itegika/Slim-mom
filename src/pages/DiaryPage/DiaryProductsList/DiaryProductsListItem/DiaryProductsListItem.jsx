import styles from "./DiaryProductsListItem.module.scss";

const DiaryProductsListItem = ({ product }) => {
  const { id, name, weight, kcal } = product;

  const onDelete = (id) => {
    // dispatch(removeContact(id));
  };

  return (
    <li className={styles.productsItem}>
      <span className={styles.productsName}>{name}</span>
      <span className={styles.productsWeight}>{weight} г</span>
      <span className={styles.productsKcal}>
        {kcal}
        <span className={styles.productsUnits}> ккал</span>
      </span>

      <button
        type="button"
        className={styles.productsButton}
        onClick={() => {
          onDelete(id);
        }}
      >
        +
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
