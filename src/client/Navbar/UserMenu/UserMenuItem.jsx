import { NavLink } from "react-router-dom";

import styles from "./UserMenu.module.scss";

const UserMenuItem = ({ to, exact, text }) => {
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

export default UserMenuItem;
