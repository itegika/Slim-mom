import PropTypes from "prop-types";

import RadioField from "../RadioField";
import styles from "./RadioGroup.module.scss";

const RadioGroup = ({ label, items }) => {
  const elements = items.map((item) => (
    <RadioField key={item.label} {...item} />
  ));

  return (
    <div className={styles.radioGroup}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.radioButtons}>{elements}</div>
    </div>
  );
};
RadioGroup.defaultProps = {
  items: [],
};
RadioGroup.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};
export default RadioGroup;
