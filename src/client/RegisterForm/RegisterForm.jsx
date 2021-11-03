import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import { Link } from "react-router-dom";
import TextField from "../../shared/components/TextField";
import useForm from "../../shared/hooks/useForm";
import Button from "../../shared/components/Button";
import inputAttr from "../../shared/components/TextField/InputAttr";
// import styles from "./RegisterForm.module.scss"

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
    <div>
      <h1
      //   className={styles.title}
      >
        Регистрация
      </h1>

      <form
        onSubmit={handleSubmit}
        //   className={styles.form}
        autoComplete="off"
      >
        <TextField
          //   className={styles.input}
          {...inputAttr.name}
          onChange={handleChange}
          value={data.username}
        />
        <TextField
          // className={styles.input}
          {...inputAttr.email}
          onChange={handleChange}
          name="email"
          required
          placeholder="Логин"
          value={data.email}
        />
        <TextField
          // className={styles.input}
          {...inputAttr.password}
          onChange={handleChange}
          name="password"
          required
          placeholder="Пароль"
          value={data.password}
        />
        <div>
          <Link to="/login">
            {/* // поменять путь когда создадим объект paths */}
            <Button
              // className={`${styles.button} ${selectedClassName} ${className}`}
              text="Вход"
              type="submit"
            />
          </Link>
          <Button
            //   className={`${styles.button} ${selectedClassName} ${className}`}
            text="Регистрация"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
