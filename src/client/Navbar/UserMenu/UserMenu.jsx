import { Link, NavLink } from "react-router-dom";
import Logo from "../../shared/components/Logo/Logo";
import logoMobile from "../../shared/images/logo/logo-mobile.png";
import logoMobile2x from "../../shared/images/logo/logo-mobile-2x.png";
import logoTablet from "../../shared/images/logo/logo-tablet.png";
import logoTablet2x from "../../shared/images/logo/logo-tablet-2x.png";
import logoDesktop from "../../shared/images/logo/logo-desktop.png";
import logoDesktop2x from "../../shared/images/logo/logo-desktop-2x.png";
import styles from "./UserMenu.module.scss";

const UserMenu = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/" className={styles.link}>
              <Logo
                logoMobile={logoMobile}
                logoMobile2x={logoMobile2x}
                logoTablet={logoTablet}
                logoTablet2x={logoTablet2x}
                logoDesktop={logoDesktop}
                logoDesktop2x={logoDesktop2x}
              />
            </Link>
          </div>
          <div className={styles.navigation}>
            <NavLink
              to="/"
              exact
              className={styles.navlink}
              activeClassName={styles.navlinkActive}
            >
              Вход
            </NavLink>
            <NavLink
              to="/"
              exact
              className={styles.navlink}
              activeClassName={styles.navlinkActive}
            >
              Регистрация
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default UserMenu;
