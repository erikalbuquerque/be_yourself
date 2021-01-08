import React, { FormEvent, useState } from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import { Link, useHistory } from "react-router-dom";

import {
  Container,
  Content,
  Title,
  Form,
  Forgot,
  Button,
  CreateAcc,
  Span,
} from "./styles";

import { useAuth } from "../../context/Auth";

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    signIn(email, password);
    history.push("/dashboard");
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>Welcome!</Title>
        <Form 
          onSubmit={(e) => handleLogin(e)}>
          <Input
            type="email"
            name="Email"
            icon="MdEmail"
            autoComplete="false"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            name="Password"
            icon="AiFillEye"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Forgot>
            <Link to="/forgot">Forgot Password?</Link>
          </Forgot>
          <Button>Log in</Button>
          <CreateAcc>
            <Span>Don’t have an account?</Span>
            <Link to="/signup">SignUp</Link>
          </CreateAcc>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
