import { useState } from "react";
import styles from "./CalculatorPage.module.scss";
import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioGroup from "../../shared/components/RadioGroup";
import { getDailyRate } from "../../shared/services/daily";
import useForm from "../../shared/hooks/useForm";
import { initialState } from "./initialState";
import AuthorizedPageContainer from "../../shared/containerPage/AuthorizedPage/AuthorizedPage";

const CalculatorPage = () => {
  const [data, handleChange, handleSubmit] = useForm(initialState, () => {
    return;
  });

  const [products, setProducts] = useState([]);
  const [calories, setCalories] = useState(null);


  const name = "bloodType";
  const itemsOptions = [
    {
      onChange: handleChange,
      name,
      label: "1",
      dataRadio: 1,
      required: true,
    },
    {
      onChange: handleChange,
      name,
      dataRadio: 2,
      label: "2",
    },
    {
      onChange: handleChange,
      name,
      dataRadio: 3,
      label: "3",
    },
    {
      onChange: handleChange,
      name,
      dataRadio: 4,
      label: "4",
    },
  ];

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const aaa = Object.entries(data);
    const bbb = aaa.map(([key, value]) => [key, Number(value)]);
    const ccc = await Object.fromEntries(bbb);

    try {
      const { data } = await getDailyRate(ccc);
      const { dailyRate, notAllowedProducts } = await data;
      setCalories(dailyRate);
      setProducts(notAllowedProducts.slice(0, 4));
    } catch (error) {
      throw error;
    }

    e.target.reset();
    handleSubmit(e);
  };

  return (
      <AuthorizedPageContainer>
      <div className="container">
        <h1 className={styles.title}>
          Просчитай свою суточную норму калорий прямо сейчас
        </h1>
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
              />
            </div>
            <RadioGroup label="Группа крови *" items={itemsOptions} />
          </div>
          <Button text="Похудеть" className={styles.button} type="submit" />
        </form>
    </div>
</AuthorizedPageContainer>
 
  );
};

export default CalculatorPage;
