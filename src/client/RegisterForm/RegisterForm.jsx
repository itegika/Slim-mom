import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import { Link } from "react-router-dom";
import TextField from "../../shared/components/TextField";
import useForm from "../../shared/hooks/useForm";
import Button from "../../shared/components/Button";
import inputAttr from "../../shared/components/TextField/InputAttr";
import styles from "./RegisterForm.module.scss";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(authOperations.register(values));
  };
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);

  return (
    <div className={`container`}>
      {/* <div className={styles.container}> */}
      <h1 className={styles.title}>Регистрация</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <div className={styles.fieldsBox}>
          <div className={styles.textField}>    
           <TextField
          {...inputAttr.name}
          onChange={handleChange}
          value={data.username}
          />
        </div>
        <div  className={styles.textField}> 
          <TextField
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
          <Link to="/login">
          {/* // поменять путь когда создадим объект paths */}
          <Button
              className={`${styles.button} ${styles.buttonSecondary} ${styles.logBtn}`}
              text="Вход"
              type="submit"
              variant="secondary"
            />
          </Link>
          <Button
            className={`${styles.button} ${styles.buttonPrimary} `}
            text="Регистрация"
            type="submit"
            variant="primary"
          />
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default RegisterForm;
