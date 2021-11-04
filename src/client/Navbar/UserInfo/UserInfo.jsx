import { useSelector, useDispatch } from "react-redux";

import operations from "../../../redux/auth/auth-operations";

import { fetchName } from "../../../redux/auth/auth-selectors";

import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  const dispatch = useDispatch();
  const name = useSelector(fetchName);
  return (
    <div className={styles.userInfo}>
      <span className={styles.name}>{name}</span>
      <button
        type="button"
        className={styles.btn}
        onClick={() => dispatch(operations.logOut())}
      >
        Выйти
      </button>
    </div>
  );
};

export default UserInfo;
