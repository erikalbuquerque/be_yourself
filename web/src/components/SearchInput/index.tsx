import React, { useState, InputHTMLAttributes } from "react";

import { Container, SearcIcon, Input } from "./styles";
import iconSearch from "../../assets/search.svg";

interface IData extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const SearchInput: React.FC<IData> = ({ label }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Container focus={isFocus}>
      <SearcIcon src={iconSearch} />
      <Input
        placeholder={label}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </Container>
  );
};
export default SearchInput;
