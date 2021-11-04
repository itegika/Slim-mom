import { useState } from "react";

import styles from "./MainPage.module.scss";
import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioGroup from "../../shared/components/RadioGroup";
import useForm from "../../shared/hooks/useForm";
import { initialState } from "./initialState";
const MainPage = () => {
  const [data, handleChange, handleSubmit] = useForm(initialState, (data) =>
    console.log(data)
  );
  // const [bloodType, setBloodType] = useState(1);
  // const [height, setHeight] = useState("");
  // const [currentWeight, setCurrentWeight] = useState("");
  // const [desiredWeight, setDesiredWeight] = useState("");
  // const [age, setAge] = useState("");
  const name = "bloodType";
  const itemsOptions = [
    {
      onChange: handleChange,
      name,
      label: "1",
      checked: bloodType === 1 ? true : false,
    },
    {
      onChange: handleChange,
      name,
      label: "2",
    },
    {
      onChange: handleChange,
      name,
      label: "3",
    },
    {
      onChange: handleChange,
      name,
      label: "4",
    },
  ];
  return (
    <div className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>
          Просчитай свою суточную норму калорий прямо сейчас
        </h1>
        <form className={styles.form}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <TextField
                required={true}
                label=""
                name="height"
                onChange={handleChange}
                placeholder="Рост"
              />
            </div>
            <div className={styles.field}>
              <TextField
                required={true}
                label=""
                name="age"
                onChange={handleChange}
                placeholder="Возраст"
              />
            </div>
            <div className={styles.field}>
              <TextField
                required={true}
                label=""
                name="weight"
                onChange={handleChange}
                placeholder="Текущий вес"
              />
            </div>
            <div className={styles.field}>
              <TextField
                required={true}
                label=""
                name="desiredWeight"
                onChange={handleChange}
                placeholder="Желаемый вес"
              />
            </div>

            <RadioGroup label="Группа крови *" items={itemsOptions} />
          </div>
          <Button
            text="Похудеть"
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default MainPage;
