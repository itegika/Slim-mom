import styles from "./AuthorizedPage.module.scss";
const AuthorizedPageContainer = ({ children }) => {
  return (
    <main className={`${styles.main} container`}>
      <div className={styles.mainDiv}>{children}</div>
      <div className={styles.sideBarDiv}></div>
    </main>
  );
};
export default AuthorizedPageContainer;
