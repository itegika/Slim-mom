import { NavLink } from "react-router-dom";

import styles from "./BurgerMenu.module.scss";

const BurgerMenuItem = ({ to, exact, text }) => {
  return (
    <NavLink
      to={to}
      exact
      className={styles.navlink}
      activeClassName={styles.navlinkActive}
    >
      {text}
    </NavLink>
  );
};

export default BurgerMenuItem;
