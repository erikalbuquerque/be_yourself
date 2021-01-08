import React, { FormEvent, ChangeEvent, useState } from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import { Link, useHistory } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

import {
  Container,
  Content,
  Title,
  Form,
  AvatarContent,
  Button,
  Back,
  SpanMessage,
} from "./styles";

import { useAuth } from "../../context/Auth";

import api from "../../services/api";

const SignUp: React.FC = () => {
  const {} = useAuth();

  //const [errors, setErrors] = useState<Array<string>>([""]);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState<File>();

  function validationFields() {
    const data = [
      [email, "Email"],
      [nickName, "Nickname"],
      [password, "Password"],
      [confirmPassword, "Confirm Password"],
    ];

    for (let i = 0; i < data.length; i++) {
      if (!data[i][0]) {
        setIsValid(false);
        setShowError(true);
        setErrorMessage("Fill all fields!");
        break;
      } else {
        setShowError(false);
        setIsValid(true);
      }
    }
    return isValid;
  }
  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files;

    if (!fileList) {
      return;
    }
    setAvatar(fileList[0]);
  }
  async function handleSignUp(e: FormEvent) {
    e.preventDefault();
    const isValidForm = validationFields();

    if (isValidForm) {
      if (password !== confirmPassword) {
        setShowError(true);
        setErrorMessage("Passwords don't match.");
        return;
      }

      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", nickName);
      formData.append("password", password);
      if (avatar) {
        formData.append("avatar", avatar, avatar.name);
      }

      try {
        setLoading(true);
        await api.post("/users", formData);
        //await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  }
  return (
    <Container>
      <Header />
      <Content>
        <Title>Create your account</Title>
        <Form onSubmit={(e) => handleSignUp(e)}>
          <Input
            type="email"
            name="Email"
            icon="MdEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/*Input para o avatar: type=file*/}
          <AvatarContent>
            <input type="file" id="file" onChange={handleSelectImage} />
            <label htmlFor="file">Choose a image</label>
          </AvatarContent>

          <Input
            type="text"
            name="Nickname"
            icon="FaUser"
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value);
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
          <Input
            type="password"
            name="Confirm your password"
            icon="AiFillEye"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          {showError && <SpanMessage>{errorMessage}</SpanMessage>}

          <Button>
            {loading ? (
              <Loader type="ThreeDots" color="#e0e0e0" height={10} width={40} />
            ) : (
              <span>Sign up</span>
            )}
          </Button>
          <Back>
            <HiOutlineArrowNarrowLeft size={20} color="#7858F9" />
            <Link to="/">back to login</Link>
          </Back>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
