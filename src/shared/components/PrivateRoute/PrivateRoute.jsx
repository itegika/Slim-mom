import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo = "/", ...routeProps }) => {
  //   const isLoggedIn = useSelector((state) => state.auth.isAuth);
  //   return (
  //     <Route {...routeProps}>
  //       {isLoggedIn ? children : <Redirect to={redirectTo} />}
  //     </Route>
  //   );
  return <div></div>;
};

export default PrivateRoute;
