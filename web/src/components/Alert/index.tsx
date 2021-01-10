import React, { useEffect, useState, InputHTMLAttributes } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { useError } from "../../context/Error";
import { AlertTag } from "./styles";

interface IAlert extends InputHTMLAttributes<HTMLDivElement> {
  bg: string;
  label: string;
  id?: string;
}

const Alert: React.FC<IAlert> = ({ label, bg, id, ...props }) => {
  const { errorMessage, setErrorMessage } = useError();
  function handleOnClose() {
    var filtered = errorMessage.filter(function (value) {
      return value !== errorMessage[Number(id)];
    });

    setErrorMessage([...filtered]);
  }

  return (
    <AlertTag bg={bg} onClick={handleOnClose} {...props}>
      <span>{label}</span>
      <div></div>
      <AiOutlineClose size={16} color="#E0E0E0" onClick={handleOnClose} />
    </AlertTag>
  );
};

export default Alert;
