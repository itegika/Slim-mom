import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logoMobile from "../../shared/images/logo/logo-mobile.png";
import logoMobile2x from "../../shared/images/logo/logo-mobile-2x.png";
import logoTablet from "../../shared/images/logo/logo-tablet.png";
import logoTablet2x from "../../shared/images/logo/logo-tablet-2x.png";
import logoDesktop from "../../shared/images/logo/logo-desktop.png";
import logoDesktop2x from "../../shared/images/logo/logo-desktop-2x.png";

const Navbar = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Link to="/" exact className={styles.link}>
                <picture className={styles.imageBox}>
                  {/* // <!-- DESKTOP --> */}
                  <source
                    className="image"
                    src={logoDesktop}
                    srcset={logoDesktop + " 1x," + logoDesktop2x + " 2x"}
                    media="(min-width:1280px)"
                  />
                  {/* // <!-- TABLET --> */}
                  <source
                    className="image"
                    src={logoTablet}
                    srcset={logoTablet + " 1x," + logoTablet2x + " 2x"}
                    media="(min-width:768px)"
                  />
                  {/* // <!-- MOBILE --> */}
                  <source
                    className="image"
                    src={logoMobile}
                    srcset={logoMobile + " 1x," + logoMobile2x + " 2x"}
                    media="(max-width:767px)"
                  />
                  <img className="default" src={logoMobile} alt="Логотип" />
                </picture>
                {/* <img src="./logo192.png" width="40" alt="logo" /> */}
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
        </div>
      </header>
    </div>
  );
};

export default Navbar;
