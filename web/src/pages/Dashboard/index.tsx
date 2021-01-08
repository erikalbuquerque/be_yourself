import React from "react";

import { useAuth } from "../../context/Auth";
import { useHistory } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const history = useHistory();

  function handleSignOut() {
    signOut();
    history.push("/");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>log out</button>
    </div>
  );
};

export default Dashboard;
