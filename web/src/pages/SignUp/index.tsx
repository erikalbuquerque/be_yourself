import React, { FormEvent, ChangeEvent, useState } from "react";
import * as Yup from "yup";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  Container,
  Content,
  Title,
  Form,
  AvatarContent,
  Button,
  Back,
  AllErrors,
} from "./styles";
import Loader from "react-loader-spinner";
import Alert from "../../components/Alert";

import api from "../../services/api";
import { useError } from "../../context/Error";

const SignUp: React.FC = () => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { errorMessage, setErrorMessage } = useError();
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState<File>();

  async function validationFields() {
    const data = { email, avatar, nickName, password, confirmPassword };

    const fileSize = 160 * 1024;
    const supportedFormats = [
      "image/jpg",
      "image/jpeg",
      "image/gif",
      "image/png",
    ];

    const schema = Yup.object().shape({
      email: Yup.string().email().required("Email can't be blank."),
      avatar: Yup.mixed()
        .required("Avatar can't be blank.")
        .test(
          "fileSize",
          "File too large.",
          (value) => value && value.size <= fileSize
        )
        .test(
          "fileFormat",
          "Unsupported Format.",
          (value) => value && supportedFormats.includes(value.type)
        ),
      nickName: Yup.string().required("Nickname can't be blank."),
      password: Yup.string()
        .required("Password can't be blank.")
        .min(8, "Password must be at least 8 characters."),
      confirmPassword: Yup.string()
        .required("Confirm password can't be blank.")
        .min(8, "Confirm password must be at least 8 characters."),
    });

    try {
      await schema.validate(data, {
        abortEarly: false,
        strict: true,
      });
      return true;
    } catch (error) {
      setErrorMessage(error.errors);
      return false;
    }
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
    const isValidForm = await validationFields();

    if (!isValidForm) {
      setShowError(true);
      return;
    }

    //setShowError(false);

    if (password !== confirmPassword) {
      setShowError(true);
      setErrorMessage([...errorMessage, "Passwords don't match."]);
      return;
    } else {
      setShowError(false);

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
        setMessage("Success!");
        setShowSuccess(true);
        setShowError(false);
        setLoading(false);
      } catch (error) {
        setShowSuccess(false);
        setLoading(false);
        setErrorMessage(error.response.data.message);
        setShowError(true);
      }
    }
  }
  showError &&
    setTimeout(() => {
      setShowError(false);
    }, 6000);

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
          <AvatarContent>
            <input type="file" id="file" onChange={handleSelectImage} />
            <label htmlFor="file">
              {avatar ? (
                <span>{avatar.name}</span>
              ) : (
                <span>Choose an image</span>
              )}
            </label>
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
          <Button type="submit" disabled={loading}>
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
        <AllErrors>
          {showError &&
            errorMessage.map((error, index) => (
              <Alert key={index} id={`${index}`} bg="#DD5554" label={error} />
            ))}
          {showSuccess && (
            <Alert
              bg="#15A012"
              label={message}
              onClick={() => setShowSuccess(false)}
            />
          )}
        </AllErrors>
      </Content>
    </Container>
  );
};

export default SignUp;
