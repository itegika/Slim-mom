import styles from "./CalculatorPage.module.scss";
import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioGroup from "../../shared/components/RadioGroup";
import useForm from "../../shared/hooks/useForm";
import { initialState } from "./initialState";
import AuthorizedPageContainer from "../../shared/containerPage/AuthorizedPage/AuthorizedPage";
import { getUserId } from "../../redux/calendar/summaries/summaries-selectors";
import { useSelector, useDispatch } from "react-redux";
import { postDailyRate } from "../../redux/calendar/summaries/summaries-operations";

const CalculatorPage = () => {
  const [data, handleChange, handleSubmit] = useForm(initialState, () => {
    return;
  });
  const dispatch = useDispatch();
  const idUser = useSelector(getUserId);

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

    dispatch(postDailyRate({ ccc, idUser }));
    e.target.reset();
    handleSubmit(e);
  };

  return (
    <AuthorizedPageContainer>
      <div className={styles.mainDiv}>
        <h1 className={styles.title}>Узнай свою суточную норму калорий</h1>
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
