import PropTypes from "prop-types";

import useUniqueString from "../../hooks/useUniqueString";
import styles from "./RadioField.module.scss";

const RadioField = ({ onChange, label, name, required, dataRadio }) => {
  const id = useUniqueString();
  return (
    <div className={styles.radioBox}>
      <input
        name={name}
        id={id}
        type="radio"
        data-radio={dataRadio}
        onChange={onChange}
        required={required && required}
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
  required: false,
};
RadioField.propTypes = {
  required: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default RadioField;
