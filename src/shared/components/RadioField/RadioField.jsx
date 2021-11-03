import PropTypes from "prop-types";

import useUniqueString from "../../hooks/useUniqueString";
import styles from "./RadioField.module.scss";

const RadioField = ({ onChange, label, name, checked }) => {
  const id = useUniqueString();
  return (
    <div className={styles.radioBox}>
      <input
        name={name}
        id={id}
        type="radio"
        onChange={onChange}
        checked={checked && checked}
        className={`${styles.radioButton} ${styles.visuallyHidden}`}
      />
      <label htmlFor={id} className={styles.radioLabel}>
        <span className={styles.customRadio}></span>
        {label && label}
      </label>
    </div>
  );
};
RadioField.defaultProps = {
  onChange: () => {},
};
RadioField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default RadioField;
