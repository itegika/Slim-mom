// import React, { Component } from "react";
// import AsyncSelect from "react-select/async";
import Select from "react-select";
// import { handleInputChange } from "react-select/dist/declarations/src/utils";
import styles from "./DiaryAddProductForm.module.scss";

const options = [
  { kcal: "230", label: "баклажан" },
  { kcal: "90", label: "лимон" },
  { kcal: "130", label: "томат" },
];

const customStyles = {
  valueContainer: (prevStyle) => ({
    ...prevStyle,
    padding: "0px",
    margin: "0",
  }),
  placeholder: (prevStyle) => ({
    ...prevStyle,
    padding: "0px",
    margin: "0",
  }),
  input: (prevStyle) => ({
    ...prevStyle,
    padding: "0px",
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
  console.log(e);
};

const handleChangeProduct = (e) => {
  // console.log(e.target.value);
};

const handleChangeWeight = ({ target }) => {
  console.log(target.value);
};

const MyComponent = () => (
  <Select
    options={options}
    styles={customStyles}
    className={styles.ProductSearch}
    placeholder="Введите название продукта"
    components={{ IndicatorsContainer: () => null }}
    onChange={handleChangeProduct}
  />
);

const DiaryAddProductForm = () => {
  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmitForm}
        className={styles.ProductForm}
      >
        {MyComponent()}
        <input
          type="text"
          name="weight"
          placeholder="Граммы"
          className={styles.ProductInput}
          onChange={handleChangeWeight}
        />
        <button type="submit" className={styles.ProductAddBtn}></button>
      </form>
    </>
  );
};

export default DiaryAddProductForm;
