import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../shared/components/PrivateRoute";
import PublicRoute from "../shared/components/PublicRoute";

const CalculatorPage = lazy(() =>
  import("../pages/CalculatorPage/CalculatorPage")
);
const DiaryPage = lazy(() => import("../pages/DiaryPage/Diarypage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute restricted exact path="/">
          <MainPage />
        </PublicRoute>
        <PublicRoute restricted exact path="/login" redirectTo="/calculator">
          <LoginPage />
        </PublicRoute>
        <PublicRoute
          restricted
          exact
          path="/registration"
          redirectTo="/calculator"
        >
          <RegisterPage />
        </PublicRoute>
        <PrivateRoute exact path="/diary" redirectTo="/login">
          <DiaryPage />
        </PrivateRoute>
        <PrivateRoute exact path="/calculator" redirectTo="/login">
          <CalculatorPage />
        </PrivateRoute>
      </Switch>
    </Suspense>
  );
};

export default Routes;
