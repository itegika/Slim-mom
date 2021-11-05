import Sidebar from "../../../client/SideBar";
import styles from "./AuthorizedPage.module.scss";

const AuthorizedPageContainer = ({ children }) => {
  return (
    <main className={styles.main}>{children}
        <Sidebar/>
    </main>
  );
};
export default AuthorizedPageContainer;
