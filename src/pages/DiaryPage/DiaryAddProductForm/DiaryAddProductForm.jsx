import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./DiaryAddProductForm.module.scss";
import TextField from "../../../shared/components/TextField";
import { getProducts } from "../../../shared/services/products";
import { useDispatch } from "react-redux";

import { addProduct } from "../../../redux/calendar/summaries/summaries-operations";
import { getData } from "../../../redux/calendar/summaries/summaries-selectors";
import { useSelector } from "react-redux";

const DiaryAddProductForm = () => {
  const dispatch = useDispatch();

  const [options, setOptions] = useState([]);
  const [selectProduct, setSelectProduct] = useState("");
  const [productId, setProductId] = useState("");
  const [weight, setWeight] = useState("");

  const date = useSelector(getData);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // const data = { productId, weight: Number(weight) };
    // console.log(data);

    dispatch(
      addProduct({
        date,
        productId,
        weight,
      })
    );
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProducts(selectProduct);
      const newOptions = data.map(({ _id, title }) => ({
        value: _id,
        label: title.ru,
      }));
      setOptions(newOptions);
    };
    if (selectProduct && selectProduct.length > 2) {
      fetchProduct();
    }
  }, [selectProduct]);

  const customStyles = {
    valueContainer: (prevStyle) => ({
      ...prevStyle,
      padding: "0",
      margin: "0",
    }),
    placeholder: (prevStyle) => ({
      ...prevStyle,
      padding: "0",
      margin: "0",
    }),
    input: (prevStyle) => ({
      ...prevStyle,
      padding: "0",
      margin: "0",
    }),
    control: (prevStyle) => ({
      ...prevStyle,
      padding: "0",
      margin: "0",
      border: "none",
      boxShadow: "none",
      minHeight: "0",
    }),
  };

  const handleProductChange = ({ value }) => {
    setProductId(value);
  };

  const handleProductSearch = (newValue) => {
    setSelectProduct(newValue);
  };

  const handleChangeWeight = ({ target }) => {
    setWeight(target.value);
  };

  return (
    <form
      action="submit"
      onSubmit={handleSubmitForm}
      className={styles.ProductForm}
    >
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={isClearable}
        isSearchable={true}
        name="product"
        options={options}
        // value={data.product}
        onChange={handleProductChange}
        onInputChange={handleProductSearch}
      />
      {/* {<MyComponent />} */}
      <TextField
        type="text"
        name="weight"
        placeholder="Граммы"
        onChange={handleChangeWeight}
        className={styles.ProductInput}
      />
      {/* <Button
        type="submit"
        className={styles.ProductAddBtn}
        variant="primary"
      /> */}
      <button type="submit" className={styles.ProductAddBtn} />
    </form>
  );
};

export default DiaryAddProductForm;
