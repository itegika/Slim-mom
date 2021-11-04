import DiaryProductsListItem from "./DiaryProductsListItem";
import styles from "./DiaryProductsList.module.scss";

const products = [
  {
    id: 1,
    name: "томат",
    weight: "150",
    kcal: "130",
  },
  {
    id: 2,
    name: "лимон",
    weight: "50",
    kcal: "90",
  },
  {
    id: 3,
    name: "баклажан",
    weight: "350",
    kcal: "230",
  },
];

const DiaryProductsList = () => {
  if (products.length !== 0) {
    const productsListMarkup = products.map((product) => {
      return <DiaryProductsListItem key={product.id} product={product} />;
    });
    return <ul className={styles.productsList}>{productsListMarkup}</ul>;
  } else {
    return <p>Nothing found</p>;
  }
};

export default DiaryProductsList;
