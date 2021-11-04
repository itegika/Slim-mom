import styles from "./CalculatorPage.module.scss";
import CalculatorСalorieForm from "./CalculatorСalorieForm";

const CalculatorPage = () => {
  return (
    <>
      <div className={styles.CalculatorConteiner}>
        <p className={styles.CalculatorTitle}>
          Узнай свою суточную норму калорий
        </p>
        <CalculatorСalorieForm />
      </div>
    </>
  );
};

export default CalculatorPage;
