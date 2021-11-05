import DiaryProductsListItem from "./DiaryProductsListItem";
import styles from "./DiaryProductsList.module.scss";
import { useSelector } from "react-redux";
import { getProduct } from "../../../redux/calendar/summaries/summaries-selectors";

const DiaryProductsList = () => {
  const days = useSelector(getProduct);
  const eatenProducts = days.map((el) => el.eatenProducts);

  if (eatenProducts.length !== 0) {
    const productsListMarkup = eatenProducts.map((product) => {
      return <DiaryProductsListItem key={product.id} product={product} />;
    });
    return <ul className={styles.productsList}>{productsListMarkup}</ul>;
  } else {
    return <p>Nothing found</p>;
  }
};

export default DiaryProductsList;
