import styles from "./AuthorizedPage.module.scss";
const AuthorizedPageContainer = () => {
  return (
    <main className={`${styles.main} container`}>
      <div className={styles.mainDiv}></div>
      <div className={styles.sideBarDiv}></div>
    </main>
  );
};
export default AuthorizedPageContainer;
