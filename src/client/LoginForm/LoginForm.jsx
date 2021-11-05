import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import { Link } from "react-router-dom";
import TextField from "../../shared/components/TextField";
import useForm from "../../shared/hooks/useForm";
import Button from "../../shared/components/Button";
import inputAttr from "../../shared/components/TextField/InputAttr";
import styles from "./LoginForm.module.scss";

const initialState = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(authOperations.logIn(values));
  };
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);

  return (
    <div className={`${styles.main} container`}>
      {/* <div className={styles.container}> */}
      <h1 className={styles.title}>ВХОД</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <div className={styles.fieldsBox}>
  <div className={styles.textField}> 
         <TextField
          //   className={styles.input}
          {...inputAttr.email}
          onChange={handleChange}
          name="email"
          required
          placeholder="Логин"
          value={data.email}
        />
      </div>
      <div  className={styles.textField}>   
        <TextField
          //   className={styles.input}
          {...inputAttr.password}
          onChange={handleChange}
          name="password"
          required
          placeholder="Пароль"
          value={data.password}
        />
      </div>
     
        </div>
     
        <div className={styles.btnBox}>
          {/* импортировать и заменить кнопки когда сделают компонент */}
          <Button
            className={`${styles.button} ${styles.buttonPrimary} ${styles.logBtn} `}
            text="Вход"
            type="submit"
            variant="primary"
          />
          <Link
            to="/registration"
            //  поменять путь когда создадим объект paths
          >
            <Button
                className={`${styles.button} ${styles.buttonSecondary} `}
                text="Регистрация"
                type="submit"
                variant="secondary"
              />
          </Link>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default LoginForm;
