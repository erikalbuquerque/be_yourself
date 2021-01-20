import styled from "styled-components";

interface IBox {
  focus: boolean;
}

export const Container = styled.div<IBox>`
  background: ${(props) => (props.focus ? "#121213" : "#464649")};
  transition: background 0.2s;
  width: 100%;
  border-radius: 1.25rem;
  border: 2px solid transparent;

  padding: 0.4rem 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  :focus-within {
    border: 2px solid #7858f9;
  }
`;

export const SearcIcon = styled.img`
  margin-right: 0.4rem;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;

  color: #e0e0e0;
  background: transparent;

  ::placeholder {
    color: #adadb8;
  }
`;
