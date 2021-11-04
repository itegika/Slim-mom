import styles from "./CalculatorСalorieForm.module.scss";
import TextField from "../../../shared/components/TextField";
import RadioGroup from "../../../shared/components/RadioGroup";
import { useState } from "react";

const CalculatorСalorieForm = () => {
  const [bloodValue, setBloodValue] = useState(null);
  // const [value, setBloodValue] = useState(null);
  const bloodType = "bloodType";

  const items = [
    {
      id: "1",
      name: bloodType,
      // className: styles.CalculatorRadioBtn,
      onChange: () => setBloodValue(1),
      label: "1",
      checked: false,
    },
    {
      id: "2",
      name: bloodType,
      // className: styles.CalculatorRadioBtn,
      onChange: () => setBloodValue(2),
      label: "2",
      checked: false,
    },
    {
      id: "3",
      name: bloodType,
      // className: styles.CalculatorRadioBtn,
      onChange: () => setBloodValue(3),
      label: "3",
      checked: false,
    },
    {
      id: "4",
      name: bloodType,
      // className: styles.CalculatorRadioBtn,
      onChange: () => setBloodValue(4),
      label: "4",
      checked: false,
    },
  ];

  // console.log(value);

  return (
    <>
      <form action="submit" className={styles.CalculatorForm}>
        <div className={styles.CalculatorTextField}>
          <TextField
            // onChange
            label="height"
            type="text"
            name="height"
            placeholder="Рост"
            className={styles.CalculatorInput}
            required="true"
          />
          <TextField
            label="age"
            type="text"
            name="age"
            placeholder="Возраст"
            className={styles.CalculatorInput}
            required="true"
          />
          <TextField
            label="weight"
            type="text"
            name="weight"
            placeholder="Текущий вес"
            className={styles.CalculatorInput}
            required="true"
          />
          <TextField
            label="desiredWeight"
            type="text"
            name="desiredWeight"
            placeholder="Желаемый вес"
            className={styles.CalculatorInput}
            required="true"
          />

          {/* <p className={styles.CalculatorInput}>Группа крови *</p> */}
          <div className={styles.CalculatorRadioBtnList}>
            <RadioGroup label="Группа крови *" items={items} />
            {/* <span>
              <input
                type="radio"
                id="1"
                name="radio1"
                className={styles.CalculatorRadioBtn}
              />
              <label htmlFor="1" className={styles.CalculatorLabel}>
                1
              </label>
            </span>
            <span>
              <input
                type="radio"
                id="2"
                name="radio1"
                className={styles.CalculatorRadioBtn}
              />
              <label htmlFor="2" className={styles.CalculatorLabel}>
                2
              </label>
            </span>
            <span>
              <input
                type="radio"
                id="3"
                name="radio1"
                className={styles.CalculatorRadioBtn}
              />
              <label htmlFor="3" className={styles.CalculatorLabel}>
                3
              </label>
            </span>
            <span>
              <input
                type="radio"
                id="4"
                name="radio1"
                className={styles.CalculatorRadioBtn}
              />
              <label htmlFor="4" className={styles.CalculatorLabel}>
                4
              </label>
            </span> */}
          </div>
        </div>
        <button type="submit" className={styles.CalculatorBtn}>
          Похудеть
        </button>
      </form>
    </>
  );
};

export default CalculatorСalorieForm;
