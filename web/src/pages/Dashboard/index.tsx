import React from "react";

import { useAuth } from "../../context/Auth";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const history = useHistory();

  function handleSignOut() {
    signOut();
    history.push("/");
  }
  return (
      <Container>
        <Header />

        
        {/* <button onClick={handleSignOut}>log out</button> */}
      </Container>
  );
};

export default Dashboard;
