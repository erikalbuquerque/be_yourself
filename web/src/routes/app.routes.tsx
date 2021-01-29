import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
};
export default AppRoutes;
