import { useState } from "react";
import styles from "./MainPage.module.scss";
import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioGroup from "../../shared/components/RadioGroup";
import Modal from "../../client/Modal";
import useForm from "../../shared/hooks/useForm";
import { initialState } from "./initialState";
const MainPage = () => {
  const [data, handleChange, handleSubmit] = useForm(initialState, () => {
    return;
  });
  const [newData, setNewData] = useState({ ...initialState });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

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

  const onFormSubmit = (e) => {
    e.preventDefault();

    const aaa = Object.entries(data);
    const bbb = aaa.map(([key, value]) => [key, Number(value)]);
    const ccc = Object.fromEntries(bbb);

    setNewData(ccc);
    toggleModal();
  };

  return (
    <div className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>
          Просчитай свою суточную норму калорий прямо сейчас
        </h1>
        {modalIsOpen && <Modal onClose={toggleModal}></Modal>}
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
    </div>
  );
};

export default MainPage;
