import React from "react";

import { Container, Logo } from "./styles";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

interface IHeader {
  path: string;
}

const Header: React.FC<IHeader> = ({ path }) => {
  return (
    <Container>
      <Link to={path}>
        <Logo src={logo} alt="logo"/>
      </Link>
    </Container>
  );
};

export default Header;
