import { NavLink } from "react-router-dom";
import UserMenuItem from "./UserMenuItem";
import { items } from "./items";

const loginMenu = items.login.map(({ id, ...props }) => (
  <UserMenuItem key={id} {...props} />
));
const logoutMenu = items.lgout.map(({ id, ...props }) => (
  <UserMenuItem key={id} {...props} />
));

const UserMenu = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? loginMenu : logoutMenu}</div>;
};

export default UserMenu;
