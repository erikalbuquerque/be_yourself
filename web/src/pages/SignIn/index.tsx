import React, { FormEvent, useState } from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import { Link, useHistory } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

import {
  Container,
  Content,
  Title,
  Form,
  Forgot,
  Button,
  SpanMessage,
  CreateAcc,
  Span,
} from "./styles";

import { useAuth } from "../../context/Auth";

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validationFields() {
    if ((!email && !password) || !email || !password) {
      setShowError(true);
      setErrorMessage("Fill all fields!");
      return false;
    } else {
      setShowError(false);
      return true;
    }
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    const isValidForm = validationFields();

    if (!isValidForm) {
      setShowError(true);
      return;
    }
    setShowError(false);

    try {
      setLoading(true);
      signIn(email, password)
        .then(() => {
          history.push("/dashboard");
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message);
          setShowError(true);
        });
      //await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.response.data.message);
      setShowError(true);
    }
  }

  return (
    <Container>
      <Header path="/"/>
      <Content>
        <Title>Welcome!</Title>
        <Form onSubmit={(e) => handleLogin(e)}>
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
          {showError && <SpanMessage>{errorMessage}</SpanMessage>}
          <Button type="submit" disabled={loading}>
            {loading ? (
              <Loader type="ThreeDots" color="#e0e0e0" height={10} width={40} />
            ) : (
              <span>Log in</span>
            )}
          </Button>
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
