import React, { useState } from "react";

import { useAuth } from "../../context/Auth";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import LeftSide from "./LeftSide";
import Middle from "./Middle";
import RightSide from "./RightSide";

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header path="/dashboard" />
      <Content>
        <LeftSide />
        <Middle />
        <RightSide />
      </Content>
    </Container>
  );
};

export default Dashboard;
