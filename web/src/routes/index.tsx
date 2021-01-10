import React from "react";
import { useAuth } from "../context/Auth";
import { BrowserRouter } from "react-router-dom";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

function Routes() {
  const { signed } = useAuth();
  return (
    <BrowserRouter>{signed ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}

export default Routes;
