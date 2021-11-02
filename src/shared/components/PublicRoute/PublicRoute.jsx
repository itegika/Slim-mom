import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) => {
  //   const isLoggedIn = useSelector((state) => state.auth.isAuth);
  //   const shouldRedirect = isLoggedIn && restricted;
  //   return (
  //     <Route {...routeProps}>
  //       {shouldRedirect ? <Redirect to={redirectTo} /> : children}
  //     </Route>
  //   );
  return <div></div>;
};

export default PublicRoute;
