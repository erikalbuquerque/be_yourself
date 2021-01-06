import React from "react";

//import io from "socket.io-client";
//import GlobaStyles from "./assets/styles/globalStyles";

import { AuthProvider } from "./context/Auth"

import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
