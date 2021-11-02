import styles from "./button.module.scss";
function Button({ className, text, Click }) {
  return (
    <button onClick={Click} className={`${styles.button} ${styles[className]}`}>
      {text}
    </button>
  );
}
export default Button;
