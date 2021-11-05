
import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import styles from "./DiaryAddProductForm.module.scss";
import TextField from "../../../shared/components/TextField";
import { getProducts } from "../../../shared/services/products";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/calendar/summaries/summaries-operations";

const DiaryAddProductForm = ({ onClose }) => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch()
    
  // useEffect(() => {
  //   setTimeout(() => {
  //     const data = getProducts("персик");
  //     console.log(data);
  //   }, 6000);
  // }, []);

  // const options = [
  //   { kcal: "230", label: "баклажан" },
  //   { kcal: "90", label: "лимон" },
  //   { kcal: "130", label: "томат" },
  // ];

//   
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

  // console.log(Select);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(addProduct({
  "date": "2020-12-31",
  "productId": "5d51694802b2373622ff552c",
  "weight": 100
}))
    // onClose();
    console.log(e);
  };

  const handleInputChange = (newValue) => {
    console.log(newValue);
    // const input = newValue.replace(/\W/g, "");
    // console.log(input);
    setInputValue(newValue);
    return newValue;
  };

  const loadOptions = () => {
    // setTimeout(() => {
    console.log("setTimeoutValue", inputValue);
    inputValue && getProducts(inputValue);
    // getProducts("персик");
    // }, 7000);
  };

  const handleChangeWeight = ({ target }) => {
    console.log(target.value);
  };

  const MyComponent = () => (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onInputChange={handleInputChange}
      styles={customStyles}
      className={styles.ProductSearch}
      placeholder="Введите название продукта"
      components={{ IndicatorsContainer: () => null }}
      // options={options}
      // onInputChange={handleChangeProduct}
    />
  );

  console.log("Інпут:", inputValue);

  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmitForm}
        className={`${styles.ProductForm}`}
      >
        {MyComponent()}
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
    </>
  );
};

export default DiaryAddProductForm;