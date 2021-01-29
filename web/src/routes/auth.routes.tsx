import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { ErrorProvider } from "../context/Error";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <ErrorProvider>
        <Route path="/" component={SignIn} exact />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/" />
      </ErrorProvider>
    </Switch>
  );
};
export default AuthRoutes;
