// import { NavLink } from "react-router-dom";
import UserMenuItem from "./UserMenuItem";
import { items } from "./items";
import menuBtn from "../../../shared/images/svg/menu.svg";
import styles from "./UserMenu.module.scss";

const loginMenu = items.login.map(({ id, ...props }) => (
  <UserMenuItem key={id} {...props} />
));
const logoutMenu = items.logout.map(({ id, ...props }) => (
  <UserMenuItem key={id} {...props} />
));

const UserMenu = ({ isLoggedIn }) => {
  return (
    <>
      <div className={styles.userMenu}>
        {isLoggedIn ? loginMenu : logoutMenu}

        {/* <button type="button" className={styles.burgerBtn}>
          <svg className={styles.openBtn}>
            <use href={menuBtn}></use>
          </svg>
        </button> */}
      </div>
    </>
  );
};

export default UserMenu;
