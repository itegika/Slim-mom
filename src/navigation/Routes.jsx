import { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";

import styles from "./Routes.module.scss";
import PrivateRoute from "../shared/components/PrivateRoute";
import PublicRoute from "../shared/components/PublicRoute";

const CalculatorPage = lazy(() =>
  import("../pages/CalculatorPage/CalculatorPage")
);
const DiaryPage = lazy(() => import("../pages/DiaryPage/Diarypage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const Navbar = lazy(() => import("../client/Navbar/Navbar"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute restricted exact path="/" redirectTo="/calculator">
          <div className={styles.App}>
            <Navbar />
            <MainPage />
          </div>
        </PublicRoute>
        <PublicRoute restricted exact path="/login" redirectTo="/calculator">
          <div className={styles.App}>
            <Navbar />
            <LoginPage />
          </div>
        </PublicRoute>
        <PublicRoute
          restricted
          exact
          path="/registration"
          redirectTo="/calculator">
          <div className={styles.App}>
            <Navbar />
            <RegisterPage />
          </div>
        </PublicRoute>
        <PrivateRoute exact path="/diary" redirectTo="/login">
          <div className={styles.sideBarDiv}>
            <Navbar />
            <DiaryPage />
          </div>
        </PrivateRoute>
        <PrivateRoute exact path="/calculator" redirectTo="/login">
          <div className={styles.sideBarDiv}>
            <Navbar />
            <CalculatorPage />
          </div>
        </PrivateRoute>
      </Switch>
    </Suspense>
  );
};

export default Routes;
