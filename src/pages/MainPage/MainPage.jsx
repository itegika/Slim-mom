import { useState } from "react";

import styles from "./MainPage.module.scss";

import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioGroup from "../../shared/components/RadioGroup";
import Modal from "../../client/Modal";
import ModalInfo from "../../shared/components/ModalInfo";
import { getDailyRate } from "../../shared/services/daily";
import useForm from "../../shared/hooks/useForm";
import { initialState } from "./initialState";

const MainPage = () => {
  const [data, handleChange, handleSubmit] = useForm(initialState, () => {
    return;
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bldType, setBldType] = useState(null);
  const [products, setProducts] = useState([]);
  const [calories, setCalories] = useState(null);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const name = "bloodType";
  const itemsOptions = [
    {
      onChange: ()=>{setBldType(1)},
      name,
      label: "1",
      dataRadio: 1,
      required: true,
    },
    {
      onChange: ()=>{setBldType(2)},
      name,
      dataRadio: 2,

      label: "2",
    },
    {
      onChange: ()=>{setBldType(3)},
      name,
      dataRadio: 3,

      label: "3",
    },
    {
      onChange: ()=>{setBldType(4)},
      name,
      dataRadio: 4,

      label: "4",
    },
  ];

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const arrOfArr = Object.entries(data);
    const arrToNum = arrOfArr.map(([key, value]) => [key, Number(value)]);
    const arrToObj = await Object.fromEntries(arrToNum);
    arrToObj["bloodType"] = bldType;
    
    try {
      const { data } = await getDailyRate(arrToObj);
      const { dailyRate, notAllowedProducts } = await data;
      setCalories(dailyRate);
      setProducts(notAllowedProducts.slice(0, 4));
    } catch (error) {
      console.log(error);
    }    
    toggleModal();
    e.target.reset();
    handleSubmit(e);
  };

  return (
    <div className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>
          Просчитай свою суточную норму каллорий прямо сейчас
        </h1>
        {modalIsOpen && (
          <Modal onClose={toggleModal}>
            <ModalInfo products={products} calories={calories} />
          </Modal>
        )}
        <form onSubmit={onFormSubmit} className={styles.form}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <TextField
                required={true}
                label=""
                name="height"
                value={data["height"]}
                onChange={handleChange}
                placeholder="Рост"
                min="100"
                max="250"
                type="number"
              />
            </div>
            <div className={styles.field}>
              <TextField
                required={true}
                label=""
                value={data["age"]}
                name="age"
                onChange={handleChange}
                placeholder="Возраст"
                min="18"
                max="100"
                type="number"
              />
            </div>
            <div className={styles.field}>
              <TextField
                required={true}
                label=""
                value={data["weight"]}
                name="weight"
                onChange={handleChange}
                placeholder="Текущий вес"
                min="0"
                max="500"
                type="number"
              />
            </div>
            <div className={styles.field}>
              <TextField
                required={true}
                label=""
                value={data["desiredWeight"]}
                name="desiredWeight"
                onChange={handleChange}
                placeholder="Желаемый вес"
                min="0"
                max="500"
                type="number"
              />
            </div>

            <RadioGroup label="Группа крови *" items={itemsOptions} />
          </div>
          <Button text="Похудеть" className={styles.button} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default MainPage;
