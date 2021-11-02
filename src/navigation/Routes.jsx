import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const CalculatorPage = lazy(() =>
  import("../pages/CalculatorPage" /*webpackChunkName: CalculatorPage*/)
);
const DiaryPage = lazy(() =>
  import("../pages/DiaryPage" /*webpackChunkName: DiaryPage*/)
);
const LoginPage = lazy(() =>
  import("../pages/LoginPage" /*webpackChunkName: LoginPage*/)
);
const MainPage = lazy(() =>
  import("../pages/MainPage" /*webpackChunkName: MainPage*/)
);
const RegisterPage = lazy(() =>
  import("../pages/RegisterPage" /*webpackChunkName: RegisterPage*/)
);

import PrivateRoute from "../shared/components/PrivateRoute";
import PublicRoute from "../shared/components/PublicRoute";

const Routes = () => {
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
        path="/registaration"
        redirectTo="/calculator"
      >
        <RegisterPage />
      </PublicRoute>
      <PrivateRoute exact path="/diary" redirectTo="/">
        <DiaryPage />
      </PrivateRoute>
      <PrivateRoute exact path="/calculator" redirectTo="/">
        <CalculatorPage />
      </PrivateRoute>
    </Switch>
  </Suspense>;
};

export default Routes;
