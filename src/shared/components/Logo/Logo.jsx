import styles from "./Logo.module.scss";

const Logo = ({
  logoDesktop,
  logoDesktop2x,
  logoTablet,
  logoTablet2x,
  logoMobile,
  logoMobile2x,
}) => {
  return (
    <>
      <picture className={styles.imageBox}>
        {/* // <!-- DESKTOP --> */}
        <source
          className="image"
          src={logoDesktop}
          srcSet={logoDesktop + " 1x," + logoDesktop2x + " 2x"}
          media="(min-width:1280px)"
        />
        {/* // <!-- TABLET --> */}
        <source
          className="image"
          src={logoTablet}
          srcSet={logoTablet + " 1x," + logoTablet2x + " 2x"}
          media="(min-width:768px)"
        />
        {/* // <!-- MOBILE --> */}
        <source
          className="image"
          src={logoMobile}
          srcSet={logoMobile + " 1x," + logoMobile2x + " 2x"}
          media="(max-width:767px)"
        />
        <img className="default" src={logoMobile} alt="Логотип" />
      </picture>
    </>
  );
};

export default Logo;
