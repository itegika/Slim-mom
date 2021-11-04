import Sidebar from "../../../client/SideBar";

import styles from "./AuthorizedPage.module.scss";

const AuthorizedPageContainer = ({ children }) => {
  return (
    <main className={`${styles.main} container`}>
      <div className={styles.mainDiv}>{children}</div>
      <div className={styles.sideBarDiv}>
        <Sidebar />
      </div>
    </main>
  );
};
export default AuthorizedPageContainer;
