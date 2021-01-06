import React from "react";

import { Container, Logo } from "./styles";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo"/>
      </Link>
    </Container>
  );
};

export default Header;
