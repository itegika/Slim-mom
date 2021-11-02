import styles from "./button.module.scss";
import PropTypes from 'prop-types';
const types = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
}
const Button = ({ className, text, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${selectedClassName} ${className}`}>
      {text}
    </button>
  );
}
export default Button;
Button.defaultProps = {
  variant: "primary",
  className: "",
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.any,
};
