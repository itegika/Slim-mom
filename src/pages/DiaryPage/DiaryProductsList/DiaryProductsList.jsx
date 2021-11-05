import DiaryProductsListItem from "./DiaryProductsListItem";
import styles from "./DiaryProductsList.module.scss";
import { useSelector } from "react-redux";
import { getProduct } from "../../../redux/calendar/summaries/summaries-selectors";
import { format } from "date-fns";

const DiaryProductsList = () => {
  const days = useSelector(getProduct);
  console.log(days);
  const date = format(new Date(), "yyyy-MM-dd");

  const eatenProducts = days.find((el) => el.date === date)?.eatenProducts;
  const productsListMarkup = eatenProducts?.map((product) => {
    return <DiaryProductsListItem key={product.id} product={product} />;
  });

  return (
    <ul className={styles.productsList}>
      {productsListMarkup ? productsListMarkup : <p>Nothing found</p>}
    </ul>
  );
};

export default DiaryProductsList;
