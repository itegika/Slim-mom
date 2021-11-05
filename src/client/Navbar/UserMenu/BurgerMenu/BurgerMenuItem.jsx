import { NavLink } from "react-router-dom";

import styles from "./BurgerMenu.module.scss";

const BurgerMenuItem = ({ to, exact, text, closeModal }) => {
  return (
    <NavLink
      to={to}
      exact
      className={styles.navlink}
      activeClassName={styles.navlinkActive}
      onClick={closeModal}
    >
      {text}
    </NavLink>
  );
};

export default BurgerMenuItem;
