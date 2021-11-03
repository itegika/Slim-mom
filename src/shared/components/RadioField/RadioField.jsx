import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import styles from "./RadioField.module.scss";

const RadioField = ({ onChange, required, label, name }) => {
  const id = nanoid();
  return (
    <div className={styles.radioBox}>
      <input
        name={name}
        id={id}
        type="radio"
        onChange={onChange}
        required={required}
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
  onChange: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
};
export default RadioField;
