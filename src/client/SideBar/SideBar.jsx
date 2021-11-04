import SideBarRation from "./sideBarRation/SideBarRation";
import SideBarSummary from "./sideBarSummary/SideBarSummary";

import styles from "./SideBar.module.scss";

function SideBar() {
  return (
    <div className={styles.SideBar}>
      <SideBarSummary />
      <SideBarRation />
    </div>
  );
}

export default SideBar;
