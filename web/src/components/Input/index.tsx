import React, { InputHTMLAttributes, useState } from "react";

import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Input, Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  icon: string;
}

const InputComponent: React.FC<InputProps> = ({
  type,
  name,
  icon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [inFocus, setInFocus] = useState(false);

  function handleShowPassword() {
    setShowPassword(showPassword ? false : true);
  }

  function handleInFocus() {
    setInFocus(inFocus ? false : true);
    console.log(inFocus);
  }

  return (
    <Container>
      <Input
        id={name}
        type={showPassword ? "text" : type}
        name={name}
        placeholder={name}
        onFocus={() => setInFocus(true)}
        onBlur={() => setInFocus(false)}
        {...props}
      />
      {icon === "MdEmail" && (
        <MdEmail size={20} color={inFocus ? "#7858F9" : "#969696"} />
      )}
      {icon === "AiFillEye" ? (
        showPassword ? (
          <AiFillEye size={20} color={inFocus ? "#7858F9" : "#969696"} onClick={handleShowPassword} />
        ) : (
          <AiFillEyeInvisible
            size={20}
            color={inFocus ? "#7858F9" : "#969696"}
            onClick={handleShowPassword}
          />
        )
      ) : (
        <></>
      )}
    </Container>
  );
};

export default InputComponent;
