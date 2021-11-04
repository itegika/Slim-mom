import { useState } from "react";

import styles from "./MainPage.module.scss";
import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioGroup from "../../shared/components/RadioGroup";
const MainPage = () => {
  const [bloodType, setBloodType] = useState(1);
  const [height, setHeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [desiredWeight, setDesiredWeight] = useState("");
  const [age, setAge] = useState("");
  const name = "bloodType";
  const itemsOptions = [
    {
      onChange: () => {
        setBloodType(1);
      },
      name,
      label: "1",
      checked: bloodType === 1 ? true : false,
    },
    {
      onChange: () => {
        setBloodType(2);
      },
      name,
      label: "2",
    },
    {
      onChange: () => {
        setBloodType(3);
      },
      name,
      label: "3",
    },
    {
      onChange: () => {
        setBloodType(4);
      },
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
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                placeholder="Рост"
              />
            </div>
            <div className={styles.field}>
              {" "}
              <TextField
                required={true}
                label=""
                name="age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                placeholder="Возраст"
              />
            </div>
            <div className={styles.field}>
              {" "}
              <TextField
                required={true}
                label=""
                name="currentWeight"
                value={currentWeight}
                onChange={(e) => {
                  setCurrentWeight(e.target.value);
                }}
                placeholder="Текущий вес"
              />
            </div>
            <div className={styles.field}>
              <TextField
                required={true}
                label=""
                name="desiredWeight"
                value={desiredWeight}
                onChange={(e) => {
                  setDesiredWeight(e.target.value);
                }}
                placeholder="Желаемый вес"
              />
            </div>

            <RadioGroup label="Группа крови *" items={itemsOptions} />
          </div>
          <Button
            text="Похудеть"
            className={styles.button}
            onClick={() => {
              // e.preventDefault();
              console.log({
                bloodType,
                age,
                height,
                currentWeight,
                desiredWeight,
              });
            }}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default MainPage;
