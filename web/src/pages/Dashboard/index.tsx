import React, { useState } from "react";

import { useAuth } from "../../context/Auth";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import LeftSide from "./LeftSide";
import Middle from "./Middle";
import RightSide from "./RightSide";

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const history = useHistory();

  function handleSignOut() {
    signOut();
    history.push("/");
  }
  return (
    <Container>
      <Header path="/dashboard" />
      {/* <button onClick={handleSignOut}>log out</button> */}
      <Content>
        <LeftSide />
        <Middle />
        <RightSide />
      </Content>
    </Container>
  );
};

export default Dashboard;
